import { Router } from 'express';
import {
  createApartment,
  getApartmentById,
  getApartments,
} from '../controllers/apartment.controller';

const router = Router();

router.get('/', getApartments);
router.get('/:id', getApartmentById);
router.post('/', createApartment);

export default router;
