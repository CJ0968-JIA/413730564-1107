let angle =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER) //畫方形以中心點為座標
  angleMode(DEGREES) //設定角度的單位0~360
  noFill()
}

function draw() {
  push()
  background(0)
  translate(50,50)
  for(let i=0;i<10;i=i+1){
  let r = map (sin(frameCount),-1,1,50,255)
  let g = map (cos(frameCount/2),-1,1,50,255)
  let b = map (sin(frameCount/4),-1,1,50,255)
  stroke(r,g,b)
  rotate(angle)  //把物件旋轉10度的角度，以原點(0,0) 為基準點
  rect(0,0,100-i*3,100-i*3,20)//畫一方形，在視窗中間，寬與高為600
  angle = sin(frameCount)* 30
  }
  pop()
  stroke(225)
  textSize(20)
  text('朱珈嫻', width/3,height/3)
}

