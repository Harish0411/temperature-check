let temp = Number(prompt("Enter temperature"));

if(temp < 0){
     document.write(`${temp} is freezing weather `)
}
else if(temp>=0 && temp <=10){
     document.write(`${temp} is very cold weather`);
}
else if(temp>10 && temp<=20){
     document.write(`${temp} is cold weather`);
}
else if(temp>20 && temp <= 30){
     document.write(`${temp} is normal weather`)
}
else if(temp>30 && temp < 40){
     document.write(`${temp} is hot weather`)
}
else {
     document.write(`${temp} is very hot weather`);
}