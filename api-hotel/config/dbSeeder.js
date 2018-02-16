const Hotel = require('../models/Hotel');
const hotels = require('../data/data.json');
module.exports = {
    init: () => {
        Hotel.insertMany(hotels, (err, hotels) => {
            if (err) {
                console.log(err);
            }
        })
    }
}