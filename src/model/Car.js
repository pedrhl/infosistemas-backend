const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  placa: {
    type: String,
    required: true,
  },
  chassi: {
    type: String,
    required: true,
  },
  renavam: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  ano: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = model('Car', CarSchema);