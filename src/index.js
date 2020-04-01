import _ from 'lodash';
const Particle = require('./particle');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    // Create Particle Array

    const init = () => {
        let numberOfParticles = (canvas.height * canvas.width) / 15000;

        for(let i=0; i < numberOfParticles; i++){
            let size = (Math.random() * 3) + 1;
            let x = (Math.random() * ((innerWidth - size * 2)-(size *2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2)-(size *2)) + size * 2);
            let dirX = Math.random() * 3 - 1.5;
            let dirY = Math.random() * 3 - 1.5;
            let color = '#1C1C1E';

            particlesArray.push(new Particle(x, y, dirX, dirY, size, color, canvas, ctx))
            
        }

    }

    const connect = () => {
        let opacity = 1;
        for(let a = 0; a < particlesArray.length; a ++){
            for(let b = a; b < particlesArray.length; b++){
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y)) 
                
                if(distance < (canvas.width/10) * (canvas.height/10)){
                    opacity = 1 - (distance/20000)
                    ctx.strokeStyle = 'rgba(140,85,31,' + opacity + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                    ctx.stroke();
                }
            }
        }
    }

    const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for(let i=0; i < particlesArray.length; i++){
            particlesArray[i].update();
        }

        connect()
    }


    init();
    animate();

    // Buttons handler
    document.getElementById('button-projects').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'flex';
    })

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'none';
    })
})