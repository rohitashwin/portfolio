const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const history = require("connect-history-api-fallback");
const app = express();
const port = process.env.PORT || 8080;

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
app.use(express.json());
app.use(history());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("*", (req, res) => {
	res.sendFile(path.join(buildPath, "index.html"));
});

// Configure email server
app.post("/send-email", (req, res) => {
	try {
		if (!req.body) throw new Error("No body");
		console.log(req.body);
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
});
