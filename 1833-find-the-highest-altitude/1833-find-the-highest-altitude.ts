function largestAltitude(gain: number[]): number {
    let altitude = 0;
    let maxAltitude = altitude;
    for (const change of gain) {
        altitude += change;
        maxAltitude = Math.max(altitude, maxAltitude);
    }
    return maxAltitude;
};