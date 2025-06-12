// Initialize cart as an empty array
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  console.log(existingItem);
  
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();

  console.log(cart);
  console.log(product);
  console.log(item.id);
   console.log(product.id);
   console.log(product.name);
  
}

// Function to render the cart
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} 
      <span>
        <button onclick="updateQuantity(${item.id}, -1)">-</button>
        ${item.quantity}
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
      </span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
}

// Function to update item quantity
function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      renderCart();
    }
  }
}

// Function to remove an item from the cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      id: parseInt(button.parentElement.getAttribute('data-id')),
      name: button.parentElement.getAttribute('data-name'),
      price: parseFloat(button.parentElement.getAttribute('data-price'))
    };
    addToCart(product);
  });
});

// Checkout button (placeholder)
document.getElementById('checkout').addEventListener('click', () => {
  alert('Checkout functionality not implemented yet!');
});

