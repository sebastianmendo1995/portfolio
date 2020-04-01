
class Particle {
    constructor(x, y, dirX, dirY, size, color, canvas, ctx){
        this.x = x; 
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.size = size;
        this.color = color;
        this.canvas = canvas
        this.ctx = ctx
        
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update(){

        // Bounce particles
        if(this.x > this.canvas.width || this.x < 0){
            this.dirX = -this.dirX;
        }
        if(this.y > this.canvas.height || this.y < 0){
            this.dirY = -this.dirY
        }
        
        // Check collision detection - mouse position / particle position
        // let dx = this.mouse.x - this.x;
        // let dy = this.mouse.y - this.y;

        // let distance = Math.sqrt(dx ** 2 + dy ** 2);
        
        // if(distance < this.mouse.radius + this.size){
        //     if(this.mouse.x < this.x && this.x < this.canvas - this.size * 5){
        //         this.x += 5;
        //     }

        //     if(this.mouse.x > this.x && this.x > this.size * 5){
        //         this.x -= 5;
        //     }

        //     if(this.mouse.y < this.y && this.y < this.canvas.height - this.size * 5){
        //         this.y += 5;
        //     }

        //     if(this.mouse.y > this.y && this.y > this.size * 5){
        //         this.y -= 5;
        //     }
        // }

        // Move particle
        this.x += this.dirX;
        this.y += this.dirY;

        // Draw particle
        this.draw();

    }
}

module.exports = Particle;