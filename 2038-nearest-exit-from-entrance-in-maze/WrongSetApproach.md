function nearestExit(maze: string[][], entrance: number[]): number {
    const emptyCell = '.';
    let queue = [entrance];
    let numberSteps = 0;
    const visited = new Set([]);
    while (queue.length) {
        let temp = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (visited.has(node)) {
                break;
            } else {
                visited.add(node);
            }
            console.log(node, queue, visited);
            const up = node[0] - 1;
            const down = node[0] + 1
            const left = node[1] - 1;
            const right = node[1] + 1;
            if (down < maze.length && maze[down][node[1]] === emptyCell) {
                temp.push([down, node[1]]);
            }
            if (up >= 0 && maze[up][node[1]] === emptyCell) {
                temp.push([up, node[1]]);
            }
            if (left >= 0 && maze[node[0]][left] === emptyCell) {
                temp.push([node[0], left]);
            }
            if (right < maze[0].length && maze[node[0]][right] === emptyCell) {
                temp.push([node[0], right]);
            }
        }
        queue = temp;   
        numberSteps++;     
    }
    return -1;
};

... sort of the right idea but the set doesn't work as expected
