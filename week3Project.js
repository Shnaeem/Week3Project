// 1. Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

    let n = prompt("Please enter number between 1 to 10")
    function inputNo(n){
            for (let a=n; a<11 ; a++){
             console.log(a)
            }
    }
    
    inputNo();

//2. Using a while loop, return an array that contains all odd numbers between 3 and 103 
    let array = [];
    let start = 3;
    let end = 103;
    while(start <= end){
        array.push(start);
        start+=2;
    }
    console.log(array)

//3. arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop. 
    let num = [10,20,30,40];
    function arraySum(num){
        let sum = num.reduce((total, amount) => total + amount); 
        console.log(sum);
    }
    arraySum(num)
//4. Use a loop to display the numbers 9 to 0 in descending order.
    function decrease(){
        for (let j=9; j > -1; j--){
            console.log(j);
        }
    }
    decrease()
//5. Write a function computing the factorial of n
    function factorial(n){
        let answer = 1;
        if (n == 0 || n == 1){
        return answer;
        }else{
        for(let i = n; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
        }  
    }
    let n = prompt("Please enter the number you want factorial for");
    answer = factorial(n)
    console.log("The factorial of " + n + " is " + answer);

//6. Write a function using a for loop that returns the sum of all numbers from 1 to n. 

    function sum(n){  
        let array = [];
        let start = 1;
        while(start <= n){
            array.push(start);
            start++;
    }
        let sum = array.reduce((total, amount) => total + amount); 
        console.log(sum);
    }

    sum(n);
  
/**7. Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
Let string = “donuts”

Expected output => dZnZtZ */
    function changing(str){
        let StringArray = str.split("").map((word, wrdIndex) => {
            if(wrdIndex % 2 === 1){
                return word = "Z";
            }else{
                return word.toLowerCase();
            }
        }).join("");
        return StringArray;
    }

    changing("donuts");
