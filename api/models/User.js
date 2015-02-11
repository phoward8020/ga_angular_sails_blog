/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName:{
      type:'string'
    },
    lastName:{
      type:'string'
    },
    email:{
      type:'string',
      require:true,
      unique:true
    },
    password:{
      type:'string',
      required:true
    }
  }
};

