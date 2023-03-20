
let input=[2,7,11,4,-2]
let k=2
for(let i=0; i<k; i++)
{
let temp=input[0]
for(let i=0; i<input.length-1; i++)
{
input[i]=input[i+1]

}
input[input.length-1]=temp
}

console.log(input)