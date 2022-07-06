let isPlay = false;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
function wireColors() {
  var wire1 = document.querySelector(".wire-1");
  var wire2 = document.querySelector(".wire-2");
  var wire3 = document.querySelector(".wire-3");
  var wire4 = document.querySelector(".wire-4");
  var wire5 = document.querySelector(".wire-5");
  var wire6 = document.querySelector(".wire-6");
  var wire7 = document.querySelector(".wire-7");
  var wire8 = document.querySelector(".wire-8");
  var arr = [];

  var colors = ["red", "yellow", "green", "blue", "gray", "deeppink", "purple"];
  // COLOR 1
  var color1 = Math.floor(Math.random() * 7);
  var x = JSON.stringify(colors.splice(color1, 1));
  x = replaceItem(x);
  arr.push(x);
  // COLOR 2
  var color2 = Math.floor(Math.random() * 6);
  var y = JSON.stringify(colors.splice(color2, 1));
  y = replaceItem(y);
  arr.push(y);
  // COLOR 3
  var color3 = Math.floor(Math.random() * 5);
  var z = JSON.stringify(colors.splice(color3, 1));
  z = replaceItem(z);
  arr.push(z);
  // COLOR 4
  var color4 = Math.floor(Math.random() * 4);
  var t = JSON.stringify(colors.splice(color4, 1));
  t = replaceItem(t);
  arr.push(t);

  console.log(arr);

  wire1.style.backgroundColor = x;
  wire2.style.backgroundColor = y;
  wire3.style.backgroundColor = z;
  wire4.style.backgroundColor = t;
  wire5.style.backgroundColor = x;
  wire6.style.backgroundColor = y;
  wire7.style.backgroundColor = z;
  wire8.style.backgroundColor = t;
  randomWires();
}
function randomWires() {
  var parent = document.querySelector(".wires-left");
  var frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(
      parent.children[Math.floor(Math.random() * parent.children.length)]
    );
  }
  parent.appendChild(frag);
}

wireColors();
var selectedColor;
var userSelectionLeft = document.querySelector(".wires-left");
userSelectionLeft.addEventListener("click", chooseWire);
function chooseWire(e) {
  if (!isPlay) {
    return;
  }
  if (!selectedColor) {
    selectedColor = e.target.getAttribute("style");
  }

  if (e.target.classList.contains("active")) {
    play(selectedColor, e.target);
  } 
  else {
    alert("passive");
  }
}
function play(userChoice, selectedElement) {
  var userSelectionRight = document.querySelector(".wires-right");
  userSelectionRight.addEventListener("click", function (e) {
    if (!isPlay) {
      return;
    }

    var aim = e.target.getAttribute("style");
    if (userChoice === aim) {
      selectedElement.classList.remove("active");
      e.target.classList.remove("active");
      var wireName = e.target.classList[1];
      const right = e.target.getBoundingClientRect();
      if (wireName === "wire-5") {
        const left = document.querySelector(".wire-1").getBoundingClientRect();
        let wire = document.querySelector(".wire-1");
        drawLine(left, right, wire.style.backgroundColor);
      } else if (wireName === "wire-6") {
        const left = document.querySelector(".wire-2").getBoundingClientRect();
        let wire = document.querySelector(".wire-2");
        drawLine(left, right, wire.style.backgroundColor);
      } else if (wireName === "wire-7") {
        const left = document.querySelector(".wire-3").getBoundingClientRect();
        let wire = document.querySelector(".wire-3");
        drawLine(left, right, wire.style.backgroundColor);
      } else if (wireName === "wire-8") {
        const left = document.querySelector(".wire-4").getBoundingClientRect();
        let wire = document.querySelector(".wire-4");
        drawLine(left, right, wire.style.backgroundColor);
      }
      match();
    } else {
      selectedColor = null;
      userChoice = null;
    }
  });
}
function match() {
  var wire1 = document.querySelector(".wire-1");
  var wire2 = document.querySelector(".wire-2");
  var wire3 = document.querySelector(".wire-3");
  var wire4 = document.querySelector(".wire-4");
  var wires = document.querySelectorAll(".circle");

  wires.forEach(function (wire) {
    if (!wire.classList.contains("active")) {
      wire.style.pointerEvents = "none";
      wire.style.opacity = "1";
    }
  });
  if (
    wire1.style.opacity === "1" &&
    wire2.style.opacity === "1" &&
    wire3.style.opacity === "1" &&
    wire4.style.opacity === "1"
  )
   {
    setTimeout(function () {
      console.log('won')
    }, 2000);
  }
}

setTimeout(() => {
  var wire1 = document.querySelector(".wire-1");
  var wire2 = document.querySelector(".wire-2");
  var wire3 = document.querySelector(".wire-3");
  var wire4 = document.querySelector(".wire-4");
  var wire5 = document.querySelector(".wire-5");
  var wire6 = document.querySelector(".wire-6");
  var wire7 = document.querySelector(".wire-7");
  var wire8 = document.querySelector(".wire-8");
  wire1.style.opacity = "0";
  wire2.style.opacity = "0";
  wire3.style.opacity = "0";
  wire4.style.opacity = "0";
  wire5.style.opacity = "0";
  wire6.style.opacity = "0";
  wire7.style.opacity = "0";
  wire8.style.opacity = "0";
  isPlay = true;
}, 4000);

function replaceItem(el) {
  el = el.replace("[", "");
  el = el.replace("]", "");
  el = el.replace('"', "");
  el = el.replace('"', "");
  return el;
}

function drawLine(left, right, strokeColor) {
  var lx = Math.floor(left.x);
  var ly = Math.floor(left.y);
  var rx = Math.floor(right.x);
  var ry = Math.floor(right.y);
  lx = lx - 400;
  ly = ly + 45;
  ry = ry + 50;
  rx = rx - 470;
  ctx.beginPath();
  ctx.moveTo(lx, ly);
  ctx.lineTo(rx, ry);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 10;
  ctx.opacity = "1";
  ctx.stroke();
  // console.log(lx, ly);
  // console.log(rx, ry);
}

//   lx = lx - 210;
//   ly = ly + 40;
//   ry = ry + 40;
//   rx = rx - 190

