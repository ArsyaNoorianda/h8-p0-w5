/*
Logic Challenge - Naik Angkot
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
Code
*/

function naikAngkot(arrPenumpang){
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var ongkos = 2000
  result = []
  if (!arrPenumpang.length  ){
      return  '[]'
  }






for (var i = 0 ; i < arrPenumpang.length ; i ++){
    var loopPenumpang = arrPenumpang[i]
    var objPenumpang = {}

    objPenumpang.penumpang = loopPenumpang[0]
    objPenumpang.naikDari = loopPenumpang[1]
    objPenumpang.tujuan = loopPenumpang[2]
    objPenumpang.bayar = ongkos * (rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.naikDari))

    result.push(objPenumpang)

    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]