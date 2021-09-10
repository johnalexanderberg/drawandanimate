

function windowInnerWidth() {
    return window.innerWidth*0.8;
}



const amplitude = 40;
const offset = 50;
let t = 0;


function animate () {



    let xs = [];
    let animationWidth = windowInnerWidth();

    for (let i = 0; i <= animationWidth; i++) {
        xs.push(i)
    }


    let points = xs.map(x => {

        let y = offset + amplitude*(Math.sin((x / animationWidth/3 * 170))) * Math.sin(((t+x/3) / 20));
        return [x,y]
    })

    let path = "M" + points.map(p => {
        return p[0] + "," +p[1]
    }).join("L");

    document.querySelector('path').setAttribute('d', path);

    t += 0.5;
    requestAnimationFrame(animate)
}

animate();