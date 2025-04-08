// Function to add product to cart
function addToCart(name, price, quantityId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let quantityElement = document.getElementById(quantityId);
    if (!quantityElement) {
        console.error(`Element with ID '${quantityId}' not found.`);
        return;
    }
    let quantity = parseInt(quantityElement.value);
    if (isNaN(quantity) || quantity < 1) {
        alert("Please select a valid quantity.");
        return;
    }

    // Find correct image dynamically
    let imageElement = document.getElementById(quantityId.replace('quantity', 'product') + '-mainImage');
    let image = imageElement ? imageElement.src : '';
    
    let description = document.querySelector(`#${quantityId}`).closest('.col-md-6').querySelector('.product-description').textContent;

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, image, quantity, description });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} added to cart!`);
}

// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Function to show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);