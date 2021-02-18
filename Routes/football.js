'use strict'

const router = require('express').Router();
const {Teams} = require(`../config/db`);

// Create method
router.post("/create", (req, res, next) => {
    const item = new LOL(req.body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.teamName} has been added successfully!`)
        })
        .catch((err) => next(err));
});

// Get method


router.get("/read", (req, res, next) => {
    Teams.find((err, Teams) => {
        if (err) {
            next(err);
        }
        res.send(Teams);
    });
});

// Get one methods
router.get("/get/:id", (req,res,next) => {
    Teams.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

// Update selected
router.patch("/updateOne/:id", (req, res, next) => {
    Teams.findByIdAndUpdate(req.params.id, 
    req.body, 
    {new: true}, 
    (err) => {
       if(err){
           next(err);
       }
       res.status(201).send(`Successfully updated!`);
   })
});


//UPDATE ALL
router.put("/update/:id", (req,res,next) => {
    const {teamName, locations} = req.query;
    Teams.findByIdAndUpdate(req.params.id, {teamName,locations}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    }); 
});

// Delete
router.delete("/delete/:id", (req, res, next) => {
    Teams.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

module.exports = router; 