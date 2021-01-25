const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getguitars gets all guitars', () => {
  // One for each letter of the alphabet!
  const expected = 3
  return db.getguitars(testDb)
    .then(guitars => {
      const actual = guitars.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getguitar gets a single guitar', () => {
  const expected = 'test guitar 1'
  return db.getguitar(99901, testDb)
    .then(guitar => {
      const actual = guitar.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
