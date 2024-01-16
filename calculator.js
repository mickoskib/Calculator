function calculator(num1,num2,operator){
    switch(operator){
        case "+":
        return num1+num2;
        case "-":
        return num1-num2;
        case "*":
        return num1*num2;
        case "/":
        return num1/num2;
        default:
            return "Invalid Operator";
    }
}
let num1=parseInt(prompt("Enter a First Number:"));
let num2=parseInt(prompt("Enter a Secound Number:"));
let operator=prompt("Enter operator.It can only be +,-,*,/.");

alert(calculator(num1, num2, operator));


