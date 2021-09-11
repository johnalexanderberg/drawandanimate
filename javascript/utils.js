const pi = Math.PI;

const container = document.querySelector('body');
let distance = 1;
const easing = (num) => Math.pow(num, 1.5);

//returns y point of wave
function sineWave(x, amplitude, period, time){
const windowWidthFactor = window.innerWidth/1000 + 1;
    return amplitude*Math.cos(x*windowWidthFactor/20*(easing(distance)*0.3+0.1)) * Math.sin((x+time) * (pi/period))
}

// outputs distance from center, range 0-1
function calculateDistance([x, y]) {
    const center = [window.innerWidth, 0];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);

    return hypot / maxHypot;
}



const handleMove = ({ clientX, clientY }) => {
    distance = (easing(calculateDistance([clientX, clientY])));
};

container.addEventListener("mousemove", handleMove);



