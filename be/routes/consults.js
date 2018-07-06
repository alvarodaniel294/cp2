var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');


router
	.get('/', function (req, res) {
		db.consultancies.find({}, function (err, consultancies) {
			if (err) return res.status(400).send(err);

			return res.status(200).send(consultancies);
		});
	})

	.get('/:id', function (req, res) {
		db.consultancies.findOne({ _id: req.params.id }, function (err, consulting) {
			if (err) return res.status(400).send(err);
			if (consulting == null) return res.status(404).send();

			return res.status(200).send(consulting);
		});
	})
	.post('/addConsultoria', function (req, res) {
		console.log(req.body);
		var consulting = new db.consultancies(req.body);

		consulting.save(function (err, consulting) {
			if (err) return res.status(400).send(err);

			return res.status(201).send(consulting);
		});
	})

	.post('/', function (req, res) {
		var consulting = new db.consultancies(req.body);

		consulting.save(function (err, consulting) {
			if (err) return res.status(400).send(err);

			return res.status(201).send(consulting);
		});
	})

	.post('/addAlcanceToConsultoria/:id', function (req, res) {
		db.consultancies.findOne({ _id: req.params.id }, function (err, consul) {
			if (err) {
				return res.status(400).send(err);
			} else {
				consul.scopes.push(req.body);
				consul.save(function (err, cons) {
					if (err) {
						return res.status(400).send(err)
					} else {
						return res.status(200).send(cons);
					}
				})
			}
		})


	})

	.post('/addConsultoriaWithFIle', multipartMiddleware, function (req, res) {
        console.log(req);
        var body = JSON.parse(req.body.body);
        // console.log(body);
        var newConsult = new db.consultancies(body.consultoria);
        console.log(newConsult);
        newConsult.photo = './assets/' + newConsult._id + '.jpg';
        newConsult.save(function (err, cons) {
            if (err) {
                return res.status(400).send(err);
            } else {
                fs.readFile(req.files.fileKey.path, function read(err, data) {
                    if (err) {
                        throw err;
                    }
                    content = data;
                    fs.writeFile('./public/' + cons.photo, content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                        return res.status(200).send(cons);
                    })
                })
            }
        })



	})
	.post('/updateConsultoriaWithFile', multipartMiddleware, function (req, res) {
        var body = JSON.parse(req.body.body);
        db.consultancies.findOne({ _id: body.consultoria._id }, function (err, consult) {
            if (err) return res.status(400).send(err);
            for (let i in body.consultoria) {
                consult[i] = body.consultoria[i];
            }
            fs.readFile(req.files.fileKey.path, function read(err, data) {
                if (err) {
                    throw err;
                }
                content = data;

                fs.stat('./public/assets/' + consult._id + '.jpg', function (err, stat) {
                    if (err == null) {
                        fs.unlink('./public/assets/' + consult._id + '.jpg', function (err) {
                            if (err) {
                                console.log('Error delating file!')
                                throw err;
                            }
                        });
                    }
                    fs.writeFile('./public/assets/' + consult._id + '.jpg', content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        consult.photo = './assets/' + consult._id + '.jpg';
                        consult.save(function (err, consultSaved) {
                            if (err) return res.status(400).send(err)
                            console.log("The file was saved!");
                            return res.status(200).send(consultSaved);
                        })
                    })
                })
            })
        })
    })
	.put('/updateConsultoria/:id', function (req, res) {
		db.consultancies.update({
			_id: req.params.id
		}, {
				$set: {
					'photo': req.body.photo,
					'name': req.body.name,
					'description': req.body.description,
					'objective': req.body.objective,
					'scopes': req.body.scopes,
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})

	.put('/main/:id', function (req, res) {
		db.consultancies.update({
			_id: req.params.id
		}, {
				$set: {
					'name': req.body.name,
					'description': req.body.description,
					'objective': req.body.objective,
					'scopes': scopes
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})

// .delete('/:id', function (req, res) {
// 	db.consultancies.remove({_id: req.params.id}, function (err, consulting) {
// 		if (err) return res.status(400).send(err);

// 		return res.status(200).send(consulting);
// 	});
// });

module.exports = router;