//import './style.css';
//const appDiv = document.getElementById('app');

//Sumar Uno
function sumaruno(num) {
  var last = num.length - 1;

  if (num[last] == 9) {
    num[last] = 1;
    num.push(0);
  } else {
    num[last] += 1;
  }

  return num;
}

function combix(cadena){

    var solution = [];
    var dictionary = [
        ['a', 'b', 'c'],       //2
        ['d', 'e', 'f'],       //3
        ['g', 'h', 'i'],       //4
        ['j', 'k', 'l'],       //5
        ['m', 'n', 'o'],       //6
        ['p', 'q', 'r', 's'],  //7
        ['t', 'u', 'v'],       //8
        ['w', 'x', 'y', 'z'],  //9
    ];

    var aux = cadena;
    var l = 0;
    while(l < aux.length) {
        var pivot_char_number = aux.charAt(l);
        var pivot_array = dictionary[parseInt(pivot_char_number) - 2];
        //aux = aux.substr(1, aux.length);

        var k = 0;
        while (k < pivot_array.length) {
            var tmp = pivot_array[k];
            var i = 0;
            while(i < aux.length) {
                var check_char = aux.charAt(i);
                if(check_char == pivot_char_number) {
                    i++;
                    continue;
                }
                var col_char = dictionary[parseInt(check_char) - 2];
                tmp += ","+col_char[k];
                i++;
            }
            console.log(tmp);
            k++;
        }
        l++;
    }

    var i = 0;
    //Cada Fila
    while(i < cadena.length){
        var j = 0;
        var row_number = parseInt(cadena.charAt(i));
        var row_letters = dictionary[row_number - 2];
        //Cada Letra
        while(j < row_letters.length){
            //console.log("Fila: "+i+" Columna: "+j+" "+row_letters[j]);

            j++;
        }
        i++;
    }

    return solution;
}

//Combinaciones
function combinaciones(cadena) {
  var solution = [];
  var dictionary = [
    ['a', 'b', 'c'],       //2
    ['d', 'e', 'f'],       //3
    ['g', 'h', 'i'],       //4
    ['j', 'k', 'l'],       //5
    ['m', 'n', 'o'],       //6
    ['p', 'q', 'r', 's'],  //7
    ['t', 'u', 'v'],       //8
    ['w', 'x', 'y', 'z'],  //9
  ];

  if (cadena.length == 1) {
    var pos = parseInt(cadena) - 2;
    solution = dictionary[pos];
  }

  var aux = cadena;

  while(aux.length > 1) {
    var pivot_char = aux.charAt(0);
    aux = aux.substr(1, aux.length);

    let pivot_num = parseInt(pivot_char);
    let pivot_pos = pivot_num - 2;

    var pivot = dictionary[pivot_pos];

    var k = 0;
    while (k < pivot.length) {
        var original = pivot.map((x) => x);
        var i = 0;
        while(i < aux.length) {

            let sub_char = aux.charAt(i);
            let sub_num = parseInt(sub_char);
            let sub_pos = sub_num - 2;
            var sub = dictionary[sub_pos];

            sub.forEach(function (value_bottom) {
                pivot[k] = value_bottom;
                var tmp = pivot.join(',');
                solution.push(tmp);
                pivot = original.map((x) => x);
            });
            i++;
        }

        
        //console.log(tmp);
      k++;
    }

    /*
        var i = 0;
        while(i < aux.length) {

            let sub_char = aux.charAt(i);
            let sub_num = parseInt(sub_char);
            let sub_pos = sub_num - 2;
            var sub = dictionary[sub_pos];

            sub.forEach(function (value_bottom) {
                console.log(value_bottom);
            });
            i++;
        }
        */

        
  }

  /*

  var aux = cadena;
  var i = 0;
  while (i < cadena.length) {
    var char_pivot = cadena.charAt(i);
    let num = parseInt(char_pivot);
    let pos_pivot = num - 2;

    var j = 0;
    //var aux = aux.substr(1, aux.length);
    while (j < aux.length) {
      var tmp_2 = aux.charAt(j);
      let num_2 = parseInt(tmp_2);
      let pos_2 = num_2 - 2;

      if (pos_pivot != pos_2) {
        //Mix
        dictionary[pos_pivot].forEach(function (value_top) {
          dictionary[pos_2].forEach(function (value_bottom) {
            solution.push(value_top + value_bottom);
          });
        });
      }

      j++;
    }
    i++;
  }
  */

  console.log(solution);

  return solution;
}

var input = '234';
combix(input);
//combinaciones(input);

/*
var num = [1, 5, 9];
appDiv.innerHTML = `<h1>Challenge Sumar Uno</h1>`;
appDiv.innerHTML += `<h2>Entrada: ${num}</h2>`;
appDiv.innerHTML += `<h2>Salida:`;
appDiv.innerHTML += `<h2>[${sumaruno(num)}]</h2>`;

appDiv.innerHTML += `</br>`;

var input = '234';
appDiv.innerHTML += `<h1>Challenge Combinaciones</h1>`;
appDiv.innerHTML += `<h2>Entrada: ${input}</h2>`;
appDiv.innerHTML += `<h2>Salida:`;
appDiv.innerHTML += `<h2>[${combinaciones(input)}]</h2>`;
*/
