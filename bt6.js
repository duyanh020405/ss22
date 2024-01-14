let a = parseInt(prompt("nhap a la 1 so >999 va <10000"));
let nghin =parseInt(a/1000);
let tram = parseInt((a/100)%10);
let chuc = parseInt((a/10)%10);
let donvi = a%10;

 if (a>999 &&a<10000){
    console.log(nghin);
    console.log(tram);
    console.log(chuc);
    console.log(donvi);
}
else {'nhap lai'}

