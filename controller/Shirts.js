const {Shirts} = require('../models')


const GetAllShirts = async (req, res) => {
    try {
        const shirts = await Shirts.findAll();
        res.send(shirts);
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllShirts
}