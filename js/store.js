// Array to hold cart items
let cart = [];

// Funtion to update cart count 
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Function to update Cart total
function updateCartCount() {
    const cartCount = document.getElementById('cartTotal');
    let total = 0;
    cart.forEach(item => total += item.price);
    cartTotal.textContent = total.toFixed(2);
}

// Function to display cart items in the modal
function displayCartItems(){
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
}

cart.forEach(items => {
    const cartItem = document.createElement('Div');
    cartItem.textContent = $(items.name) - $$(item.price.toFixed(2));
    cartItemDiv.appendChild(cartitem);
});

// Handle "Add to Cart" button clicks
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.slice(1));

    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update cart count and total
    updateCartCount();
    updateCartTotal();
  });
});

// Show cart modal
document.getElementById('cartButton').addEventListener('click', () => {
  displayCartItems();
  document.getElementById('cartModal').style.display = 'flex';
});

// Close cart modal
document.getElementById('closeCartButton').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'none';
});

// Handle checkout button (you can replace with actual functionality)
document.getElementById('checkoutButton').addEventListener('click', () => {

})

