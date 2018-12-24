# Counter / CountdownTimer Library

This library use to execute count timer and countdown timer.

## Instructions to install

```javascript
npm install mugan86-chronometer
```

## Intructions to use 

### Intructions to use Count Timer

```javascript
const chrono = require('mugan86-chronometer');
const count = chrono.Counter;

// With clock format
const contar = new co(3, true);

// Contador
let counter = contar.start().subscribe(data => {
    console.log(data);
    if (data === 'FINISH') {
        counter.unsubscribe();
    }
});

// Expect results.
00:00:00
00:00:01
00:00:02
FINISH

// With NOT clock format
const contar = new co(3, false);

// Contador
let counter = contar.start().subscribe(data => {
    console.log(data);
    if (data === 'FINISH') {
        counter.unsubscribe();
    }
});

// Expect results.
0d 0h 0m 0s
0d 0h 0m 1s
0d 0h 0m 2s
FINISH
```

### Intructions to use Countdown Timer

```javascript
const chrono = require('mugan86-chronometer');
const count = chrono.CountDown;

// With clock format
const contar = new co(3, true);

// Contador
let counter = contar.start().subscribe(data => {
    console.log(data);
    if (data === 'FINISH') {
        counter.unsubscribe();
    }
});

// Expect results.
00:00:03
00:00:02
00:00:01
FINISH

// With NOT clock format
const contarNoClock = new co(3, false);

// Contador
let counter = contarNoClock.start().subscribe(data => {
    console.log(data);
    if (data === 'FINISH') {
        counter.unsubscribe();
    }
});

// Expect results.
0d 0h 0m 3s
0d 0h 0m 2s
0d 0h 0m 1s
FINISH
```