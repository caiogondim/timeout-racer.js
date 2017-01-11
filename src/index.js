module.exports = (timeout) => {
  if (!Number.isInteger(timeout)) {
    throw new Error('timeout must be a number')
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout-racer')), timeout)
  })
}
