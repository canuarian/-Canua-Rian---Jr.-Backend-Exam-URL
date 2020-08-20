const Employee = require('../models/USERS')
const { response } = require('express')

// show the list of employee

const index = (req,res,next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        }) 
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}
// show every employee
const show = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured! '
        })
        
    })
}
// store 
const store = (req,res,next)=>{
    let employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response =>{
        res.json({
            message : 'Employee Added successfully! '
        })
    })
    .catch(error =>{
        res.json({
            message: 'An Error Occured! '
        })
    })
}
// update
const update = (req,res,next) =>{
    let employeeID = req.body.employeeID

    let updatedData={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'Updated Succesfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
    
}

//delete
const destroy = (req,res,next) =>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message: 'Employee Deleted!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
    
}

module.exports = {
    index,show,store,update,destroy


}