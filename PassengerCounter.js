
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
console.log(countEl);
console.log(saveEl);

function increment(){
    count +=1
    countEl.textContent = count
    console.log(count);
}

function save(){
   
    let concat = count + " - "
    saveEl.textContent += concat
    count = 0;
    countEl.textContent = count
}