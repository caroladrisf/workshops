const student = require('../models/student');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.json([]);
    });

    app.get('/students', (req, res) => {
        student.read((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/students', (req, res) => {
        const studentData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            address: req.body.address
        };
        student.create(studentData, (err, data) => {
            if (data && data.id) {
                res.status(201).json({
                    success: 'true',
                    data: data
                });
            } else {
                res.status(500).json({success: 'false'});
            }
        });
    });

    app.put('/students/:id', (req, res) => {
        const studentData = {
            id: req.params.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            address: req.body.address
        };
        student.update(studentData, (err, data) => {
            if (data && data.success) {
                res.status(200).json(data);
            } else {
                res.status(500).json({success: 'false'});
            }
        });
    });


}
