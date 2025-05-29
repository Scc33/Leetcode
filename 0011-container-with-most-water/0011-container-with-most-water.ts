function maxArea(height: number[]): number {
    let start = 0;
    let finish = height.length - 1;
    let maxWater = (finish - start) * Math.min(height[start], height[finish]);
    while (start < finish) {
        const waterAmount = (finish - start) * Math.min(height[start], height[finish]);
        if (waterAmount > maxWater) {
            maxWater = waterAmount;
        }
        if (height[start] < height[finish]) {
            start++;
        } else {
            finish--;
        }
    }
    return maxWater;
};
