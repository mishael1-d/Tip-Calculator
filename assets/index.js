var btnConatiner = document.getElementById("tip_button");
var btns = document.getElementsByClassName("tip");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

for (var i = 0; i < btns.length-1; i++) {
    
  btns[i].addEventListener("click", function () {
    var billAmt = document.getElementById("amount");
    var people = document.getElementById("people");

    var tipPercent = this.value;
    var total = (billAmt.value * tipPercent || custom * tipPercent) / 100;
    total = Math.fround(total / people.value);
    total = total.toFixed(2);

    var total_amount = document.getElementById("total_amount");
    total_amount.innerHTML = Math.fround(total / people.value).toFixed(2);
    var total_person = document.getElementById("total_person");
    total_person.innerHTML = total;

    
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
      billAmt.value = null;
      custom = null;
      people.value = null;
      total_amount.innerHTML = Math.round(0.00).toFixed(2);
      total_person.innerHTML = Math.round(0.00).toFixed(2);
    });
  });
  
}
function calc() {
    var billAmt = document.getElementById("amount");
    var people = document.getElementById("people");
    var custom = document.getElementById("custom");
    var total = (billAmt.value * custom.value) / 100;
    total = Math.fround(total / people.value);
    total = total.toFixed(2);
    
    var total_amount = document.getElementById("total_amount");
    total_amount.innerHTML = Math.fround(total / people.value).toFixed(2);
    var total_person = document.getElementById("total_person");
    total_person.innerHTML = total;

    var reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
    billAmt.value = null;
    people.value = null;
      custom.value = null;
      total_amount.innerHTML = Math.round(0.00).toFixed(2);
      total_person.innerHTML = Math.round(0.00).toFixed(2);
    });
};



var body = document.getElementById("body");
var small = document.getElementById("small");
var heading = document.getElementById("heading");
var toggleBtn1 = document.getElementById("dark");
toggleBtn1.addEventListener("click", function () {
  body.style.background = "hsl(183, 100%, 15%)";
  body.style.color = "white";
  small.style.background = "hsl(189, 41%, 84%)";
  heading.style.color = "hsl(189, 41%, 84%)"
  toggleBtn2.style.transition = "all, ease 1.2s";
  toggleBtn1.style.display = "none";
    toggleBtn2.style.display = "block";
});

var toggleBtn2 = document.getElementById("light");
toggleBtn2.addEventListener("click", function () {
  body.style.background = "hsl(189, 41%, 84%)";
  body.style.color = "initial";
  small.style.background = "white";
  toggleBtn1.style.display = "block";
        toggleBtn2.style.display = "none";
       toggleBtn1.style.transition = "all, ease 1.2s";
  });

