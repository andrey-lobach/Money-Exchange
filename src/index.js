// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if (currency <= 0) return obj;
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    if (Math.trunc(currency / 50)) {
        obj.H = Math.trunc(currency / 50);
        currency -= 50 * obj.H;
    }
    if (Math.trunc(currency / 25)) {
        obj.Q = Math.trunc(currency / 25);
        currency -= 25 * obj.Q;
    }
    if (Math.trunc(currency / 10)) {
        obj.D = Math.trunc(currency / 10);
        currency -= 10 * obj.D;
    }
    if (Math.trunc(currency / 5)) {
        obj.N = Math.trunc(currency / 5);
        currency -= 5 * obj.N;
    }
    if (currency) obj.P = currency;
    return obj;




}
