let cartItems = [];
let totalPrice = 0;

function addToCart(product, price) {
    cartItems.push({ product, price });
    totalPrice += price;
    updateCart();
}

// ... (existing code)

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    totalPrice -= removedItem.price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');

    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - RM ${item.price.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    totalElement.textContent = `RM ${totalPrice.toFixed(2)}`;
}

// ... (existing code)


function showCategory(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    switch (category) {
        case 'phones':
            addProduct('Iphone 14 (128 GB)', '4999.99', 'The Iphone 14 with 128 GB storage is a powerful device with a stunning display and advanced camera features.');
            addProduct('Iphone 14 Pro (256 GB)', '5999.99', 'The Iphone 14 Pro with 256 GB storage is designed for professionals, featuring enhanced performance and advanced camera capabilities.');
            addProduct('Iphone 14 Pro Max (1 TB)', '6999.99', 'Experience the Iphone 14 Pro Max with a massive 1 TB storage capacity, perfect for users who need ample space for their data and media.');
            addProduct('Iphone 13  (256 GB)', '3999.99', 'The Iphone 13 with 256 GB storage offers a balance of performance and value, suitable for everyday use.');
            addProduct('Iphone 13 Pro  (512 GB)', '4999.99', 'Elevate your mobile photography with the Iphone 13 Pro featuring 512 GB storage, ProMotion display, and Pro-level camera system.');
            addProduct('Iphone 13 Pro Max (1 TB)', '5999.99', 'Get the ultimate Iphone experience with the Pro Max variant, offering 1 TB storage for your extensive multimedia needs.');
            addProduct('Iphone 12  (256 GB)', '3999.99', 'The Iphone 12 with 256 GB storage delivers 5G capability, A14 Bionic chip, and a dual-camera system for an enhanced smartphone experience.');
            addProduct('Iphone 12 Mini', '1999.99', 'Experience the compact yet powerful Iphone 12 Mini, perfect for users who prefer a smaller form factor without compromising performance.');
            addProduct('Samsung Galaxy S23 ', '3999.99', 'The Samsung Galaxy S23 is a flagship Android phone with a stunning display, powerful performance, and versatile camera features.');
            addProduct('IPhone 15 Pro (256 GB)', '5999.99', 'Stay ahead with the IPhone 15 Pro featuring 256 GB storage, an advanced camera system, and the latest iOS innovations.');
            break;
        case 'smartwatches':
            addProduct('Samsung Galaxy Watch 6', '749.99', 'The Samsung Galaxy Watch 6 is a premium smartwatch with a beautiful AMOLED display, advanced fitness tracking, and long-lasting battery life.');
            addProduct('Apple Watch SE 2', '699.99', 'The Apple Watch SE 2 combines affordability with powerful features, including health monitoring, GPS, and a sleek design.');
            addProduct('Apple Watch Ultra 2', '656.99', 'Experience the Apple Watch Ultra 2 with a stunning display, extensive health and fitness features, and a durable design for everyday use.');
            addProduct('Apple Watch 9', '699.00', 'The Apple Watch 9 is a reliable smartwatch with essential features, making it a great companion for your daily activities.');
            addProduct('Samsung Galaxy Watch 5 Pro', '599.00', 'The Samsung Galaxy Watch 5 Pro offers a blend of style and functionality, featuring a durable build, advanced fitness tracking, and a variety of watch faces.');
            addProduct('Google Pixel Watch 2', '799.00', 'The Google Pixel Watch 2 is a high-end smartwatch with a focus on seamless integration with Google services, premium materials, and an array of fitness features.');
            break;
        case 'laptops':
            addProduct('Dell XPS 13', '4299.99', 'The Dell XPS 13 is a premium ultrabook with a stunning InfinityEdge display, powerful performance, and a sleek design for professionals and content creators.');
            addProduct('Asus ROG Zephyrus G14', '5799.99', 'The Asus ROG Zephyrus G14 is a high-performance gaming laptop featuring a powerful AMD Ryzen processor and dedicated NVIDIA GeForce RTX graphics.');
            addProduct('HP Spectre x360', '4699.99', 'The HP Spectre x360 is a versatile 2-in-1 laptop with a convertible design, crisp display, and long battery life, perfect for productivity and entertainment.');
            addProduct('Lenovo ThinkPad X1 Carbon', '5499.99', 'The Lenovo ThinkPad X1 Carbon is a business-class ultrabook known for its durability, exceptional keyboard, and robust security features.');
            addProduct('Acer Swift 3', '2899.99', 'The Acer Swift 3 is a budget-friendly ultrabook offering a good balance of performance and portability, making it suitable for students and casual users.');
            addProduct('Microsoft Surface Laptop 4', '4999.99', 'The Microsoft Surface Laptop 4 combines elegance with performance, featuring a premium build, high-resolution PixelSense display, and a choice of powerful processors.');
            break;
        case 'pcs':
            addProduct('Dell XPS Tower', '2199.99', 'The Dell XPS Tower is a premium desktop with a sleek design, powerful components, and ample storage, perfect for professionals and enthusiasts.');
            addProduct('Lenovo Legion C7', '1699.99', 'The Lenovo Legion C7 is a compact gaming PC with a stylish design, powerful internals, and customizable RGB lighting.');
            addProduct('CyberPowerPC Gamer Xtreme VR', '1799.99', 'The CyberPowerPC Gamer Xtreme VR is a gaming powerhouse with VR-ready performance, ideal for immersive gaming experiences.');
            addProduct('Alienware Aurora R12', '2499.99', 'The Alienware Aurora R12 is a high-performance gaming desktop with Alienware iconic design and top-tier components for hardcore games');
            addProduct('Acer Aspire TC-895', '999.99', 'The Acer Aspire TC-895 is a budget-friendly desktop with reliable performance, making it suitable for daily computing tasks.');
            break;
            break;
        default:
            break;
    }
}

function addProduct(name, price, description) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    
    const productName = document.createElement('h2');
    productName.textContent = name;

    const productDescription = document.createElement('p');
    productDescription.textContent = description;

    const productPrice = document.createElement('span');
    productPrice.className = 'price';
    productPrice.textContent = `RM ${price}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.onclick = function () {
        addToCart(name, parseFloat(price));
    };

    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addButton);

    const productsContainer = document.getElementById('products');
    productsContainer.appendChild(productDiv);
}

// Show default category on page load
showCategory('phones');
