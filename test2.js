const n = 23
let str = ''
if (n === 1) { console.log('1'); } else if (1 < n && n < 1000) {
  console.log('1');
  for (i = 2; i <= n; i++) {

    if (i % 2) {

      for (j = 1; j <= i; j++) {
        str = str  +  (j).toString() + '-';
      }
    } else {
      for (k = i; k >= 1; k--) {
        str = str + (k).toString() + '-';
      }
    }
    console.log(str.substring(0, str.length-1));
    str = '';
  }
} else { console.log('Vrong number!') }
