# Title: Password Generator
Challenge 3 Assignment
Columbia-2U Fullstack Coding Bootcamp

![App Main Image](./Develop/Images/Screenshot%20of%20App.png)

#Description
The purpose of this project was to challenge us to use javascript by creating a random password generator. 
The criteria for the password was that it needed to be between 8 and 128 characters long, with the ability for the user to choose between uppercase letters, lowercase letters, numbers, and symbols. 

#Usage:
When the user clicks on the "Generate Password" button, various window prompts appear. The user first inputs a number between 8 and 128, then continues to choose true or false (OK or Cancel) for the rest of the criteria. 
The result is returned with a random password in the displayed box. 

#Features
If the user chooses cancel (false) for all the criteria, the program defaults to a random password concatenation of lowercase and uppercase letters. 

#Learnings and Challenges
Some major things I learned about what that isNAN (is Not a Number), using var i = 0,...in the generatePassword function, and how to correctly call out Math.floor(Math.random), and when to use parseInt. Another major thing this challenge taught me was how to default to certain criteria and make sure the user is inputting correct data. If not, how to kick the user back to the beginning.

#Technologies Used
Javascript. HTML and CSS were provided. I did not change them. 