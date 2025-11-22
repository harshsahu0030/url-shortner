import express from "express";
import {
  deleteShortUrl,
  generateShortUrl,
  getSingleUrl,
  getUrls,
} from "../controllers/urlController.js";

const router = express.Router();

router.route("/").get(getUrls);
router.route("/").post(generateShortUrl);
router.route("/").delete(deleteShortUrl);
router.route("/:id").get(getSingleUrl);

export default router;
