import { Router } from 'express'
import { getAllStationsController, stationSearchController} from '../controllers/stations.js'
const router = Router()

router.get("/", getAllStationsController)
router.get("/search", stationSearchController)

export default router