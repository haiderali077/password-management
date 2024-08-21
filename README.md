## Project Overview: Password Manager Application

### Technologies Used:
- **Backend**: Express.js, MySQL
- **Frontend**: React
- **Encryption**: Node.js `crypto` library
- **State Management**: React `useState`, `useEffect` hooks
- **Styling**: CSS

### Project Description:
The Password Manager application provides a secure solution for storing and managing passwords. Users can add passwords with titles, which are encrypted before being stored in a MySQL database. The application allows for retrieval and decryption of stored passwords upon request.

---

## Technology Choices

- **Express.js**: Selected for its simplicity and flexibility, which facilitate quick setup of API endpoints and efficient request handling.
- **MySQL**: Utilized for its structured table format, which simplifies the retrieval and insertion of data into the database, making the management of user credentials easier.
- **React**: Utilized for its component-based architecture, which supports the development of a clean and modular user interface.
- **Crypto Library**: The Node.js `crypto` library is used for encryption to ensure robust security for stored passwords.

---

## Design Decisions

- **Encryption & Decryption**: AES-256 encryption was implemented to secure passwords. Each password is encrypted along with an initialization vector (IV) to enhance security, with decryption handled server-side upon user request.
  
- **Database Schema**: The `passwords` table includes fields for the encrypted password, title, and IV, ensuring secure storage of each password along with its metadata.

- **Frontend-Backend Communication**: Axios was chosen for making HTTP requests between the React frontend and the Express backend, ensuring smooth data flow and interaction.

---

## Documentation

### API Endpoints:
- **POST /addpassword**: Encrypts and stores a new password in the database.
- **GET /getpasswords**: Retrieves all stored passwords (encrypted).
- **POST /decryptedpassword**: Decrypts a specified password using its IV.

### System Diagram:
- **Frontend**: React components manage user input and display stored passwords.
- **Backend**: Express.js routes handle API requests, with MySQL used for encrypted password storage.
- **Encryption**: AES-256 encryption is applied to passwords before they are stored.

### User Journey:
- **Add a Password**: Users enter a password and title, which are encrypted and stored in the database.
- **View Passwords**: Users can view the titles of stored passwords.
- **Decrypt Password**: Clicking on a title allows users to decrypt and view the corresponding password.

---

## Packages Manager

- **Yarn**: Used for managing dependencies in both the frontend and backend.

### Packages Needed to Import in Frontend

- **Axios**

### Packages Needed to Import in Backend

- **express**
- **mysql**
- **cors**
- **nodemon**
