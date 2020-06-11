const db = require("../data/connection")
const express = require("express");

function find(){
    return db("schemes")
}
function findById(id){
    return db("schemes")
    .where({id})
}

///RAW SQL
//select id, scheme_name, steps.instructions, steps.scheme_id
// from schemes
// join steps on schemes.id = steps.scheme_id;

function findSteps(id){
    return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .where({scheme_id:id})
    .select("steps.step_number", "steps.instructions")
    .orderBy("steps.step_number");
}
function add(schemeData){
    return db("schemes")
    .insert(schemeData)//normal sql insert but not saying values, just the data
}
function update(changes, id){
    return db("schemes")
    .update(changes) //normal .update sql
    .where({id}); //where id=id
}
function remove(id){
    return db("schemes")
    .where({id}).del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
  };