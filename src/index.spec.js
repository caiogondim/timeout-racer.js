const timeoutRacer = require('./index')

it('rejects the returned promise after timeout', () => {
  const fn = jest.fn()

  return Promise.race([
    timeoutRacer(4)
  ])
    .catch(fn)
    .then(() => expect(fn).toHaveBeenCalled())
})

it('throws error after timeout', () => {
  return Promise.race([
    timeoutRacer(4)
  ])
    .catch((error) => expect(error).toBeInstanceOf(Error))
})
