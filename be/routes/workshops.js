var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');
router
	.get('/', function (req, res) {
		db.workshops.find({}, function (err, workshops) {
			if (err) return res.status(400).send(err);
			return res.status(200).send(workshops);
		});
	})

	.get('/:id', function (req, res) {
		db.workshops.findOne({ _id: req.params.id }, function (err, workshop) {
			if (err) return res.status(400).send(err);
			if (workshop == null) return res.status(404).send();

			return res.status(200).send(workshop);
		});
	})

	.post('/addTaller', function (req, res) {
        console.log(req.body);
        var taller = new db.workshops(req.body);
        taller.save(function (err, taller) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(taller);
        });
    })

	.post('/', function (req, res) {
		var workshop = new db.workshops(req.body);

		workshop.save(function (err, workshop) {
			if (err) return res.status(400).send(err);

			return res.status(201).send(workshop);
		});
	})
	.post('/addTallerWithFile', multipartMiddleware, function (req, res) {
        console.log(req);
        var body = JSON.parse(req.body.body);
        // console.log(body);
        var newTaller = new db.workshops(body.taller);
        console.log(newTaller);
        newTaller.photo = './assets/' + newTaller._id + '.jpg';
        newTaller.save(function (err, tall) {
            if (err) {
                return res.status(400).send(err);
            } else {
                fs.readFile(req.files.fileKey.path, function read(err, data) {
                    if (err) {
                        throw err;
                    }
                    content = data;
                    fs.writeFile('./public/' + tall.photo, content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                        return res.status(200).send(tall);
                    })
                })
            }
        })



	})
	.post('/updateTallerWithFile',multipartMiddleware,function(req,res){
		 // console.log(req)
        // console.log('/////////////////////')

        var body = JSON.parse(req.body.body);
        // console.log(body);
        db.workshops.findOne({ _id: body.taller._id }, function (err, tall) {
            if (err) return res.status(400).send(err);
            for (let i in body.taller) {
                tall[i] = body.taller[i];
            }

            fs.readFile(req.files.fileKey.path, function read(err, data) {
                if (err) {
                    throw err;
                }
                content = data;

                fs.stat('./public/assets/' + tall._id + '.jpg', function (err, stat) {
                    if (err == null) {
                        fs.unlink('./public/assets/' + tall._id + '.jpg', function (err) {
                            if (err) {
                                console.log('Error delating file!')
                                throw err;
                            }
                        });
                    }
                    fs.writeFile('./public/assets/' + tall._id + '.jpg', content, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        tall.photo = './assets/' + tall._id + '.jpg';
                        tall.save(function (err, tallSaved) {
                            if (err) return res.status(400).send(err)
                            console.log("The file was saved!");
                            return res.status(200).send(tallSaved);
                        })

                    })

                })
            })

        })

	})

	.post('/addBenefitToTaller/:id',function(req,res){
        db.workshops.findOne({_id:req.params.id},function(err,taller){
            if(err){
                return res.status(400).send(err);
            }else{
                taller.benefit.push(req.body);
                taller.save(function(err,prog){
                    if(err){return res.status(400).send(err)
                    }else{
                        return res.status(200).send(prog);
                    }
                })
            }
        })
	})
	.post('/addBenefitToTallerWithFile/:id',multipartMiddleware,function(req,res){
		let body=JSON.parse(req.body.body);
        db.workshops.findOne({ _id: req.params.id }, function (err, taller) {
            if (err) {
                return res.status(400).send(err);
            } else {
                let tallPhotoString='benefit_'+body.benefit.name+'_'+taller._id+'.jpg';
                // req.body.body.benefit.photo='./assets/'+tallPhotoString;
                let benefitObect={};
                benefitObect.photo='./assets/'+tallPhotoString;
                benefitObect.name=body.benefit.name;

                taller.benefit.push(benefitObect);

                taller.save(function (err, tall) {
                    if (err) {
                        return res.status(400).send(err)
                    } else {
                         fs.readFile(req.files.fileKey.path, function read(err, data) {
                            if (err) {
                                throw err;
                            }
                            content = data;
                            fs.writeFile('./public/assets/' + tallPhotoString, content, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                                console.log("The file was saved!");
                                return res.status(200).send(tall);
                            })
                        })

                       
                    }
                })
            }
        })
	})
	.post('/updateTallerBenefitWithFile/:id',multipartMiddleware,function(req,res){
		let body=JSON.parse(req.body.body);
        console.log(req.params.id)
        db.workshops.findOne({ _id: req.params.id }, function (err, taller) {
            if (err) {
                return res.status(400).send(err);
            } else {
                console.log('1111')
                for(let benefit of taller.benefit){
                    if(benefit._id==body.benefit._id){
                        benefit.name=body.benefit.name;

                        fs.stat('./public/'+benefit.photo, function (err, stat) {
                            if (err == null) {
                                fs.unlink('./public/'+benefit.photo, function (err) {
                                    if (err) {
                                        console.log('Error delating file!')
                                        throw err;
                                    }
                                });
                            }
                            fs.readFile(req.files.fileKey.path, function read(err, data) {
                                if (err) {
                                    throw err;
                                }
                                content = data;

                                fs.writeFile('./public/'+benefit.photo, content, function (err) {
                                    if (err) {
                                        console.log(err);
                                        return res.status(400).send(err);
                                        
                                    }
                                    
                                    taller.save(function (err, tallSaved) {
                                        if (err) return res.status(400).send(err)
                                        console.log("The file was saved!");
                                        return res.status(200).send(tallSaved);
                                    })
            
                                })
                            })
        
                        })
                    }
                }


            }
        })



	})
	
	.put('/edit/:id', function (req, res) {
        console.log(req.body);
        db.workshops.update({
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

	.put('/:id', function (req, res) {
		db.workshops.update({
			_id: req.params.id
		}, {
				$set: {
					'line1': req.body.line1,
					'name': req.body.name,
					'description': req.body.description,
					'objective': req.body.objective,
					'benefit': benefit,
					'content': content
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})

module.exports = router;