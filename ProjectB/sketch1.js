let sagebits = [];
let lavendergrains = [];
let totalNum = 7;
let player1;
let player2;
let fish = [];
let win = false;
let lavScore = 0;
let sageScore = 0;
    
    function setup() {
      let canvas = createCanvas(600, 600);
      canvas.parent("canvasContainer");

      for (let i = 0; i < totalNum; i++) {
          sagebits.push(new Bit(90 + i * 70, 100));
        }
      
      for (let i = 0; i < totalNum; i++){
          lavendergrains.push(new Grain(90 + i * 70, 500));
      }
      
      player1 = new Lavender(300, 200);
                          //300, 200             
      player2 = new Sage(300, 410);
      
      let fs = new Fish(random(10, 590), random(150, 400));
      fish.push(fs);
      
      
    }
    
    function draw() {
      background(0);
      
      fill(233, 179, 255);
      rect(0, 130, 600, 10);
      
      fill(117, 233, 187);
      rect(0, 460, 600, 10);
      
        player1.display();
        player1.bounce();
        player1.keyPressed();
        //player1.keyReleased();
      
        player2.display();
        player2.bounce();
        player2.keyPressed();
      //  player2.keyReleased();
      
      for (let i = 0; i < sagebits.length; i++) {
        sagebits[i].display();
        sagebits[i].repelledFrom(player1.x, player1.y);
        sagebits[i].repelledFrom(player2.x, player2.y);
        sagebits[i].bounce();
        sagebits[i].move();  
        sagebits[i].slowDown();
        sagebits[i].checkAxis();{
          if(sageScore >= 200) win = true
          if(!win){
            sagebits[i].checkAxis();
            fill(117, 233, 187);
            textSize(15);
            textStyle(BOLD);
            textFont("Courier New")
            text("Sage Score = " + sageScore, 20, 580);
          }
          if(sageScore>= 200){
            fill(255);
            textSize(30);
            textFont("Courier New");
            textStyle(BOLD);
            text("Sage Wins!", 250, 300);
          }
        }
      }
      
      for (let i = 0; i < lavendergrains.length; i++) {
        lavendergrains[i].display();
        lavendergrains[i].repelledFrom(player1.x, player1.y);
        lavendergrains[i].repelledFrom(player2.x, player2.y);
        lavendergrains[i].bounce();
        lavendergrains[i].move();
        lavendergrains[i].slowDown();
        lavendergrains[i].checkAxis();{
          if(lavScore >= 200) win = true
          if(!win){
            lavendergrains[i].checkAxis();
            fill(233, 179, 255);
            textSize(15);
            textStyle(BOLD);
            textFont("Courier New")
            text("Lavender Score = " + lavScore, 20, 20);
          }
          if(lavScore>= 200){
            fill(255);
            textSize(30);
            textFont("Courier New");
            textStyle(BOLD);
            text("Lavender Wins!", 250, 300);
          }
        }
      }
      
        for (let i = 0; i < fish.length; i++) {
          fish[i].display();
          fish[i].move();
          fish[i].checkPosition();
          
          if(fish.x == player1.x && fish.y == player1.y){
            fish.splice(i, 1);
            lavScore += 10;
      }
          
         }
      
        for(let i = fish.length -1; i>= 0; i--){
          if(fish[i].checkIfEaten == true){
            fish.splice(i, 1);
          }
        }
      
        if(frameCount % 1200 == 0){
          let fs = new Fish(random(10, 590), random(150, 400));
      fish.push(fs);
        }
          
    }
    
    class Bit{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.dia = 14;
        this.xSpd = 2;
        this.ySpd = 2;
        this.axis = false;
      }
      
      display(){
        push();
        translate(this.x, this.y);
    //    noStroke();
        
        fill(117, 233, 187);
        textSize(15);
        textStyle(BOLD);
        textFont("Courier New")
        text("Sage Score = " + sageScore, 20, 580);
        
        //petals
        
        fill(117, 233, 187);
        circle(-6, -7, this.dia);
        circle(6, 7, this.dia);
        fill(108, 205, 166);
        circle(-6, 7, this.dia);
        circle(6, -7, this.dia);
        
        fill(170, 255, 226);
        circle(0, 0, 12);
        fill(0);
        circle(0, 0, 5);
        
        pop();
      }
      
      repelledFrom(targetX, targetY) {
        let distance = dist(this.x, this.y, targetX, targetY);
        if (distance < 45) {
         let xAcc = (targetX - this.x) * -0.07;
         let yAcc = (targetY - this.y) * -0.07; 
         this.xSpd += xAcc;
         this.ySpd += yAcc;
        }
      }
      
      slowDown() {
        this.xSpd = this.xSpd * 0.1;
        this.ySpd = this.ySpd * 0.1; 
      }
      
      bounce() {
        if (this.x < 15) {
         this.x = 15;
          this.ySpd = this.ySpd * -1;
        }
         if (this.x > 585) {
          this.x = 585;
          this.ySpd = this.ySpd * -1;
        }
        if (this.y < 50) {
         this.y = 50;
          this.ySpd = this.ySpd * -1;
        }
         if (this.y > 550) {
          this.y = 550;
          this.ySpd = this.ySpd * -1;
        }
      }
      
      move() {
        this.x += this.xSpd;
        this.y += this.ySpd;
      }
      
      checkAxis(){
        if(this.y > 460){
          this.axis = true
          sageScore+=1;
        }
      }
      
    }
    
    class Grain{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.dia = 14;
        this.xSpd = 2;
        this.ySpd = 2;
        this.axis = false;
      }
      
      display(){
        push();
        translate(this.x, this.y);
        //noStroke();
        
        fill(233, 179, 255);
        textSize(15);
        textStyle(BOLD);
        textFont("Courier New")
        text("Lavender Score = " + lavScore, 500, 580);
        
        fill(233, 179, 255);
        circle(-6, -7, this.dia);
        circle(6, 7, this.dia);
        fill(198, 138, 223);
        circle(-6, 7, this.dia);
        circle(6, -7, this.dia);
        
        fill(215, 190, 225);
        circle(0, 0, 12);
        fill(0);
        circle(0, 0, 5);
        pop();
      }
      
      repelledFrom(targetX, targetY) {
        let distance = dist(this.x, this.y, targetX, targetY);
        if (distance < 45) {
         let xAcc = (targetX - this.x) * -0.07;
         let yAcc = (targetY - this.y) * -0.07; 
         this.xSpd += xAcc;
         this.ySpd += yAcc;
        }
      }
      
      slowDown() {
        this.xSpd = this.xSpd * 0.1;
        this.ySpd = this.ySpd * 0.1; 
      }
      
      bounce() {
        if (this.x < 15) {
         this.x = 15;
          this.ySpd = this.ySpd * -1;
        }
         if (this.x > 585) {
          this.x = 585;
          this.ySpd = this.ySpd * -1;
        }
        if (this.y < 50) {
         this.y = 50;
          this.ySpd = this.ySpd * -1;
        }
         if (this.y > 550) {
          this.y = 550;
          this.ySpd = this.ySpd * -1;
        }
      }
      
      move() {
        this.x += this.xSpd;
        this.y += this.ySpd;
      }
      
      checkAxis(){
        if(this.y < 130){
          this.axis = true
          lavScore+=1;
        }
      }
      
    }
    
    class Lavender{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpd = 2;
        this.ySpd = 2;
      }
      
      display(){
        push();
        //translate(this.x, this.y);
        
        //ears
        fill(233, 179, 255);
        triangle(this.x-20, this.y-12, this.x-4, this.y-15, this.x-12, this.y-35);
        triangle(this.x+4, this.y-15, this.x+20, this.y-12, this.x+12, this.y-35);
      
        //head
        fill(233, 179, 255);
        circle(this.x, this.y, 45);
      
        //eyes
        fill(255);
        ellipse(this.x-8, this.y-2, 7, 10);
        ellipse(this.x+8, this.y-2, 7, 10);
      
        //pupils
        fill(0);
        ellipse(this.x-8, this.y-2, 3, 5);
        ellipse(this.x+8, this.y-2, 3, 5);
      
        //mouth
        triangle(this.x-3, this.y+8, this.x+3, this.y+8, this.x, this.y+13);
      
        //whiskers
        line(this.x-7, this.y+9, this.x-15, this.y+8);
        line(this.x-7, this.y+11, this.x-15, this.y+12);
        line(this.x+7, this.y+9, this.x+15, this.y+8);
        line(this.x+7, this.y+11, this.x+15, this.y+12);
      
        pop();
        
      }
      
      bounce() {
        if (this.x < 22.5) {
         this.x = 22.5;
          this.ySpd = this.ySpd * -1;
        }
         if (this.x > 577.5) {
          this.x = 577.5;
          this.ySpd = this.ySpd * -1;
        }
        if (this.y < 22.5) {
         this.y = 22.5;
          this.ySpd = this.ySpd * -1;
        }
         if (this.y > 577.5) {
          this.y = 577.5;
          this.ySpd = this.ySpd * -1;
        }
      }
      
      keyPressed (){
       // console.log(key, "pressed");
       if (keyIsDown(RIGHT_ARROW)) {
        this.x += 2; 
       } else if (keyIsDown(LEFT_ARROW)) {
         this.x -= 2;
       } else if (keyIsDown(UP_ARROW)) {
         this.y -= 2; 
       } else if (keyIsDown(DOWN_ARROW)) {
         this.y += 2; 
       }
      }  
      
      keyReleased(){
       // console.log(key, "released");
        if(keyIsDown(RIGHT_ARROW)){
          this.x += 0;
        } else if (keyIsDown(LEFT_ARROW)){
          this.x -= 0;
        } else if (keyIsDown(UP_ARROW)){
          this.y -= 0;
        } else if (keyIsDown(DOWN_ARROW)){
          this.y+= 0;
        }
      }
      
      
    }
    
    class Sage{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpd = 2;
        this.ySpd = 2;
      }
      
      display(){
        push();
        
        //ears
      fill(117, 233, 187);
      triangle(this.x-20, this.y-12, this.x-4, this.y-15, this.x-12, this.y-35);
      triangle(this.x+4, this.y-15, this.x+20, this.y-12, this.x+12, this.y-35);
      
      //head
      fill(117, 233, 187);
      circle(this.x, this.y, 45);
      
      //eyes
      fill(255);
      ellipse(this.x-8, this.y-2, 7, 10);
      ellipse(this.x+8, this.y-2, 7, 10);
      
      //pupils
      fill(0);
      ellipse(this.x-8, this.y-2, 3, 5);
      ellipse(this.x+8, this.y-2, 3, 5);
      
      //mouth
      triangle(this.x-3, this.y+8, this.x+3, this.y+8, this.x, this.y+13);
      
      //whiskers
      line(this.x-7, this.y+9, this.x-15, this.y+8);
      line(this.x-7, this.y+11, this.x-15, this.y+12);
      line(this.x+7, this.y+9, this.x+15, this.y+8);
      line(this.x+7, this.y+11, this.x+15, this.y+12);
        
      }
      
      bounce() {
        if (this.x < 22.5) {
         this.x = 22.5;
          this.ySpd = this.ySpd * -1;
        }
         if (this.x > 577.5) {
          this.x = 577.5;
          this.ySpd = this.ySpd * -1;
        }
        if (this.y < 22.5) {
         this.y = 22.5;
          this.ySpd = this.ySpd * -1;
        }
         if (this.y > 577.5) {
          this.y = 577.5;
          this.ySpd = this.ySpd * -1;
        }
      }
      
      keyPressed (){
       // console.log(key, "pressed");
       if (keyIsDown(68)) {
        this.x += 2; 
       } else if (keyIsDown(65)) {
         this.x -= 2;
       } else if (keyIsDown(87)) {
         this.y -= 2; 
       } else if (keyIsDown(83)) {
         this.y += 2; 
       }
      }  
      
      
      
    }
    
    class Fish{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.food = 0;
        this.dist = 0;
        this.checkEaten = false;
      }
      
      display(){
        
        push();
        fill(random(255), random(255), random(255));
        triangle(this.x-20, this.y+10, this.x-20, this.y-10, this.x-8, this.y);
        ellipse(this.x, this.y, 20, 15);
        pop();
      }
      
      move(){
        this.dist = dist(this.x, this.y, player1.x, player1.y);
        // this.d = dist(this.x, this.y, player2.x, player2.y);
      }
      
      // checkIfEaten(){
      //   if(this.dist < 5){
      //     this.checkEaten = true;
      //   }
      // }
      
      checkPosition(){
        if(this.dist < 1){
          this.checkEaten = true;
        }
      }
      
    }
    
    