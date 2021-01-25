const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getguitar: (id) => Promise.resolve(
    {id: id, name: 'test guitar', email: 'test@guitar.nz'}
  ),
  getguitars: () => Promise.resolve([
    {id: 2, name: 'test guitar 2', email: 'test2@guitar.nz'},
    {id: 4, name: 'test guitar 4', email: 'test4@guitar.nz'}
  ])
}))

const server = require('../server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('test guitar 2 (test2@guitar.nz)')
    })
    .catch(err => expect(err).toBeNull())
})
