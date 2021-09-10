let xs = [];
let w = window.innerWidth;
for (let i = 0; i <= w; i++) {
xs.push(i)
}



const amplitude = 40;
const offset = 50;
let t = 0;

function limiter(value) {

    if (value > amplitude) {
        return amplitude
    } else return value
}


function animate () {

    let points = xs.map(x => {

        let y = offset + amplitude*(Math.sin(x / 80)) * Math.sin(((x+t) / 20));
        return [x,y]
    })

    let path = "M" + points.map(p => {
        return p[0] + "," +p[1]
    }).join("L");

    document.querySelector('path').setAttribute('d', path);

    t += 0.5;
    requestAnimationFrame(animate)
};

animate();