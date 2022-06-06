require('dotenv').config();
const route = require('express').Router();
const fileModel = require('../model/file');
const { verifyToken } = require('../utils/token');
route.get('/', async (req, res) => {
  try {
    if (req.query.token) {
      const data = await fileModel.findOne({ token: req.query.token });
      if (data.token === req.query.token) {
        const token_data = verifyToken(req.query.token);
        res.status(200).json({
          status: 'success',
          message: 'File Opened Successfully!',
          data: data,
          token_data: token_data,
        });
      } else throw new Error('UnAuthorised Token!');
    } else throw new Error('Not verified!');
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: 'error',
      message: 'something went wrong!',
    });
  }
});

module.exports = route;
