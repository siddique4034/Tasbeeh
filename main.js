
let countEl = document.getElementById("count-el");
console.log(countEl);

let number = 0;

function incrementtext() {
  number = number + 1;
  countEl.innerText = number;
}

let prevEl = document.getElementById("prev");
function savebtn(){
  let numberStr = number + '-';
  prevEl.innerText += numberStr;
}

function resetBtn(){
  countEl.innerText = 0;
  number = 0;
  alert('کیا آپ واقعی دوبارہ ترتیب دینا چاہتے ہیں؟')
}



