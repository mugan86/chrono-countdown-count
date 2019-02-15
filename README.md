# Counter / CountdownTimer Library

[![npm version](https://badge.fury.io/js/mugan86-chronometer.svg)](https://badge.fury.io/js/mugan86-chronometer)
[![Build Status](https://travis-ci.org/mugan86/chrono-countdown-count.svg?branch=master)](https://travis-ci.org/mugan86/chrono-countdown-count)
[![Coverage Status](https://coveralls.io/repos/github/mugan86/chrono-countdown-count/badge.svg?branch=master)](https://coveralls.io/github/mugan86/chrono-countdown-count?branch=master)
[![doc coverage](https://raw.githubusercontent.com/mugan86/chrono-countdown-count/master/documentation/images/coverage-badge-documentation.svg?sanitize=true)](./documentation)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This library use to execute count timer and countdown timer.

## More details about use this project
Project that provides us with the functionalities of using an accountant or discounter that may be valid for games applications in which it requires to have a time control in an ascending or descending manner.
### Examples that use this library:
* https://mugan86.github.io/strangle-game-angular-widget/
### We could use it in applications / games like:
* Question and answer games of type Trivia in which we need to control the time per question and the total.
* In Test / Surveys of limited time.
* And much more.

## Interest links
* Documentation Info: https://mugan86-chronometer.firebaseapp.com/
* NPM Package: https://www.npmjs.com/package/mugan86-chronometer

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
## Examples that use this library

Strangle App Game in Angular: https://mugan86.github.io/strangle-game-angular-widget/

