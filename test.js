const n = 23
let str = ''
function reverStr(str) {
    return str.split("-").reverse().join("-");
}
if (n===1){console.log('1');}
else if (1 < n && n < 1000){
  console.log('1');
  for(i=1;i<n;i++){
    if(i%2){
    str = str + (i).toString() +'-';
    console.log(reverStr(str+(i+1)))
    }
    else{
    str = str + (i).toString() +'-';
    console.log(str+(i+1))
    }
  } 
}
else {console.log('Vrong number!')}
