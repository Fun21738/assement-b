// const services =[
//     {books: "all", price: 400},
//     {pens: "some", price:300},
//     {covers:"dozen",price:600},
//     ]
    
    
//     // let total=0;
//     // services.forEach(item => {
//     //    total+=item.price; 
//     // });
    
//     // console.log("TOTAL:",total);
    
    
//     const totalPrice = services.reduce((total,item)=>{
//         return total + item.price;
//     },0);
//     console.log("TOTAL:",totalPrice);
    
    
    
//     // 
//     const sumArray =(arr)=>{
//         return arr.reduce((sum, start)=>{
//             return sum + start;
//         },0)
//     }
//     console.log(sumArray([1,2,3]));



const arr = [1, 2, 3, 4];
const sum = arr.reduce((a, b) => { return a + b}, 0);
console.log(sum);


