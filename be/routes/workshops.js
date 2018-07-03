var express = require('express');
var db = require('../models/db');
var router = express.Router();

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