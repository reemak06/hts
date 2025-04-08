const products = [
    {
        id: 1,
        name: "Sound Watch",
        description: "An innovative sound recognition watch designed for the deaf and mute.",
        price: 9999.00,
        image: "assets/images/product1.jpg"
    },
   
];


// Function to load cart items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-image">
            <h3>${item.name}</h3>
            <p><strong>Description:</strong> ${item.description || 'No description available'}</p> <!-- ✅ Ensure description is displayed -->
            <p><strong>Price:</strong> ₹${item.price}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}


document.addEventListener('DOMContentLoaded', loadProducts);




