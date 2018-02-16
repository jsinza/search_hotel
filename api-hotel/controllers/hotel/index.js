const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {

    Repository.all((data) => {
        if (data.error)
            res.status(500).json(data);
        else
            res.status(200).json(data);
    });

};
