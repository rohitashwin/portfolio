import Header from "./Header";
import "../styles/Contact.css";

export default function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const message = e.target.message.value;
		// send email by sending a post req to /send-email
		// with the name, email, and message as the body
		const body = { name, email, message };
		fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then((res) => res.body())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
		// clear the form
		e.target.name.value = "";
		e.target.email.value = "";
		e.target.message.value = "";
	};
	return (
		<>
			<Header title="contact" index={2} />
			<div className="common-container">
				<div className="common-content">
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="name-email-supergroup">
							<div className="name-group form-group">
								<label htmlFor="name">Name</label>
								<input type="text" id="name" name="name" />
							</div>
							<div className="email-group form-group">
								<label htmlFor="email">Email</label>
								<input type="email" id="email" name="email" />
							</div>
						</div>
						<div className="message-group form-group">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" rows="5" />
						</div>
						<button type="submit">Send</button>
					</form>
					<div className="social-links"></div>
				</div>
			</div>
		</>
	);
}
