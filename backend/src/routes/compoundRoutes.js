import express from 'express';
import { readAllCompounds, readCompound, createCompound, updateCompound, deleteCompound } from '../controllers/compoundControllers.js';

const router = express.Router();

router.get("/", readAllCompounds);
router.get("/:id", readCompound);
router.post("/", createCompound);
router.put("/:id", updateCompound);
router.delete("/:id", deleteCompound);

export default router;