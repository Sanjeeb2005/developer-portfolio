# Personal Portfolio Website

A responsive personal portfolio website built with React to showcase my skills, projects, resume, and contact information.

## Live Demo

Coming soon.

## Features

* Responsive portfolio website
* Hero section with introduction
* About section
* Skills section
* Projects section
* Contact section
* Smooth scrolling to the Projects section
* Downloadable CV
* Functional contact form
* EmailJS integration for sending contact messages
* React state management for form inputs
* Environment variables for EmailJS configuration

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* EmailJS
* Vite
* Git
* GitHub
* npm

## Project Structure

```text
portfolio/
│
├── public/
│   └── resume.pdf
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   ├── data/
│   │   └── skills.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Sanjeeb2005/developer-portfolio.git
```

### 2. Navigate to the project directory

```bash
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory of the project.

Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your own EmailJS credentials.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Environment Variables

This project uses EmailJS for the contact form.

The following environment variables are required:

| Variable                   | Description                       |
| -------------------------- | --------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service identifier        |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template identifier |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                |

The actual `.env` file is not included in the repository for security and configuration management.

A `.env.example` file is provided to show the required environment variable names.

## Contact Form

The contact form allows visitors to send a message directly through the portfolio.

The flow is:

```text
Visitor
   ↓
Contact Form
   ↓
React State
   ↓
EmailJS
   ↓
Email Service
   ↓
Email Inbox
```

The form collects:

* Name
* Email
* Message

The submitted information is sent using the configured EmailJS template.

## Security

Environment-specific configuration is stored in the `.env` file.

The `.env` file is excluded from Git using `.gitignore`.

The repository contains `.env.example` with placeholder values instead of the actual configuration.

## Future Improvements

* Improve responsive design
* Add better form validation
* Add loading state while sending messages
* Add success and error messages inside the UI
* Improve project cards
* Add project live-demo links
* Add animations and transitions
* Improve accessibility
* Deploy the portfolio
* Add screenshots to the README

## Author

**Sanjeeb Batriya**

Full-Stack Web Developer

* GitHub: https://github.com/Sanjeeb2005
* LinkedIn: https://www.linkedin.com/in/sanjeeb-batriya-46a635359
* Email: [kitutech479@gmail.com](mailto:kitutech479@gmail.com)

## License

This project is created for personal portfolio and learning purposes.
