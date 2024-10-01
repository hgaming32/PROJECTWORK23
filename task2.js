const products = [
    { name: "MacBook Pro", category: "laptop", price: 2500, quantity: 10 },
    { name: "iPhone 13", category: "phone", price: 999, quantity: 25 },
    { name: "Galaxy S21", category: "phone", price: 799, quantity: 20 },
    { name: "iPad Pro", category: "tablet", price: 1200, quantity: 15 },
    { name: "Surface Pro", category: "tablet", price: 1300, quantity: 8 },
    { name: "Dell XPS", category: "laptop", price: 2000, quantity: 12 },
    { name: "OnePlus 9", category: "phone", price: 729, quantity: 30 }
];

const phones = products.filter(product => product.category === "phone");
console.log(phones);
// task second