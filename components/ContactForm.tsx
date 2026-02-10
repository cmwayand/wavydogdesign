"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface IContactFormErrors {
	firstName?: string;
	lastName?: string;
	email?: string;
	projectType?: string;
}

const ContactForm = () => {
	const [errors, setErrors] = useState<IContactFormErrors>({});

	const handleSendMessage = (event: React.FormEvent) => {
		event.preventDefault();

		const firstName = (
			document.getElementById("first-name") as HTMLInputElement
		).value;
		const lastName = (document.getElementById("last-name") as HTMLInputElement)
			.value;
		const email = (document.getElementById("email") as HTMLInputElement).value;
		const projectType = (
			document.getElementById("project-type") as HTMLSelectElement
		).value;
		const message = (document.getElementById("message") as HTMLTextAreaElement)
			.value;

		const newErrors = {} as IContactFormErrors;
		if (!firstName) newErrors.firstName = "First name is required";
		if (!lastName) newErrors.lastName = "Last name is required";
		if (!email) newErrors.email = "Email is required";
		if (!projectType) newErrors.projectType = "Project type is required";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		const subject = `Project Inquiry from ${firstName} ${lastName}`;
		const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`;

		window.location.href = `mailto:claire@wavydogdesign.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		setErrors({} as IContactFormErrors);
	};

	return (
		<form className="space-y-4" onSubmit={handleSendMessage}>
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<label
						htmlFor="first-name"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						First name
					</label>
					<input
						id="first-name"
						className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="John"
					/>
					{errors.firstName && (
						<p className="text-sm text-red-600">{errors.firstName}</p>
					)}
				</div>
				<div className="space-y-2">
					<label
						htmlFor="last-name"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Last name
					</label>
					<input
						id="last-name"
						className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="Doe"
					/>
					{errors.lastName && (
						<p className="text-sm text-red-600">{errors.lastName}</p>
					)}
				</div>
			</div>
			<div className="space-y-2">
				<label
					htmlFor="email"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Email
				</label>
				<input
					id="email"
					type="email"
					className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					placeholder="john.doe@example.com"
				/>
				{errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
			</div>
			<div className="space-y-2">
				<label
					htmlFor="project-type"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Project Type
				</label>
				<select
					id="project-type"
					className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				>
					<option value="">Select a project type</option>
					<option value="website">Website Design</option>
					<option value="branding">Branding & Logo</option>
					<option value="social">Social Media</option>
					<option value="marketing">Marketing</option>
					<option value="other">Other</option>
				</select>
				{errors.projectType && (
					<p className="text-sm text-red-600">{errors.projectType}</p>
				)}
			</div>
			<div className="space-y-2">
				<label
					htmlFor="message"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Message
				</label>
				<textarea
					id="message"
					className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					placeholder="Tell us about your project..."
				></textarea>
			</div>
			<Button className="w-full" type="submit">
				Send Message
			</Button>
		</form>
	);
};

export default ContactForm;
