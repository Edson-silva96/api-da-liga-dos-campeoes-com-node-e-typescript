import { Router } from "express";
import { deleteplayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/players-controller";
import { getclubs } from "./controllers/clubs-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("/players/:id", deleteplayer); // Assuming you want to handle updates with the same endpoint
router.patch("/players/:id", updatePlayer); // Assuming you want to handle updates with the same endpoint

router.get("/clubs", getclubs); // Assuming you want to get all clubs without an ID


export default router;