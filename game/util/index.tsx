export const clearBoard = (context) => {
    if (context) {
        context.clearReact(0, 0, 240, 380);
    }
}

export const drawObject = (context, objectBody, fillColor, strokeStyle) => {
    if (context) {
        objectBody.forEach(object => {
            context.fillStyle = fillColor;
            context.strokeStyle = strokeStyle;
            context?.fillRect(object.x, object.y, 20, 20);
            context?.strokeRect(object.x, object.y, 20, 20);
        });
    }
}

export const HasSnakeCollided = (
    snake,
    currentHeadPos
  ) => {
    let flag = false;
    snake.forEach((pos, index) => {
      if (
        pos.x === currentHeadPos.x &&
        pos.y === currentHeadPos.y &&
        index !== 0
      ) {
        flag = true;
      }
    });
  
    return flag;
  };
