# Counter / CountdownTimer Library

[![npm version](https://badge.fury.io/js/mugan86-chronometer.svg)](https://badge.fury.io/js/mugan86-chronometer)
[![npm version](./documentation/images/coverage-badge-documentation.svg)](https://badge.fury.io/js/mugan86-chronometer)

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
const contar = new count(3, true);

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
const contar = new count(3, false);

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
const descontar = new count(3, true);

// Countdown timer
let counter = descontar.start().subscribe(data => {
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
const descontarNoClock = new count(3, false);

// Counter
let counter = descontarNoClock.start().subscribe(data => {
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