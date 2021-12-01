const Medicine = require('../models/medicineModel');
const catchAsync = require('../utils/catchAsync');


exports.getOverview = catchAsync(async(req, res) => {
    const medicines = await Medicine.find();
    res.status(200).render('overview',{
        title: 'All Medicines',
        medicines
    })
})

exports.getMedicine = catchAsync(async(req,res)=>{
  const medicine = await Medicine.findOne({slug : req.params.slug}).populate({
    path:'reviews',
    fields:'review rating user'
  });
    res.status(200).render('medicine',{
      title: medicine.name,
      medicine 
    });
  })

exports.getLoginForm = (req,res)=>{
  res.status(200).render('login',{
    title:'Login to your account'
  })
}

exports.getSignupForm = (req,res)=>{
  res.status(200).render('signup',{
    title:'Sign up to your account'
  })
}