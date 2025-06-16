const express = require('express');
const path = require('path');
const { igdl } = require('btch-downloader'); // Import igdl from btch-downloader
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// API endpoint using btch-downloader
app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const data = await igdl(url);

    if (data && data.length > 0) {
      const firstVideo = data[0];

      return res.json({
        success: true,
        videoUrl: firstVideo.url,
        thumbnail: firstVideo.thumbnail,
        quality: firstVideo.quality || 'unknown'
      });
    } else {
      return res.status(404).json({ error: 'No video found' });
    }
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Download failed', message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
