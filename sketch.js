//宣告變數
let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Caveat-Medium.ttf字型
    font = loadFont("Roboto/Roboto/Roboto-BoldItalic.ttf") 
}

//==============================================================

 let angle =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER) //畫方形以中心點為座標
  
  angleMode(DEGREES) //設定角度的單位0~360
  //frameRate(10)  //每秒進入draw()函數的次數
}

function draw() {

  background(0)
  for(let y=50;y<height;y=y+120){
  for(let x=50;x<width;x=x+100){
    
    push()
    noFill()
    translate(x,y)
    stroke(255)
  for(let i=0;i<10;i=i+1){
  let r = map (sin(frameCount),-1,1,50,255)
  let g = map (cos(frameCount/2),-1,1,50,255)
  let b = map (sin(frameCount/4),-1,1,50,255)
  stroke(r,g,b)
  rotate(angle)  //把物件旋轉10度的角度，以原點(0,0) 為基準點
  rect(0-i,0-i,100-mouseX/30,100-mouseY/30,20) //畫一方形，在視窗中間，寬與高為600
  angle = sin(frameCount)* 30
  }
  pop()
}
}

translate(width/2,height/2)
text("CJ",width/2, height/2, 50,50)
points = font.textToPoints("CJ",-190, 60, 150, {
  sampleFactor:0.1//數字越小產生的點數越少，通常為0.1
}); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為產生點數

  translate(CENTER,0)
  rotate(angle)// 旋轉角度
  angle = sin(frameCount)*10 //隨著 frameCount 不斷增加，sin(frameCount)*10 的值會在  -10 到 10 之間週期性變化

//把points陳列顯示文字出來
for (let i=0; i<points.length; i++) { 
  ellipse(points[i].x,points[i].y,15)
  fill("#ffc8dd")
} 
}
