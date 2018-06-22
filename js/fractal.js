
class Fractal {
    constructor(){
    }

    drawLine(c,x1,y1,x2,y2){
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.strokStyle = 'black';
        c.lineWidth = 5;
        c.stroke(); 
    }
    //this is a turing machine that builds a fractal tree
    branch(c, branchLength){
        c.beginPath();
        this.drawLine(c,0,0,0,-branchLength);
        c.translate(0, -branchLength);
        if(branchLength > 10){
            c.save();
            c.rotate(Math.PI/4);
            this.branch(c, branchLength * 0.75)
            c.restore();
            c.save();
            c.rotate(-Math.PI/4);
            this.branch(c, branchLength * 0.75)
            c.restore();
        }
    }
    
    draw(tempCtx){
        tempCtx.translate(tempCtx.canvas.width/2, tempCtx.canvas.height)
        this.branch(tempCtx, tempCtx.canvas.height/4);
        // c.rotate(Math.PI/2);
    }
}

export default Fractal;