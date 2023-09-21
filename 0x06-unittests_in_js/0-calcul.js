function calculateNumber(a,b) {
    const num_a = Math.round(a);
    const num_b = Math.round(b);
    const ans = num_a + num_b;
    return ans;
}

module.exports = calculateNumber;