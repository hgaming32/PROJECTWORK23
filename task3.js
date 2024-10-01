const products = [
    { name: "MacBook Pro", price: 2500 },
    { name: "iPhone 13", price: 999 },
    { name: "Galaxy S21", price: 799 },
    { name: "iPad Pro", price: 1200 },
    { name: "Surface Pro", price: 1300 },
    { name: "Dell XPS", price: 2000 },
    { name: "OnePlus 9", price: 729 }
  ];
  
  const productStrings = products.map(product => `${product.name} - ${product.price}`);
  
  console.log(productStrings);

// task 3 of the assinment