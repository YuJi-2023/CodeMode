//place target at random location in browser
//3s
//total 20s

function generateLocation() {
  const targetElement = document.querySelector("#target");
  //console.log(targetElement);

  const boardH = window.innerHeight;
  const boardW = window.innerWidth;
  console.log(boardH);
  console.log(boardW);

  let newY = Math.random() * boardH;
  let newX = Math.random() * boardW;
  console.log(newY);
  console.log(newX);
}

generateLocation();
