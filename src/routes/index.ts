import {Router} from 'express'
import {createArtist, deleteArtist, getAllArtists, getArtist, updateArtist} from "../controllers/artists.controller";

const router = Router()
router.get('/artists', getAllArtists)
router.post('/artists', createArtist)
router.get('/artists/:id', getArtist)
router.delete('/artists/:id', deleteArtist)
router.put('/artists/:id', updateArtist)

export default router