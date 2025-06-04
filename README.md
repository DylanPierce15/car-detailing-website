# 🚘 Car Detailing Website

A modern, responsive web application for a car detailing business. Built with React, the site includes service descriptions, team bios, a booking system, and more — all designed to attract and convert potential customers.

---

## 🌐 Overview

This website serves as the digital storefront for a professional car detailing business. It’s designed to clearly communicate services, showcase the team’s work, and make it easy for customers to book an appointment online.

---

## ✨ Features

- Responsive layout for mobile and desktop  
- Service cards with floating number badges  
- “Why Us” section with icon-based feature grid  
- Team and gallery area to showcase bios and work  
- Embedded booking form (via Google Forms)
- Reviews Section at the bottom  
- Smooth scroll navigation  
- Clean, modern design using CSS and React components  

---

# 📅 Google Apps Script: Booking System Backend

This Google Apps Script backend powers the booking functionality for the [Short Hills Auto Detailing](https://shorthillsautodetailing.org) website.

It integrates with:
- A **Google Sheet** storing available time slots and booking statuses
- A **Google Form** where users select from dynamic date/time options
- A **web app endpoint** (`doGet`) that returns current availability in JSON for the React frontend

---

## 🔧 Files & Functionality

### `Code.gs`

This file contains all necessary functions:

| Function | Purpose |
|---------|---------|
| `generateCustomTimeSlots()` | Generates 7 days of 10:30 AM, 1:30 PM, and 4:30 PM time slots starting from tomorrow. Updates the "TimeSlots" sheet with `[Time Slot, Booked]` rows. |
| `updateTimeSlotsFromSheet()` | Syncs the Google Form’s multiple-choice options with currently unbooked slots in the Sheet. |
| `doGet()` | Publishes available slots in JSON format for the frontend. Used as a fetchable endpoint. |
| `getScriptId()` | Utility to log the current Apps Script project ID. |

---

## 📄 Sheet Setup

**Sheet Name**: `TimeSlots`

**Columns**:
- `A`: `Time Slot` – Formatted as `YYYY-MM-DD HH:mm`
- `B`: `Booked` – `TRUE` if booked, empty or `FALSE` otherwise

---

## 🧱 Tech Stack

| Technology     | Description                         |
|----------------|-------------------------------------|
| React          | UI framework                        |
| Tailwind CSS   | Utility-first CSS styling           |
| React Router   | Smooth scroll and section linking   |
| Google Forms   | Booking system integration          |
| Vite           | Lightning-fast development server   |

---

## 📁 Folder Structure

car-detailing-website/
├── README.md
├── package.json
├── vite.config.js
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── main.js
│ ├── assets/
│ │ └── images, icons, logos
│ ├── components/
│ │ ├── Booking.css
│ │ ├── Booking.js
│ │ ├── Header.css
│ │ ├── Header.js
│ │ ├── Reviews.css
│ │ ├── Reviews.js
│ │ ├── Services.css
│ │ ├── Services.js
│ │ ├── TeamAndWork.css
│ │ ├── TeamAndWork.js
│ │ ├── WhyUs.css
│ │ └── WhyUs.js
│ ├── google-apps-script/
│ │ ├── Code.gs
│ └── styles/
│ └── tailwind.css

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/car-detailing-website.git
   cd car-detailing-website
Install dependencies

npm install

Start the dev server

npm run dev
Open http://localhost:5173 in your browser.

📅 Booking System
The site includes a booking system where users input:

Name

Email & Phone

Selected Service

Car make & model

Appointment time (e.g., 10:30, 1:30, 4:30)

Optional comments

The form is embedded using Google Forms or a custom backend and can include features like:

Hiding filled slots

Time-based disabling of past slots

Email confirmation

🧩 To-Do / Ideas
Add calendar-based availability

Admin dashboard for managing appointments

Payment integration (e.g., Stripe)

Service pricing calculator

SEO optimization

📸 Screenshots
Add before/after images or screenshots of sections like “Services,” “Our Work,” and “Booking.”

📜 License
MIT License — free for personal and commercial use with attribution.

🙌 Credits
Designed and developed by [Your Name] as part of a small business digital strategy initiative.
