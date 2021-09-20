exports.getOverview = (req, res) => {
    res.status(200).render('overview',{
        title: 'All Medicines'
    })
}

exports.getMedicine = (req,res)=>{
    res.status(200).render('medicine',{
      title: 'Max-pro' 
    });
  }