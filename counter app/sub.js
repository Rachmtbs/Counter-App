/*/intialize count as 0
// initilize first
let count = 0

// change the count-el in the HTML to reflect the new count
let countEl =document.getElementById("count-el")
console.log(countEl);

function increment(){
    console.log("clicked");
    // above checks the code below we are going to increment to 0
    count = count +1
    countEl.innerText = count;
    console.log(count);
}*/

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count += +1;
    countEl.textContent = count;
}

// create a function save() which logs out the count when called

function save(){
   console.log(count);
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl



function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - "
   
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    // set the value back to zero when hit save
     countEl.textContent = 0
     count = 0
    console.log(count)
}





// document.getElementById working with the dom how you use js to modify your web Documnet Object Model

// create the save features 

//debugging we want out spaced to work the way we want. look at the save element line 42 is the probelm so go to mdn