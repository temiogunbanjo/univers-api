import { Request, Response } from "express";

const express = require('express');
const app_ = express();

const indexRouter = require('../src/routes');

app_.use(express.json());
app_.use(express.urlencoded({ extended: true }));

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//   index: ['index.html'],
//   maxAge: '1m',
//   redirect: false
// }
// app_.use(express.static('public', options))
// #############################################################################

app_.use('v1', indexRouter);
// Catch all handler for all other request.
app_.use('*', (req: Request, res: Response) => {
  res.json({ msg: 'no route handler found' }).end()
})

module.exports = app_;
