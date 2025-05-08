let canvas = document.getElementById("render");

function supportsCanvasContext() {
    if (canvas.getContext) {
        const supported = true;
        return supported;
    } else {
        const supported = false;
        return supported;
    }
}

function drawQuad(x, y, x2, y2) {
    //set corner X to x2 and Y to y
    const cornerX = x2
    const cornerY = y
    const cornerX2 = x
    const cornerY2 = y2
    drawTRI(x, y, x2, y2, cornerX, cornerY);
    drawTRI(x, y, x2, y2, cornerX2, cornerY2);
}

function drawTRI(x, y, x2, y2, x3, y3) {
    const ctx = canvas.getContext("2d");
    //console.warn("You're good to go! This device supports the essentials of HTML <canvas>!");
    //console.error("ERROR: USER TOO OBESE. LOSE WEIGHT TO RESOLVE. (random joke msg)")
    
    ctx.beginPath();
    ctx.moveTo((canvas.width / 2) + x,(canvas.height / 2) + y);
    ctx.lineTo((canvas.width / 2) + x2,(canvas.height / 2) + y2);
    ctx.lineTo((canvas.width / 2) + x3,(canvas.height / 2) + y3);
    ctx.fill();
    ctx.closePath();
}

canvas.height = screen.height;
canvas.width = screen.width;