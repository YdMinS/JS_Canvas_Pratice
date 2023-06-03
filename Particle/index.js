const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const canvasWidth = 300;
const canvasHeight = 300;

// Script에서 CSS 값 설정하기
canvas.style.width = canvasWidth + 'px';
canvas.style.height = canvasHeight + 'px';

// Canvas의 고유 값 설정하기
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// 사각형 그리기
ctx.fillRect(10, 10, 50, 50);