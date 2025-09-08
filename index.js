"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const broken = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda" },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, age: 27 },
];
// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

let task = document.getElementById("names-list"); // target the result area for Exercise 1

for (let i = 0; i < users.length; i++) {
  let username = users[i].name;
  console.log(username);
  let nameList = document.createElement("li"); // create a <li> element for each name
  nameList.innerText = username;
  // console.log(nameList);
  task.appendChild(nameList);
}

// 2. Print out the names of characters whose age is less than 40 in the console,
// then render them in the HTML list with id "young-characters-list"

let task2 = document.getElementById("young-characters-list"); // target the result area for Exercise 2

for (let i = 0; i < users.length; i++) {
  let username = users[i].name;
  let userAge = users[i].age;
  if (userAge < 40) {
    console.log(`${username} is ${userAge} years old.`);
    let nameList = document.createElement("li"); // create a <li> element for each name
    nameList.innerText = username;
    // console.log(nameList);
    task2.appendChild(nameList);
  }
}
ex3(users);

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML.
// Use this function to populate the list with id "function-list".

function ex3(characterList) {
  let task3 = document.getElementById("function-list"); // target the result area for Exercise 3

  for (let i = 0; i < characterList.length; i++) {
    let username = users[i].name;
    if (username) {
      let nameList = document.createElement("li"); // create a <li> element for each name
      nameList.innerText = username;
      task3.appendChild(nameList);
    } else {
      console.error(`element ${i} does not have a name.`);
    }
  }
}
ex4(users, 30);

// 4. Create a function that takes an array and an age threshold parameter.
// The function should only display characters whose age is below the given number.
// Render results in the list with id "age-filter-list"

function ex4(characterList, ageLimit) {
  let task4 = document.getElementById("age-filter-list"); // target the result area for Exercise 4
  task4.innerHTML = `<p>The characters below age ${ageLimit} are:</p>`;

  for (let i = 0; i < characterList.length; i++) {
    let username = characterList[i].name;
    if (username) {
      let userAge = characterList[i].age;
      if (userAge < ageLimit) {
        console.log(
          `${username} is ${userAge} years old. Adding to filtered list.`
        );
        let nameList = document.createElement("li"); // create a <li> element for each name
        nameList.innerText = username;
        task4.appendChild(nameList);
      }
    } else {
      console.error(`element [${i}] does not have a name.`);
    }
  }
}

// 5. Add error handling to your functions that will log an error message using console.error()
// if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

ex5(broken, 53);

function ex5(characterList, ageLimit) {
  let task5r = document.getElementById("error-handling-list"); // target the result area for Exercise 5
  let task5m = document.getElementById("error-messages"); // target the error message area for Exercise 5
  task5r.innerHTML = `<p>The characters below age ${ageLimit} are:</p>`;
  task5m.innerHTML =
    "<p style='font-weight: 700'>Error messages received while processing the above:</p>";

  for (let i = 0; i < characterList.length; i++) {
    let username = characterList[i].name;
    if (username) {
      let userAge = characterList[i].age;
      if (userAge && userAge < ageLimit) {
        console.log(
          `${username} is ${userAge} years old. Adding to filtered list.`
        );
        let nameList = document.createElement("li"); // create a <li> element for each name
        nameList.innerText = username;
        task5r.appendChild(nameList);
      } else if (userAge && userAge >= ageLimit) {
        console.log(
          `${username} is ${userAge} years old. TOO OLD for filtered list.`
        );
      } else {
        let errList = document.createElement("p"); // create a <p> element for each error message
        let errMessage = `* ${username} does not have an age.`;
        console.error(errMessage);
        errList.innerText = errMessage;
        task5m.appendChild(errList);
      }
    } else {
      let errList = document.createElement("p"); // create a <p> element for each error message
      let errMessage = `* element [${i}] does not have a name.`;
      console.error(errMessage);
      errList.innerText = errMessage;
      task5m.appendChild(errList);
    }
  }
}

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties)
// and passing it to your functions.
// Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

let task6m = document.getElementById("broken-array-errors"); // target the error message area for Exercise 6
task6m.innerHTML =
  "<p style='font-weight: 700'>Please see Exercise 5 for name and age output & error handling.</p>";
// since I think this has already been done in ex5.
