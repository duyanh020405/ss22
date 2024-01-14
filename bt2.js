var a = parseFloat(prompt("nhap a"));
var b = parseFloat(prompt("nhap b"));
var c = parseFloat(prompt("nhap c"));
if (a >0 && b > 0 && c >0){
    if (a+b>c|| a+c>b ||b+c>a){
        console.log('tam giac hop le')
    }
    else{
        console.log('tam giac 0 hop le')
    }
}
else {
    console.log('tam giac 0 hop le')
}
