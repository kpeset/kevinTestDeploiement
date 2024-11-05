import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import petActions from "./modules/pet/petActions";

router.get("/api/pets", petActions.browse);
router.get("/api/pets/:id", petActions.read);
router.post("/api/pets", petActions.add);

/* ************************************************************************* */

export default router;
