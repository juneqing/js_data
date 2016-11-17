var price = parseFloat(prompt('请输入单价'));
var num = parseFloat(prompt('请输入购买数量'));
var total = parseFloat(prompt('请输入客户所给金额'));

function amount(a, b) {
    var amount = a * b;
    if (total >= amount) {
        if (amount >= 500) {
            return amount * 0.8;
        } else {
            return amount;
        }
    } else {
        alert('请输入正确的金额数字');
    }
}
alert(`
付款总金额:${amount(price, num).toFixed(2)}
找零:${(total - amount(price, num)).toFixed(2)}`) 