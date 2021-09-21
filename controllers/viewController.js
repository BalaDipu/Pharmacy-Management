const Medicine = require('../models/medicineModel');
const catchAsync = require('../utils/catchAsync');


exports.getOverview = catchAsync(async(req, res) => {
    const medicines = await Medicine.find();
    res.status(200).render('overview',{
        title: 'All Medicines',
        medicines
    })
})

exports.getMedicine = (req,res)=>{
    res.status(200).render('medicine',{
      title: 'Max-pro' 
    });
  }