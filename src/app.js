/*1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden.
 Someone yells - "I do, be happy to bring him over" */

//Answer: O(1) constant time

/* 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out 
of the 15 people have the same breed as your dog. You start with the first person and ask him if he has
 a golden retriever. He says no, then you ask the next person, and the next, and the next until you find 
 someone who has a golden or there is no one else to ask. */

//Answer: O(1) constant time

//2. Even or odd?
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//answer: 0(1) constant time

//3. Are you here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//answer: O(n^k) polynomial constant time

// 4. Doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//answer: O(n) linear

// 5. Naive search

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;

      // array =[1,2,3,4];
      // item = 4;
    }
  }
}

//answer: 0(n) linear

// 6. Creating pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    //5 times
    for (let j = i + 1; j < arr.length; j++) {
      //3 times
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

// answer: 0(n^2) polynomial

//7. Compute the sequence

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // n times

    if (i === 1) {
      //1
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result; //1

  // n * 1 + 1 = n + 1
  //
}

//answer:O(n) linear

//8. An efficient search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    // n times
    currentIndex = Math.floor((minIndex + maxIndex) / 2); //3
    currentElement = array[currentIndex]; //1

    if (currentElement < item) {
      //1
      minIndex = currentIndex + 1; //2
    } else if (currentElement > item) {
      //1
      maxIndex = currentIndex - 1; //2
    } else {
      return currentIndex; //1
    }
  }
  return -1; //1
}

//answer: Logarithmic time O(log(n))

//9. Random element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]; //n
}
//answer: O(n) linear

//10. What Am I?
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    //n times
    return false; //1
  }
  for (let i = 2; i < n; ++i) {
    //n times
    if (n % i === 0) return false; // n times
  }
  return true; //1

  // n * 1 + 1 = n + 1
}
//answer: O(n) linear

//11. Tower of Hanoi

//rods = 3
//disk = number
//start = ascending
const smallDisk = [1];
const mediumDisk = [1, 2];
const largeDisk = [1, 2, 3];

//small disc from 1 to 3
//medium from 1 to 2
//small from 3 to 2
//large from 1 to 3
//small from 2 to 1
//medium from 2 to 3
//small from 1 to 3
function tower(rod, smallDisk, mediumDisk, largeDisk) {
  const rod1 = [smallDisk, mediumDisk, largeDisk];
  const rod2 = [];
  const rod3 = [];

  rod3.unshift(rod1[0]);
  rod1.shift();
  console.log('moved small disc to rod 3');
}

tower(3, 'a', 'b', 'c');
