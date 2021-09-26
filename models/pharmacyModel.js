const mongoose = require('mongoose');
const validator = require('validator');

const pharmacySchema = mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Pharmacy must have a name!']
    },
    address: {
      type: String,
      required: [true, 'Pharmacy must have an address']
    },
    contact: [{
      type: String,
      required: [true, 'Pharmacy must have a Contact number']

    }],
    image: [String],
    location: {
      //GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);
module.exports = Pharmacy;
