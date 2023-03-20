let line="Reverse this javascript code"

const method=line.split(" ")

const myMethod=method.map((item)=> item.split('').reverse().join('')).join(' ')
console.log(myMethod)

const data=line.split(" ")
function reverseStr(str){
    let val=""
    for(let i=str.length-1; i>=0; i--)
    {
        val +=str[i]
    }

    return val
}

  
function Revers(line)
{
    let str="";

for(let i=0; i<line.length; i++){
  
          str+= reverseStr(line[i]) +" "
}
return str
}

console.log(Revers(data))