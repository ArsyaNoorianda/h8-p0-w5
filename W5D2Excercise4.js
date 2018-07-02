 
 /*
 Logic Challenge: Graduates

Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

    Student dapat dinyatakan lulus apabila score lebih besar dari 75.
    Masukkan name dan score dari student ke class yang dia ikuti.
    Student yang tidak lulus tidak perlu ditampilkan.

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}

*/

function graduates (students) {
  // Code disini

var kelasList = [];
var kelas = []
var result = {}

if (!students.length){
    console.log('') ;
    return '{}' ;
}


for (var k = 0 ; k <students.length; k++){
    var kelasAwal = students[k].class;
    if(kelasList.includes(kelasAwal)){
        continue;

    }
    else{
        kelasList.push(kelasAwal) ;  
        
    }
}

for (var i = 0 ; i < kelasList.length; i++ ){
    var kelasArr = []
    for(var j = 0 ; j < students.length ; j++){
        var studentObj = {}
        if (kelasList[i] === students[j].class && students[j].score > 75){
            studentObj.name = students[j].name;
            studentObj.score = students[j].score ;
            kelasArr.push(studentObj);
        }
    }
    result[kelasList[i]] = kelasArr

}
console.log ('')
return result

}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
