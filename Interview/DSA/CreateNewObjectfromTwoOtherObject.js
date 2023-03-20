
let input={a:1,b:2,c:3,d:10,e:12}
let input1={a:2,e:12,f:6,d:10}

const output={d:10, e:12}

const L1=Object.keys(input1).length
const L=Object.keys(input).length
let obj={}
if(L1>L)
{
    for(let k in input1)
    {
        if(input1[k]===input[k])
        {
            console.log(k, input1[k])
           obj[k]=input1[k]
        }
    }
}
else{
    for(let k in input)
    {
        if(input1[k]===input[k])
        {
           
           obj[k]=input[k]
        }
    } 
}
console.log(L1, obj)




