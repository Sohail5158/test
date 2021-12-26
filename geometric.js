var num1=prompt("enter first number")
num1=parseInt(num1)

var num2=prompt("enter common ratio")
num2=parseInt(num2)

var n=prompt("enter nth series")
n=parseInt(n)

for(var i=0; i<n;i++){
    
      var z=Math.pow(num2,i)
     var y=num1*z
      
     console.log(y)

}
