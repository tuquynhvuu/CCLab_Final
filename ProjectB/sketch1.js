    let sagebits = [];
    let sageDead = [];
    let lavendergrains = [];
    let lavDead = [];
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
        player1.move();
        player1.slowDown();
      
        player2.display();
        player2.bounce();
        player2.keyPressed();
        player2.move();
        player2.slowDown();
      
      for (let i = 0; i < sagebits.length; i++) {
        sagebits[i].display();
        sagebits[i].repelledFrom(player1.x, player1.y);
        sagebits[i].repelledFrom(player2.x, player2.y);
        sagebits[i].bounce();
        sagebits[i].move();  
        sagebits[i].slowDown();
        sagebits[i].checkAxis();
    
        if(sagebits[i].axis == true){
          sageDead.push(new Bit(sagebits[i].x, sagebits[i].y));
          sagebits.splice(i, 1);
          sageScore += 5;
        } 
      }
      for (let i = 0; i < sageDead.length; i++) {
        sageDead[i].display();
        sageDead[i].repelledFrom(player1.x, player1.y);
        sageDead[i].repelledFrom(player2.x, player2.y);
        sageDead[i].bounce();
        sageDead[i].move();
        sageDead[i].slowDown();
        sageDead[i].checkAxis();
      }
        
      for (let i = 0; i < lavendergrains.length; i++) {
        lavendergrains[i].display();
        lavendergrains[i].repelledFrom(player1.x, player1.y);
        lavendergrains[i].repelledFrom(player2.x, player2.y);
        lavendergrains[i].bounce();
        lavendergrains[i].move();
        lavendergrains[i].slowDown();
        lavendergrains[i].checkAxis();
        
        if (lavendergrains[i].axis == true){
          lavDead.push(new Grain(lavendergrains[i].x,  lavendergrains[i].y));
          lavendergrains.splice(i, 1);
          lavScore += 5;
        }
      }
      
      for (let i = 0; i < lavDead.length; i++) {
        lavDead[i].display();
        lavDead[i].repelledFrom(player1.x, player1.y);
        lavDead[i].repelledFrom(player2.x, player2.y);
        lavDead[i].bounce();
        lavDead[i].move();
        lavDead[i].slowDown();
        lavDead[i].checkAxis();
      }
      
        for (let i = 0; i < fish.length; i++) {
          fish[i].display();
          fish[i].move();
          fish[i].checkPosition();
          fish[i].checkDistance();
          
         }
        for(let i = fish.length -1; i>= 0; i--){
          if(fish[i].lavAte == true){
            fish.splice(i, 1);
            lavScore += 10;
            player1.size += 5;
            player1.earSize += 3;
            player1.earOuter += 1.5;
            player1.earInner += 1.8;
          }
        }
      
        for(let i = fish.length - 1; i >= 0; i--){
          if(fish[i].sageAte == true){
            fish.splice(i, 1);
            sageScore += 10;
            player2.size += 5;
            player2.earSize += 3;
            player2.earOuter += 1.5;
            player2.earInner += 1.8;
          }
        }
      
        if(frameCount % 780 == 0){
          let fs = new Fish(random(10, 590), random(150, 400));
          fish.push(fs);
        }
    
    for (let i = 0; i < sagebits.length; i++) {
      if(sageScore >= 80) win = true
          if(!win){
            sagebits[i].checkAxis();
            fill(117, 233, 187);
            textSize(15);
            textStyle(BOLD);
            textFont("Courier New")
            text("Sage Score = " + sageScore, 20, 580);
          }
          if(sageScore>= 80){
            fill(25, 19, 67);
            rect(0, 0, 600, 600);
          
      noStroke();
      fill(255);
      circle(random(width), random(height), random(15));
      fill(0);
      circle(random(width), random(height), random(15));
      fill(233, 179, 255);
      circle(random(width), random(height), random(20));
      fill(219, 112, 255);
      circle(random(width), random(height), random(20));
      fill(120, 255, 190);
      circle(random(width), random(height), random(20));
            
      fill(219, 112, 255);
      rect(0, 0, 600, 10);  
      fill(117, 233, 187);
      rect(0, 10, 600, 10);  
      fill(255);
      rect(0, 20, 600, 5);
      fill(255);
      rect(0, 575, 600, 5);
      fill(117, 233, 187);
      rect(0, 580, 600, 10);  
      fill(219, 112, 255);
      rect(0, 590, 600, 10); 
            
            textSize(70);
            textFont("Courier New");
            textStyle(BOLDITALIC);
            fill(255);
            text("SAGE WINS!", 108, 203);
            textSize(20);
            text("Sage Score = " + sageScore, 221, 261);
            text("Lavender Score = " + lavScore, 201, 291);
            textSize(25);
            text("To play again, refresh the page!!", 71, 351)
            
            textSize(70);
            fill(117, 233, 187);
            text("SAGE WINS!", 105, 200);
            textSize(20);
            text("Sage Score = " + sageScore, 220, 260);
            fill(233, 179, 255);
            text("Lavender Score = " + lavScore, 200, 290);
            fill(255, 11, 109);
            textSize(25);
            text("To play again, refresh the page!!", 70, 350)
          }
        }
      
    for (let i = 0; i < lavendergrains.length; i++) {
      if(lavScore >= 80) win = true
          if(!win){
            lavendergrains[i].checkAxis();
            fill(233, 179, 255);
            textSize(15);
            textStyle(BOLD);
            textFont("Courier New")
            text("Lavender Score = " + lavScore, 20, 20);
          }
          if(lavScore>= 80){
            fill(25, 19, 67);
            rect(0, 0, 600, 600);
          
      noStroke();
      fill(255);
      circle(random(width), random(height), random(15));
      fill(0);
      circle(random(width), random(height), random(15));
      fill(233, 179, 255);
      circle(random(width), random(height), random(20));
      fill(219, 112, 255);
      circle(random(width), random(height), random(20));
      fill(120, 255, 190);
      circle(random(width), random(height), random(20));
            
      fill(219, 112, 255);
      rect(0, 0, 600, 10);  
      fill(117, 233, 187);
      rect(0, 10, 600, 10);  
      fill(255);
      rect(0, 20, 600, 5);
      fill(255);
      rect(0, 575, 600, 5);
      fill(117, 233, 187);
      rect(0, 580, 600, 10);  
      fill(219, 112, 255);
      rect(0, 590, 600, 10); 
            
            textSize(70);
            textFont("Courier New");
            textStyle(BOLDITALIC);
            fill(255);
            text("LAVENDER WINS!", 15, 203);
            textSize(20);
            text("Lavender Score = " + lavScore, 191, 261);
            text("Sage Score = " + sageScore, 221, 291);
            textSize(25);
            text("To play again, refresh the page!!", 71, 351)
            
            textSize(70);
            fill(233, 179, 255);
            text("LAVENDER WINS!", 12, 200);
            textSize(20);
            text("Lavender Score = " + lavScore, 190, 260);
            fill(117, 233, 187);
            text("Sage Score = " + sageScore, 220, 290);
            fill(255, 11, 109);
            textSize(25);
            text("To play again, refresh the page!!", 70, 350)
          }
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
        }
      }
    }
    
    class Lavender{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpd = 1;
        this.ySpd = 1;
        this.size = 45;
        this.earSize = 0;
        this.earOuter = 0;
        this.earInner = 0;
      }
      
      display(){
        push();
        
        //ears
        fill(233, 179, 255);
        triangle(this.x-20 - this.earOuter, this.y-12 - this.earOuter, this.x-4 + this.earInner, this.y-15 - this.earInner, this.x-12 - this.earOuter, this.y-35 - this.earSize);
        triangle(this.x+4 - this.earInner, this.y-15 - this.earInner, this.x+20 + this.earOuter, this.y-12 - this.earOuter, this.x+12 + this.earOuter, this.y-35 - this.earSize);
      
        //head
        fill(233, 179, 255);
        circle(this.x, this.y, this.size);
      
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
      
      move(){
        this.x += this.xSpd;
        this.y += this.ySpd;
      }
      
      slowDown() {
        this.xSpd = this.xSpd * 0.1;
        this.ySpd = this.ySpd * 0.1; 
      }
    }
    
    class Sage{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpd = 1;
        this.ySpd = 1;
        this.size = 45;
        this.earSize = 0;
        this.earOuter = 0;
        this.earInner = 0;
      }
      
      display(){
        push();
        //ears
      fill(117, 233, 187);
      triangle(this.x-20 - this.earOuter, this.y-12 - this.earOuter, this.x-4 + this.earInner, this.y-15 - this.earInner, this.x-12 - this.earOuter, this.y-35 - this.earSize);
        triangle(this.x+4 - this.earInner, this.y-15 - this.earInner, this.x+20 + this.earOuter, this.y-12 - this.earOuter, this.x+12 + this.earOuter, this.y-35 - this.earSize);
      
      //head
      fill(117, 233, 187);
      circle(this.x, this.y, this.size);
      
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
      
      move(){
        this.x += this.xSpd;
        this.y += this.ySpd;
      }
      
      slowDown() {
        this.xSpd = this.xSpd * 0.1;
        this.ySpd = this.ySpd * 0.1; 
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
        fill(random(100, 255), random(50, 255), random(200, 255));
        triangle(this.x-20, this.y+10, this.x-20, this.y-10, this.x-8, this.y);
        ellipse(this.x, this.y, 20, 15);
        fill(255);
        circle(this.x+4, this.y, 6);
        fill(0);
        circle(this.x+4, this.y, 2);
        pop();
      }
      
      move(){
        this.dist = dist(this.x, this.y, player1.x, player1.y);
        this.d = dist(this.x, this.y, player2.x, player2.y);
      }
      
      checkPosition(){
        if(this.dist < 20){
          this.lavAte = true;
        }
      }
      
      checkDistance(){
        if(this.d < 20){
          this.sageAte = true;
        }
      }
    }