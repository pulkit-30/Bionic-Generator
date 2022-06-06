require('dotenv').config();
const route = require('express').Router();
const fileModel = require('../model/file');
const { generateToken } = require('../utils/token');
route.post('/', async (req, res) => {
  try {
    const token = await generateToken(rwq.body);
    req.body.token = token;
    req.body.link = '/api/file/open?token=' + token;
    const newfile = await new fileModel(req.body);
    await newfile.save();
    res.status(200).json({
      status: 'success',
      message: 'File Saved Successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'error',
      message: 'something went wrong!',
    });
  }
});

module.exports = route;
