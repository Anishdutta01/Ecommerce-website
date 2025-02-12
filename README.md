# E-commerce Website with REST Architecture

This is a fully functional e-commerce website built with **Node.js**, **Express.js**, **MongoDB**, and **REST architecture**. The website includes various features such as secure user authentication, product management, cart system, and reviews.

## Features

- **Owner Creation and Environment Variables**:
  - The website owner can only be created in the development state using environment variables and configuration files, ensuring a secure and controlled environment setup.
  
- **Separation of Concerns**:
  - Implemented **separation of concerns** for better maintainability and readability of code.

- **MongoDB Connection Debugging**:
  - Used the **"debug"** npm package to conditionally print MongoDB connection messages only when the appropriate environment variables are set up.

- **Real-time Product Addition**:
  - Owners can add new products to the website in real-time using **Multer** and **MongoDB**.

- **User Authentication & Security**:
  - Users and owners can be created with hashed and salted passwords using **bcrypt** (hash and gensalt methods) for secure password storage.

- **Add to Cart & Reviews**:
  - Built a feature where users can add products to their cart and leave real-time reviews for products.

- **Filter Products**:
  - Implemented a filter option for users to sort products based on increasing price and recently added items.

- **Login and Authentication**:
  - Ensured smooth login and logout functionality using **cookie-parser** and **jsonwebtoken** for secure token-based authentication.
  - Verified user credentials during login using **MongoDB's `findOne()` function** and **bcrypt's compare method**.

- **Access Control**:
  - Restricted access to certain webpages and features for users who are not logged in to ensure secure access to sensitive areas.

- **Flash Messages**:
  - Implemented **flash messages** for user feedback, such as successful logins, error notifications, or other user actions.



