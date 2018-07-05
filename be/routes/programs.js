var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');


router
    .get('/', function (req, res) {
        db.programs.find({}, function (err, programs) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(programs);
        });
    })

    .get('/:id', function (req, res) {
        db.programs.findOne({ _id: req.params.id }, function (err, program) {
            if (err) return res.status(400).send(err);
            if (program == null) return res.status(404).send();

            return res.status(200).send(program);
        });
    })
    .post('/add', function (req, res) {
        console.log(req.body);
        var program = new db.programs(req.body);
        program.save(function (err, program) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(program);
        });
    })
    .post('/', function (req, res) {
        var program = new db.programs(req.body);
        db.programs.findOne({ name: req.body.name }, function (err, exiteNom) {
            if (exiteNom == null) {
                if (program.name == '' || program.details == '' || program.modules == []) return res.status(400).send();
                program.save(function (err, program) {
                    if (err) return res.status(400).send(err);
                    return res.status(201).send(program);
                });
            } else {
                if (err) return res.status(400).send(err);
                console.log('El nombre del Programa ya existe');
            }
        });
    })
    .post('/updateProgramWithFile', multipartMiddleware, function (req, res) {

        // console.log(req)
        // console.log('/////////////////////')

        var body = JSON.parse(req.body.body);
        // console.log(body);
        db.programs.findOne({ _id: body.program._id }, function (err, prog) {
            if (err) return res.status(400).send(err);
            for (let i in body.program) {
                prog[i] = body.program[i];
            }

            fs.readFile(req.files.fileKey.path, function read(err, data) {
                if (err) {
                    throw err;
                }
                content = data;

                fs.stat('./public/assets/' + prog._id + '.jpg', function (err, stat) {
                    if (err == null) {
                        fs.unlink('./public/assets/' + prog._id + '.jpg', function (err) {
                            if (err) {
                                console.log('Error delating file!')
                                throw err;
                            }
                        });
                    }
                    fs.writeFile('./public/assets/' + prog._id + '.jpg', content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        prog.photo = './assets/' + prog._id + '.jpg';
                        prog.save(function (err, progSaved) {
                            if (err) return res.status(400).send(err)
                            console.log("The file was saved!");
                            return res.status(200).send(progSaved);
                        })

                    })

                })
            })

        })

    })
    .post('/addProgramWithFile', multipartMiddleware, function (req, res) {
        console.log(req);
        var body = JSON.parse(req.body.body);
        // console.log(body);
        var newProg = new db.programs(body.program);
        console.log(newProg);
        newProg.photo = './assets/' + newProg._id + '.jpg';
        newProg.save(function (err, prog) {
            if (err) {
                return res.status(400).send(err);
            } else {
                fs.readFile(req.files.fileKey.path, function read(err, data) {
                    if (err) {
                        throw err;
                    }
                    content = data;
                    fs.writeFile('./public/' + prog.photo, content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                        return res.status(200).send(prog);
                    })
                })
            }
        })



    })
    .post('/addBenefitToProgram/:id', function (req, res) {
        db.programs.findOne({ _id: req.params.id }, function (err, program) {
            if (err) {
                return res.status(400).send(err);
            } else {
                program.benefit.push(req.body);
                program.save(function (err, prog) {
                    if (err) {
                        return res.status(400).send(err)
                    } else {
                        return res.status(200).send(prog);
                    }
                })
            }
        })
    })
    .put('/edit/:id', function (req, res) {
        console.log(req.body);
        db.programs.update({
            _id: req.params.id
        }, {
                $set: {
                    'name': req.body.name,
                    'description': req.body.description,
                    'objective': req.body.objective,
                    'benefit': req.body.benefit,
                    'modules': req.body.modules
                }
            }).exec(function (err, page) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(page);
            })
    })
// .delete('/:id', function (req, res) {
//     db.programs.remove({ _id: req.params.id }, function (err, program) {
//         if (err) return res.status(400).send(err);

//         return res.status(200).send(program);
//     });
// });

module.exports = router;