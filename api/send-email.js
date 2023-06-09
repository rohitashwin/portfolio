const mongoose = require("mongoose");

const app = (req, res) => {
	try {
		// Using mongodb for now, then will switch to postmark or some other email service
		const mongodb_user = process.env.MONGODB_USER;
		const mongodb_pass = process.env.MONGODB_PASS;
		const mongodb_server = process.env.MONGODB_SERVER;
		const mongodb_db = process.env.MONGODB_DB;
		const url = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_server}/${mongodb_db}?retryWrites=true&w=majority`;
		mongoose.set("strictQuery", false);
		mongoose.connect(url).then(() => {
			const emailSchema = new mongoose.Schema({
				subject: String,
				from: String,
				message: String,
			});
			const Email = mongoose.model("email", emailSchema);
			if (!req.body) {
				res.status(400).send({ message: "Missing request body!" });
				return;
			}
			if (!req.body.name || !req.body.email || !req.body.message) {
				res.status(400).send({ message: "Missing required fields!" });
				return;
			}
			const email = new Email({
				subject: req.body.name,
				from: req.body.email,
				message: req.body.message,
			});
			email.save().then(() => {
				res.status(200).send({ message: "Email saved!" });
				mongoose.connection.close();
			});
		});
	} catch (err) {
		res.status(500).send({ message: "Internal server error!" });
		console.error(err);
	}
};

module.exports = app;
