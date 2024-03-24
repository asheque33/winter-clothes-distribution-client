# Winter Clothes Distribution Management

This project is mainly focus on poor & suffering people so that they can warm themselves getting these little gifts.

## Acknowledgements

- [Description](#Description)
- [Live URL](#live-url)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Description

The Winter Clothes Management System is a web application designed to streamline the management of winter clothing items. It allows users to register, log in, create, update, and delete winter clothes posts. The application provides a user-friendly interface for managing winter clothes inventory efficiently.

## Live URL

The live version of the Winter Clothes Management System can be accessed [here](https://example.com).

## Features

### Public Routes

- **Home / Landing Page / Root Page**

  - Navigation links for unauthenticated and authenticated users.
  - Banner section showcasing the platform's mission and goals.
  - Display of winter clothes posts and donor testimonials.
  - Gallery carousel highlighting distribution efforts.
  - Informative sections about the platform and winter clothes distribution.

- **Login / Register Page**
  - Secure login and registration forms for user authentication.

### Dashboard (Private Routes)

- **Dashboard Home Page**

  - Dynamic interface with statistical insights.
  - Pie chart visualization of supply calculations.

- **All Winter Clothes Page**

  - Table view of all winter clothes posts with action buttons for editing and deleting.
  - Addition of new winter clothes posts.

- **Create Winter Clothes Post Page**
  - Interactive form for creating new winter clothes posts including edit and delete confirmation with modal.

### Winter Clothes Detail Page

- Detailed presentation of individual winter clothes posts with images and descriptions.
- Donation button to initiate the donation process.

## Technologies Used

- **Client:**

  - React.js
  - React Router
  - Redux
  - Rtk Query
  - TailwindCSS
  - Ant Design
  - Framer Motion

- **Server:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Decode
  - Bcrypt for hashing password

## Installation

#### _To run the Winter Clothes Management System locally, follow these steps:_

### Frontend Setup

1. _Clone the repository:_

```bash
git clone https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-fronten-asheque33.git
```

2. _Navigate to the frontend directory:_

```bash
  cd l2-b2-assignment-6-fronten-asheque33
```

3. _install dependencies:_

```bash
  pnpm install
```

4. _start the Client locahost api:_

```bash
  pnpm dev
```

### Backend Setup

1. _Clone the repository:_

```bash
  git clone https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-backend-asheque33.git
```

2. _Navigate to the backend directory:_

```bash
  l2-b2-assignment-6-backend-asheque33
```

3. _install dependencies:_

```bash
  npm install
```

4. _Setup environment variables by creating a '.env' file in the root directory and adding the following:_

```bash
PORT=4000
MONGODB_URI="mongodb+srv://dwcmp_admin:dwcmp_admin123@cluster0.2fttge7.mongodb.net/wc-project?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="wc-project-secret-key"
EXPIRES_IN='7d'
```

5. _start the server:_

```bash
  npm run dev
```

# Usage

1. _Register a new account or log in with existing credentials._
2. _Explore the home page to view winter clothes posts and donor testimonials._
3. _Access the dashboard to manage winter clothes and view statistical insights._
4. _Add, edit, or delete winter clothes posts as needed._
5. _Click on individual winter clothes posts to view details and initiate donations._
