const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {
    let name = req.body.name;
    let stars = req.body.stars;
    Repository.search(name,stars, (data) => {
        if (data.error)
            res.status(500).json(data);
        else
            res.status(200).json(data);
    });

};
