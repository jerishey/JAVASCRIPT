# JavaScript
JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language. It's an interpreted language that executes code line by line, providing more flexibility.

## Features :
```bash
1. Lightweight & Interpreted : JavaScript runs directly in the browser without compilation, making it fast and easy to use.

2. Dynamic Typing : No need to declare data types—variables can change type automatically.

3. Event-Driven : JavaScript responds to user actions like clicks, typing, and mouse movements.

4. Asynchronous Programming : It can perform tasks (like API calls) in the background without stopping the program.

5. Object-Oriented : Supports objects, classes, and inheritance to organize code efficiently.

6. Platform Independent : Runs on any device or operating system with a web browser.
```

## Client Side and Server Side nature of JavaScript
JavaScript's flexibility extends to both the client-side and server-side, allowing developers to create complete web applications. Here’s how it functions in each environment:

`1. Client-Side`
```bash
1. Involves controlling the browser and its DOM (Document Object Model).

2. Handles user events like clicks and form inputs.

3. Common libraries include AngularJS, ReactJS, and VueJS.
```
`2. Server-Side`
```bash
1. Involves interacting with databases, manipulating files, and generating responses.

2. Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.
```

## Limitations of JavaScript
```bash
1. Security Risks : Can be used for attacks like Cross-Site Scripting (XSS), where malicious scripts are injected into a website to steal data by exploiting elements like <img>, <object>, or <script> tags.

2. Performance : Slower than traditional languages for complex tasks, but for simple tasks in a browser, performance is usually not a major issue.

3. Complexity : To write advanced JavaScript, programmers need to understand core programming concepts, objects, and both client- and server-side scripting, which can be challenging.

4. Weak Error Handling and Type Checking : Weakly typed, meaning variables don’t require explicit types. This can lead to issues as type checking is not strictly enforced.
```

## Adding JavaScript in HTML Document
JavaScript can be included in an HTML document to add interactivity and dynamic behavior to web pages. It allows the browser to execute scripts that can modify content, handle events, and communicate with servers.

```bash
1. Inline JavaScript: Code written directly inside HTML tags using attributes like onclick.

2. Internal JavaScript: Script written inside the <script> tag within the HTML file.

3. External JavaScript: JavaScript stored in a separate .js file and linked using the <script src="file.js"></script> tag.
```

### Example :

`1. Inline JavaScript` : You can write JavaScript code directly inside the HTML element using the onclick, onmouseover, or other event handler attributes.
```bash
<html>
<head></head>
<body>
    <h2>
        Adding JavaScript in HTML Document
    </h2>
    <button onclick="alert('Button Clicked!')">
        Click Here
    </button>
</body>
</html>
```
<br>

`2. Internal JavaScript (Within <script> Tag)` : You can write JavaScript code inside the `<script>` tag within the HTML file. This is known as internal JavaScript and is commonly placed inside the `<head>` or `<body>` section of the HTML document.

<i>

```bash
1. JavaScript Code Inside <head> Tag : Placing JavaScript within the <head> section of an HTML document ensures that the script is loaded and executed as the page loads. This is useful for scripts that need to be initialized before the page content is rendered.

Example:
<html>
<head>
    <script>
        function myFun() {
            document.getElementById("demo")
                .innerHTML = "Content changed!";
        }
    </script>
</head>
<body>
    <h2>
        Add JavaScript Code
        inside Head Section
    </h2>
    <h3 id="demo" style="color:green;">
        JavaScript
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
</body>
</html>

2. JavaScript Code Inside <body> Tag : JavaScript can also be placed inside the <body> section of an HTML page. Typically, scripts placed at the end of the <body> load after the content, which can be useful if your script depends on the DOM being fully loaded.

Example:
<html>
<head></head>
<body>
    <h2>
        Add JavaScript Code
        inside Body Section
    </h2>
    <h3 id="demo" style="color:green;">
        JavaScript
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
    <script>
        function myFun() {
            document.getElementById("demo")
                .innerHTML = "Content changed!";
        }
    </script>
</body>
</html>
```
</i>

`3. External JavaScript (Using External File)` : For larger projects or when reusing scripts across multiple HTML files, you can place your JavaScript code in an external .js file. This file is then linked to your HTML document using the src attribute within a `<script>` tag.

```bash
<html>
<head>
    <script src="script.js"></script>
</head>
<body>
    <h2>
        External JavaScript
    </h2>
    <h3 id="demo" style="color:green;">
        JavaScipt
    </h3>
    <button type="button" onclick="myFun()">
        Click Here
    </button>
</body>
</html>

/* Filename: script.js*/

function myFun () {
    document.getElementById('demo')
        .innerHTML = 'Content Changed'
}
```
### Advantages of External JavaScript
```bash
1. Faster Page Load Times: Cached external JavaScript files don’t need to be reloaded every time the page is visited, which can speed up loading times.

2. Improved Readability and Maintenance: Keeping HTML and JavaScript separate makes both easier to read and maintain.

3. Separation of Concerns: By separating HTML (structure) and JavaScript (behavior), your code becomes cleaner and more modular.

4. Code Reusability: One external JavaScript file can be linked to multiple HTML files, reducing redundancy and making updates easier.
```

## Console in JavaScript
The console object provides access to the browser's debugging console (or terminal in Node.js). It is used to log information, debug code, and interact with the runtime environment during development.

`Types of Console Methods:`

`1. console.log() :` The console.log() function logs general information to the console. This is one of the most commonly used methods for debugging in JavaScript.
```bash
console.log("Hello, World!");
```

`2. console.error() :` The console .error() function in JavaScript Logs error messages to the console. Typically displayed in red. It is used to display an error message on the console.
```bash
console.error("This is an error message.");
```

`3. console .warn() :` The console. warn() function Logs warnings on to the console to warn the user about certain scenarios, typically displayed in yellow.
```bash
console.warn("This is a warning message.");
```

`4. console.info() :` The console.info() logs informational messages, which usually appear as standard logs but can be styled differently in some environments.
<br>
Using the %c flag and passing the style object as the second parameter to the function can be used to style the info message.
```bash
console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');
```

`5. console .table() :` console.table() is a method that displays data in a structured table format, making it easier to read and compare. 
<br>
It takes arrays or objects and organizes their properties or elements into rows and columns, helping with debugging or analyzing large or complex datasets.
```bash
console.table([{name: "Amit", age: 30}, {name: "Nitish", age: 25}]);
```

`6. console .time() & console .timeEnd() :` The console.time() method starts a timer with a specified label, and console.timeEnd() stops the timer and logs the elapsed time in milliseconds. These methods are useful for measuring how long a block of code takes to execute.
```bash
console.time('timer1');
function loops() {
    for (let i = 0; i <= 10000; i++) {

    }
}
loops()
console.timeEnd('timer1');
```

`7. console.assert() :` console.assert() logs an error message if the given condition is false, helping to catch issues during development. If the condition is true, it produces no output.
```bash
console.assert(5 > 10, "This assertion failed");
```

`8. console .group() and console.groupEnd() :` The console.group() and console.groupEnd() methods let you group related logs together in the console. This makes it easier to organize and read logs, especially when debugging.
```bash
console.group('User Information');
console.log('Name: Rajni');
console.log('Age: 21');
console.groupEnd();
```

`9. console.count() :` console.count() logs the number of times it has been called with a specific label. It helps track how many times a particular code block or function is executed during runtime.
```bash
console.count("countLabel");  
console.count("countLabel"); 
console.count("countLabel");
console.count("countLabel");
```

`10. console.trace() :` The console.trace() method outputs a stack trace to the console, showing the path your code took to reach the point where it was called. This helps track the flow of execution and identify where a function was invoked.
```bash
function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()

Output:
c                      @ VM416 : 9
b                      @ VM416 : 6
a                      @ VM416 : 2
(anonymous) @ VM416 : 11
```


## 1. Data Types
JavaScript data types define what kind of values a variable can hold and how those values behave in a program. They determine how data is stored in memory and how operations like comparison, calculation, and conversion work.

- Each data type has its own methods and operations that control how it can be used.
- Understanding data types helps prevent errors and makes code more efficient and reliable.

### Data Type Categories
`1. Primitive Data Type` : Primitive data types in JavaScript represent simple, immutable values stored directly in memory, ensuring efficiency in both memory usage and performance.
```bash
1. Number : The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.

Example:
let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

2. String : A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript, which are.

Example:
let s1 = "Hello There";  # using double quotes
console.log(s1); 

let s2 = 'Single quotes work fine'; # using single quotes
console.log(s2); 

let s3 = `can embed ${s1}`; # using backticks
console.log(s3);

3. Boolean : The boolean type has only two values i.e. true and false.

Example:
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

4. Null : The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value.

Example:
let age = null;
console.log(age)
- The 'null' data type defines a special value that represents nothing, or empty value.

5. Undefined : A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.

Example:
let a;
console.log(a);

6. Symbol (Introduced in ES6) : Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.

Example:
let s1 = Symbol("Java");
let s2 = Symbol("Script");
console.log(s1 == s2);

7. BigInt (Introduced in ES2020) : BigInt is a built-in object that provides a way to represent whole numbers greater than 253. The largest number that JavaScript can reliably represent with the Number primitive is 253, which is represented by the MAX_SAFE_INTEGER constant.

Example:
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);
```

`2. Non-Primitive Data Types` : The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

```bash
1. Object : JavaScript objects are key-value pairs used to store data, created with {} or the new keyword. They are fundamental as nearly everything in JavaScript is an object.

Example:
let abc = {
    type: "Company",
    location: "Noida"
}
console.log(abc.type)

2. Arrays : An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.

Example:
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

3. Function : A function in JavaScript is a block of reusable code designed to perform a specific task when called.

Example:
// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));

4. Date Object : The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.

Example:
// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);

5. Regular Expression : A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.

Example:
// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 

console.log(result);
```
### Facts about Data Types
`1. Dynamically Typed :` JavaScript Variables are not bound to a specific data type. Mainly data type is stored with value (not with variable name) and is decided & checked at run time.
```bash
let x = 42;   
console.log(x)

x = "hello";  
console.log(x)

x = [1, 2, 3]
console.log(x)
```
`2. Everything is an Object (Sort of) :` In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.
```bash
let s = "hello";
console.log(s.length);  

// Example with a number
let x = 42;
console.log(x.toString()); 

// Example with a boolean
let y = true;
console.log(y.toString());

/* Internal Working of primitives
   to be treeated as objects
   
// Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

// The wrapper is discarded after use
temp = null; */
```

`3. NaN is not equal to itself :` NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.
```bash
console.log(typeof NaN);
console.log(NaN === NaN);
```

`4. A Symbol is Never Equal to Another One :` Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.
```bash
let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);
```

`5. Undefined and Null :` undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.

`6.` Integers are Floating are Numbers only. There is only one type number that covers both integers and floating point numbers.

`7.` A character is also a string. There is no separate type for characters. A single character is also a string.
```bash
let s1 = "gfg";   // String
let s2 = 'g';    // Character

console.log(typeof s1); 
console.log(typeof s2);
```

## 2. Variables
Variables in JavaScript are used to store data values. They can be declared in different ways depending on how the value should behave.
```bash
1. Variables can be declared using var, let, or const.
2. JavaScript is dynamically typed, so types are decided at runtime.
3. You don’t need to specify a data type when creating a variable.

Example:
// Old style
var a = 10    

// Prferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);
```

### Declaring Variables in JavaScript
```bash
1. Before ES6 (2015): Variables were declared only with var, which is function-scoped and global-scoped, causing issues like hoisting and global pollution.

2. ES6 Introduction:let and const were introduced to provide safer alternatives for declaring variables.

3. Scope: let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var.
```

`1. var keyword :` var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

```bash
var a = "Hello Jerishey";
var b = 10;
console.log(a);
console.log(b);
```
`2. let keyword :` let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables.

```bash
let a = 12
let b = "js";
console.log(a);
console.log(b);
```

`3. const keyword :` const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can't be reassigned, though objects can still be mutated.

```bash
const a = 5
let b = "js";
console.log(a);
console.log(b);
```
### Rules for Naming Variables
```bash
1. Variable names must begin with a letter, underscore (_), or dollar sign ($).

2. Subsequent characters can be letters, numbers, underscores, or dollar signs.

3. Variable names are case-sensitive (e.g., age and Age are different variables).

4. Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

Example:
let userName = "Suman";  // Valid
let $price = 100;         // Valid
let _temp = 0;            // Valid
let 123name = "Ajay";    // Invalid
let function = "js"; // Invalid
```
### Scope of Variables in JavaScript
Scope determines where a variable can be accessed or used within a JavaScript program. It helps control the visibility and lifetime of variables in different parts of the code.

```bash
// Declaring a global variable
let x = 10;

function func() {
    
    // Declaring a local variable
    let y = 20;

    // Accessing Local and Global
    // variables
    console.log(x,",", y);
}

func();
```
<b>Global and Local Scope :</b>

`1. Global Scope :` A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.

```bash
// Global Variable accessed from within a function 
const x = 10;

function fun1() {
    console.log(x);
}

fun1();

Explanation: In the program, the variables outside the function and now we can access those variables from anywhere in the JavaScript program.
```

`2. Local Scope :` A local variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function.

```bash
function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outuside this function
    let x = 10;
    console.log(x);
}

fun2();

Explanation: Here, the code defines a function fun2 with a local variable x, which is accessible only inside the function, and prints its value when the function is called.
```
<b>Block and Lexical Scope :</b>

`1. Block and Lexical Scope :` In JavaScript, block scope refers to variables declared with let or const inside a { } block. These variables are accessible only within that block and not outside it.
<br>

<i>
Variables declared with var do not have block scope. A var variable declared inside a function is accessible throughout that entire function, regardless of any blocks (like if statements or for loops) within the function.  If var is declared used outside of any function, it creates a global variable.
</i>

```bash
{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
```

`2. Lexical Scope :` The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

```bash
function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();

Explanation: This code demonstrates lexical scope, where func2 accesses the variable x from func1 and prints “10 20”.
```

`3. Modular Scope :` Module scope refers to variables and functions that are accessible only within a specific JavaScript module. It helps keep code organized and prevents variables from affecting the global scope.

```bash
// math.js (module file)
export const number = 10;

export function add(a, b) {
  return a + b;
}

// main.js (another file)
import { number, add } from "./math.js";

console.log(number);      // 10
console.log(add(5, 3));   // 8

Expalnation: 
- math.js has variables and functions inside its module scope.
- They are only accessible in other files when we use export and import.
```

### Difference between var, let and const keywords in JavaScript
JavaScript provides three ways to declare variables: var, let, and const, but they differ in scope, hoisting behaviour, and re-assignment rules.
<i>

| `var`                                                | `let`                                                 | `const`                                               |
| ---------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| Has **function/global scope**                        | Has **block scope**                                   | Has **block scope**                                   |
| Can be **re-declared and updated**                   | Can be **updated but not re-declared**                | Cannot be **updated or re-declared**                  |
| **Initialization not required**                      | **Initialization not required**                       | **Initialization required**                           |
| Can be accessed before declaration (**undefined**)   | Cannot be accessed before declaration (**TDZ error**) | Cannot be accessed before declaration (**TDZ error**) |
| Hoisted and **initialized with undefined**           | Hoisted but **not initialized (TDZ)**                 | Hoisted but **not initialized (TDZ)**                 |
| Attached to **global object** when declared globally | Not attached to global object                         | Not attached to global object                         |

#### Explanation :

```bash
1. var : Declares variables with function or global scope and allows re-declaration and updates within the same scope.

2. let : Declares variables with block scope, allowing updates but not re-declaration within the same block.

3. const : Declares block-scoped variables that cannot be reassigned after their initial assignment.

Example:
// var example
var x = 10;
var x = 20;   // Re-declaration allowed
x = 30;       // Update allowed
console.log(x); // Output: 30


// let example
let y = 10;
// let y = 20; // Re-declaration NOT allowed
y = 25;       // Update allowed
console.log(y); // Output: 25


// const example
const z = 10;
// z = 20;     // Re-assignment NOT allowed
console.log(z); // Output: 10


// Block scope demonstration
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // Works (var is function/global scoped)
// console.log(b); //  Error (let is block scoped)
// console.log(c); //  Error (const is block scoped)
```
</i>

## 3. Operators
JavaScript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of JavaScript expressions and can manipulate data in various ways.

### There are various operators supported by JavaScript:
<i>

`1. JavaScript Arithmetic Operators :` Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.
```bash
1. Addition (+) Operator : The addition operator takes two numerical operands and gives their numerical sum. It also concatenates two strings or numbers.

2. Subtraction (-) Operator : The subtraction operator gives the difference between two operands in the form of numerical value.

3. Multiplication (*) Operator : The multiplication operator gives the product of operands where one operand is a multiplicand and another is multiplier.

4. Division (/) Operator : The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.

5. Modulus (%) Operator : The modulus operator returns the remainder left over when a dividend is divided by a divisor. The modulus operator is also known as the remainder operator. It takes the sign of the dividend.

6. Exponentiation (**) Operator : The exponentiation operator gives the result of raising the first operand to the power of the second operand. The exponentiation operator is right-associative. 

7. Increment (++) Operator : The increment operator increments (adds one to) its operand and returns a value.

- If used postfix with the operator after the operand (for example, x++), then it increments and returns the value before incrementing.
- If used prefix with the operator before the operand (for example, ++x), then it increments and returns the value after incrementing.

8. Decrement (- -) Operator : The decrement operator decrements (subtracts one from) its operand and returns a value.

- If used postfix, with operator after operand (for example, x--), then it decrements and returns the value before decrementing.
- If used prefix, with the operator before the operand (for example, --x), then it decrements and returns the value after decrementing.
```

<b> Example: </b>
```bash
// 1. Addition (+)
let a = 5, b = 3;
console.log(a + b);   // 8
console.log("Hello " + "World"); // Hello World

// 2. Subtraction (-)
let c = 10, d = 4;
console.log(c - d);   // 6

// 3. Multiplication (*)
let e = 6, f = 2;
console.log(e * f);   // 12

// 4. Division (/)
let g = 15, h = 3;
console.log(g / h);   // 5

// 5. Modulus (%)
let i = 10, j = 3;
console.log(i % j);   // 1

// 6. Exponentiation (**)
let k = 2, l = 3;
console.log(k ** l);  // 8

// 7. Increment (++)
let m = 5;
console.log(m++);     // 5 (postfix)
console.log(m);       // 6

let n = 5;
console.log(++n);     // 6 (prefix)

// 8. Decrement (--)
let p = 5;
console.log(p--);     // 5 (postfix)
console.log(p);       // 4

let q = 5;
console.log(--q);     // 4 (prefix)
```

`2. JavaScript Assignment Operators :` Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication while assigning the value.
```bash
1. Addition Assignment Operator(+=) : The Addition assignment operator adds the value to the right operand to a variable and assigns the result to the variable. Addition or concatenation is possible. In case of concatenation then we use the string as an operand.

2. Subtraction Assignment Operator(-=) : The Substraction Assignment Operator subtracts the value of the right operand from a variable and assigns the result to the variable.

3. Multiplication Assignment Operator(*=) : The Multiplication Assignment operator multiplies a variable by the value of the right operand and assigns the result to the variable.

4. Division Assignment Operator(/=) : The Division Assignment operator divides a variable by the value of the right operand and assigns the result to the variable.

5. Remainder Assignment Operator(%=) : The Remainder Assignment Operator divides a variable by the value of the right operand and assigns the remainder to the variable.

6. Exponentiation Assignment Operator : The Exponentiation Assignment Operator raises the value of a variable to the power of the right operand.

7. Left Shift Assignment Operator(<<=) : This Left Shift Assignment Operator moves the specified amount of bits to the left and assigns the result to the variable.

8. Right Shift Assignment Operator(>>=) : The Right Shift Assignment Operator moves the specified amount of bits to the right and assigns the result to the variable.

9. Bitwise AND Assignment Operator(&=) : The Bitwise AND Assignment Operator uses the binary representation of both operands, does a bitwise AND operation on them, and assigns the result to the variable.

10. Btwise OR Assignment Operator(|=) : The Btwise OR Assignment Operator uses the binary representation of both operands, does a bitwise OR operation on them, and assigns the result to the variable.

11. Bitwise XOR Assignment Operator(^=) : The Bitwise XOR Assignment Operator uses the binary representation of both operands, does a bitwise XOR operation on them, and assigns the result to the variable.

12. Logical AND Assignment Operator(&&=) : The Logical AND Assignment assigns the value of y into x only if x is a truthy value.

13. Logical OR Assignment Operator(||=) : The Logical OR Assignment Operator is used to assign the value of y to x if the value of x is falsy.

14. Nullish coalescing Assignment Operator(??=) : The Nullish coalescing Assignment Operator assigns the value of y to x if the value of x is null.
```

<b> Example: </b>
```bash
// 1. Addition Assignment (+=)
let a = 5;
a += 3;
console.log(a);   // 8

// 2. Subtraction Assignment (-=)
let b = 10;
b -= 4;
console.log(b);   // 6

// 3. Multiplication Assignment (*=)
let c = 6;
c *= 2;
console.log(c);   // 12

// 4. Division Assignment (/=)
let d = 15;
d /= 3;
console.log(d);   // 5

// 5. Remainder Assignment (%=)
let e = 10;
e %= 3;
console.log(e);   // 1

// 6. Exponentiation Assignment (**=)
let f = 2;
f **= 3;
console.log(f);   // 8

// 7. Left Shift Assignment (<<=)
let g = 5;        // binary: 0101
g <<= 1;
console.log(g);   // 10 (1010)

// 8. Right Shift Assignment (>>=)
let h = 8;        // binary: 1000
h >>= 1;
console.log(h);   // 4 (0100)

// 9. Bitwise AND Assignment (&=)
let i = 5;        // 0101
i &= 3;           // 0011
console.log(i);   // 1 (0001)

// 10. Bitwise OR Assignment (|=)
let j = 5;        // 0101
j |= 3;           // 0011
console.log(j);   // 7 (0111)

// 11. Bitwise XOR Assignment (^=)
let k = 5;        // 0101
k ^= 3;           // 0011
console.log(k);   // 6 (0110)

// 12. Logical AND Assignment (&&=)
let l = 5;
l &&= 10;
console.log(l);   // 10

// 13. Logical OR Assignment (||=)
let m = 0;
m ||= 20;
console.log(m);   // 20

// 14. Nullish Coalescing Assignment (??=)
let n = null;
n ??= 30;
console.log(n);   // 30
```

`3. JavaScript Comparison Operators :` Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.
```bash
1. Equality Operator (==) : The Equality operator is used to compare the equality of two operands.

2. Inequality Operator (!=) : The Inequality Operator is used to compare the inequality of two operands.

3. Strict equality Operator (===) : The Strict equality Operator is used to compare the equality of two operands with type.

4. Strict inequality Operator (!==) : The Strict inequality Operator is used to compare the inequality of two operands with type.

5. Greater than Operator (>) : The Greater than Operator is used to check whether the left-side value is greater than the right-side value.

6. Greater than or equal Operator (>=) : The Greater than or equal Operator is used to check whether the left side operand is greater than or equal to the right side operand.

7. Less than Operator (<) : The Less than Operator is used to check whether the left-side value is less than the right-side value.

8. Less than or equal Operator (<=) : The Less than or equal Operator is used to check whether the left side operand value is less than or equal to the right side operand value.
```
<b> Example: </b>
```bash
// 1. Equality (==)
console.log(5 == "5");   // true (value is same, type ignored)

// 2. Inequality (!=)
console.log(5 != "3");   // true

// 3. Strict Equality (===)
console.log(5 === "5");  // false (type is different)

// 4. Strict Inequality (!==)
console.log(5 !== "5");  // true

// 5. Greater than (>)
console.log(10 > 5);     // true

// 6. Greater than or equal (>=)
console.log(5 >= 5);     // true

// 7. Less than (<)
console.log(3 < 7);      // true

// 8. Less than or equal (<=)
console.log(5 <= 10);    // true
```

`4. JavaScript Logical Operators :` Logical operators are mainly used to perform the logical operations that determine the equality or difference between the values.
```bash
1. Logical AND (&&) Operator : The logical AND (&&) operator checks whether both operands are true. If both are true, the result is true. If any one or both operands are false, the result is false.

Example:
// Check if both conditions are true
let age = 20;
let idProof = true;

// Logical AND checks both conditions
if (age >= 18 && idProof) {
  console.log("Allowed"); 
} else {
  console.log("Not Allowed");  
}

Explanation:
- It works with numbers as well, treating 0 as false and any non-zero value as true. It treats false, 0, -0, "", null, undefined, NaN and document.all as false.

- In JavaScript, the && operator doesn't return true or false unless explicitly working with boolean values. Instead, it returns the actual value of the last operand evaluated:

. If the first operand (x) is falsy (like 0, null, undefined, false), it stops and returns that value.
. If the first operand is truthy, it evaluates the second operand and returns its value.

Example:
// Logical AND with integers
let x = 5;
let y = 0;

// 5 (true) && 0 (false)
let res = x && y; 
console.log(res); 

// 5 (true) && 10 (true)
res = x && 10;
console.log(res);
```
<br>

```bash
2. Logical OR (||) Operator : The logical OR (||) operator checks whether at least one of the operands is true. If either operand is true, the result is true. If both operands are false, the result is false.

Example:
// Check if at least one condition is true
let age = 16;
let hasGuardian = true;

// Logical OR checks if either condition is true
if (age >= 18 || hasGuardian) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

Rules for ||:

- If the first operand is truthy, it stops and returns that value.
- If the first operand is falsy, it evaluates the second operand and returns its value.

- Truthy and Falsy Values in JavaScript

. Falsy values: false, 0, null, undefined, NaN, and "" (empty string).
. Truthy values: Anything not falsy.

Example: // Logical OR (||) Operator
let i = 1;
let j = null;
let k = undefined;
let l = 0;

console.log(j || k);
console.log(i || l);

console.log(Boolean(j || k));
console.log(Boolean(i || l));
```
<br>

```bash
3. Logical NOT (!) Operator : The logical NOT (!) operator inverts the boolean value of its operand. If the operand is true, it returns false. If the operand is false, it returns true.

Example:
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Log in!");
} else {
  console.log("Welcome back!");
}

- Logical NOT Works for Non-Boolean Values

. Unlike && and ||, the logical not operator always results in true or false. It consider falsy values (mentioned above with logical or) as false. And all other values as true.

Example:
let x = "Hello";
console.log(!x);
console.log(!!x);  

let y = 20;
console.log(!y);
console.log(!!y);
```
<br>

```bash
4. Nullish Coalescing (??) Operator : The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is either null or undefined. Otherwise, it returns the left-hand operand.

Example:
let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName);

username = "Kartik";
defaultName = "Guest";
console.log(username ?? defaultName);
```
`5.  JavaScript Bitwise Operators :` In JavaScript, a number is stored as a 64-bit floating-point number but bitwise operations are performed on a 32-bit binary number. To perform a bit-operation, JavaScript converts the number into a 32-bit binary number (signed) and performs the operation and converts back the result to a 64-bit number.

<b>1. Bitwise AND Operator ( & ) :</b>  It is a binary operator i.e. accepts two operands. Bit-wise AND (&) returns 1 if both the bits are set ( i.e 1) and 0 in any other case.

```bash
Example:
let x = 5; 
let y = 3; 
console.log(x & y);

Output:
A	B	OUTPUT ( A & B )
0	0	0
0	1	0
1	0	0
1	1	1
```
<b> 2. Bitwise OR Operator ( | ) :</b> It is a binary operator i.e. accepts two operands. Bit-wise OR ( | ) returns 1 if any of the operands is set (i.e. 1) and 0 in any other case.
```bash
Example:
let x = 5; 
let y = 3; 
console.log(x | y);

Output:
A	B	OUTPUT ( A | B )
0	0	0
0	1	1
1	0	1
1	1	1
```

<b>3. Bitwise XOR Operator ( ^ ) : </b>It is a binary operator i.e. accepts two operands. Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.
```bash
Example:
let x = 5; 
let y = 3; 
console.log(x ^ y);

Output:
A	B	OUTPUT ( A ^ B )
0	0	0
0	1	1
1	0	1
1	1	0
```

<b>4. Bitwise NOT Operator ( ~ ) :</b> It is a unary operator i.e. accepts single operands. Bit-wise NOT ( ~ ) flips the bits i.e 0 becomes 1 and 1 becomes 0.
```bash
Example:
console.log(~10); 
console.log(~-10);

Output:
A	OUTPUT ( ~A )
0	1
1	0
```

<b>5. Left Shift Operator ( << ) : </b> It's a binary operator i.e. it accepts two operands. The first operator specifies the number and the second operator specifies the number of bits to shift. Each bit is shifted towards the left and 0 bits are added from the right. The excess bits from the left are discarded.
```bash
Example:
let a = 4; 
console.log(a << 1); 
console.log(a << 4);

Ouput:
A	                    6 ( 00000000000000000000000000000110 )
B	                    1 ( 00000000000000000000000000000001 )
OUTPUT ( A << B )	   12 ( 00000000000000000000000000001100 )
```

<b>6. Right Shift Operator ( >> ) :</b> It's a binary operator i.e. it accepts two operands. The first operand specifies the number and the second operand specifies the number of bits to shift. Each bit is shifted towards the right, the overflowing bits are discarded. This is Sign Propagating as the bits are added from the left depending upon the sign of the number (i.e. 0 if positive and 1 if negative )
```bash
Example:
let a = 4; 
let b = -32 
console.log(a >> 1); 
console.log(b >> 4);

Output:
A	                    6 ( 00000000000000000000000000000110 )
B	                    1 ( 00000000000000000000000000000001 )
OUTPUT ( A >> B )	    3 ( 00000000000000000000000000000011 )
```

<b> 7. Zero Fill Right Shift Operator ( >>> ) : </b> It's a binary operator i.e. it accepts two operands. The first operand specifies the number and the second operand specifies the number of bits to shift. Each bit is shifted towards the right, the overflowing bits are discarded. 0 bit is added from the left so its zero fill right shift.
```bash
Example:
let a = 4; 
let b = -1 
console.log(a >>> 1); 
console.log(b >>> 4);

Output:
A	                    6 ( 00000000000000000000000000000110 )
B	                    1 ( 00000000000000000000000000000001 )
OUTPUT ( A >>> B )	    3 ( 00000000000000000000000000000011 )
```

`6. JavaScript Ternary Operator :` The Ternary Operator in JavaScript is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false. It simplifies decision-making in code, making it more concise and readable.
```bash
Syntax:
condition ? trueExpression : falseExpression

- Condition: A condition that evaluates to true or false.
- expressionIfTrue: The value or expression is returned if the condition is true.
- expressionIfFalse: The value or expression returned if the condition is false.

Example:
let hour = 15;
let message = (hour < 12) ? 'Good morning' : 'Good afternoon';

console.log(message);

Explanation:
- The ternary operator checks if the hour is less than 12.
- If the condition is true, it assigns 'Good morning' to message.
- Otherwise, it assigns 'Good afternoon' to message.
```

`7. JavaScript Unary Operators :` JavaScript Unary Operators work on a single operand and perform various operations, like incrementing/decrementing, evaluating data type, negation of a value, etc.

<b>1. Unary Plus (+) Operator : </b> The unary plus (+) converts an operand into a number, if possible. It is commonly used to ensure numerical operations on variables that may contain numeric strings. If the operand is a string that represents a valid number, it will be converted to a number. Otherwise, it will evaluate to NaN (Not-a-Number).
```bash
Example:
let s1 = "12";

// Using unary plus to convert string to number
let x = +s1;
console.log(x);

// Here we are using typeof operator
console.log(typeof (x))

// "Sum" cannot be converted to a number
let s2 = +"Sum";
console.log(s2);

Output:
12
number
NaN
```

<b> 2. Unary Minus (-) Operator : </b> The Unary Negation (-) operator is used to convert its operand to a negative number if it isn’t already a negative number.
```bash
let s1 = "12";

// Unary negation, negates the
// value of number
let x = -s1;

console.log(x);

// Unary negation, tries to convert
// 'Eng' to a number
let s2 = -"Eng";

console.log(s2);

Output:
-12
NaN
```

<b>3. Unary Increment (++) Operator :</b> The unary increment operator (++) adds 1 to its operand's value and evaluates to the updated value. It can be used as a postfix or prefix operator.

```bash
1. Postfix : In postfix, the current value of the variable is used in the expression, and then the variable's value is incremented by 1.

2. Prefix : In prefix, the variable's value is first incremented by 1, and then the updated value is used in the expression.

Example:
// Case 1: Postfix
let x = 12;
let y = x++;
console.log(x);
console.log(y);

// Case 2: Preifix
x = 10;
y = ++x;
console.log(x);
console.log(y);

Output:
13
12
11
11
```

<b>4. Unary Decrement (--) Operator : </b> The unary decrement operator (--) subtracts 1 from its operand's value and evaluates it to the updated value, and we can use it as a postfix or prefix operator.

```bash
1. Postfix: In postfix form, the current value of the variable is used in the expression, and then the variable's value is decremented by 1.

2. Prefix: In prefix form, the variable's value is first decremented by 1, and then the updated value is used in the expression.

Example:
let x = 8;
let y = x--;
console.log(x);
console.log(y);

x = 15;
y = --x;
console.log(x);
console.log(y);

Output:
7
8
14
14
```
<b>5. typeof Operator : </b> The JavaScript typeof operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable.
```bash
Example:
let x = 18;
let s = "JavaScript";
let isTrue = true;
let obj = { name: "Aman", age: 21 };
let undefinedVar;

console.log(typeof x);
console.log(typeof s);
console.log(typeof isTrue);
console.log(typeof obj);
console.log(typeof undefinedVar);

Output:
number
string
boolean
object
undefined
```
<b>6. delete Operator : </b> The delete operator in JavaScript removes a property from an object. If no other references exist, the property's memory is automatically released.
```bash
Example:
let person = {
    name: "Ankit",
    age: 21,
    city: "Noida"
};

console.log(person);

delete person.age;

console.log(person);

Output:
{ name: 'Ankit', age: 21, city: 'Noida' }
{ name: 'Ankit', city: 'Noida' }
```
<b>7. void Operator : </b> The void operator evaluates the given expression and then returns undefined.
```bash
Example:
function myFunction() {
    return void 0;
}
console.log(myFunction());

Output:
undefined
```
`8. JavaScript in and instanceof operators :` In JavaScript, the in and instanceof operators are used to check relationships within objects and classes.

- The in operator checks whether a property exists in an object or an index exists in an array.
- The instanceof operator checks whether an object is an instance of a specific class or constructor.

Both operators return a Boolean value (true or false) based on the result of the check.

<b> 1. JavaScript in Operator :</b> JavaScript in operator is an inbuilt operator which is used to check whether a particular property exists in an object or not. It returns a boolean value true if the specified property is in an object, otherwise, it returns false.
```bash
Example:
const Data = {
    name: "Rahul",
    age: 21,
    city: "Noida"
};

// true ("name" property exists in the object)
console.log("name" in Data);

// false ("gender" property doesn't exist in the object)
console.log("address" in Data);

Output:
true
false
```

<b> 2. JavaScript instanceof Operator :</b> The instanceof operator in JavaScript is used to check the type of an object at run time. It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 
```bash
Syntax:
        let name = objectName instanceof objectType

Parameters:
- objectName: States the name of the Object.
- Return Value: This method returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 

Example:
let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);

Output:
true
true
false
false
```
</i>

## 4. Type Conversion and Type Coercion in JavaScript
Data types in JavaScript are flexible due to which the type of the variables can be changed when the program runs. Type Conversion and Type Coercion are the two ways through which we can change the data type of the variables from one type to the other.

### Type Conversion :
Type Conversion is the process in JavaScript in which the data type of the variables is converted from one type to another type manually. This is also known as explicit type casting.

- Performed manually by the programmer.
- Uses built-in JavaScript methods like Number(), String(), and Boolean().
- Ensures control over data types in code.

<b> Performing type conversion : </b>

#### 1. String to Number : We can convert a string into numbers using the Number() function, parseInt(), and parseFloat() methods.

`1. Number() Constructor :` The JavaScript Number() constructor is used to create a Number object. When used as a regular function, it converts different data types into numbers if possible.

- Creates a Number object when used with the new keyword.
- Performs type conversion to a number when called as a function.
- Returns NaN if the value cannot be converted to a valid number.
```bash
Syntax :
            Number(object)

Parameters :
- object: This parameter holds the objects that will be converted to any type of javascript variable to number type. 
- Return Values: The number() constructor returns the number format for any type of javascript variable.

Example:
// Using Number() as a constructor
let numObj = new Number(25);
console.log(numObj);        // Number {25}

// Using Number() as a function (type conversion)
let a = Number("123");
let b = Number(true);
let c = Number("hello");

console.log(a);  
console.log(b);  
console.log(c);
```
`2. parseInt() Method :` The parseInt() method parses a value by converting it to a string and returns the first integer found. It also accepts an optional radix parameter that specifies the base of the numeral system.

- Converts a string into an integer value.
- Supports different number systems using the radix parameter.
- Stops parsing when a non-numeric character is encountered.

```bash
Syntax :
        parseInt(Value, radix);

Parameters :
- Value: This parameter contains a string that is converted to an integer.
- radix: This parameter represents the radix or base to be used and it is 
optional.

Return value :

- It returns a number and if the first character can't be converted to a number then the function returns NaN.
- It returns a number parsed up to that point where it encounters a character that is not a number in the specified radix(base). 

Example:
// Basic string to integer conversion
console.log(parseInt("123"));

// Stops at non-numeric character
console.log(parseInt("45px"));       

// Using radix parameter (base 2)
console.log(parseInt("1010", 2));    

// Invalid conversion
console.log(parseInt("abc"));
```

`3. parseFloat() Method :` JavaScript parseFloat() Method is used to accept the string and convert it into a floating-point number. If the string does not contain a numeral value or If the first character of the string is not a Number then it returns NaN i.e, not a number. It actually returns a floating-point number parsed up to that point where it encounters a character that is not a Number.

```bash
Syntax:

        parseFloat(Value)

Parameters :
- value: This parameter obtains a string that is converted to a floating-point number.
- Return value: It returns a floating-point Number and if the first character of a string cannot be converted to a number then the function returns NaN i.e, not a number.

Example:
let v2 = parseFloat("3.14");

console.log('Using parseFloat("3.14") = ' + v2);
```

#### 2. Number to String : We can convert a number into a string using String() function or we can concatenate it with an empty string("").

```bash
String() Method :  The String() method in JavaScript is a built-in function that converts any given value to its string representation. Whether the value is a number, boolean, object, or even null or undefined, the String() method ensures that the value is returned as a string. It does not change the original value but provides a string version of it, which can be useful when concatenating or displaying data.

Syntax :
        String(value)

Parameter:
- value: The value you want to convert to a string. This can be any JavaScript data type such as a number, boolean, array, object, null, or undefined.
- Return Type: It returns a string as a result

Example:
let n = 123;
let s = String(n);
console.log(s);
console.log(typeof s);

Output:
123
string
```

<b> Converting Different Data Types to Strings : </b>
```bash
1. Converting a Boolean to a String:

Example:
let bool = true;
let strBool = String(bool);
console.log(strBool);

Output:
true

2. Converting an Array to a String:

Example:
let a = [1, 2, 3];
let strArr = String(a);
console.log(strArr);

Output:
1,2,3

3. Converting an Object to a String:

Example:
let obj = { name: "Alice", age: 25 };
let strObj = String(obj);
console.log(strObj);

Output:
[object Object]

4. Converting null and undefined to Strings:

Example:
let nullVal = null;
let undefVal = undefined;
console.log(String(nullVal));
console.log(String(undefVal));

Output:
null
undefined
```

### Type Coercion :
Type coercion is the automatic conversion of one data type to another by JavaScript during operations. This is also known as implicit type casting.

- Automatic Conversion: When required, the JavaScript automatically converts required data types.
- Works with Three Types: String, Number, and Boolean coercion.
- Can Lead to Unexpected Results: If they are not handled properly, they may cause unintended bugs.
- Implicitly Occurs: Automatically converts the type of the value from one to another.

<b> Examples of Type Coercion : </b>

`1. String + Number :` JavaScript will automatically or implicitly convert the number to a string if there is the string present in the arithmetic operation.
```bash
let n = 5;
let s = "5";
let res = n + s;  // JavaScript converts num to string
console.log(res); 
console.log(typeof(res))

- It occurs when the string is combined with the non-string using (+). JavaScript converts numbers and booleans into strings before concatenation.
```

`2. Boolean + Number :` JavaScript converts the boolean value into a number, true becomes 1 and false becomes 0, when we perform the arithmetic operations.
```bash
let bool = true;
let n = 10;
let res = bool + n;  // JavaScript converts boolean to number
console.log(res);

- JavaScript treats the true value as '1' and the false value as '0'.
```

`3. Comparison of Different Types :` JavaScript convert the two value of data type into the common type when we compare their values.
```bash
let s = "10";
let n = 10;
console.log(s == n);  // true, JavaScript converts str to number
```

`4. Boolean Context :` Javascript converts non-boolean value into the boolean value when the value is in the if statement.
```bash
let s = "";
if (s) {
    console.log("This won't print");  // Empty string is falsy
} else {
    console.log("This will print");  // Empty string is coerced to false
}
```
<b> Common Issues of Type Coercion : </b>

`1. Comparing Different Data Types :` Comparison Operator(= =), allows coercion due to which the unexpected conversions occur. To avoid this, we should use the strict equality(= = =) operator.
```bash
console.log(0 == "0"); 
console.log(0 == false); 
console.log(" " + 0 == 0);

Output:
true
true
true
```
`2. Operations on null and undefined :` Null and undefined behave unexpectedly.
```bash
console.log(null == undefined); 
console.log(null === undefined); 
console.log(null + 1);

Output:
utput
true
false
1
```
`3. NaN Comparisons :` NaN is not equal to itself, so checking with isNaN() is the best way to detect it.
```bash
console.log(NaN == NaN); 
console.log(isNaN(NaN));

Output:
false
true
```

<b> To Avoid Type Coercion Issues :</b>

```bash
1. Use === Instead of == : When we use strict equality, instead of the comparison operator, it prevents unnecessary types of coercion.
- === ensures no implicit type conversion occurs and both values must be of the same type.

2. Use Explicit Conversion : Explicit conversion converts the value manually due to which there are fewer chances of errors in the code.
- This ensures that you're working with the correct type, reducing the chance of errors during operations.

3. Avoid False Value Confusion : Always check for null, undefined, or empty strings explicitly.
- This ensures that only non-null and defined values are considered valid.

4. Handle NaN Properly : Use isNaN() to check if a value is NaN instead of comparing it directly.
- This ensures you're correctly detecting NaN and handling it appropriately.
```

## 5. JavaScript Control Flow Statements 
Control flow statements in JavaScript control the order in which code is executed. These statements allow you to make decisions, repeat tasks, and jump between parts of a program based on specific conditions.

### `1. if Statement :` 
It is a conditional statement that determines whether a specific action or block of code will run based on a condition. If the condition is true, the code executes; if false, it does not.
```bash
Syntax:
if (condition) {
    // Code to be executed if the condition is true
}

Example:
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

Explanation:
- Checks if age is greater than or equal to 18.
- Logs "You are an adult." if the condition is true.
```
### `2. if-else statement :` 
The if-else statement allows you to execute one block of code if the condition is true and another block if the condition is false. It's a way to handle two possible outcomes based on a condition.
```bash
Syntax:
if (condition)
{
    // Executes this block if
    // condition is true
}
else
{
    // Executes this block if
    // condition is false
}

Example:
// JavaScript program to illustrate If-else statement
let i = 10;

if (i < 15)
    console.log("i is less than 15");
else
    console.log("I am Not in if");
```

### `3. nested-if statement :` 
JavaScript lets you put an if statement inside another if statement. This is called a nested if, where one if or else is inside another.
```bash
Syntax:
if (condition1) 
{
   // Executes when condition1 is true
   if (condition2) 
   {
      // Executes when condition2 is true
   }
}

Example:
// JavaScript program to illustrate nested-if statement
let i = 10;

if (i == 10) {  // First if statement
    if (i < 15) {
        console.log("i is smaller than 15");
        // Nested - if statement
        // Will only be executed if statement above
        // it is true
        if (i < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}
```

### `4. if-else-if statement :` 
The if-else-if ladder is used to check multiple conditions in sequence. Once a true condition is found, its block executes, and the rest are skipped.
```bash
Syntax:
if (condition)
    statement;
else if (condition)
    statement;
.
.
else
    statement;

Example:
// JavaScript program to illustrate nested-if statement
let i = 20;
if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20");
else
    console.log("i is not present");
```

### `5. switch Statement :` 
The switch statement evaluates an expression and executes code based on matching cases. It’s an efficient alternative to multiple if-else statements, improving readability when handling many conditions.
```bash
Syntax:
switch (expression) {
    case value1:
        // Code block 1
        break;
    case value2:
        // Code block 2
        break;
    // more cases
    default:
        // Default code block
}

Explanation:
- Evaluation: The expression is evaluated once.
- Comparison: The value of the expression is compared against each case.
- Execution: The block under the matching case runs. If no match, the default block executes (if present).
- Break: Stops further execution within the switch block.
- Default: Runs if no cases match. It’s optional but provides a fallback option.
```
<b> Example: </b>
```bash
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

Explanation:
- Day is set to 3.
- The switch statement evaluates day.
- Since day is 3, the case 3 the block is executed, assigning "Wednesday" to dayName.
- The break statement ends the switch statement, preventing execution from continuing into other cases.
```

### `6. Break Keyword :` 
The break keyword is used to terminate the execution of a loop or a switch statement. Once a break is encountered, the program will exit the current block, and no further code within the block will be executed.
```bash
let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log("Start of the week!");
        break;
    default:
        console.log("Invalid day.");
}

Explanation:
- Since day is set to 'Monday', the first case is matched, and "Start of the week!" is logged.
- The break statement then stops further execution, so the default case is not executed.
```

### `7. Default Keyword :` 
The default keyword in a switch statement is used as a fallback option when none of the case labels match the evaluated value. It functions similarly to an else in an if-else chain, ensuring that a default action is executed when no specific conditions are met.

- Fallback Action: If no case matches, the code within the default block is executed, preventing unexpected behavior.
- Optional: The default case is optional and can be omitted if not needed.
- Position: The position of the default case in a switch statement doesn't affect its behavior. It only runs if no previous case matches, regardless of where it’s placed.

```bash
let day = 'Holiday';
let message;

switch (day) {
    case 'Monday':
        message = "Start of the week!";
        break;
    case 'Tuesday':
        message = "Second day of the week.";
        break;
    default:  
        message = "Day not recognized.";  // Fallback action (if no match)
        break;
    case 'Friday':
        message = "End of the workweek!";
        break;
}

console.log(message);

Example:
- Switch: It checks day but doesn’t match any cases.
- Fallback Action: The default case runs, setting message to "Day not recognized.".
- Position of Default: The default case is placed before 'Friday', but its position doesn't affect its behavior; it only runs when no other case matches.
```
### `8. Difference Between if-Else and Switch Statement`
| Feature           | if-else                                        | switch                                            |
| ----------------- | ---------------------------------------------- | ------------------------------------------------- |
| Purpose           | Used for complex conditions and ranges.        | Used for exact matches of a single value.         |
| Performance       | Slower performance with many conditions.       | Faster performance with multiple values to check. |
| Flexibility       | More flexible for complex scenarios.           | Less flexible, limited to specific conditions.    |
| Flow Control      | No fall-through; moves to the next else block. | Can have fall-through if `break` is omitted.      |
| Default Condition | Uses `else` for the default condition.         | Has a `default` case to handle unmatched values.  |


## 6. JavaScript Looping Statements
Loops in JavaScript allow a block of code to run multiple times as long as a given condition is satisfied. They help reduce repetition and make programs more efficient and organized.

- Loops continue running until the condition becomes false.
- They are useful for iterating over arrays, strings, and ranges of values.

### `1. For Loop :` 
JavaScript for loop is a control flow statement that allows code to be executed repeatedly based on a condition. It consists of three parts: initialization, condition, and increment/decrement.

```bash
Syntax:
for (initialization; condition; increment/decrement) {
    // code here
}

Explanation:
1. Initialization → Runs once at the beginning.
2. Condition → Checks whether the loop should continue.
3. Increment/Decrement → Updates the loop variable after each iteration.

Example:
// for loop begins when x=2
// and runs till x <= 4
for (let x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}
```
### `2. While Loop :` 
The while loop executes a block of code as long as a specified condition is true. In JavaScript, this loop evaluates the condition before each iteration and continues running as long as the condition remains true.

```bash
Syntax:
while (condition) {     
// Code block to be executed 
}

Example:
let arr = [10, 20, 30, 40];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

Output:
10
20
30
40
```

### `3. do...while Loop :`
A do...while loop in JavaScript is used to execute a block of code repeatedly while a condition is true. In this loop, the code runs first and the condition is checked afterward. Therefore, the loop executes at least once even if the condition is false.
```bash
Syntax:
do {
    // code here
} while (condition);

Example:
let x = 1;

do {
    console.log("Value of x: " + x);
    x++;
} while (x <= 3);

Explanation:
- let x = 1; → Initializes the variable x with value 1.
- do { ... } → The code inside the block runs first.
- console.log("Value of x: " + x); → Prints the current value of x.
- x++; → Increases the value of x by 1.
- while (x <= 3); → Checks the condition. The loop continues while x is less than or equal to 3.
```
#### `Difference Between do...While and while loop :`
| Feature            | do...while Loop                                           | while Loop                                           |
| ------------------ | --------------------------------------------------------- | ---------------------------------------------------- |
| Control Type       | It is an exit-controlled loop.                            | It is an entry-controlled loop.                      |
| Condition Check    | Condition is checked after executing the loop body.       | Condition is checked before executing the loop body. |
| Minimum Iterations | Executes at least one time irrespective of the condition. | May execute zero times depending on the condition.   |
| Code Control       | The block of code is controlled at the end.               | The block of code is controlled at the beginning.    |
| Syntax             | `do { } while(condition);`                                | `while(condition) { }`                               |
| Semicolon          | Ends with a semicolon `;`                                 | No semicolon after condition                         |


## 7. Scope of Variables in JavaScript
Scope in JavaScript defines where a variable can be accessed or used within a program. It controls the visibility and lifetime of variables across different parts of the code.
```bash
1. Determines the accessibility of variables in different parts of the program.
2. Helps prevent conflicts by restricting variable usage to specific areas.
3. Improves code organization and readability.
4. Defines the lifetime of variables during program execution.
5. Main types include global scope, local (function) scope, and block scope.
```

### There are several types of scopes of a variable.
`1. Global and Local Scope :`
```bash
1. Global Scope : A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.

Example:
// Global Variable accessed from within a function 
const x = 10;

function fun1() {
    console.log(x);
}

fun1();

- The variable x is declared in the global scope and can be accessed inside functions. However, global scope behavior may vary depending on the execution environment (e.g., browser vs module).

2. Local Scope : A local variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function. 
Functions are objects and can be assigned to variables.

Example:
function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outside this function
    let x = 10;
    console.log(x);
}

fun2();

- Here, the code defines a function fun2 with a local variable x, which is accessible only inside the function, and prints its value when the function is called.
```

`2. Block and Lexical Scope :`
```bash
1. Block Scope : Block scope in JavaScript means variables declared with let or const inside { } are accessible only within that block, and accessing them before declaration (TDZ) causes a ReferenceError.

Example:
{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);

- Variables declared with var do not have block scope. A var variable declared inside a function is accessible throughout that entire function,
regardless of any blocks (like if statements or for loops) within the function.  If var is declared used outside of any function, it creates a global variable.

2. Lexical Scope : The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

Example:
function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();

- This code demonstrates lexical scope, where func2 accesses the variable x from func1 and prints “10 20”.
```

`3. Modular Scope :` Module scope refers to variables and functions that are accessible only within a specific JavaScript module. It helps keep code organized and prevents variables from affecting the global scope.
```bash
Example:
// math.js (module file)
export const number = 10;

export function add(a, b) {
  return a + b;
}

// main.js (another file)
import { number, add } from "./math.js";

console.log(number);      // 10
console.log(add(5, 3));   // 8

- math.js has variables and functions inside its module scope.
- They are only accessible in other files when we use export and import.
```

## 8. Functions in JavaScript
Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

`1. Understanding Functions :` In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.
```bash
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument

- Parameter: name (placeholder inside the function).
- Argument: "Alice" (real value given at call time).
```

`2. Default Parameters :`
- Default parameters are used when no argument is provided during the function call.
- If no value is passed, the function automatically uses the default value.
```bash
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");
```

`3. Return Statement :`
- The return statement is used to send a result back from a function.
- When return executes, the function stops running at that point.
- The returned value can be stored in a variable or used directly.
```bash
function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result);
```

### Type of Functions
`1. Named Function :` A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
```bash
function greet() {
  return "Hello!";
}
console.log(greet());
```

`2. Anonymous Function :` A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.
```bash
const greet = function() {
  return "Hi there!";
};
console.log(greet());
```

`3. Function Expression :` When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable.
```bash
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));
```

`4. Arrow Function (ES6) :` A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
```bash
const square = n => n * n;
console.log(square(4));
```

`5. Immediately Invoked Function Expression (IIFE) :` Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
```bash
Syntax:

(function (){ 
// Function Logic Here. 
})();

Example:
(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
})();

Explanation:
- The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.
- IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
```
`Use Cases Of IIFE :`
```bash
1. Avoid polluting the global namespace.
2. To create closures in JavaScript.
3. IIFE is used to create private and  public variables and methods.
4. It is used to execute the async and await function.
5. It is used to work with require function.
```

`6. Callback Functions :` A callback function is a function that is passed as an argument to another function and executed later.

- A function can accept another function as a parameter.
- Callbacks allow one function to call another at a later time.
- A callback function can execute after another function has finished.
```bash
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Nitish", sayBye);

- Here, sayBye() is passed as a callback to greet(), which executes after the greeting.
```

`Use of Callbacks in JavaScript`
```bash
1. Asynchronous Operations → Used to run code after tasks like API calls or timers are completed.
2. Event Handling → Used to respond to events such as button clicks or key presses.
3. Array Methods → Used with functions like map(), filter(), and forEach().
4. Code Reusability → Allows functions to be reused with different actions.
5. Sequential Execution → Helps execute tasks in a specific order.
6. Error Handling → Used to handle errors in asynchronous operations.
```

`Problems with Callbacks`
```bash
1. Callback Hell → Too many nested callbacks make the code difficult to read and manage.
2. Hard to Debug → Finding and fixing errors becomes complicated.
3. Poor Readability → Deeply nested code reduces code clarity.
4. Error Handling Issues → Managing errors across multiple callbacks is difficult.
5. Complex Maintenance → Large callback-based programs are harder to update and maintain.
6. Inversion of Control → Control of execution is passed to another function, which may cause unexpected behavior.
```

`7. Constructor Function :` A special type of function used to create multiple objects with the same structure. It’s called with the new keyword.
```bash
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Nitish", 22);
console.log(user.name);
```

`8. Async Function :` Functions that handle asynchronous tasks. Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.
```bash
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);
```

`9. Generator Function :` Declared with an asterisk *, these functions can pause execution using yield and resume later. Useful for lazy loading values or handling iterators.
```bash
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);
```

`10. Recursive Function :` A function that calls itself until a condition is met. Very useful for problems like factorial, Fibonacci, or tree traversals.
```bash
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
```

`11. Higher-Order Function :` A function that either takes another function as a parameter or returns another function. These are common in JavaScript (e.g., map, filter, reduce).
```bash
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));
```

`12. Nested Functions :` A nested function (also known as an inner function) is a function that is declared within another function (known as the outer function). The inner function has access to the variables of its outer function, forming a lexical scope chain.
```bash
function outer() {
    console.log('This is the outer function')
    function inner() {
        console.log("This is the inner function.")
    }
    inner();
}
outer();

Output:
This is the outer function
This is the inner function.

Explanation:
- The outer() function is defined to hold the main logic of this example.
- Inside outer(), there’s a nested function inner(), which can perform actions like logging messages.
- When outer() is called, it also calls inner(), so both functions run in sequence.
- Calling outer() first logs "This is the outer function" and then calls inner(), logging "This is the inner function."
- The inner() function is nested inside outer() and can only be called from within outer(), showing how nesting works with scope.
```

`How nested functions work in JavaScript`
```bash
1. A nested function is a function defined inside another function in JavaScript.
2. The inner function has access to the variables and parameters of the outer function.
3. The inner function can be called only from within the outer function.
4. Nested functions allow for better organization and code reuse.
5. They enable closures, where the inner function can "remember" and access variables from the outer function even after the outer function has finished executing.
```

`Benefits of Using Nested Functions`
```bash
1. Encapsulation: Inner functions help in structuring the code by keeping helper functions private and preventing unwanted access.
2. Code Organization: They help break down large functions into smaller, manageable units.
3. Access to Outer Variables: Inner functions can access the variables and parameters of their outer function due to lexical scoping.
4. Avoiding Global Pollution: Since inner functions are not accessible outside their outer function, they do not interfere with the global scope.
```

`Limitations of Nested Functions`
```bash
1. Memory Usage: Since inner functions maintain references to outer function variables, they may consume memory even after the outer function execution completes.
2. Performance Impact: Defining a function inside another function means a new function is created every time the outer function is called, which can lead to performance inefficiencies in high-frequency executions.
2. Code Complexity: Excessive nesting can make the code harder to read and debug.
```

`13. Pure Functions :` Pure functions return the same output for the same inputs and do not produce side effects. They do not modify state outside their scope, such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations.
```bash
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));
```

`14. Rest Parameter Function :` Uses ... to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.
```bash
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
```

## 9. Hoisting
Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.
```bash
1. Hoisting applies to variable and function declarations.
2. Initializations are not hoisted, they are only declarations.
3. 'var' variables are hoisted with undefined, while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.
```

### `Temporal Dead Zone (TDZ)`
The Temporal Dead Zone (TDZ) is the period in JavaScript between entering a scope and the initialization of variables declared with let or const, during which accessing them results in an error.
```bash
1. Variables declared with let and const are hoisted but not initialized.
2. Accessing these variables before their declaration throws a ReferenceError.
3. Initialization occurs only when execution reaches the declaration line.
4. TDZ exists only within the scope where the variable is declared.
5. It applies only to let and const, not to var (which is initialized as undefined).
```
<b>`Example:`</b>
```bash
hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};

- The variable hello is hoisted, but it is not initialized until the assignment line is reached since it holds a function expression. Thus, calling hello() before its initialization throws a TypeError.
```

### `Types of Hoisting`
Hoisting in JavaScript refers to moving declarations to the top of their scope before code execution.

`1. Variable Hoisting with var :` When you use var to declare a variable, the declaration is hoisted to the top, but its value is not assigned until the code execution reaches the variable’s initialization. This results in the variable being assigned undefined during the hoisting phase.
```bash
console.log(a); // undefined
var a = 5;

- The declaration var a is hoisted to the top, but a is initialized with undefined. Hence, logging results in undefined.
```

`2. Variable Hoisting with let and const :` Unlike var, let and const are also hoisted, but they remain in a Temporal Dead Zone (TDZ) from the start of the block until their declaration is encountered. Accessing them before their declaration will throw a ReferenceError.
```bash
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

- The variable is hoisted, but it’s in the Temporal Dead Zone (TDZ) until the declaration line is executed.
```

`3. Function Declaration Hoisting :` Function declarations are hoisted with both their name and the function body. This means the function can be called before its definition in the code.
```bash
greet(); // "Hello, Mahima!"
function greet() {
    console.log("Hello, Mahima!");
}

- The function declaration is hoisted, and the entire function definition is available before its position in the code.
```

`4. Function Expression Hoisting :` Function expressions are treated like variable declarations. The variable itself is hoisted, but the function expression is not assigned until the line of execution. This means calling the function before its assignment will result in an error.
```bash
hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};

- The variable hello is hoisted, but since it's a function expression, it’s not initialized until the line is executed.
```

`5. Hoisting with let and const in Functions :` Variables declared with let and const inside a function are hoisted to the top of the function's scope, but they remain in the TDZ. This prevents access to them before they are initialized.
```bash
function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
}
test();

- The variable x is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ.
```

`6. Hoisting with Classes :` Classes are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.
```bash
const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Nitish Kumar";
    }
}

- Although the class MyClass is hoisted, it cannot be accessed before its declaration due to the TDZ, which is why the code throws a ReferenceError.
```

`7. Re-declaring Variables with var :` With var, you can redeclare a variable within the same scope. This is a unique behavior compared to let and const.
```bash
var a = 10;
var a = 20; // No error
console.log(a); // 20

- With var, the second declaration overwrites the first one without throwing an error.
```

`8. Accessing Variables Declared Later in Loops :` When using var in loops, the loop variable is hoisted to the function or global scope, which can cause unexpected behavior. If you use let, the variable is block-scoped and behaves as expected.
```bash
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}

- The var i is hoisted, and all setTimeout functions share the same i reference, which results in the value 3 after the loop finishes.
```

`9. Using Hoisted Functions with Parameters :` Functions can be hoisted with their parameters, but any parameters passed to the function are still determined by the invocation, not by the hoisting.
```bash
test(10); // 10
function test(num) {
    console.log(num);
}

- The entire function, including its parameters, is hoisted and available for use before the function's declaration in the code.
```

`10. Hoisting in Nested Functions :` Hoisting works within nested functions as well. Variables declared with var inside a function are hoisted to the top of that function scope.
```bash
function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();

- Both a and b are hoisted within their respective scopes (outer and inner functions), but their values are not set until the code execution reaches the initialization lines.
```

## 10. Closure
A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

- Retains access to outer function variables.
- Preserves the lexical scope.
- Allows data encapsulation and privacy.
- Commonly used in callbacks and asynchronous code.
```bash
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();

- The function inner() forms a closure by retaining access to outerVar, which is a variable in the scope of outer().
- Even though outer() has completed execution, inner() still has access to outerVar due to the closure.
```

`1. Lexical Scoping :` Closures are rely on lexical scoping, which means a function’s scope is determined by where it is defined, not where it is executed, allowing inner functions to access variables from their outer function.
- Scope is fixed at function definition time.
- Inner functions can access outer function variables.
- Enables closures to “remember” their environment.

`2. Private Variables :` Closures allow a function to keep variables private and accessible only within that function, which is commonly used in modules to protect data from being accessed or modified by other parts of the program.
- Helps achieve data encapsulation
- Creates private variables
- Prevents accidental data modification
- Commonly used in module patterns
```bash
function counter() {
    
    // Private variable
    let count = 0; 
    
    return function () {
        
        // Access and modify the private variable
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
```

`3. Closures and IIFE :` IIFEs (Immediately Invoked Function Expressions) use closures to encapsulate data within a function, keeping it private and preventing access from the outside, which helps create self-contained modules.
- Data is scoped to the IIFE.
- Prevents global namespace pollution.
- Uses closures for data privacy.
- Useful for creating modular code.
```bash
const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter.increment(); 
counter.increment(); 
counter.reset();
```

`4. Closure and setTimeout :` Closures are helpful in asynchronous programming because they preserve access to variables even after a function has finished executing, which is essential for delayed operations like timers or server requests.
- Retains state for delayed execution.
- Works well with callbacks and promises.
- Useful with timers (setTimeout, setInterval).
- Helps manage async data flow.
```bash
function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer ${i}`);
        }, i * 1000);
    }
}
createTimers();
```

`5. Closures with this keyword :` Closures can be confusing with the this keyword because this is determined by how a function is called, not where it is defined, so inside a closure it may not refer to the expected object.
- this is not lexically scoped (except in arrow functions).
- Its value depends on the calling context.
- Closures don’t change how this works.
- Arrow functions inherit this from their surrounding scope.
```bash
function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };

    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}

const G = new Person("Nitish");
G.sayName();
```

`6. Function Currying in JavaScript :` Function currying is a technique that transforms a function with multiple arguments into a sequence of functions that each take one argument at a time, using closures to remember previously passed values.
- Breaks a multi-argument function into unary functions.
- Uses closures to retain earlier arguments.
- Enables partial application of functions.
- Helps create reusable and specialized functions.
```bash
// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = add(2);  // First function call with 2
console.log(addTwo(3));  
console.log(addTwo(4));
```

## 11. Higher Order Functions
A higher-order function is a function that does one of the following:
- Takes another function as an argument.
- Returns another function as its result.
```bash
function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

- fun2 is a higher-order function because it takes another function (action) as an argument.
- It calls the action function twice.
```

`Use cases of higher order functions`

`1. Passing Functions as Arguments`
```bash
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Ajay", sayGoodbye);

Explanation:
1. Function as Argument: greet accepts another function (e.g., sayGoodbye) as a callback, demonstrating the ability to pass functions as arguments.
2. Sequence Control: It first logs a greeting message and then executes the callback, showing how actions can be performed in a specific order.
3. Modularity and Reusability: By separating the greeting and goodbye actions, the pattern allows flexibility and reusability, enabling different callbacks to be passed as needed.
```

`2. Returning Functions from Functions :` Higher-order functions can also return a function. This enables the creation of more dynamic behavior
```bash
function mul(factor) {
    return function(num) {
        return num * factor;
    };
}

const mul2 = mul(2);
console.log(mul2(5));
const mul3 = mul(3);
console.log(mul3(5)); 

Explanation:
1. Function Factory: mulBy returns a new function based on the provided factor, demonstrating the ability to create dynamic, parameterized functions.
2. Closure in Action: The returned function uses the captured factor to perform multiplication, showcasing the power of closures to retain access to external variables.
3. Reusability and Customization: This pattern simplifies creating reusable multipliers (e.g., mul2, mul3), enabling efficient and customizable solutions with minimal effort.
```

`Advanced Techniques with Higher Order Functions`

`1. Function Composition :` Function composition is the process of combining multiple functions to create a new function. The composed function applies multiple operations in sequence.
```bash
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);

Explanation:
- compose combines add and multiply, so the output of multiply is passed as input to add.
- The result of compose(add, mul)(4) is 14 because 4 is first multiplied by 3 and then 2 is added.
```

`2. Currying :` Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

- It converts a function with multiple parameters into a sequence of functions.
- Each function takes a single argument and returns another function until all arguments are received.
- Helps in functional programming by enabling function reusability and composition.
```bash
// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add(5);  // First function call with 5
console.log(addTwo(4));

Explanation:
1. Normal Function: Directly takes two arguments (a and b) and returns their sum.
2. Function Currying: Breaks the add function into two steps. First, it takes a, and then, when calling addTwo(4), it takes b and returns the sum.
```

`How Currying Works in JavaScript? :` Currying function in the JavaScript can be done manually, but it can also be done using the closure. Below it is shown that how currying function works.
```bash
1. Creating the First Function: The first function takes the first argument and gives back a new function to take the next one.
2. Returning a New Function: The returned function takes the next argument and keeps going until all the arguments are given.
3. Returning the Result: Once all the arguments are provided, the final result is calculated and returned.
```

`When to Use Currying in JavaScript? :` In JavaScript, currying function is used in the following cases:
```bash
1. Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
2. Higher-Order Functions: When one function takes the other functions as arguments (eg: map, filter, reduce) in that case we can use the currying function to manage the arguments more effectively.
3. Functional Programming: Where functions are treated as important and focus is on not changing data and combining functions in those cases currying works perfectly.
```

`3. Memoization:` Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
- Expensive Function Calls: Time and memory are the two most important resources in computer applications. As a result, an expensive function call is one that consumes large amounts of these two resources due to extensive calculation during execution.
- Cache: A cache is just a temporary data store that stores data in order to serve future requests for that data more quickly.

```bash
function memoize(func) {
    var cache = {};
    return function (arg) {
        if (arg in cache) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)

Explanation:
- memoize caches the results of slowFunction calls. The second time fast(5) is called, the result is fetched from the cache, avoiding recomputation.
- This optimization improves performance by saving on redundant calculations.
```

## 12. Arrays
In JavaScript, an array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index. The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.
<br>
Arrays can hold any type of data-such as numbers, strings, objects, or even other arrays-making them a flexible and essential part of JavaScript programming.
```bash
Syntax:
let arrayName = [value1, value2, value3];
```

`Features of Arrays`
```bash
1. Stores multiple values
2. Values are ordered
3. Index starts from 0
4. Can store different data types
5. Dynamic in size
```
### `Create Arrays`

`1. Create Array using Literal :` Creating an array using array literal involves using square brackets [] to define and initialize the array.
```bash
// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

Output:
[]
[ 10, 20, 30 ]
```

`2. Create using new Keyword (Constructor) :` The "Array Constructor" refers to a method of creating arrays by invoking the Array constructor function.
```bash
// Creating and Initializing an array with values
let a = new Array(10, 20, 30);

console.log(a);

- Both the above methods do exactly the same. Use the array literal method for efficiency, readability, and speed.
``` 

### `Basic Operations on JavaScript Arrays`

`1. Accessing Elements of an Array :` Any element in the array can be accessed using the index number. The index in the arrays starts with 0.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(a[0]);
console.log(a[1]);

Output:
HTML
CSS
```

`2. Accessing the First Element of an Array :` The array indexing starts from 0, so we can access first element of array using the index number.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Accessing First Array Elements
let fst = a[0];

console.log("First Item: ", fst);

Output:
First Item:  HTML
```

`3. Accessing the Last Element of an Array :` We can access the last array element using [array.length - 1] index number.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Accessing Last Array Elements
let lst = a[a.length - 1];

console.log("Last Item: ", lst);

Output:
Last Item:  JS
```

`4. Modifying the Array Elements :` Elements in an array can be modified by assigning a new value to their corresponding index.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log(a);

a[1]= "Bootstrap";
console.log(a);

Output:
[ 'HTML', 'CSS', 'JS' ]
[ 'HTML', 'Bootstrap', 'JS' ]
```

`5. Adding Elements to the Array :` Elements can be added to the array using methods like push() and unshift().
- The push() method add the element to the end of the array.
- The unshift() method add the element to the starting of the array.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
a.push("Node.js");

// Add Element to the beginning
a.unshift("Web Development");

console.log(a);

Output:
[ 'Web Development', 'HTML', 'CSS', 'JS', 'Node.js' ]
```

`6. Removing Elements from an Array :` To remove the elements from an array we have different methods like pop(), shift(), or splice().
- The pop() method removes an element from the last index of the array.
- The shift() method removes the element from the first index of the array.
- The splice() method removes or replaces the element from the array.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

Output:
Original Array: HTML,CSS,JS
After Removing the last: HTML,CSS
After Removing the First: CSS
After Removing 2 elements starting from index 1: CSS
```

`7. Array Length :` We can get the length of the array using the array length property.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

let len = a.length;

console.log("Array Length: " + len);

Output:
Array Length: 3
```

`8. Increase and Decrease the Array Length :` We can increase and decrease the array length using the JavaScript length property.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)

Output:
After Increasing Length:  [ 'HTML', 'CSS', 'JS', <4 empty items> ]
After Decreasing Length:  [ 'HTML', 'CSS' ]
```

`9. Iterating Through Array Elements :` We can iterate array and access array elements using for loop and forEach loop.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Iterating through for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

Output:
HTML
CSS
JS

Example: Using Array.forEach() loop
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});

Output:
HTML
CSS
JS
```

`10. Array Concatenation :` Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS", "React"];
let b = ["Node.js", "Express.js"];

// Concatenate both arrays
let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);

Output:
Concatenated Array:  [ 'HTML', 'CSS', 'JS', 'React', 'Node.js', 'Express.js' ]
```

`11. Conversion of an Array to String :` We have a built-in method toString() to converts an array to a string.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(a.toString());

Output:
HTML,CSS,JS
```

`12. Check the Type of an Arrays :` The JavaScript typeof operator is used to check the type of an array. It returns "object" for arrays.
```bash
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Check type of array
console.log(typeof a);

Output:
object
```

## 13. Strings 
A JavaScript String is a sequence of characters, typically used to represent text.
- In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.
- Like Java and Python, strings in JavaScript are immutable.

### `Creating String`

`1. Create using Literals :` We can either use a single quote or a double quote to create a string. We can use either of the two, but it is recommended to be consistent with your choice throughout your code.
```bash
// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);
```

`2. Create using Constructor :` The new String() constructor creates a string object instead of a primitive string. It is generally not recommended because it can cause unexpected behavior in comparisons
```bash
let s = new String('abcd');
console.log(s);
```

`3. Template Literals (String Interpolation) :` You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.
```bash
let s1 = 'JavaScript';
let s2 = `You are learning ${s1}`;

console.log(s2);
```

`4. Empty String :` You can create an empty string by assigning either single or double quotes with no characters in between.
```bash
let s1 = '';
let s2 = "";

console.log(s1);
console.log(s2);

- Since the strings are empty, console.log will print two blank lines.
```

`Multiline Strings (ES6 and later) :` You can create a multiline string using backticks (``) with template literals. The backticks allows you to span the string across multiple lines, preserving the line breaks within the string.
```bash
let s = `
    This is a
    multiline
    string`;

console.log(s);
```

### `Basic Operations on JavaScript Strings`

`1. Finding the length of a String :` You can find the length of a string using the length property.
```bash
let s = 'JavaScript';
let len = s.length;

console.log("String Length: " + len);
```

`2. String Concatenation :` You can combine two or more strings using + Operator. 
<br>
But we can also use concat() combines the text of two strings and returns a new combined or joined string.
```bash
Example: For +

let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

console.log("Concatenated String: " + res);
```

`3. Escape Characters :` We can use escape characters in string to add single quotes, dual quotes, and backslash.
```bash
\' - Inserts a single quote
\" - Inserts a double quote 
\\ - Inserts a backslash
```

`4. Find Substring of a String :` 
<br>

`1. substring() :` The substring() method is used to extract a portion of a string. It returns a new string without changing the original one.

- Extracts characters between two given indices.
- The ending index is not included in the result.
- The original string remains unchanged.
```bash
Syntax : string.substring(startIndex, endIndex);

Parameter:
1. StartIndex: Describe the part of the string to be taken as a substring
2. EndIndex: Describe the part of the string to be taken as a substring(optional). 

Return value : It returns a new string that is part of the given string. 

Example:
let s = "Hello, World!";

// Extract substring from index 7 to index 12
let res = s.substring(7, 12);

console.log(res);
```

`2. substr() :` The substr() method in JavaScript extracts a portion of a string, starting from a specified index position and extending for a given number of characters.
```bash
Syntax : str.substr(start, length)

Parameter:
1. start: The index where the extraction begins.
2. length (optional): The number of characters to extract. If omitted, it extracts the rest of the string from the start index.

Return value : Returns a string that is part of the given string. If the length is 0 or a negative value then it returns an empty string. 
If we want to extract the string from the end then use a negative start position.

Example:
// Define a string variable 'str'
let str = "Mind, Power, Soul";

// Use the substr() method to extract a substring f
let part = str.substr(6, 5);

// Output the value of variable
console.log(part);
```

`3. slice() :` The slice() method in JavaScript is used to extract a portion of a string and create a new string without modifying the original string.
```bash
Syntax : string.slice(startingIndex, endingIndex);

Parameters:
1. startingIndex: It is the start position and it is required(The first character is 0).
2. endingIndex: (Optional)It is the end position (up to, but not including). The default is string length.

Return Value : It returns a part or a slice of the given input string.

Example:
// Define a string variable 
let A = 'I am Learning JS';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);
```

<br>

`5. Convert String to Uppercase and Lowercase :` 

`1. toUpperCase() :` The toUpperCase() method is used to convert all letters in a string to uppercase. It helps standardize text for comparison or display.

- Converts all lowercase letters to uppercase.
- Special characters and digits remain unchanged.
- Letters that are already uppercase stay the same.

`2. toLowerCase() :` The JavaScript toLowerCase() method Converts all characters of a string to lowercase and returns a new string without changing the original.

- Used for case-insensitive comparisons
- Helps standardize user input
- Common in text formatting and data validation
- Does not modify the original string
```bash
let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);
console.log(lCase);
```

`6. String Search in JavaScript :` The indexOf() method is used to find the position of a value inside a string. It returns the index where the value first appears.

- Returns the 0-based index of the first occurrence.
- Used to locate a substring inside a string.
- It is case-sensitive, so different letter cases are treated differently.
```bash
Syntax : str.indexOf(searchValue , index);

Parameters:
1. searchValue: The searchValue is the string to be searched in the base string. 
2. index: The index defines the starting index from where the search value will be searched in the base string.

Return value:
1. If the searchValue is found, the method returns the index of its first occurrence.
2. If the searchValue is not found, the method returns -1.

Example:
// Original string
let str = 'Departed Train';

// Finding index of occurrence of 'Train'
let index = str.indexOf('Train');
console.log(index);
```
<br>

`7. String Replace in JavaScript :`

`1. replace() :` JavaScript replace() method is used for manipulating strings. It allows you to search for a specific part of a string, called a substring, and then replace it with another substring.
```bash
Syntax : str.replace(value1, value2);

Parameters:
1. value1: is the regular expression that is to be replaced
2. value2: is a string that will replace the content of the given string. 

Return Values : It returns a new string with replaced items.

Example:
// Define a string variable 'str' 
let str = "Mind, Power, Soul";

// Use the replace() method to replace the substring
let part = str.replace("Power", "Space");

// Output the resulting string after replacement
console.log(part);
```

`2. replaceAll() :` The replaceAll() method in JavaScript is used to replace all occurrences of a specified substring or pattern with a new substring. The replaceAll() method does not change the original string.
```bash
Syntax : const newString = originalString.replaceAll(regexp | substr , newSubstr | function)

Parameters:
1. regexp: It is the regular expression whose matches are replaced with the newSubstr or the value returned by the specified function.

2. substr: It defines the substrings which are to be replaced with newSubstr or the value returned by the specified function.

3. newSubstr: It is the substring that replaces all the matches of the string specified by the substr or the regular expression.

4. function: It is the function that is invoked to replace the matches with the regexp or substr.

Return Value : Returns a String where the search value has been replaced.

Example:
// Define a string variable 'str'
let str = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let part = str.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(part);
```
<br>

`8. Trimming Whitespace from String :`

`1. trim() :` The trim() method is used to remove extra spaces from a string. It helps clean user input by removing unwanted whitespace.

- Removes whitespace from both ends of the string.
- Returns a new trimmed string.
- The original string is not modified.
```bash
let text = "   Hello World   ";

let result = text.trim();

console.log(result);
```

`2. trimStart() :` The trimStart() method in JavaScript is used to remove whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string. 
```bash
Syntax : string.trimStart();

Return Value : It returns the final string that is stripped out of all the white space in the beginning. 
```

`3. trimLeft() :` The trimStart() method has an alias which is the trimLeft() method. It performs exactly the same function as the trimStart() method. 
```bash
Syntax : string.trimLeft();

Return Value : It returns the final string that is stripped out of all the white space in the beginning.
```

`4. trimEnd() :` The trimEnd() method in JavaScript is used to remove white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string. 
```bash
Syntax : string.trimEnd()

Return Value: It returns the final string that is stripped out of all the white space at the end. 
```
<br>

`9. Access Characters from String :` 

`1. The charAt() :` method in JavaScript is used to get a character from a string at a specific position. It helps you access individual characters easily using an index value.

- It takes an index number as an argument and returns the character at that position.
- JavaScript follows zero-based indexing (first character is at index 0).
- If the index is out of range, it returns an empty string.
```bash
Syntax : character = str.charAt(index);

Parameters : The charAt() method accepts a single parameter called index. This index determines which character from the string will be returned.
2. The index must be between 0 and string.length - 1.
3. If no index is provided, it uses 0 by default.
4. By default, it returns the first character of the string.

Return Value : The charAt() method returns a value based on the index you provide. It gives you the character found at that specific position in the string.
2. Returns the character located at the given index.
3. If the index is valid, a single character is returned.
4. If the index is out of range, it returns an empty string ("").

Example:
function func() {
    // Original string
    let str = 'JavaScript is object oriented language';

    // Finding the character at given index
    let value = str.charAt(0);
    let value1 = str.charAt(4);
    console.log(value);
    console.log(value1);
}
func();
```
`2. charCodeAt() :` The JavaScript str.charCodeAt() method returns the Unicode code unit of the character at a given index in a string.

- Index starts from 0 to length - 1.
- Returns a number (Unicode value).
- Accepts an index as an argument.
- Used to get the numeric code of a character.
```bash
Syntax : str.charCodeAt(index)

Parameters : This method takes one parameter called index to identify a character in the string. It uses this index to work with the Unicode value of that character.
1. The method accepts a single parameter: index.
2. The index must be between 0 and string.length - 1.
3. It refers to the position of the character whose Unicode value is used.

Return value : This method returns a numeric value based on the character’s Unicode code. The value depends on the index you provide.
1. Returns the Unicode value (between 0 and 65535) of the character.
2. The value corresponds to the character at the given index.
3. If the index is out of range, it returns NaN.

Example:
// JavaScript to illustrate charCodeAt() method
function func() {
    let str = 'ephemeral';

    // Finding the code of the character at
    // given index
    let value = str.charCodeAt(4);
    console.log(value);
}

func();
```
<br>

`10. String Comparison in JavaScript :` There are some inbuilt methods that can be used to compare strings such as the equality operator and another like localeCompare() method.
```bash
let s1 = "Ajay"
let s2 = new String("Ajay");

console.log(s1 == s2);  // true (type coercion)
console.log(s1 === s2); // false (strict comparison)
console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)
```

`11. Passing JavaScript String as Objects :` We can create a JavaScript string using the new keyword.
```bash
const str = new String("JavaScript");

console.log(str);

- the string created by the new keyword is an object and is not the same as normal strings.
```

`12. JavaScript String split() Method :` The JavaScript split() method is used to break a string into an array of substrings based on a given separator. It helps in processing and manipulating string data more easily.

- The separator can be a character, string, or regular expression.
- It returns an array and does not change the original string.
- An optional limit parameter can be used to control the number of splits.
```bash
Syntax : str.split( separator, limit );

let str = "Hello and Welcome to JavaScript World!";
let words = str.split(" ");
console.log(words);
```

## 14. Objects
An object is a dynamic data structure that stores related data as key-value pairs, where each key uniquely identifies its value.

- The values of properties can be primitives, objects, or functions (known as methods when defined inside an object).
- Objects are mutable and dynamic properties can be added, modified, or deleted at any time.
- Objects allow data grouping and encapsulation, making it easier to manage related information and behaviour together.

### `Creating Objects`

`1. Creation Using Object Literal :` The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.
```bash
let obj = {
    name: "Rajni",
    age: 21,
    job: "Developer"
};
console.log(obj);
```

`2. Creation Using new Object() Constructor :`
```bash
let obj = new Object();
obj.name= "Nitish",
obj.age= 23,
obj.job= "Developer"

console.log(obj);
``` 

### `Basic Operations on JavaScript Objects`

`1. Accessing Object Properties :` You can access an object’s properties using either dot notation or bracket notation
```bash
let obj = { name: "Shivam", age: 23 };

// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);
```

`2. Modifying Object Properties :` Properties in an object can be modified by reassigning their values.
```bash
let obj = { name: "Rakesh", age: 21 };
console.log(obj);

obj.age = 23;
console.log(obj);
```

`3. Adding Properties to an Object :` You can dynamically add new properties to an object using dot or bracket notation.
```bash
let obj = { model: "Tesla" };
obj.color = "Red";

console.log(obj);
```

`4. Removing Properties from an Object :` The delete operator removes properties from an object.
```bash
let obj = { model: "Tesla", color: "Red" };
delete obj.color;

console.log(obj);
```

`5. Checking if a Property Exists :` You can check if an object has a property using the in operator or hasOwnProperty() method.
```bash
let obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));
```

`6. Iterating Through Object Properties :` Use for...in loop to iterate through the properties of an object.
```bash
let obj = { name: "Nitish", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

`7. Merging Objects :` Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.
```bash
let obj1 = { name: "Rajni" };
let obj2 = { age: 21};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
```

`8. Object Length :` You can find the number of properties in an object using Object.keys().
```bash
let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);
```

### `Common Mistakes with JavaScript Objects :` 
In JavaScript, there are two main ways to create objects

- Using Object Literal Syntax ({}): This is the most common and simple way to create objects.
- Using the Object Constructor (new Object()): This uses JavaScript's built-in Object constructor to create objects.
```bash
// Object literal
const obj1 = { key: "value" };

// Object constructor
const obj2 = new Object();
obj2.key = "value";

console.log(obj1);
console.log(obj2);
```
- At first glance, both approaches seem to achieve the same result. However, there are significant differences to understand.
<br>

### `Differences Between {} and new Object()`

| Feature                    | `{}` (Object Literal)                            | `new Object()` (Object Constructor)                                                 |
| -------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **Ease of Use**            | More concise, readable, and widely used.         | Less commonly used and more verbose.                                                |
| **Performance**            | Slightly faster and more efficient.              | Slightly slower due to the constructor call.                                        |
| **Prototypal Inheritance** | Directly inherits from `Object.prototype`.       | Also inherits from `Object.prototype`, but involves an additional constructor step. |
| **Customization**          | Literal syntax is sufficient for most use cases. | Useful only in rare scenarios requiring dynamic object creation patterns.           |
| **Code Length**            | Requires less code.                              | Requires more code.                                                                 |
| **Readability**            | Easier to understand and maintain.               | Less readable compared to object literals.                                          |
| **Recommendation**         |  Preferred in modern JavaScript.                |  Generally not recommended unless specifically needed.                             |


## 15. Browser Object Model
The Browser Object Model (BOM) allows JavaScript to interact with the browser itself, beyond just the webpage content. It provides control over browser features like windows, navigation, and history.
- Helps manage browser window properties (resize, open, close).
- Allows navigation control using location and history objects.
- Provides information about the browser via the navigator object.

### `Features of the BOM`

```bash
1. Dynamic Browser Control : The BOM allows developers to control browser windows and perform operations like resizing, opening, and closing windows.

2. URL Manipulation : Through the location object, developers can retrieve, modify, and navigate URLs dynamically.

3. Browser and Device Information : The navigator object provides details about the user's browser, operating system, and hardware capabilities.

4. Screen and Resolution Access : Developers can access screen properties like width, height, and pixel depth for responsive design.

5. Session History Navigation : The history object enables smooth navigation through the user's browsing history.

6. Cookie Management : Using the document.cookie property, developers can set, retrieve, and delete cookies for session management.

7. Event Handling and Timers : Functions like setTimeout and setInterval allow scheduling and periodic execution of tasks. The current web address (URL) and allows changes within the Browser Object Model (BOM).
```

### `Types of BOM`
| BOM Object    | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **window**    | Represents the browser window, controlling aspects such as size, position, and browser-related functions. It also serves as the global object in JavaScript. |
| **navigator** | Provides information about the user's browser, operating system, language, and other environment details.                                                    |
| **location**  | Represents the current URL of the webpage and allows retrieving or modifying the web address, including page redirection and reloading.                      |
| **screen**    | Provides information about the user's screen, such as screen width, height, color depth, and available display area.                                         |
| **history**   | Gives access to the browser's session history, allowing navigation to previously visited or next pages in the browsing history.                              |

<br>

### `BOM Example`

`1. Window Object :` window is the global object in browsers, but not everything (like developer tools or browser UI) is part of it.
```bash
window.alert('Hello, World!');
console.log(window.innerWidth);

Explanation:
- The window object provides methods like alert(), confirm(), and prompt().
- It also gives you access to other important objects, such as document, navigator, screen, location, and history.
```

`2. Navigator Object :` The navigator object provides information about the browser and the user's environment. It is often used to detect the browser type or features.
```bash
console.log(navigator.userAgent); 
console.log(navigator.language); 

Explanation:
- navigator.userAgent can be used to identify the browser and its version, but it's not always reliable.
- navigator.language tells you the user's preferred language.
```

`3. Location Object :` The location object allows you to interact with the URL of the current document. It can be used to retrieve or manipulate parts of the URL and navigate to different pages.
```bash
console.log(location.href); 
location.href = 'https://www.google.com/'

Explanation:
- location.href gives you the full URL.
- You can change location.href to load a different page.

location object Properties:
1. location.href: Returns the full URL of the current page, including the protocol, domain, path, and query string.
2. location.protocol: Returns the protocol part of the URL (e.g., https: or http:).
3. location.hostname: Returns the domain name or IP address of the URL (e.g., www.example.com).
4. location.pathname: Returns the path part of the URL after the domain (e.g., /path/to/page).
```

`4. Screen Object :` The screen object provides information about the user’s screen, such as its resolution.
```bash
console.log(screen.width);
console.log(screen.height);

Explanation:
- screen.width and screen.height give you the screen's dimensions.
- This can be useful for adapting your website's layout to different screen sizes.
```

`5. History Object :` The history object allows you to navigate through the browser's session history. It provides methods to move forward, backward, or to specific pages in the history stack.
```bash
history.back(); 
history.forward();

Explanation:
- history.back() goes back one page.
- history.forward() goes forward one page.
```

`6. Using window.resizeTo :` The window.resizeTo() method is used to resize the browser window to a specific width and height. This can be useful for controlling window dimensions in a web application.
```bash
let newWindow = window.open("https://www.example.com/", "NewWindow", "width=500,height=500");
newWindow.resizeTo(300, 300);

Explanation:
1. window.open("https://www.example.com/", "NewWindow", "width=500,height=500") opens a new browser window with the URL https://www.example.com/ 
The window is named "NewWindow", and its size is set to 500px by 500px.
2. newWindow.resizeTo(300, 300) resizes the newly opened window to 300px by 300px. This resizing happens after the window is opened.
```

## 16. Document Object Model
The JavaScript HTML DOM (Document Object Model) represents the structure of an HTML document as a tree of objects. It allows JavaScript to interact with and modify the content and elements of a webpage dynamically.
- By using the DOM, JavaScript can access and manipulate HTML elements, attributes, and styles.
- DOM manipulation enables updating the content, structure, or styling of a page without reloading the webpage.

### `Features of DOM`
```bash
1. Tree Structure : The DOM represents an HTML document as a hierarchical tree structure. Each element, attribute, and text is organized as a node, making it easy to understand and navigate the relationships between different parts of a webpage.

2. Node-Based Representation : In the DOM, every component of a webpage—including HTML elements, attributes, and text content—is represented as a node. This node-based structure allows scripts to access and manipulate any part of the document efficiently.

3. Dynamic Content Manipulation : The DOM allows developers to create, modify, update, or remove HTML elements and content dynamically. Changes made through the DOM are reflected instantly on the webpage without requiring a page refresh.

4. Element Access and Selection : The DOM provides various methods such as `getElementById()`, `getElementsByClassName()`, and `querySelector()` to locate and access specific elements. This makes it easier to interact with and modify webpage content programmatically.

5. Style Manipulation : The DOM enables developers to change the appearance of webpage elements by modifying CSS properties, classes, and styles dynamically. This helps create responsive and visually interactive user interfaces.

6. Event Handling : The DOM supports event handling, allowing webpages to respond to user actions such as mouse clicks, keyboard inputs, form submissions, and other interactions. This feature is essential for building dynamic and interactive web applications.
```

### `Accessing Elements in the DOM` 

`1. getElementById() :` Retrieves an element by its id.
```bash
let heading = document.getElementById("title");
console.log(heading.textContent);
```

`2. getElementsByClassName() :` Returns a collection of elements with a specified class.
```bash
let items = document.getElementsByClassName("list-item");
console.log(items[0].textContent);
```

`3. getElementsByTagName() :` Selects elements by their tag name.
```bash
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
```

`4. querySelector() :` Returns the first element matching a CSS selector.
```bash
let firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);
```

`5. querySelectorAll() :` Returns all elements matching a CSS selector.
```bash
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => console.log(p.textContent));
``` 

### `Modifying the DOM`

`1. Changing Content :` You can modify the content of an element using textContent or innerHTML.
```bash
document.getElementById("title").textContent = "New Heading";
document.getElementById("content").innerHTML = "<b>Updated Content</b>";
```

`2. Changing Attributes :` You can modify attributes like src, href, alt, etc.
```bash
document.getElementById("myImage").src = "new-image.jpg";
```

### `Adding and Removing Elements`

`1. Create an element :`
```bash
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);
```

`2. Remove an element :`
```bash
let oldPara = document.getElementById("removeMe");
oldPara.remove();
```

### `Event Handling in the DOM`
JavaScript allows us to handle events such as clicks, keypresses, mouse movements, etc.

`Adding an Event Listener :`
```bash
document.getElementById("btn").addEventListener("click", function() { 
   alert("Button Clicked!");
});
```

`Removing an Event Listener :`
```bash
function sayHello() { 
   console.log("Hello!");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);
```

`Event Object :` The event object provides details about the event.
```bash
document.getElementById("inputField").addEventListener("keyup", function(event) {
   console.log("Key pressed: ", event.key);
});
```

### `Traversing the DOM`
JavaScript provides properties to navigate through the DOM tree.
```bash
1. parentNode: Gets the parent element.

2. children: Gets all child elements.

3. firstChild / lastChild: Gets the first/last child.

4. nextSibling / previousSibling: Gets the next/previous sibling.

Example:
let parent = document.getElementById("myDiv").parentNode;
console.log(parent.tagName);
```

## 16. DOM Manipulation
The Document Object Model (DOM) represents the structure of a webpage as a tree of objects. It allows JavaScript to access and modify the content, structure, and styling of HTML elements dynamically.

- Enables changing HTML content and attributes using JavaScript.
- Allows styling updates like colors, fonts, and layout.
- Provides methods to add, remove, or modify elements in the webpage.

### `Manipulation of DOM Elements`

`1. Change the Content of an Element :` You can change the content inside an HTML element using JavaScript. The two most common properties for this are innerHTML and textContent:
- innerHTML: Allows you to get or set the HTML content inside an element.
- textContent: Allows you to get or set the text content inside an element, ignoring any HTML tags.
```bash
<body>
    <div id="example1">This is the original content using innerHTML.</div>
    <div id="example2">This is the original text content using textContent.</div>

    <button onclick="changeContent()">Change Content</button>

    <script>
        // Function to change content
        function changeContent() {
            document.getElementById("example1").innerHTML = 
            "<strong>This is changed using innerHTML!</strong>";

            document.getElementById("example2").textContent = 
            "This is changed using textContent!";
        }
    </script>
</body>

Explanation:
1. innerHTML changes the entire content of an element, including HTML tags. In this case, we replace the content of the first div with bold text using <strong>.

2. textContent changes only the text inside the element, ignoring any HTML tags. The second div is updated with plain text, without any HTML formatting.
```

`2. Manipulate the Class Attribute :` You can add, remove, or toggle classes on an element using JavaScript. This is helpful for styling or applying animations.
- classList.add(): Adds a class to an element.
- classList.remove(): Removes a class from an element.
- classList.toggle(): Toggles a class (adds it if it's not present, removes it if it is).
```bash
<html>
<head>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="example" class="bold">This is a text element with the "bold" class.</div>

    <button onclick="addClass()">Add 'highlight' Class</button>
    <button onclick="removeClass()">Remove 'bold' Class</button>
    <button onclick="toggleClass()">Toggle 'highlight' Class</button>
    <script>
        function addClass() {
            document.getElementById("example").classList.add("highlight");
        }
        function removeClass() {
            document.getElementById("example").classList.remove("bold");
        }
        function toggleClass() {
            document.getElementById("example").classList.toggle("highlight");
        }
    </script>
</body>
</html>

Explanation:
1. Adding a Class (addClass()): When you click the "Add 'highlight' Class" button, the highlight class is added to the div element with the id="example". This changes the text color to red and makes it bold (as defined in the CSS).

2. Removing a Class (removeClass()): When you click the "Remove 'bold' Class" button, the bold class is removed from the div, which removes the bold styling from the text.

3. Toggling a Class (toggleClass()): When you click the "Toggle 'highlight' Class" button, the highlight class is either added or removed, depending on whether it's already present. If the class is present, it will be removed; if not, it will be added.
```

`3. Set CSS Styles Using JavaScript :` You can directly manipulate the CSS styles of an element using the style property. This allows you to dynamically change how elements appear on the page.
```bash
// Changing multiple CSS properties
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.fontSize = "20px";
// Adding more than one style
document.getElementById("demo").style.cssText = "color: blue; font-size: 18px;";
```

`4. Create, Add, and Remove Elements :` Sometimes, you need to create new elements, add them to the DOM, or remove existing ones. You can do this using the following methods:
- document.createElement(): Creates a new element
- appendChild(): Adds a new element to a parent element
- element.remove(): Removes the element directly (modern approach)
- removeChild(): Removes a child element from a parent (older approach)
```bash
// Create a new element
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

// Add the new element to the DOM
document.body.appendChild(newDiv);

// Remove the element (modern approach)
newDiv.remove();
```

`5. Insert Elements at a Specific Position :` You can insert new elements at specific positions relative to existing elements using methods like insertBefore().
```bash
// Create a new element
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

// Find an existing element to insert before
let referenceNode = document.getElementById("referenceElement");

// Insert the new element before the reference element
document.body.insertBefore(newDiv, referenceNode);
```

`6. Manipulate Element Attributes :` You can easily get, set, or remove the attributes of an HTML element using the following methods:
- getAttribute(): Retrieves the value of an attribute.
- setAttribute(): Sets a new value for an attribute.
- removeAttribute(): Removes an attribute.
```bash
// Get the value of an attribute
let src = document.getElementById("image").getAttribute("src");

// Set a new value for an attribute
document.getElementById("image").setAttribute("src", "new-image.jpg");

// Remove an attribute
document.getElementById("image").removeAttribute("src");
```

`7. Manipulate Data Attributes :` HTML5 introduced data attributes, which are custom attributes that you can use to store extra information about an element. These are particularly useful for adding data to an element without affecting its visual structure.
- dataset: A special property in JavaScript that allows you to access data attributes.
```bash
// Setting a data attribute
document.getElementById("demo").dataset.userId = "12345";
// Getting a data attribute
let userId = document.getElementById("demo").dataset.userId;
console.log(userId); // Outputs: 12345
```

## 17. DOM and Events
Working with the DOM and events allows JavaScript to make web pages interactive by responding to user actions. Events are actions like clicks, typing, or hovering that trigger specific functions.
- Events like click, submit, and keydown trigger JavaScript functions.
- Event listeners (addEventListener) are used to handle user interactions.
- Enables dynamic updates to the DOM based on user actions.

### `Using DOM and Events`
Suppose we want to make changes in the document or stylesheet on a certain event. The event can be the loading of a web page, selection of any specific element or a form is submitted, etc.

`1. Window Event Attributes :` These events are triggered for the window object.
- onload: onload fires after the page is finished loading.
- onresize: onresize fires when the browser window is resized.

`2. Mouse Events :` These are the most common events with basic interaction of user through the mouse.
- onclick: onclick fires when a mouse click is triggered on an element.
- onmouseover: onmouseover fires when a mouse pointer moves over an element.
- ondblclick: ondblclick fires on a mouse double click on the element.

`3. Keyboard Events :` Handle keyboard interactions.
- onkeydown: onkeydown fires when the user is pressing a specific key.
- onkeyup: onkeyup fires when a user releases a specific key.

### `Example : Using DOM and Event`

<b> `1. Click` </b>
```bash
<!DOCTYPE html>
<html>
<head>
<title>DOM and Events</title>
  <style>
    .container {
            height: 150px;
            width: 300px;
            background-color: green;
            text-align: center;
            color: white;
            font-size: 30px;
            margin: auto;
            font-weight: bolder;
            font-family: -apple-system, BlinkMacSystemFont,
                        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                        'Open Sans', 'Helvetica Neue', sans-serif;
        }
  </style>
</head>
<body>  
    <div class="container">GeeksforGeeks</div>
    <script>
        let container = document.querySelector('.container');
        container.addEventListener('click', function(e) {
            container.style.color = "black";
        });
    </script>  
</body>
</html>
```

<b>` 2. Keyboard event and event Listener` </b>
```bash
<!DOCTYPE html>
<html>

<head>
    <title>DOM and Events</title>
    <style>
        * {
            font-family: -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
              'Open Sans', 'Helvetica Neue', sans-serif;
        }
    </style>
</head>

<body>
    <h3>
        Message will be displayed when 
        you press the Enter key
    </h3>

    <input type="text" class="inputArea">
    <p></p>

    <script>
        let input = document.querySelector(".inputArea");
        let p = document.querySelector("p");
      
        input.addEventListener('keydown', function(e) {
            if (e.key === "Enter") {
                p.textContent = "You pressed Enter";
            }
        });
    </script>
</body>

</html>
```

## 18. Events
JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.

### `Event Types`
JavaScript supports a variety of event types. Common categories include:
```bash
1. Mouse Events: click, dblclick, mousemove, mouseover, mouseout
2. Keyboard Events: keydown, keypress, keyup
3. Form Events: submit, change, focus, blur
4. Window Events: load, resize, scroll
```

### `Common JavaScript Events`
| Event           | Definition                                                                |
| --------------- | ------------------------------------------------------------------------- |
| **onclick**     | Triggered when a user clicks on an HTML element.                          |
| **onmouseover** | Fired when the mouse pointer moves over an element.                       |
| **onmouseout**  | Occurs when the mouse pointer leaves an element.                          |
| **onkeydown**   | Fired when a keyboard key is pressed down.                                |
| **onkeyup**     | Triggered when a pressed key is released.                                 |
| **onchange**    | Occurs when the value of an input field, select box, or textarea changes. |
| **onload**      | Fired when a web page or resource has completely loaded.                  |
| **onsubmit**    | Triggered when a form is submitted by the user.                           |
| **onfocus**     | Occurs when an element receives focus and becomes active.                 |
| **onblur**      | Fired when an element loses focus and becomes inactive.                   |


### `Features of JavaScript Events`
```bash
1. User Interaction Handling : JavaScript events allow web pages to respond to user actions such as mouse clicks, keyboard presses, scrolling, and form inputs. This helps create interactive and engaging websites.

2. Event-Driven Programming : Events enable code execution only when a specific action occurs. Instead of running continuously, JavaScript waits for an event and then performs the required task, making applications more efficient.

3. Dynamic Content Updates : Events make it possible to change webpage content, styles, or attributes without reloading the page. This provides a smoother and faster user experience.

4. Form Validation and Data Processing : JavaScript events can validate user input before a form is submitted. They help ensure that required fields are filled correctly and reduce invalid data entry.

5. Enhanced User Experience : By responding instantly to user actions, events make web applications more interactive, responsive, and user-friendly. Features like hover effects, live search, and notifications rely on events.

6. Browser and Element Monitoring : Events can detect when a page loads, an element gains or loses focus, or the browser window is resized. This helps developers manage page behavior and optimize application performance.
```

### `JavaScript Event Handlers`
Event handlers can be used to handle and verify user input, user actions, and browser actions:
- Things that should be done every time a page loads.
- Things that should be done when the page is closed.
- Action that should be performed when a user clicks a button.
- Content that should be verified when a user inputs data.
<br>

There are several ways to handle events in JavaScript:
- HTML event attributes can execute JavaScript code directly.
- HTML event attributes can call JavaScript functions.
- You can assign your own event handler functions to HTML elements.
- You can prevent events from being sent or being handled.

### `Event Handling Methods`

`1. Inline HTML Handlers`
```bash
<button onclick="alert('Button clicked!')">Click Me</button>
```

`2. DOM Property Handlers`
```bash
let btn = document.getElementById("myButton");
btn.onclick = () => {
      alert("Button clicked!");
};
```

`3. addEventListener()`
```bash
btn.addEventListener("click", () => {
    alert("Button clicked using addEventListener!");
});

- addEventListener() is the most versatile and recommended method as it supports multiple event listeners and removal of listeners.
```

### `Event Propagation`
Event Propagation defines the order in which event handlers are triggered when an event occurs in the DOM. In HTML and React, this behavior is handled using two main mechanisms: Event Bubbling and Event Capturing.
<br>

JavaScript events propagate in two phases:

`1. Bubbling :` This behavior is known as Event Bubbling. When an event occurs on a component, the event handler is triggered first on the target (inner) component, then on its parent, and continues upward through all ancestor components.

- Default event propagation behavior in the DOM and React.
- Event flows from the innermost element to the outermost element.
- Commonly used for handling events efficiently with parent components.

`2. Capturing :` This behavior is known as Event Capturing. In this approach, the event is handled starting from the outermost (parent) element and then moves inward to the target component.

- Event flows from parent to child (outermost to innermost).
- Also referred to as trickle-down event propagation.
- Used when you need to intercept events before they reach the target element.

`3. stopPropagation() :` The stopPropagation() method is used to stop the propagation of event calling. That is a parent event is called we can stop the propagation of calling its children by using the stopPropagation() method and vice-versa.
```bash
Syntax : event.stopPropagation()

Return Value: It does not return any value.
```

<b>`Example`</b>
```bash
const button = document.querySelector("button");

document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true);

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation();
});

Explanation:
- Setting true in addEventListener makes it capture events during the capturing phase.
- stopPropagation() halts further propagation.
```

### `Event Delegation`
Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event.target property.

- Reduces the number of event listeners.
- Improves performance and memory usage.
- Uses event bubbling to capture events.
- Ideal for dynamically added elements.
```bash
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`Clicked on item: ${e.target.textContent}`);
    }
});

- Events are delegated to list, reducing the need to add listeners to each list item.
```

### `Preventing Default Behavior`
The preventDefault() method is used to prevent the browser from executing the default action of the selected element. It can prevent the user from processing the request by clicking the link.
```bash
Syntax : event.preventDefault()

Parameters : It does not accept any parameter. The event is used to denote the event or action by the user in the response to which the method works.

Example:
<!DOCTYPE html>
<html lang="en">

<head>
    <title> preventDefault() Event Method </title>
    <!-- INCLUDE THE JQUERY CDN -->
    <script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("a").click(function (event) {
                event.preventDefault();
                alert("prevented");
            });
        });
    </script>
</head>

<body>
    <p>Click the link:</p>
    <a href="https://www.google.com/">GOOGLE</a>
</body>

</html>
```

### `Example`

`1. Form Validation`
```bash
<html>
<body>
    <h2>Form Validation</h2>
    <form id="example">
        <input type="text" placeholder="Enter something" id="formInput" />
        <button type="submit">Submit</button>
    </form>
    <script>
        document.querySelector("#example").addEventListener("submit", (e) => {
            let input = document.querySelector("#formInput");
            if (!input.value) {
                e.preventDefault();
                alert("Input cannot be empty");
            }
        });
    </script>

</body>

</html>
```

`2. Dynamic Content`
```bash
<html>

<body>
    <h2>Dynamic Content</h2>
    <button id="button">Add Element</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            let newDiv = document.createElement("div");
            newDiv.textContent = "New Element Added";
            newDiv.style.margin = "10px 0";
            document.body.appendChild(newDiv);
        });
    </script>

</body>

</html>
```

`3. Interactive Lists`
```bash
<html>

<body>
    <h2>Interactive Lists</h2>
    <ul id="lists">
        <li>Interactive Item 1</li>
        <li>Interactive Item 2</li>
        <li>Interactive Item 3</li>
    </ul>
    <script>
        let ul = document.querySelector("#lists");

        ul.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                e.target.style.backgroundColor = "yellow";
            }
        });
    </script>

</body>

</html>
```

## 19. Event Loop
The event loop is an important concept in JavaScript that enables asynchronous programming by handling tasks efficiently. Since JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.
```bash
console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");

Explanation:
1. console.log("Start") executes first.
2. setTimeout schedules its callbacks but does not execute it immediately.
3. Promise.resolve().then() is placed in the microtask queue and executes before the callback queue.
4. Promise Resolved appears before setTimeout Callback due to microtask priority.
```

### `Working of Event Loop`
The event loop continuously checks whether the call stack is empty and whether there are pending tasks in the callback queue or microtask queue.
```bash
1. Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.

2. Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.

3. Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.

4. Microtask Queue: Promises (.then(), .catch(), .finally()) and other microtasks are placed here. The microtask queue is always fully executed (drained) before moving to the next macrotask.

5. Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.
```

### `Common Issues Related to the Event Loop`

`1. Blocking the Main Thread :` Heavy computations block the event loop, making the app unresponsive.
```bash
while(true)
{
    console.log('Blocking...')
}

Explanation:
1. An infinite while(true) loop continuously executes without termination, blocking the event loop.
2. As a result, no other tasks (UI updates, callbacks, timers) can run, causing the browser to freeze.
```

`2. Delayed Execution of setTimeout :` setTimeout doesn’t always run exactly after the specified time.
```bash
console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 1000);
for (let i = 0; i < 1e9; i++) {} // Long loop
console.log("End");

Explanation:
1. A blocking loop keeps the Call Stack busy, delaying setTimeout execution.
2. This can freeze the browser or cause a Time Limit Exceeded error.
```

`3. Priority of Microtasks Over Callbacks :` Microtasks run before setTimeout, even if set with 0ms delay.
```bash
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

Explanation:
1. The event loop first checks the microtask queue before the callback (macrotask) queue.
2. The microtask queue has higher priority than the callback queue in JavaScript.
3. Therefore, functions in the microtask queue are executed before those in the callback queue.
```

`4. Callback Hell :` Too many nested callbacks make code unreadable.
```bash
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

- This creates Callback Hell, making it hard to read and maintain. Use Promises or async/await instead.
```

### `Best Use Cases`
```bash
1. Use Asynchronous Operations: Avoid blocking the event loop with synchronous file reads or complex calculations.

2. Optimize Long-Running Tasks: Use worker threads or child processes for CPU-intensive tasks.

3. Use Microtasks Wisely: Since microtasks execute before other queued tasks, excessive usage can delay other operations.

4. Debug Using Performance Tools: Utilize Node.js Performance Hooks and the Chrome DevTools profiler to monitor the event loop behavior.
```

## 20. Asynchronous JavaScript
Asynchronous JavaScript allows code to perform time-consuming tasks (such as fetching data from a server, reading files, or waiting for user input) without blocking the execution of other code.

### `1. Callbacks` 
A callback function is a function that is passed as an argument to another function and executed later.

- A function can accept another function as a parameter.
- Callbacks allow one function to call another at a later time.
- A callback function can execute after another function has finished.

```bash
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);

- Here, sayBye() is passed as a callback to greet(), which executes after the greeting.
```

### `Uses of Callbacks in JavaScript`

`1. Handling Asynchronous Operations :` Callbacks are widely used in

- API requests (fetching data)
- Reading files (Node.js file system)
- Event listeners (clicks, keyboard inputs)
- Database queries (retrieving data)

`2. Callbacks in Functions Handling Operations :` When a function needs to execute different behaviors based on input, callbacks make the function flexible.
```bash
function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));

- calculate() receives two numbers and a function (add or multiply).
- The passed function is executed inside calculate().
```

`3. Callbacks in Event Listeners :` JavaScript is event-driven, and callbacks handle user interactions like clicks and key presses.
```bash
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

- Here, the anonymous function is a callback that runs when the button is clicked.
```

`4. Callbacks in API Calls (Fetching Data) :` Callbacks are useful when retrieving data from APIs.
```bash
function fetch(callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Error:", error));
}

function handle(data) {
    console.log("Fetched Data:", data);
}

fetch(handle);

- fetchData() gets data from an API and passes it to handleData() for processing.
```

### `Problems with Callbacks`

`1. Callback Hell (Nested Callbacks) :` When callbacks are nested deeply, the code becomes unreadable and hard to maintain.
```bash
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

- As the number of steps increases, the nesting grows deeper, making the code difficult to manage.
```

`2. Error Handling Issues in Callbacks :` Error handling can get messy when dealing with nested callbacks.
```bash
function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"), null);
    } else {
        callback(null, a / b);
    }
}

function result(error, result) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result);
    }
}

divide(10, 2, result);
divide(10, 0, result);

- Handling errors inside callbacks can complicate code readability.
```

### `Alternatives to Callbacks`

`1. Promises (Fixing Callback Hell) :` Promises provide a better way to handle asynchronous tasks without deep nesting.
```bash
function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(() => console.log("All steps completed"));

- Promises make code more readable by chaining .then() instead of nesting callbacks.
```

`2. Async/Await :` async/await provides an even cleaner way to handle asynchronous code.
```bash
async function processSteps() {
    await step1();
    await step2();
    await step3();
    console.log("All steps completed");
}

processSteps();

- async/await makes code look synchronous, improving readability.
```

### `When to Use and Avoid Callbacks`

`Use callbacks when`
- Handling asynchronous tasks (API calls, file reading).
- Implementing event-driven programming.
- Creating higher-order functions.

`Avoid callbacks when:`
- Code becomes nested and unreadable (use Promises or async/await).
- You need error handling in asynchronous operations (Promises are better).

## 21. Event Bubbling
Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.

- Propagation Direction: In event bubbling, the event starts at the target element and propagates upward through its parent elements to the root of the DOM.
- Default Behavior: Event bubbling is enabled by default in JavaScript.
- Event Listeners: If multiple event listeners are attached in the bubbling phase, they are executed in sequence, starting from the innermost target element.

### `Working of Event Bubbling`
```bash
1. Event Triggering: The click event is triggered on the child element (button), initiating the event propagation.

2. Event Capturing: In the capturing phase, the event propagates from the root of the DOM down to the target (child). However, no listeners are explicitly set to handle events in this phase in the given code.

3. Event Bubbling: After reaching the target element (child), the event enters the bubbling phase, propagating back up through the DOM tree to the parent (parent).

4. Listener Behavior: Event listeners are attached to both parent and child elements using addEventListener. By default, these listeners respond during the bubbling phase unless the capture option is set to true.

5. Execution Order: When the button is clicked, the child listener executes first (console.log("Child")), followed by the parent listener (console.log("Parent")) as the event bubbles up.
```

<b>`Example` </b>
```bash
<html>
<head>
    <style>
        *{
            margin: 25px;
            box-sizing: border-box;
        }
        .grandparent{
            height: 350px;
            width: 350px;
            border: 2px solid red;
        }
        .parent{
            height: 250px;
            width: 250px;
            border: 2px solid blue;
        }
        .child{
            height: 150px;
            width: 150px;
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <div class="grandparent" id="one">
        Grandparent
        <div class="parent" id="two">
            Parent
            <div class="child" id="three">
                Child
            </div>
        </div>
    </div>
    <script>
        let grandparent=document.getElementById('one')
        let parent=document.getElementById('two')
        let child=document.getElementById('three')
        grandparent.addEventListener('click',function(e){
          
            console.log("Grandparent Clicked")
        })
        parent.addEventListener('click',function(e){

            console.log("Parent Clicked")
        })
        child.addEventListener('click',function(e){
       
            console.log("Child Clicked")
        })
    </script>
</body>
</html>
```

### `Use Cases of Event Bubbling`

`1. Delegated Event Handling:` Instead of adding event listeners to multiple child elements, attach one to their parent and handle the events as they bubble up.
```bash
document.getElementById('parent').addEventListener('click', (event) => {
    console.log('Clicked:', event.target.id);
});
```

`2. Simplified Code :` Reduces redundancy and improves performance when handling events for dynamic or large DOM structures.
<br>

### `Event Bubbling Vs Event Capturing`

| Event Bubbling | Event Capturing |
|----------------|------------------|
| The event starts at the target element and propagates upward to the root of the DOM. | The event starts at the root of the DOM and propagates downward to the target element. |
| Event listeners are attached to handle events during the bubbling phase by default. | To handle events in the capturing phase, you must explicitly set the `capture` option to `true` in `addEventListener()`. |
| Often used when you want parent elements to respond to events triggered on child elements (e.g., event delegation). | Useful when you want parent elements to handle the event before it reaches the target element. |
| Inner (child) elements execute their event listeners first, followed by outer (parent) elements as the event propagates upward. | Outer (parent) elements execute their event listeners first, followed by inner (child) elements as the event propagates downward. |
| Supported by all modern browsers and is the default event propagation behavior. | Supported by modern browsers but less commonly used because it requires explicit configuration. |
| Syntax: `element.addEventListener("click", handler)` | Syntax: `element.addEventListener("click", handler, true)` |
| Propagation Order: **Target → Parent → Ancestors** | Propagation Order: **Root → Parent → Target** |

## 22. Async and Await
Async/Await in JavaScript allows you to write asynchronous code in a clean, synchronous-like manner, making it easier to read, understand, and maintain while working with promises.

- async functions always return a Promise.
- await pauses execution until the Promise is resolved or rejected.
- Improves readability compared to .then() and .catch() chaining.
- Makes error handling simpler using try...catch.
- Ideal for managing complex asynchronous flows in a structured way.
<br>

<b> `Syntax:` </b>
```bash
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
```
<br>

<b>`Example` </b>
```bash
async function fetchData() {
  try {
    // Simulated API response (mock data)
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration"
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

### `Async Function `
Async functions let us write promise-based code in a synchronous-looking way, improving readability while keeping the execution non-blocking. An async function always returns a Promise—if it returns a non-promise value, JavaScript automatically wraps it in a resolved Promise.

- Makes asynchronous code easier to read and maintain
- Does not block the main execution thread
- Always returns a Promise
- Non-promise return values are auto-wrapped in Promise.resolve()
- Works seamlessly with await for handling promises
<br>

<i> `Syntax:`
```bash
async function myFunction() {
  return "Hello";
}

Example:
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));
```
</i>
<br>

### `Await Keyword`
The await keyword pauses the execution of an async function until a Promise is resolved or rejected. It can only be used inside an async function, making asynchronous code easier to read and manage.

- Used to wait for a Promise to settle.
- Can only be used inside async functions.
- Prevents callback and .then() chaining.
- Makes asynchronous code cleaner and more readable.
- Supports error handling with try...catch.
<be>

<i> `Example:`
```bash
const getData = async () => {
    let y = await Promise.resolve("Hello World");
    console.log(y);
}

console.log(1);
getData();
console.log(2);

Explanation:
1. The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
2. The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
```
</i>

### `Error Handling in Async/Await`
Errors in async/await are handled using try...catch instead of resolve and reject.

- resolve: Used when an asynchronous task is completed successfully.
- reject: Used when an asynchronous task fails, providing the reason for failure.

<br>

<i>`Example:`
```bash
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

Explanation:
1. async function fetchData(): Declares an asynchronous function that always returns a Promise.
2. await fetch(...): Sends an HTTP request and waits for the response without blocking the main thread.
3. await response.json(): Converts the response body into JavaScript data (JSON format).
4. console.log(data): Prints the fetched data to the console if the request is successful.
5. try...catch: Handles errors such as network failure or invalid responses.
```