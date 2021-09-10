let xs = [];
for (let i = 0; i <= 500; i++) {
xs.push(i)
}

const amplitude = 80;
const offset = 100;
let t = 0;
function animate () {

    let points = xs.map(x => {


        let y = offset + (amplitude-x/4)* Math.sin(((x+t) / 20));
        return [x,y]
    })

    let path = "M" + points.map(p => {
        return p[0] + "," +p[1]
    }).join("L");

    document.querySelector('path').setAttribute('d', path);

    t += 1;
    requestAnimationFrame(animate)
};

animate();