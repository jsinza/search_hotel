const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {
    if (req.file)
        req.body.image = req.file.originalname;
    Repository.create(req.body, (data) => {
        if (data.error)
            res.status(500).json(data);
        else
            res.status(200).json(data);
    });

};
