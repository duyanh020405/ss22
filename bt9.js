var  day = parseInt(prompt("nhap ngay"));
var  month = parseInt(prompt("nhap thang"));
var  year = parseInt(prompt("nhap nam"));
if( year >0 ){
    if( month ==1 || month ==3 || month ==5  || month ==7 || month ==8  || month ==10 || month==12  )
{
    if(day>0 && day<=31 ){
        console.log(' ngay thang hop le');
    }
    else {
        console.log(' ngay thang 0 hop le');
    }

}
else if ( month == 2){
    if(day<30 && day>0 ){
        console.log(' ngay thang hop le');
    }
    else {
        console.log(' ngay thang 0 hop le');
    }

}
else if (month=4 || month==6 || month==9 || month==11){
    if (day>0 && day<=30){
        console.log(' ngay thang hop le');
    }
    else {
        console.log(' ngay thang 0 hop le');
    }

}
else{
    console.log(' ngay thang 0 hop le');  
}
}