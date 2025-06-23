let str = ["deep", "DSA", "dev", "52%", "20day"];
let a = 5;

function concat(str)
{
    let temp = '';
    let a = 10;
    for(let i=0 ; i<str.length ; i++)
    {
        temp = temp + str[i] + " "; // java ma only + j, if += to guchvashe and js ma only += j, if + to guchavashe
    }
    console.log(str);
    console.log(a); // function scope > global scope , function scope ni specificity vadhu hoy chhe global scope karta
    return temp;
}
console.log(concat(str));
// console.log(temp); ReferenceError: temp is not defined
console.log(str);
console.log(a);