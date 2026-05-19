import express from "express";
import { createImport, getImports, updateImport, deleteImport } from "../Controllers/ImportController.js";

const ImportRouter = express.Router();

ImportRouter.post('/Add', createImport);
ImportRouter.get('/Get', getImports);
ImportRouter.patch(`/Patch/:_id`, updateImport)
ImportRouter.put(`/Update/:_id`, updateImport)
ImportRouter.delete(`/Delete/:_id`, deleteImport)

export default ImportRouter;