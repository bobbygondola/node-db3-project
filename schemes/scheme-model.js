const db = require("../data/connection")
const express = require("express");

function find(){
    return db("schemes")
}
function findById(id){
    return db("schemes")
    .where({id})
}
function findSteps(id){
    return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .where({scheme_id:id})
    .select("steps.step_number", "steps.instructions")
    .orderBy("steps.step_number");
    
}

module.exports = {
    find,
    findById,
    findSteps
  };