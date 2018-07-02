/* Logic Challenge: Highest Score

Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}


*/

function highestScore (students) {
  // Code disini

var result = {}
var kelas = []


if (students.length === 0){
    console.log('') ;
    return result ;
}


for (var k = 0 ; k < students.length ; k++){
     var kelasResult = students[k].class ;
     if (kelas.includes(kelasResult)){
         continue ;
     }
     else{ kelas.push(kelasResult) ;

     }

}

for (var i = 0 ; i < kelas.length ; i++){

var studentsObj = {}
var highest = 0 

    for (var j = 0 ; j < students.length; j ++){
        if (kelas[i] === students[j].class && students[j].score > highest){
            highest = students[j].score
            studentsObj.name = students[j].name
            studentsObj.score = students[j].score
        }
result[kelas[i]] = studentsObj  
    }

}
console.log ('')
return result
}




// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

  