
function strLength(value: string):number
{
   let mystring = value.length;
   return mystring;
}
console.log(strLength("test 1"));

//mystring.replace(" ","").length;
function strlengthNoSpaces(value:String):number
{
    return value.replace(/\s/,"").length;
    
}
console.log(strlengthNoSpaces("test 1"));

function both_methods(value: string, spaces?:boolean):number{
    
}
