var a: number = 2;
var b: number = 3;
var str


//可选参数
function add2(a?: number, b?: number) {
    if (!a) a = 0;
    if (!b) b = 0;
    return a + b;
}
add2();


//默认参数
