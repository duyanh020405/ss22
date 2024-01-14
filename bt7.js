var a = parseFloat(prompt("nhap a"));
var b = parseFloat(prompt("nhap b"));
var c = parseFloat(prompt("nhap c"));
var denta = b*b -(4*a*c);
if (denta<0){
    console.log('phuong trinh vo nghiem')
}
else if (denta==0){
    var x = -b/2*a;
    console.log(` a = b =${x}`);
}
else {
    var j = (-b-Math.sqrt(denta))/2*a;
    var k = (-b+Math.sqrt(denta))/2*a;
    console.log(` a =${j}`);
    console.log(`  b =${k}`);

}