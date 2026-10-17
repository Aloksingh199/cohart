
// var h = document.querySelector('h1');
// var flag = 0;
// var num = Math.floor(Math.random() * 100);
// h.addEventListener('click', function () {
//     if (flag == 0) {
//         console.log('hey guysss')
//         h.innerHTML = 'ka hal ba' + num;
//         h.style.color = 'yellow'


//         flag = 1;
//     } else {
//         h.innerHTML = 'hello'
//         h.style.color = 'red'
//         flag = 0;
//     }

// })

// var h2 = document.querySelectorAll('h2');
// h2[2].innerHTML = 'ka hal ba'

var box = document.querySelector('#box');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var c1 = Math.floor(Math.random() * 100);
    var c2 = Math.floor(Math.random() * 100);
    var c3 = Math.floor(Math.random() * 100);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    console.log(c1, c2, c3);
});




