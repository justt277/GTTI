import express from "express";
import { createExport, getExports, updateExport, deleteExport } from "../Controllers/ExportController.js";

const ExportRouter = express.Router();

ExportRouter.post('/Add', createExport);
ExportRouter.get('/Get', getExports);
ExportRouter.patch(`/Patch/:_id`, updateExport)
ExportRouter.put(`/Update/:_id`, updateExport)
ExportRouter.delete(`/Delete/:_id`, deleteExport)

export default ExportRouter;