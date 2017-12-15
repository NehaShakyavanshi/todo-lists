var Todo = require('./models/todo');

module.exports = function(app, schema) {
	app.get('/api/login', function(req, res) {
		res.render('login.html', { message: req.flash('loginMessage') });
	});

	app.post('/api/login', schema.authenticate('local-login', {
		successRedirect : '/index',
		failureRedirect : '/login',
		failureFlash : true
	}));

	app.get('/api/logout', function(req, res) {
		req.logout();
		res.redirect('/login');
	});

	app.get('/api/todos', function(req, res) {
		Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos);
		});
	});

	app.post('/api/todos', function(req, res) {
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});

	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};