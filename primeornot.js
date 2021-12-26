
var num = prompt("Enter a number: ");
num=parseInt(num);

if (num == 1)
 {
    alert("1 is neither prime nor composite number.");
}
else if(num==2)
{
alert("given number is prime");
}
else if(num%2==0)
{
alert("given number is not a prime");
}
else
{
alert("given number is a prime");
}

