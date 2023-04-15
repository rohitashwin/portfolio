const mongoose = require('mongoose');

const app = (req, res) => {
	// Using mongodb for now, then will switch to postmark or some other email service
	const mongodb_user = process.env.MONGODB_USER;
	const mongodb_pass = process.env.MONGODB_PASS;
	const mongodb_server = process.env.MONGODB_SERVER;
	const url = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_server}`;
	mongoose.set('strictQuery', false);
	mongoose.connect(url);
	const emailSchema = new mongoose.Schema({
		subject: String,
		from: String,
		message: String,
	});
	const Email = mongoose.model('Email', emailSchema);
	if (!req.body.subject || !req.body.from || !req.body.message) {
		res.status(400).send({ message: 'Missing required fields!' });
		return;
	}
	const email = new Email({
		subject: req.body.subject,
		from: req.body.from,
		message: req.body.message,
	});
	email.save().then(() => {
		res.status(200).send({ message: 'Email saved!' });
	});
	mongoose.connection.close();
};

module.exports = app;
