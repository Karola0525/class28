class Cannon{
    constructor(x,y,width, heigth){
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=heigth;
    }

    display(){
        fill("black");
        rect(-10,-20,this.width,this.heigth);
        arc(this.x-40,this.y+80,180,230,PI,TWO_PI);
        noFill();
    }
}