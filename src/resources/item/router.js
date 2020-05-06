import { Router } from 'express'
export const router = Router()

const mockController = (req, res) => {
  res.json({ message: 'works' })
}

router.route('/').get(mockController).post(mockController)

router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)
