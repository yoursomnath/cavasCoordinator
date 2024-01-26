let c = document.getElementById("canvas");
let ctx = c.getContext('2d');

c.height = window.innerHeight;
c.width = window.innerWidth;

c.style.background = "black";

function ranColor(){
  let ranR = Math.floor(Math.random()*255);
  let ranG = Math.floor(Math.random()*255);
  let ranB = Math.floor(Math.random()*255);

  return `rgb(${ranR},${ranG},${ranB})`;
}


c.addEventListener("mousemove",myfunc);
function myfunc(event){
  let x = event.offsetX;
  let y = event.offsetY;
  let clr = ranColor();
  ctx.clearRect(0,0,c.width,c.height)
  ctx.font = "20px Arial";
  ctx.fillStyle = clr;
  ctx.fillText(`(x = ${x},y = ${y})`, x+20,y+20);
  ctx.beginPath();
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = clr;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(x,y);
  ctx.stroke()
}

