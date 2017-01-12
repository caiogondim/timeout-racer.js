<img src="http://rawgit.com/caiogondim/timeout-racer.js/master/docs/logo/github-banner.svg" width="100%" />

<h1 align="center">timeout-racer.js</h1>

<div align="center">
  <img src="http://travis-ci.org/caiogondim/timeout-racer.js.svg?branch=master" alt="Travis CI">
  <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JS standard style">
</div>

<br>

`timeoutRacer` is a promise that rejects itself after `n` miliseconds passed as an argument.
Useful to put a timeout on races between Promises.

## Installation

```
npm install --save @caiogondim/timeout-racer
```

## Usage

```js
Promise.race([
  fooBarPromise(),
  timeoutRacer(15000)
])
  .then(() => {
    // Will run if `fooBarPromise` resolves
  })
  .catch(() => {
    // Will run if 15000 miliseconds passed
    // or `fooBarPromise` rejects.
  })
```

## Credits

- Icon by Corey Felter from the Noun Project

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
