import _ from 'lodash';
const Particle = require('./particle');

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 80) * (canvas.width / 80)
    }

    window.addEventListener('mousemove', event => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
        canvas.width = innerHeight;
        canvas.height = innerHeight;
        init();
    });

    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // Create Particle Array

    const init = () => {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 20000;

        for(let i=0; i < numberOfParticles; i++){
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2)-(size *2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2)-(size *2)) + size * 2);
            let dirX = Math.random() * 2 - 1;
            let dirY = Math.random() * 2 - 1;
            let color = '#333f41';

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
                    ctx.strokeStyle = 'rgba(51,63,65,' + opacity + ')';
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

    // Handle Click
    

    // Buttons handler
    document.getElementById('button-projects').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'flex';
    })

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'none';
    })
})