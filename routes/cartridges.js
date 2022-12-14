import { Router } from 'express'
import * as cartridgesCtrl from '../controllers/cartridges.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/search', cartridgesCtrl.search)
router.use(decodeUserFromToken)


export { router }