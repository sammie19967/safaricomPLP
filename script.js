// Ask user for their name and age
let customerName = prompt("Enter your name:");
let customerAge = parseInt(prompt("Enter your age:"));

// Validate input
if (!customerName || isNaN(customerAge) || customerAge <= 0) {
    alert("Invalid input! Refresh the page and enter correct details.");
    throw new Error("Invalid input"); // Stops further execution
}

// Function to calculate discount based on age
function getDiscountPercentage(age) {
    if (age < 18) return 50;
    if (age >= 18 && age <= 30) return 20;
    if (age > 30 && age <= 50) return 15;
    return 0;
}

let discountPercentage = getDiscountPercentage(customerAge);

// Display welcome message and discount eligibility
document.getElementById("greeting").innerText = `Welcome, ${customerName}!`;
document.getElementById("discount-message").innerText = `You are eligible for a ${discountPercentage}% discount!`;

// Shopping cart function
function calculateTotal() {
    let itemSelect = document.getElementById("item");
    let selectedItem = itemSelect.options[itemSelect.selectedIndex].value;
    let itemPrice = parseFloat(itemSelect.options[itemSelect.selectedIndex].getAttribute("data-price"));
    let quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    let totalPrice = itemPrice * quantity;
    let discountAmount = (discountPercentage / 100) * totalPrice;
    let finalPrice = totalPrice - discountAmount;

    document.getElementById("cart-total").innerText = `Total for ${quantity} ${selectedItem}(s): Ksh ${totalPrice}`;
    document.getElementById("discount-applied").innerText = `Discount Applied: Ksh ${discountAmount} | Final Price: Ksh ${finalPrice}`;
}
