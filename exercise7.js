// 1. Menyusun Barisan Bintang
var rows1 = 5;
var bintang = "*";
var i =1;

while(i <= rows1){
  console.log(bintang);
  i++;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 0;
var kolom = 0;

for(rows2 = 1; rows2 <= 5; rows2++){
  bintang += '*';
}
for(kolom = 1; kolom <= 5; kolom++){
  console.log(bintang);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;

for(row3 = 1; row3 <= 5; row3++){
  bintang += '*';
  console.log(bintang);
}