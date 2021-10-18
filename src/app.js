import * as core from "@theatre/core"
import studio from "@theatre/studio"


studio.initialize()

studio.ui.hide()
const proj = core.getProject("My first project")

const sheet = proj.sheet("Scene")
const box = sheet.object("Box", {
    position: {
        x: 0,
        y: 0,
    }
});

const div = document.createElement("div")
div.style.cssText = `
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    `;

setTimeout(() => {
    document.body.appendChild(div)
})

box.onValuesChange((newValue) => {
    div.style.left = newValue.position.x + "px"
    div.style.top = newValue.position.y + "px"
})


div.addEventListener("click", (e)=>{
    sheet.sequence.play({start: 0, end: 3})
});


