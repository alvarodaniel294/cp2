var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();


router
    // .get('/', function (req, res, next) {
    // 	f.validation(res, req.body.token, next);
    //   })
    .get('/', function (req, res) {
        db.users.find({}, { name: 1, active: 1, password_hash: 1, rol: 1 }, function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
            //console.log(res.status(200).send(users))
        });
    })
    .get('/roles', function (req, res) {
        db.roles.find({}, function (err, users) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(users);
        });
    })
    .get('/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        });
    })

    //    .delete('/:id', function (req, res) {

    //       db.users.deleteOne({ _id: req.params.id }, function (err, user) {

    //          if (err) return res.status(400).send(err);
    //          if (user == null) return res.status(404).send();
    //          return res.status(200).send(user);
    //       })
    //    })

    .get('/rolName/:id', function (req, res) {

        db.roles.findOne({ _id: req.params.id }, function (err, roleName) {
            if (err) return res.status(400).send(err);
            if (roleName == null) return res.sendStatus(404);

            return res.status(200).send(roleName);
        });
    })
    .post('/auth', function (req, res) {
        if (typeof req.body._id == null) res.send(403);
        db.users.findOne({ _id: req.body._id, active: true }, { password_hash: 0 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(user);
        });
    })
    .post('/exist', function (req, res) {
        db.users.findOne({ _id: req.body._id }, { rol: 1, name: 1, active: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            return res.status(200).send(user);
        });
    })

    .get('/existName/:id', function (req, res) {
        db.users.findOne({ name: req.params.id }, { name: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(true);
        });
    })

    .post('/token', function (req, res) {
        //MORE data
        if (typeof req.body.toke == null) res.send(403);
        db.users.findOne({ token: req.body.toke, active: true }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            res.status(200).send(user);
        });
    })

    .post('/register', function (req, res, next) {
        var role_id;
        db.roles.findOne({ name: 'Admin' }, function (err, role) {
            if (err) return res.status(400).send(err);
            if (role == null) return res.sendStatus(404);
            role_id = role._id;
            //    console.log(req.body);
            validating();
        })
        function validating() {
            db.users.findOne({ _id: req.body._id, rol: role_id }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(405);
                // console.log(user);
                next();


            });
        }
    })
    .post('/register', function (req, res) {
        req.body._id = undefined;
        var _user = req.body;
        _user.active = true;
        _user.password_hash = _user.name;

        var user_model = new db.users(_user);
        user_model.token = jwt.sign(user_model._id + '' + user_model.record_date, 'AltaPrecision'); //FIX
        user_model.tokens = [user_model.token];
        user_model.save(function (err, user) {
            if (err) return console.log(err);


            var nuevaCaja = new db.cashFlowUsers();
            nuevaCaja.date_start = new Date();
            nuevaCaja.dete_end = '';
            nuevaCaja.amount = 0;
            nuevaCaja.amount_delivered = 0;
            nuevaCaja.active = true;
            nuevaCaja.state = -1;
            nuevaCaja.user = user._id;

            nuevaCaja.save();

            res.status(201).send(user);
        });
    })

    .post('/login', function (req, res) {
        //modificar active
        db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            return res.status(200).send(user);
        });
    })

    .post('/', function (req, res) {
        var users = new db.users(req.body);
        users.save(function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })
    .put('/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();

            for (i in req.body) {
                user[i] = req.body[i];
                console.log(user[i]);
            }
            user.save(function (err, user) {
                if (err) return res.status(400).send(err);

                return res.status(200).send(user);
            });
        });
    });

module.exports = router;
