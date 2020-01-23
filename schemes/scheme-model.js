const db = require('./db')
module.exports = {
    find, findById, findSteps, add, update, remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id}).first();
}

function findSteps(id){
    return db('steps').where({scheme_id: id});
}

function add(scheme) {
    return db('schemes').insert(scheme)
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
    .then(() =>findById(id))

}

function remove(id){
    return db('schemes').where({id}).del();
}