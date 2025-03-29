# Reqres User Management

A React-based User Management web application that interacts with the [Reqres API](https://reqres.in/) for performing CRUD operations on user data. It includes authentication, user listing, search, and user update functionality.

🚀 **Live Demo:** [teamtweak-34fc2.web.app](https://teamtweak-34fc2.web.app/)

---

## 📌 Features

- 🔐 Login authentication using Reqres mock API
- 👥 Display user list with avatars and basic details
- 🔍 Search users by name or email
- ✏️ Edit user details
- ❌ Error handling for API failures or invalid routes
- 🎨 Responsive UI with reusable components
- 🌍 Deployed on Firebase Hosting

---

## 📁 Project Structure

```
reqres-user-management
├─ .postcssrc                  # PostCSS configuration
├─ package-lock.json           # Dependency lockfile
├─ package.json                # Project metadata and dependencies
├─ public
│  └─ index.html               # HTML entry point
├─ README.md                   # Project documentation
└─ src
   ├─ App.js                   # Main app component and routes
   ├─ Components               # All UI components
   │  ├─ EditUser.js
   │  ├─ Error.js
   │  ├─ Footer.js
   │  ├─ Header.js
   │  ├─ Login.js
   │  ├─ SearchBar.js
   │  ├─ UserCard.js
   │  └─ UserList.js
   ├─ constants
   │  └─ constant.js           # Centralized constants
   ├─ hooks
   │  └─ useAuth.js            # Custom authentication hook
   ├─ main.js                  # App entry point
   ├─ styles.css               # Global styles
   └─ utils
      ├─ alert.js              # Alert utilities
      └─ update.js             # User update logic
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 14.x
- npm or yarn

### Installation

```bash
git clone https://github.com/taniyakamboj15/user-management.git
cd user-management
npm install
```

### Running the App Locally

```bash
npm run dev
```

The app should now be running at [http://localhost:5173](http://localhost:5173).

---

## 🚀 Deployment on Firebase

This project is deployed on Firebase Hosting. If you want to deploy it yourself:

### 1️⃣ Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 2️⃣ Login to Firebase

```bash
firebase login
```

### 3️⃣ Initialize Firebase in the Project

```bash
firebase init
```

- Choose **Hosting**
- Select the Firebase project
- Set `build` as the public directory
- Configure as a single-page app (SPA): **Yes**
- Do not overwrite `index.html`

### 4️⃣ Build the Project for Production

```bash
npm run build
```

### 5️⃣ Deploy to Firebase

```bash
firebase deploy
```

---

## 🤔 Assumptions & Considerations

- Uses [Reqres](https://reqres.in/) as a mock API for login and user data.
- No actual database or backend — all API calls are made to Reqres endpoints.
- No persistent authentication — tokens are mock and reset on refresh.
- Designed for demonstration and learning purposes.
- Login with the test credentials provided on Reqres:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`

---

## 🧪 Testing

Manual testing is recommended. Make sure to test:

- Login with valid and invalid credentials
- User search functionality
- Editing and updating a user
- Navigating to invalid routes (should show Error component)

---

## 📦 Built With

- React
- React Router
- CSS
- Firebase Hosting
- Reqres Mock API

---

## 🙋‍♀️ Author

**Taniya Kamboj**  
[GitHub Profile](https://github.com/taniyakamboj15)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
