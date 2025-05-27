function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let countCanFit = 0;
    let lastPlanted = -10;
    let searching = 0;
    while (searching < flowerbed.length && countCanFit < n) {
            console.log(lastPlanted, searching)
        if (flowerbed[searching]) {
            lastPlanted = searching;
        }
        if (lastPlanted < searching - 1 && (flowerbed[searching+1] === 0 || flowerbed[searching+1] === undefined)) {
            lastPlanted = searching;
            countCanFit++;
        }
        searching++;
    }
    return countCanFit >= n;
};