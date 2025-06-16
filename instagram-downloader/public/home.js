document.addEventListener('DOMContentLoaded', function() {
    const instagramLinkInput = document.getElementById('instagram-link');
    const pasteBtn = document.getElementById('paste-btn');
    const downloadBtn = document.getElementById('download-btn');
    const tabs = document.querySelectorAll('.tab');
    
    // Handle tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle paste button
    pasteBtn.addEventListener('click', async function() {
        try {
            const text = await navigator.clipboard.readText();
            instagramLinkInput.value = text;
        } catch (err) {
            alert('Failed to read clipboard. Please paste the link manually.');
            console.error('Failed to read clipboard: ', err);
        }
    });
    
    // Handle download button
    downloadBtn.addEventListener('click', async function() {
        const link = instagramLinkInput.value.trim();
        
        if (!link) {
            alert('Please enter an Instagram link');
            return;
        }
        
        if (!isValidInstagramUrl(link)) {
            alert('Please enter a valid Instagram URL');
            return;
        }
        
        // Show loading state
        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = 'Processing...';
        downloadBtn.disabled = true;
        
        try {
            // Send request to our backend API
            const response = await fetch('/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: link })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to download');
            }
            
            if (data.success && data.videoUrl) {
                // Create a temporary anchor element to trigger download
                const downloadLink = document.createElement('a');
                downloadLink.href = data.videoUrl;
                downloadLink.download = 'instagram-reel.mp4';
                downloadLink.target = '_blank';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                alert('Download started! If it doesn\'t work, the video will open in a new tab.');
            } else {
                throw new Error('No video URL found in the response');
            }
        } catch (error) {
            console.error('Download error:', error);
            alert(`Download failed: ${error.message}`);
        } finally {
            // Reset button state
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });
    
    // Function to validate Instagram URL
    function isValidInstagramUrl(url) {
        // More robust validation
        return url.includes('instagram.com') && 
               (url.includes('/reel/') || 
                url.includes('/p/') || 
                url.includes('/tv/'));
    }
});