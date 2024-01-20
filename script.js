// Welcome message
console.log('Hi there, Welcome to ZiggyStore');
console.log('This is an ink shopping store where you can buy different colors of inks');

// Signup process
console.log('Before you shop with us, you need to have an account with ZiggyStore');
let userName = prompt('Your name?');
let userMail = prompt('Your email?');
let userCode = prompt('Your preferred password?');
console.log('That\'s all ' + userName + '. Time to Login');

// Shopping cart to keep track of selected items and quantities
let shoppingCart = [];

// Display catalog of ink colors with prices
function catalog() {
  console.log('These are the items we have in ZiggyStore');
  console.log('1. Red Ink - $5.00 per bottle');
  console.log('2. Orange Ink - $4.50 per bottle');
  console.log('3. Yellow Ink - $4.00 per bottle');
  console.log('4. Green Ink - $5.50 per bottle');
  console.log('5. Blue Ink - $6.00 per bottle');
}

// Login error function
function errorLogin() {
  return login();
}

// Login function
function login() {
  let userMailLogin = prompt('Your email?');
  let userCodeLogin = prompt('Your password');

  // Check if login credentials match the signup information
  if (userMailLogin === userMail && userCodeLogin === userCode) {
    console.log('Login Successful');
    return startShopping();
  } else {
    console.log('Incorrect Email or Password');
    return errorLogin();
  }
}

// Initiate login process
login();

// Start the shopping process
function startShopping() {
  catalog(); // Display the catalog
  catalogChosen(); // Initiate the catalog selection process
}

// Catalog selection function
function catalogChosen() {
  console.log('Please pick the corresponding number indicating the ink color, e.g., 1 for Red, 4 for Green');
  let pick = prompt('Enter a value?');

  // Use a switch statement to handle the chosen ink color
  switch (pick) {
    case '1':
      addToCart('Red Ink', 5.00);
      break;
    case '2':
      addToCart('Orange Ink', 4.50);
      break;
    case '3':
      addToCart('Yellow Ink', 4.00);
      break;
    case '4':
      addToCart('Green Ink', 5.50);
      break;
    case '5':
      addToCart('Blue Ink', 6.00);
      break;
    default:
      alert('An unknown value');
      return wrongCatalogChosen();
  }

  let continueShopping = confirm('Do you want to continue shopping?');
  if (continueShopping) {
    catalogChosen();
  } else {
    displayInvoice();
  }
}

// Add selected item to the shopping cart
function addToCart(itemName, itemPrice) {
  let quantity = parseInt(prompt(`How many bottles of ${itemName} would you like to purchase?`));
  let totalCost = quantity * itemPrice;
  shoppingCart.push({ itemName, quantity, totalCost });
  console.log(`${quantity} bottles of ${itemName} added to your cart. Total cost: $${totalCost.toFixed(2)}`);
}

// Handle incorrect catalog selection
function wrongCatalogChosen() {
  return catalogChosen();
}

// Display the final invoice
function displayInvoice() {
  console.log('Thank you for shopping with ZiggyStore!');
  console.log('Here is your invoice:');

  let totalAmount = 0;

  for (let item of shoppingCart) {
    console.log(`${item.quantity} bottles of ${item.itemName} - $${item.totalCost.toFixed(2)}`);
    totalAmount += item.totalCost;
  }

  console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
  console.log('We appreciate your business. Goodbye!');
}
