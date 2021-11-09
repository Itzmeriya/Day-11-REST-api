const express = require('express');
const customer = require('../models/customer');
const router = express.Router();
const Customer= require('../models/customer');

//creating a customer
router.post('/',(req,res)=>{
    const customer = new Customer({
        name:{firstname:req.body.name.firstname,
            lastname:req.body.name.lastname},
        emailid:req.body.emailid,
        location:{name:req.body.location.name,
            city:{cityname:req.body.location.city.cityname,
            zipcode:req.body.location.city.zipcode,
            statename:req.body.location.city.statename}}
    });
    customer.save().
    then ((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({message:err});
    })
});

//getting all customers
router.get('/',async(req,res) =>{try
    {
        const customers = await customer.find();
        res.json(customers);
    }catch (err){res.json({message:err});
}
});

//getting a customer by id
router.get('/:customerid', async(req,res) =>{try
    {
        const customer = await Customer.findById(req.params.customerid);
        res.json(customer);
    }catch(err){res.json({message:err});
}

});

//deleting a customer
router.delete('/:customerid',async(req,res)=>{try
    {
        const removecustomer = await Customer.deleteOne({
           _id : req.params.customerid});
           res.json(removecustomer);
        }catch (err){
            res.json({message:err});
        
    }
});

//update a customer by id
router.patch('/:customerid',async(req,res)=>{ try
    {
        const customer = await Customer.findOne({
            _id : req.params.customerid});
            if(req.body.name){
                customer.name= req.body.name;
            }
            if(req.body.emailid){
                customer.emailid= req.body.emailid;
            }
            if (req.body.location){
                customer.location = req.body.location;
            }
            await customer.save();
            res.json(customer);
        }catch(err){
            res.json({message:err});
    }
});


module.exports= router;
