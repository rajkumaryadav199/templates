
let input1=[1,2, -2,2, 4, 7, 4]
let input=[2, 3, 4, 4 ,7, 1, 7 ,11]

function SecondLargest(input)
{
    let arr=[...new Set(input)].sort((a,b)=>
          b-a
    )
    return arr[1]
}

console.log(SecondLargest(input))

