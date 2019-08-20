const canvasDom = document.getElementById('canvas');
const context = canvasDom.getContext('2d');
context.font = '38px Arial';
context.fillStyle = 'cornflowerblue';
context.fillText('Hello World', canvasDom.width / 2 - 150, canvasDom.height / 2 + 15);
