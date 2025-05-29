class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitude = 0
        maxAltitude = altitude
        for g in gain:
            altitude += g
            maxAltitude = max(altitude, maxAltitude)
        return maxAltitude