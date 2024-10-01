const products = [
    { name: "MacBook Pro", price: 2500, quantity: 10 },
    { name: "iPhone 13", price: 999, quantity: 25 },
    { name: "Galaxy S21", price: 799, quantity: 20 },
    { name: "iPad Pro", price: 1200, quantity: 15 },
    { name: "Surface Pro", price: 1300, quantity: 5 },
    { name: "Dell XPS", price: 2000, quantity: 8 },
    { name: "OnePlus 9", price: 729, quantity: 30 }
  ];
  
  
  let sum = 0;
  
  const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
  
  console.log(`Total purchase of your  Value is ${totalInventoryValue}`);

  // task 4 assingment