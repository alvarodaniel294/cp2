var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');


router
      .get('/', function (req, res) {
            db.facilitators.find({}, function (err, facilitators) {
                  if (err) return res.status(400).send(err);

                  return res.status(200).send(facilitators);
            });
      })
      .get('/:id', function (req, res) {
            db.facilitators.findOne({ _id: req.params.id }, function (err, facilitador) {
                  if (err) return res.status(400).send(err);
                  if (facilitador == null) return res.status(404).send();

                  return res.status(200).send(facilitador);
            });
      })
      .post('/addFacilitadorWithFile', multipartMiddleware, function (req, res) {
            var body = JSON.parse(req.body.body);
            var newFacil = new db.facilitators(body.facilitador);
            newFacil.photo = './assets/' + newFacil._id + '.jpg';
            newFacil.save(function (err, facilSaved) {
                  if (err) {
                        return res.status(400).send(err);
                  } else {
                        fs.readFile(req.files.fileKey.path, function read(err, data) {
                              if (err) {
                                    throw err;
                              }
                              content = data;
                              fs.writeFile('./public/' + newFacil.photo, content, function (err) {
                                    if (err) {
                                          return console.log(err);
                                    }
                                    console.log("The file was saved!");
                                    return res.status(200).send(facilSaved);
                              })
                        })
                  }
            })

      })

      .post('/register', function (req, res) {
            var cartera = new db.facilitators(req.body);
            //  console.log(cartera);
            if (cartera.name == '') return res.status(400)
            cartera.save(function (err, cartera) {

                  if (err) return console.log(err);

                  res.status(200).send(cartera);
            })

      })
      .post('/updateFacilitadorWithFile', multipartMiddleware, function (req, res) {
            var body = JSON.parse(req.body.body);
            db.facilitators.findOne({ _id: body.facilitador._id }, function (err, facili) {
                  if (err) return res.status(400).send(err);
                  for (let i in body.facilitador) {
                        facili[i] = body.facilitador[i];
                  }
                  fs.readFile(req.files.fileKey.path, function read(err, data) {
                        if (err) {
                            throw err;
                        }
                        content = data;
        
                        fs.stat('./public/assets/' + facili._id + '.jpg', function (err, stat) {
                            if (err == null) {
                                fs.unlink('./public/assets/' + facili._id + '.jpg', function (err) {
                                    if (err) {
                                        console.log('Error delating file!')
                                        throw err;
                                    }
                                });
                            }
                            fs.writeFile('./public/assets/' + facili._id + '.jpg', content, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                                facili.photo = './assets/' + facili._id + '.jpg';
                                facili.save(function (err, faciliSaved) {
                                    if (err) return res.status(400).send(err)
                                    console.log("The file was saved!");
                                    return res.status(200).send(faciliSaved);
                                })
        
                            })
        
                        })
                    })
        
            })

      })
      .put('/updateFacilitador/:id', function (req, res) {
            db.facilitators.update({ _id: req.params.id },
                  {
                        $set: {
                              'name': req.body.name,
                              'review': req.body.review,
                              'job': req.body.job,
                        }
                  }).exec(function (err, facil) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(facil);
                  })
      })
      ;


module.exports = router;
