# 🍜 Dragon Den — Restaurant Web App

A restaurant web experience designed to reduce decision fatigue and help users move from browsing to ordering with clarity and confidence.

---

## 🔗 Live Demo

https://dragon-den-gamma.vercel.app/

## 💻 View Code

You’re already here — feel free to explore the structure and implementation below.

---

## 🧠 Overview

Most restaurant websites prioritize presentation over usability, making it harder for customers to quickly decide what they want.

Dragon Den was designed and built to focus on:

- Clear navigation
- Faster decision-making
- Reduced friction between browsing and ordering

The goal was to create a system that holds up under real-world use, not just visual review.

---

## ✨ Key Features

- **Simplified Menu Navigation**  
  Structured categories that make scanning and decision-making easier

- **Sticky Navigation with Primary CTA**  
  Keeps key actions accessible at all times

- **Clear User Feedback (Cart / States)**  
  Guides users through interaction and decision flow

- **Reusable UI Components**  
  Consistent patterns across the experience

---

## 🧠 System Design Thinking

This project was approached as a system, not a set of isolated screens.

- Designed for multiple user flows (browse → decide → order)
- Built with reusable UI patterns
- Structured to support future expansion (roles, features, operations)

The focus was on creating a flexible foundation rather than a fixed design.

---

## ⚙️ How It Was Built

- **Component-Based Architecture**  
  UI broken into reusable, maintainable components

- **Scalable Navigation Structure**  
  Designed to grow with content and features

- **State & Interaction Handling**  
  Supports real-time interactions like selection and ordering

- **Separation of Concerns**  
  Clear distinction between UI, data, and layout logic

---

## 📁 Project Structure

dragon-den/
├── public/
├── src/
│ ├── assets/ # Images and static resources
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level views
│ ├── data/ # Menu and structured content
│ ├── styles/ # CSS and global styles
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
