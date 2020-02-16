/*Heather Sleyster
sleyster_a09b.js
INFO 2124
Thoendell
2/10/20
*/

//This is the 
const paragraphItems = document.getElementsByTagName('p');
console.log(`The total number of <p> tags in this document is: ${paragraphItems.length}`);
const divItems = document.getElementsByTagName('div');
console.log(`The total number of <div> tags in this document is: ${divItems.length}`);
const paragraphClassElements = document.getElementsByClassName('paragraph');
console.log(`The total number of paragraph classed elements is: ${paragraphClassElements.length}`);
const blockTextClassElements = document.getElementsByClassName('block-text');
console.log(`The total number of block-text class elements is: ${blockTextClassElements.length}`);
const b001Element = document.getElementById('b001');
console.log(`The ID Attributes with a value of b001 are: ${b001Element}`);
