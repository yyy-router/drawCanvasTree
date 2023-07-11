const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.translate(canvas.width / 2, canvas.height);
ctx.scale(1, -1);
drawBranch([0, 0], 15, 150, 90)
/**
 * @param {Array} v0 起点坐标
 * @param {Number} thick 树干宽度
 * @param {Number} length 树干长度 
 * @param {Number} dir 倾斜角度
*/
function drawBranch(v0, thick, length, dir) {
    if (thick < 10 && Math.random() < 0.3) {
        return;
    }
    if (thick < 0.2) {
        return;
    }
    // 绘制花朵
    if (thick < 2) {
        ctx.beginPath();
        ctx.arc(...v0, 8, 0, 2 * Math.PI);
        ctx.fillStyle = Math.random() < 0.5 ? "#f40" : "#f1c40f";
        ctx.fill();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(...v0);
    const v1 = [
        v0[0] + length * Math.cos((dir * Math.PI) / 180),
        v0[1] + length * Math.sin((dir * Math.PI) / 180),
    ]
    ctx.lineTo(...v1);
    ctx.strokeStyle = "#34495e";
    ctx.lineCap = "round";
    ctx.lineWidth = thick;
    ctx.stroke();
    //递归绘制左右分枝
    drawBranch(v1, thick * 0.8, length * 0.8, dir + Math.random() * 40);
    drawBranch(v1, thick * 0.8, length * 0.8, dir - Math.random() * 40);
}

