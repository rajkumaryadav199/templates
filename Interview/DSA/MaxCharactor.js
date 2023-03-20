
let line="Reverse this javascript code"
 
let myObj={}

for(let i=0; i<line.length; i++)
{
    if(myObj[line[i] ]===undefined)
    {
        myObj[line[i] ]=1
    }
    else {
        myObj[line[i] ]=myObj[line[i] ]+1
    }
}

let max=-1
let key;
for(let k in myObj)
{
  
   if(myObj[k]>max && k!=" ") 
   {
    max=myObj[k]
    key=k
   }
}
console.log(myObj,key)