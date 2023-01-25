1 What is JavaScript? 
Ans -> 
- JavaScript is a scripting language for creating dynamic web page content. It creates elements for improving site visitors’ interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors.

2 What is the use of isNaN function? 
Ans -> 
- The JavaScript isNaN() Function is used to check whether a given value is an illegal number or not. It returns true if the value is a NaN else returns false.

3 What is negative Infinity? 
Ans ->
- NEGATIVE_INFINITY is a special numeric value that is returned when an arithmetic operation or mathematical function generates a negative value greater than the largest representable number in JavaScript (i.e., more negative than -Number. MAX_VALUE) . JavaScript displays the NEGATIVE_INFINITY value as -Infinity .

4 Which company developed JavaScript? 
Ans ->
- JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8. 

5 What are undeclared and undefined variables? 
Ans ->
- Undefined: It occurs when a variable has been declared but has not been assigned any value. Undefined is not a keyword. 
- Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword.

6 Write the code for adding new elements dynamically? 
Ans ->
- Syntax: document. createElement("<tagName>"); // Where <tagName> can be any HTML // tagName like div, ul, button, etc. // newDiv element has been created For Eg: let newDiv = document. createElement("div");

7 What is the difference between ViewState and SessionState? 
Ans ->
- The basic difference between these two is that the ViewState is to manage state at the client's end, making state management easy for end-user while SessionState manages state at the server's end, making it easy to manage content from this end too.

8 What is === operator? 
Ans ->
- The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict ...


9 How can the style/class of an element be changed? 
Ans ->
- Another way to alter the style of an element is by changing its class attribute. class is a reserved word in JavaScript, so in order to access the element's class, you use element. className .

10 How to read and write a file using JavaScript? 
Ans ->
- readFile() and rs. writeFile() methods are used to read and write of a file using javascript. The file is read using the fs. readFile() function, which is an inbuilt method.

11 What are all the looping structures in JavaScript?
Ans -> for/in - loops through the properties of an object. for/of - loops through the values of an iterable object. while - loops through a block of code while a specified condition is true. do/while - also loops through a block of code while a specified condition is true.

12 How can you convert the string of any base to an integer in JavaScript?
Ans ->
- In JavaScript parseInt() function (or a method) is used to convert the passed-in string parameter or value to an integer value itself. This function returns an integer of the base which is specified in the second argument of the parseInt() function.

13 What is the function of the delete operator? 
Ans -> 
- The delete operator removes a property from an object. If the property's value is an object and there are no more references to the object, the object held by that property is eventually released automatically.

14 What are all the types of Pop up boxes available in JavaScript? 
Ans ->
- JavaScript has three kind of popup boxes:
(1) Alert box, 
(2) Confirm box, and 
(3) Prompt box.

15 What is the use of Void (0)?
Ans -> 
- “javascript: void(0)” is similar to void. javascript: void(0) means return undefined as a primitive value. We use this to prevent any negative effects on a webpage when we insert some expression. For example, in the case of URL hyperlinks.

16 How can a page be forced to load another page in JavaScript?
Ans ->
- Approach: We can use window. location property inside the script tag to forcefully load another page in Javascript. It is a reference to a Location object that is it represents the current location of the document. We can change the URL of a window by accessing it.

17 What are the disadvantages of using innerHTML in JavaScript? 
Ans ->
- Disadvantages of innerHTML
-> Event handlers attached to any DOM element are preserved.
-> Replacement is done everywhere.
-> It is not possible to append innerHTML.
-> Breaks the document.
-> Used for Cross-site Scripting.