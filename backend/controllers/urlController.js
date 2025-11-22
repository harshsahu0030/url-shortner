import { nanoid } from "nanoid";
import { UrlModel } from "../models/urlModel.js";

//get urls
export const getUrls = async (req, res) => {
  try {
    const url = await UrlModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      urls: url,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//get single url
export const getSingleUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await UrlModel.findOne({ shortId: id });

    if (!url) {
      return res.status(400).json({
        success: false,
        error: "Short ID is not found",
      });
    }

    url.clicks += 1;
    await url.save();

    return res.status(200).json({
      success: true,
      urls: url,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//create url
export const generateShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        error: "URL is required",
      });
    }

    const isExist = await UrlModel.findOne({ originalUrl: url });

    if (isExist) {
      return res.status(200).json({
        success: true,
        message: "Short URL already exists",
        shortId: isExist.shortId,
      });
    }

    const shortID = nanoid(8);
    await UrlModel.create({ shortId: shortID, originalUrl: url });

    return res.status(201).json({
      success: true,
      message: "Short URL generated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//delete url
export const deleteShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        error: "URL not found",
      });
    }

    const isExist = await UrlModel.findOne({ originalUrl: url });

    if (!isExist) {
      return res.status(404).json({
        success: false,
        error: "URL not found",
      });
    }

    await UrlModel.deleteOne({ originalUrl: url });

    return res.status(200).json({
      success: true,
      message: "Short URL deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
