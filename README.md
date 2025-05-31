
# 🏡 Apartment Listing App

A fullstack, secure, and responsive apartment listing web application built with Next.js, PostgreSQL, Prisma, and Docker. Users can browse apartments via infinite scrolling, view apartment details, and contact landlords — all in a seamless and intuitive experience.

## 🚀 Features
- 🔐 **Secure:** Built with Prisma ORM to protect against SQL injection and other common security flaws.

- 📱 **Responsive:** Optimized UI/UX for desktop, tablet, and mobile views.

- 🔁 **Infinite Scrolling:** Effortless apartment browsing with pagination handled via infinite scrolling.(WIP)

- 🏠 **Simple Navigation Flow:**

  &nbsp;&nbsp;&nbsp;&nbsp; - Landing Page → Apartment List → Apartment Detail → Contact → Back to Landing

- 🧪 **Seeded Database:** Randomized seed data to simulate real-world listings.

- 🐳 **Dockerized:** One-command setup using Docker and Docker Compose.

## 🛠️ Stack
| Tech           | Purpose                              |
| -------------- | ------------------------------------ |
| **Next.js**    | Frontend and server-side rendering   |
| **PostgreSQL** | Primary database                     |
| **Prisma**     | Type-safe ORM with schema validation |
| **Docker**     | Containerization of app and services |
| **TypeScript** | Type safety throughout the project   |
| **Express.js** | Minimal, fast Node.js web framework  |

## 📦 Getting Started
### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Run the application
```bash
 docker-compose up --build 
 ``` 

The app will be available at: http://localhost:3000

### 🧬 Database Initialization
Upon first run, the application:

 - Applies Prisma migrations.

- Seeds the database with randomized apartment listings via the Prisma seed script.

### 🖥️ Application Flow
1. **Landing Page:** A minimal welcome page with a CTA button.

2. **Apartment Listings:** On clicking the CTA, users are navigated to a list of apartments that supports infinite scrolling.

3. **Apartment Detail:** Clicking any apartment opens detailed view with images and descriptions.

4. **Contact CTA:** A button allows users to initiate contact (mock), which redirects back to the landing page.

## 📂 Project Structure Overview
#### Backend 
![image](https://github.com/user-attachments/assets/f5f8df04-622c-4bfb-b66d-632575300cab)

#### Frontend
![image](https://github.com/user-attachments/assets/cd8f968e-37bd-433c-8f63-4aab29836056)




### 🔒 Security Considerations
- Prisma ORM ensures parameterized queries to prevent SQL injection.

- No direct SQL queries are written in raw form unless fully sanitized.

- Environment variables are managed securely via .env files and not exposed in client-side code.

### 📱 Responsiveness
The app UI is fully responsive and adapts to:

- Desktop screens
- Tablets
- Mobile phones

## 🧪 Testing & Validation
Manual Testing: Performed across major screen sizes.

Pagination: Verified to fetch and append listings correctly on scroll. **(WIP)**

Error Handling: Basic loading and error states managed for a smooth UX.



