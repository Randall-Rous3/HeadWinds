const {Shirts} = require('../models')


const GetAllShirts = async (req, res) => {
    try {
        const shirts = await Shirts.findAll();
        res.send(shirts);
    } catch (error) {
        throw error
    }
}
const GetShirtById = async (req, res) => {
    try {
      let shirtId = parseInt(req.params.id);
      const shirt = await Shirts.findOne({
        where: { id: shirtId }
      });
      res.send(shirt);
    } catch (error) {
      throw error;
    }
  };
const CreateShirt = async (req, res) => {
    try {
      let newShirt = await Shirts.create(req.body);
      res.send(newShirt);
    } catch (error) {
      throw error;
    }
  };
  const UpdateShirtDetails = async (req, res) => {
    try {
      let ShirtId = parseInt(req.params.id);
      let updatedShirt = await Shirts.update(req.body, {
        where: { id: ShirtId },
        returning: true
      });
      res.send(updatedShirt);
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    GetAllShirts,
    CreateShirt,
    GetShirtById,
    UpdateShirtDetails
}