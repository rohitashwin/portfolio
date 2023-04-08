const express = require("express");
const nodemailer = require("nodemailer");
const history = require("connect-history-api-fallback");
const { v4 } = require('uuid');
const app = express();

app.use(express.json());
app.use(history());

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

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;