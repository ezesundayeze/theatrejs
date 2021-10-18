import * as core from "@theatre/core";
import studio from "@theatre/studio";
import state from "./state.json"
import "foot"

studio.initialize()


const project = core.getProject("Animation Practice", { state });
const sheet = project.sheet("Animate");
const ballObj = sheet.object("Animate", {
    y: 100,
    x: 150,
    angle: 0,
    stretch:1
});



const boxDiv = document.getElementById("box");
const ball = document.createElement("img");
ball.src = "football.png";
boxDiv.appendChild(ball);
ball.style.position = "absolute";
ball.style.width = "100px";
ball.style.height = "100px";

ball.addEventListener("click", () => {
    const sequence = sheet.sequence.play({ iterationCount: Infinity, rate: 1, range: [0, 6], direction: "reverse" })
});

ballObj.onValuesChange(({ y, x, angle, stretch }) => {
    console.log(sheet.sequence.position);

boxDiv.style.cssText = `
    transform: translateX(${x}px) rotate(${angle}deg) translateY(${y}px) scale(${1 / stretch}, ${stretch});
`;
});