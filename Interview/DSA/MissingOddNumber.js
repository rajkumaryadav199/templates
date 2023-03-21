
let input=[5,7,9,11,15,17]



function MissingOdd(arr){
    let val=arr[0];
    for(let i=0; i<arr.length-1; i++)
{
    
   
    if(arr[i+1]!=arr[i]+2)
    {
        return arr[i]+2
    }
   
}
}
console.log(MissingOdd(input))