function dailyTemperatures(temperatures: number[]): number[] {
    const output = new Array(temperatures.length).fill(0);
    let monotonicStack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (monotonicStack.length > 0 && temperatures[i] > temperatures[monotonicStack[monotonicStack.length-1]]) {
            let day = monotonicStack.pop()
            output[day] = i - day
        }
        monotonicStack.push(i)
    }
    return output
};