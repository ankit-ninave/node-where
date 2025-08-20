const myURL = new URL("https://example.com/products?category=books&id=101");

console.log(myURL.hostname);
console.log(myURL.pathname);

let l_category = myURL.searchParams.get('category')
let l_id = myURL.searchParams.get('id')
console.warn('category',l_category);
console.warn('Id',l_id);
