if (supportsCanvasContext()) {
    console.warn("You're good to go! This device supports the essentials of HTML <canvas>!");
    //console.error("ERROR: USER TOO OBESE. LOSE WEIGHT TO RESOLVE. (random joke msg)")
    drawQuad(50, -50, -50, 50);

} else {
    alert("Hey! Your device doesnt support the HTML <canvas> element! (well, it does, but you can't do much.) Sorry!")
}