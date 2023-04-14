import path from "path";
const nodemailer = require("nodemailer");

// Configure email server
const app = (req, res) => {
	try {
		if (!req.body) throw new Error("No body");

		const pathToEmail = path.join(__dirname, "test.txt");
		const fs = require("fs");
		const filepath = pathToEmail;
		const content = JSON.stringify(req.body);

		fs.writeFile(filepath, content, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log("File written successfully!");
		});

		if (!process.env.EMAIL || !process.env.PASSWORD) {
			throw new Error("No email or password");
		}
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});
		const { name, email, message } = req.body;
		const mailOptions = {
			from: email,
			to: process.env.EMAIL,
			subject: `Message from ${name}`,
			text: message,
		};
		transporter.sendMail(mailOptions);
		res.status(200).send("Email sent");
	} catch (err) {
		console.log(err);
		res.status(500).send("Email not sent");
	}
};

module.exports = app;
