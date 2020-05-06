import express from 'express'
import { itemRouter } from './resources/item'

export const app = express()
const port = 3000

app.use('/api/item', itemRouter)

export const start = async () => {
  app.listen(port, () => console.log('Server works on port 3000'))
}
