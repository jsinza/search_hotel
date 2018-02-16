const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.remove(id,(data) => {
        if (data.error)
            res.status(500).json(data);
        else
            res.status(200).json(data);
    });

};

