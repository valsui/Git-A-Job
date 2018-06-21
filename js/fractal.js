
class Fractal {
    constructor(canvas, context){
        // this.x = x,
        // this.y = y,
        this.canvas = canvas;
        this.context = context;
        // debugger;
    }

    drawLine(c,x1,y1,x2,y2){
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.strokStyle = 'black';
        c.lineWidth = 5;
        c.stroke(); 
    }

    branch(c, branchLength){
        c.beginPath();
        this.drawLine(c,0,0,0,-branchLength);
        c.translate(0, -branchLength);
        if(branchLength > 4){
            c.save();
            c.rotate(Math.PI/4);
            this.branch(c, branchLength * 0.67)
            c.restore();
            c.save();
            c.rotate(-Math.PI/4);
            this.branch(c, branchLength * 0.67)
            c.restore();
        }
    }
    
    draw(c){
        c.translate(this.canvas.width/2, this.canvas.height/2)
        this.branch(c, this.canvas.height/3);
        // c.rotate(Math.PI/2);
    }
}

export default Fractal;