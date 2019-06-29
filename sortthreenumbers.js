var a= prompt("Enter number one");
var b= prompt("Enter number two");
var c= prompt("Enter number three");
var num= [a, b, c];

num.sort((a, b) => a - b).reverse();
var string= ("Your numbers have been sorted: "  + num)
document.write(string.fontsize(10));