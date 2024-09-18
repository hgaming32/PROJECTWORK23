const count = (arr) => {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
 for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === 'a') {
            aCount++;
        } else if (arr[i] === 'c') {
            cCount++;
        } else  {
            bCount++;
        }
    }

   
    return { a: aCount, b: bCount, c: cCount };
}


const correctArray = ['a', 'c', 'b', 'c', 'a', 'a'];
const result = count(correctArray);

console.log(result)