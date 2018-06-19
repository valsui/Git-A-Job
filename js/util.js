
export const randomIntfromRange = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

export const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
}

export const distance = (x1, y1, x2, y2) => {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

//playerPos = {
//     x: player.x,
//     y: player.y
// }
//mousePos = {
//     x: player.x,
//     y: player.y
// }
export const mouseangle = (mousePos, playerPos) => {
    const delta_x = (mousePos.x - playerPos.x);
    const delta_y = (mousePos.y - playerPos.y);
    const alpha = Math.atan2(delta_y, delta_x);
    return alpha;
    // if(alpha )
}