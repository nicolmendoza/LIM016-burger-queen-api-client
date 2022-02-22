// const [cart, setCart] = userState([]);

// const addProduct = (product) => {
//   const exits = cart.find((x) => x._id === product._id);
//   if (exits) {
//     setCart(
//       cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty + 1 } : x))
//     );
//   } else {
//     return setCart([...cart, { ...product, qty: 1 }]);
//   }
// };

// const deleteProduct = (product) => {
//   if (product.qty === 1) {
//     return setCart(cart.filter((x) => x._id !== product._id));
//   } else {
//     return setCart(
//       cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty - 1 } : x))
//     );
//   }
// };

// const myObj = {};
// const myStr = 'myProperty';
// const myArray = [1, 3];


// const addArrayProperty=(myObj, myStr, myArray)=>{
// myObj[myStr]=myArray
// return myObj
// }

// addArrayProperty(myObj, myStr, myArray);
// console.log(myObj.myProperty); // => [1, 3]




const objectPropertiesCounter=(obj)=>{
return Object.keys(obj).length
}
const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });
console.log(output); // => 2