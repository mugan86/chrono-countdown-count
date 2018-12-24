var lib = require('./dist').secondsInTimeFormat;
var c = require('./dist/countdown').CountDown;
var t = require('./dist').ProgressCountdown;
var co = require('./dist').Counter;
var cod = require('./dist').CountDown;

// Tiempo en segundos en formato d/h/m/s
console.log(lib(-1));

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

// c();

// Observable.interval(10000).takeWhile(() => true).subscribe(() => this.function());
let contador = new c(10);
contador.start();




