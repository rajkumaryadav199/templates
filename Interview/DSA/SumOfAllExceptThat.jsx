let Data=[2,11,4,7,-2]

let sum=Data.reduce((acc,curr)=> acc+curr)
console.log(sum)
let arr=[]
for(let i=0; i<Data.length; i++)
{
    let val=sum-Data[i]
    arr.push(val)
}
console.log(arr)