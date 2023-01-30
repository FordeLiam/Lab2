function strLength(value) {
    var mystring = value.length;
    return mystring;
}
console.log(strLength("test 1"));
//mystring.replace(" ","").length;
function strlengthNoSpaces(value) {
    return value.replace(/\s/, "").length;
}
console.log(strlengthNoSpaces("test 1"));
