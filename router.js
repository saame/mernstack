const express = require('express');
const router = express.Router();
const infoRouter = require('./schema');

//postdata
router.post('/',async(req,res) =>{
    var data = await new infoRouter({
        Name:req.body.Name,
         Age:req.body.Age,
         City:req.body.City
          });
    await data.save();
    res.json(data)
});
//getbyid
router.get('/',async(req,res) =>{

         var findData = await infoRouter.find();
         res.json(findData);
        });

//update
router.put('/update',async(req,res) =>{
  var update = await infoRouter.update({_id:req.body._id},{$set:{ 
              Name:req.body.Name,
              Age:req.body.Age,
              City:req.body.City
            }});
          
          res.status(200).json(update);
         });
//delete
router.delete('/del/:id',async(req,res) =>{
   

          var delPersons= await infoRouter.remove({_id:req.params.id});
          res.status(200).json(delPersons);
        });
module.exports = router;
