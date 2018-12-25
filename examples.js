var lib = require('./dist')

const convertSeconds = lib.secondsInTimeFormat;
var co = lib.Counter;
var cod = lib.CountDown;

// Tiempo en segundos en formato d/h/m/s
console.log(convertSeconds(-1)); // FINISH
console.log(convertSeconds(400, 1)); // 00:06:40

const contar = new co(3, false);
const descontar = new cod(4);

// Contador
let counter = contar.start().subscribe(data => {
    console.log(data);
    if (data === 'FINISH') {
        counter.unsubscribe();
    }
});

// Descontador
let discounter = descontar.start().subscribe(data => {
    console.log('Desc', data);
    if (data === 'FINISH') {
        discounter.unsubscribe();
    }
});






