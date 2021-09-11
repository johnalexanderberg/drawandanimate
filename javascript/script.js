const svgMaxWidth = 800;
const xPoints = [];
const amplitude = 20;
const padding = 5;
const offset = amplitude+padding;

//this is to set the svg height to match the animated wave amplitude.
document.querySelector('svg').setAttribute("height", `${amplitude*2+(padding*2)}px`);

for (let i = 0; i <= svgMaxWidth; i++) {
    xPoints.push(i)
}


let time = 0;



function animate () {

    //map out sinewave points
    let points = xPoints.map(x => {

        let y = sineWave(x,amplitude, 20, time, window.innerWidth);
        return [x,y + offset]
    })

    //format to svg
    let path = "M" + points.map(p => {
        return p[0] + "," +p[1]
    }).join("L");

    //apply to svg
    document.querySelector('.slink__animation').setAttribute('d', path);

    //speed of animation
    time += 0.3 * distance;

    //call this function before next frame update
    requestAnimationFrame(animate)
}

//start animation
animate();