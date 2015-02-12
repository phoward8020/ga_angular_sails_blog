/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt')

module.exports = {

	login:function(req,res){
    User.findOne({where:{email:req.body.email}})
    .exec(function(err, user){
      if (err) return res.send(err)
      if (user) {
        bcrypt.compare(req.body.password,user.password, function(err, match){
          // if (err) return res.send(err);
          if (match) {
            req.session.user = user;
            
            res.send({result:true,user:user});
          } else {
            res.send({
              result:false,
              error:'Password mismatch. You suck.'
            })
          };
        });
      } else {
        res.send({
          result:false,
          error:'User not found. Try again, loser.'
        });
      };
    })
  },

  logout:function(req,res){
    delete req.session.user;
    res.send({result:true});
  },

  check:function(req,res){
    if(req.session) {
      res.send({
        user: ( req.session.user || false )
      })
    }
  }

};

