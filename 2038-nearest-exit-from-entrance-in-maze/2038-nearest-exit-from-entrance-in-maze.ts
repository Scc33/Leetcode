const dir = [[0,1], [0,-1], [1,0], [-1,0]];
const wallCell = '+';
const walked = '-';

function nearestExit(maze: string[][], entrance: number[]): number {
    maze[entrance[0]][entrance[1]] = walked;
    let queue = [entrance];
    let steps = 0;
    while (queue.length) {
        let temp = [];
        for (let i = 0; i < queue.length; i++) {
            const [y, x] = queue[i];
            for (const [dy, dx] of dir) {
                const ny = y + dy, nx = x + dx;
                const overBorder = ny < 0 || ny >= maze.length || nx < 0 || nx >= maze[0].length;
                if (overBorder) {
                    continue;
                }
                if (maze[ny][nx] === walked || maze[ny][nx] === wallCell) {
                    continue;
                }
                if (ny === 0 || ny === maze.length - 1 || nx === 0 || nx === maze[0].length - 1) {
                    return steps + 1;
                }
                temp.push([ny,nx])
                maze[ny][nx] = walked;
            }
        }
        steps++;
        queue = temp;
    }
    return -1;
};