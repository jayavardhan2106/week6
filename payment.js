function processPayment() {
    let cardNumber = document.getElementById('cardNumber').value.trim();
    let expiryDate = document.getElementById('expiryDate').value.trim();
    let cvv = document.getElementById('cvv').value.trim();
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
        alert("All payment fields are required.");
        return false;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Card number must be 16 digits.");
        return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert("Expiry date must be in MM/YY format.");
        return false;
    }
    if (!/^\d{3}$/.test(cvv)) {
        alert("CVV must be 3 digits.");
        return false;
    }
    alert("Payment successful!");
    return false;
}
