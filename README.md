# Travel Website Project - Next.js

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Third-Party Packages](#third-party-packages)
- [CSS and Responsiveness](#css-and-responsiveness)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a fully functional travel website built using Next.js. The website allows users to explore various tour packages, learn more about the travel company, view individual tour details, and contact the service providers. It also includes sections for client testimonials, service information, and more.

## Features

- **Home Page**: Introduction to the travel services.
- **Tours/Services Page**: Displays a list of available tours.
- **Tour Details Page**: Shows detailed information for a specific tour package.
- **About Us Page**: Provides information about the company, including client testimonials.
- **Contact Page**: Allows users to contact the company for inquiries.
- Fully responsive design across mobile, tablet, and desktop devices.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: TypeScript is used for type-safe code and better development experience.
- **Tailwind CSS**: Utility-first CSS framework for styling and layout.
- **Heroicons**: Icon library used for displaying icons throughout the project.
- **Framer Motion**: Animation library for adding interactive animations.

## Setup and Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/) for version control
 ###  Installation Steps
 Clone the repository:


git clone <your-repository-url>
cd <project-directory>
Install dependencies: Navigate to the project directory and install all dependencies using npm or yarn:

npm install
# or
yarn install
Start the development server: Once dependencies are installed, you can start the local development server:

npm run dev
# or
yarn dev
Build for production: To generate a production build:

npm run build
Run the production build: After building the project, you can run it with:

npm start
 

src/
  ├── app/
  │   ├── about/                 # About Us Page
  │   ├── contact/               # Contact Page
  │   ├── tours/                 # Tours Page and Details
  │   └── layout.tsx             # Layout component for shared layouts
  ├── components/                # Reusable components (BookingForm, Navbar, Footer, etc.)
  ├── data/                      # Data related to tours
  └── styles/                    # Global CSS files
public/
  ├── images/                    # Static images for the project
  └── favicon.ico

