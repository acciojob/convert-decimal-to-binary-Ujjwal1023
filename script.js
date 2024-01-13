function decimalToBinary(decimalNumber) {
  // Validate input
  if (typeof decimalNumber !== 'number' || decimalNumber < 0 || decimalNumber > Math.pow(2, 31) - 1) {
    console.error("Invalid input. Please enter a non-negative integer within the valid range.");
    return;
  }

  // Special case for 0
  if (decimalNumber === 0) {
    return '0';
  }

  // Convert decimal to binary
  let binaryString = '';
  while (decimalNumber > 0) {
    binaryString = (decimalNumber % 2) + binaryString;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryString;
}

// Examples
// console.log(decimalToBinary(0));    // Output: '0'
// console.log(decimalToBinary(10));   // Output: '1010'

