// Assignment # 21-25
// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName  +  lastName ;
// console.log("full name is: " + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let favPhone = prompt("Mention your favourite mibile phone model");
// let favPhoneLength = favPhone.length;
// console.log(`My favourite phone is: ${favPhone} \n Length of string is: ${favPhoneLength}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let myWord = "pakistani";
// let findWord = myWord.indexOf("n");
// console.log(`string: ${myWord}\n index of "n": ${findWord}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let myStr = "Hello World";
// let lastIndex = myStr.lastIndexOf("l");
// document.write(`String: ${ myStr }<br> Last index of "l": ${lastIndex}`);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let myWord = "pakistani";
// let findIndex = myWord[3];
// document.write(`String: ${myWord} <br> Character at index 3: ${findIndex}`);

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName  +  lastName ;
// console.log("full name is: " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let myCity = "Hyderabad";
// let findNew = myCity.replace("Hyder" ,"Islam");
// document.write(`City: ${ myCity} <br> After replacement: ${findNew}`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage =  message.replaceAll("and","&");
// document.write(`${message}<br> ${newMessage }`);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
 
// let str = "472";
// let num = parseInt(str);
// document.write(`Value:${str}<br> Type: String <br> Value:${num}<br> Type: number`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let input = prompt("write any word");
// let convert = input.toUpperCase();
// document.write(`User input:${input} <br> Upper case: ${ convert }`);

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let userInput = "javascript";
// let titleWord = userInput.slice(0,1).toUpperCase()+userInput.slice(1).toLowerCase();
// console.log(`User input: ${userInput}\n Tilte case: ${titleWord}`);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.36 ;
// let res= num.toString().replace(".","");
// document.write(`Number: ${num}<br> Result: ${res}`);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userName;
// let inValidChar = ["@",".",",","!"];
// let isValid = false;
// while(!isValid){
//      userName = prompt("Enter your name");
//     isValid = true;
//     for(let i=0; i < inValidChar.length; i++){
//         if(userName.includes(inValidChar[i])){
//             alert("Invalid username.");
//             isValid = false;
//             break
//         }
//     }
// }
// console.log("valid username entered:",userName);  // i have to do it agin.








