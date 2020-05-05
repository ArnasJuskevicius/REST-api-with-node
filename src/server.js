import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hello world'))

export const start = async () => {
  app.listen(port, () => console.log('Server works on port 3000'))
}
