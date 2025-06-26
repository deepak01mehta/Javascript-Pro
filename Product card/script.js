const products = [
  {
    id: 1,
    title: "Smartphone X",
    price: 49999,
    description: "Latest smartphone with advanced camera and long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=350&fit=crop",
  },
  {
    id: 2,
    title: "Laptop Pro",
    price: 89999,
    description: "Powerful laptop for professionals with high-performance specs.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=350&fit=crop",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 9999,
    description: "Noise-cancelling headphones with premium sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=350&fit=crop",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 18999,
    description: "Track your fitness and stay connected with this smart watch.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=350&fit=crop",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 5999,
    description: "Portable speaker with rich sound and long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=350&fit=crop",
  },
  {
    id: 6,
    title: "Tablet Ultra",
    price: 29999,
    description: "Slim and powerful tablet for work and entertainment.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=350&fit=crop",
  },
  {
    id: 7,
    title: "Gaming Console",
    price: 39999,
    description: "Next-gen gaming console for immersive gaming experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&h=350&fit=crop",
  },
  {
    id: 8,
    title: "Wireless Earbuds",
    price: 8999,
    description: "True wireless earbuds with crystal clear sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=350&fit=crop",
  },
  {
    id: 9,
    title: "4K Smart TV",
    price: 59999,
    description: "Ultra HD smart TV with built-in streaming services.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=350&fit=crop",
  },
  {
    id: 10,
    title: "Digital Camera",
    price: 44999,
    description: "Professional digital camera for stunning photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=350&fit=crop",
  },
  {
    id: 11,
    title: "Men's T-Shirt",
    price: 1499,
    description: "Comfortable cotton t-shirt for everyday wear.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=350&fit=crop",
  },
  {
    id: 12,
    title: "Women's Jeans",
    price: 2999,
    description: "Stylish and comfortable jeans for women.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=350&fit=crop",
  },
  {
    id: 13,
    title: "Winter Jacket",
    price: 5999,
    description: "Warm winter jacket with water-resistant material.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=350&fit=crop",
  },
  {
    id: 14,
    title: "Running Shoes",
    price: 4999,
    description: "Lightweight running shoes for optimal performance.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=350&fit=crop",
  },
  {
    id: 15,
    title: "Summer Dress",
    price: 2499,
    description: "Floral summer dress perfect for warm weather.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=350&fit=crop",
  },
  {
    id: 16,
    title: "Men's Formal Shirt",
    price: 1999,
    description: "Elegant formal shirt for professional settings.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=350&fit=crop",
  },
  {
    id: 17,
    title: "Women's Sweater",
    price: 2799,
    description: "Cozy knit sweater for fall and winter seasons.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=350&fit=crop",
  },
  {
    id: 18,
    title: "Coffee Maker",
    price: 4999,
    description: "Programmable coffee maker for your morning brew.",
    category: "home",
    image: "https://images.unsplash.com/photo-1570486829859-74609252df39?w=500&h=350&fit=crop",
  },
  {
    id: 19,
    title: "Blender",
    price: 3499,
    description: "Powerful blender for smoothies and food preparation.",
    category: "home",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&h=350&fit=crop",
  },
  {
    id: 20,
    title: "Yoga Mat",
    price: 1999,
    description: "Non-slip yoga mat for comfortable practice.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=350&fit=crop",
  },
  {
    id: 21,
    title: "Basketball",
    price: 1799,
    description: "Official size basketball for indoor and outdoor play.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&h=350&fit=crop",
  },
  {
    id: 22,
    title: "Tennis Racket",
    price: 4499,
    description: "Professional tennis racket for players of all levels.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1617083934555-ac7d9cda2b1a?w=500&h=350&fit=crop",
  },
  {
    id: 23,
    title: "iPhone 15 Pro",
    price: 134900,
    description: "Latest iPhone with titanium design and advanced camera system.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=350&fit=crop",
  },
  {
    id: 24,
    title: "MacBook Air M2",
    price: 114900,
    description: "Powerful and lightweight laptop with M2 chip.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=350&fit=crop",
  },
  {
    id: 25,
    title: "Samsung Galaxy S24",
    price: 79999,
    description: "Premium Android smartphone with AI features.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=350&fit=crop",
  }
];


const cardContainer = document.getElementById("card-container");
const searchBox = document.getElementById("search-box");
const resultsInfo = document.getElementById("results-info");

let searchTimeout;


function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}


function displayProducts(productsArray, searchTerm = '') {
    cardContainer.innerHTML = "";
    
  
    if (searchTerm) {
        resultsInfo.innerHTML = `Found ${productsArray.length} products for "${searchTerm}"`;
    } else {
        resultsInfo.innerHTML = `Showing all ${productsArray.length} products`;
    }
    
    if (productsArray.length === 0) {
        cardContainer.innerHTML = `
            <div class="no-results">
                <h2>😔 Not Found product </h2>
                <p>Try searching for: laptop, phone, shirt, shoes, etc.</p>
            </div>
        `;
        return;
    }
    
    
    productsArray.forEach((product, index) => {
        setTimeout(() => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const highlightedTitle = highlightText(product.title, searchTerm);
            const highlightedDescription = highlightText(product.description, searchTerm);
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" loading="lazy"/>
                <div class="info">
                    <p class="category">${product.category}</p>
                    <h1 class="title">${highlightedTitle}</h1>
                    <p class="price">₹${product.price.toLocaleString()}</p>
                    <p class="description">${highlightedDescription}</p>
                    <button class="add-card">🛒 Add to Cart</button>
                </div>
            `;
            
            cardContainer.appendChild(productCard);
        }, index * 50); 
    });
}


function performRealTimeSearch() {
    const searchValue = searchBox.value.toLowerCase().trim();
    

    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    
    
    searchTimeout = setTimeout(() => {
        if (searchValue === "") {
            displayProducts(products);
            return;
        }
        
       
        const filteredProducts = products.filter(product => {
            return (
                product.title.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue) ||
                product.category.toLowerCase().includes(searchValue)
            );
        });
        
        displayProducts(filteredProducts, searchValue);
    }, 150);
}


function clearSearch() {
    searchBox.value = "";
    displayProducts(products);
    searchBox.focus();
}


searchBox.addEventListener("input", performRealTimeSearch);

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        clearSearch();
    }
});


window.addEventListener("load", function() {
    searchBox.focus();
});


displayProducts(products);

document.addEventListener("keydown", function(event) {
    
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchBox.focus();
        searchBox.select();
    }
});

console.log("🚀 Real-time search is ready!");
console.log("💡 Try searching: laptop, phone, shirt, electronics, etc.");