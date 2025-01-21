function checkQuery(n) {
    //nが正常でない時
    if (!/^\d+$/.test(n) || parseInt(n, 10) <= 0) {
        return false
    }
}
module.exports = checkQuery;