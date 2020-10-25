const uuidv4 = require('uuidv4');
const { update } = require('../model/Car');

const Car = require('../model/Car');

module.exports = {
  async index(request, response) {
    const cars = await Car.find();
    return response.json(cars);
  },

  async show(request, response) {
    const { id } = request.params;

    const carExists = await Car.findOne({ id: id });

    console.log(carExists);

    if (!carExists) {
      return response.json({ error: 'Car not found' });
    }

    return response.json(carExists);
  },
  
  async store(request, response) {
    const { placa, chassi, renavam, modelo, marca, ano } = request.body;

    if (!placa || !chassi || !renavam || !modelo || !marca || !ano) {
      return response.json({ message: 'Todos os dados são obrigatórios' });
    }

    const carExists = await Car.findOne({ placa: placa });

    if (carExists) {
      return response.json({ message: 'Placa já cadastrada!' });
    }

    const id = uuidv4.uuid();

    const carData = await Car.create({
      id,
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
    });

    return response.json({ message: 'Carro Salvo com sucesso!' });
  },

  async update(request, response){
    const { id } = request.params;

    const carExists = await Car.findOne({ id: id });

    if (!carExists) {
      return response.json({ error: 'Car not found' });
    }

    const { placa, chassi, renavam, modelo, marca, ano } = request.body;

    const newCar = await Car.findByIdAndUpdate(carExists._id, {
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
    }, {
      new: true,
      useFindAndModify: false,
    });

    return response.json({ message: 'Carro alterado com sucesso!'});
  },

  async destroy(request, response) {
    const { id } = request.params;

    const carExists = await Car.findOne({ id: id });

    if (!carExists) {
      return response.json({ error: 'Car not found' });
    }

    const action = await Car.remove({ id: id });

    return response.json({ message: 'Carro removido com sucesso' });
  }
}