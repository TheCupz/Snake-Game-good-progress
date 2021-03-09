class Snake{
    constructor(){
        this.x = 0
        this.y = 0
        this.xSpeed = 0
        this.ySpeed = 0
        this.total = 0 
        this.score = 0
    }
    show() {
        fill(255);
        rect(this.x,this.y,20,20);
    }
    dir(x,y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
    update() {
        this.x = this.x+this.xSpeed;
        this.y = this.y+this.ySpeed;
    }

    eat(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y)
        if(d<1) {
            this.total++
            this.score++
            return true;
        }
        else{
            return false;
        }
    }
}