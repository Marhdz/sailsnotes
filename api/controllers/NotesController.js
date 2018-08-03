/**
 * NotesController
 *
 * @description :: Server-side logic for managing notes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
      Notes.find({}).exec(function(err, notes){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
          res.redirect('/notes', {notes:notes});
      });

  },
  add: function(req, res){
      res.view('add');
  },
  create:function(req, res){
      var title = req.body.title;
      var body = req.body.body;

      Notes.create({title:title, body:body}).exec(function(err){
          if(err){
              res.send(500, {error: 'Database Error'});
          }

          res.redirect('/notes');
      });
  },
  delete: function(req, res){
      Notes.destroy({id:req.params.id}).exec(function(err){
          if(err){
              res.send(500, {error: 'Database Error'});
          }

          res.redirect('/notes');
      });

      return false;
  },

  update: function(req, res){
      var title = req.body.title;
      var body = req.body.body;
	      Notes.update({id: req.params.id},{checked: true}).exec(function(err){
	          if(err){
	              res.send(500, {error: 'Database Error'});
	          }

	          res.redirect('/notes');
	      });

      return false;
  }

};
