# smart-frontend
Live Website: https://verifiedsmart.netlify.app/

A responsive React application with secure authentication, Google Sign-In, password reset, FAQ, and support features.

Built with React, styledcomponent and React Router for a fast, modern user experience.


✨ Features

Authentication
    - Email + Password signup and login
    - Google Sign-In with Google Identity Services
    - Protected routes with React Router
    - JWT-based session management
- Account Recovery
    - Forgot Password flow
    - Email link to reset password
- Support & Help
    - FAQ Page with accordion + search
    - Support Page with contact form
- UI/UX
    - Mobile-first responsive design with styledcomponent 
    - Loading states and form validation

---

🛠 Tech Stack

Core
- React 18 - UI library
- React Router v6- Routing and protected routes
  TailwindCSS - Utility-first styling
- Axios - API requests
- React Hook Form + Zod- Form handling and validation


Auth
- Google Identity Services - Google Sign-In
- JWT - Token auth with backend API

---

🚀 Getting Started

1. Clone the repo
```bash
git clone https://github.com/smartworkie/smart-frontend.git
cd smart-frontend-app
2. Install dependencies
npm install
or
yarn install
3. Set up environment variables
Create a `.env` file in the root:
VITE_API_URL=https://api.yourapp.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
4. Run the development server
npm run dev
App runs on `http://localhost:5173`

5. Build for production
npm run build
---

🔐 Authentication Flows

Email + Password
1. User submits form on `/signup` or `/login`
2. `axios.post('/api/auth/login')` to backend
3. JWT stored in `localStorage` and set in Axios headers
4. `AuthContext` manages user state globally

Google Sign-In
1. User clicks "Continue with Google" button
2. Google Identity Services returns ID token
3. Token sent to `POST /api/auth/google`
4. Backend verifies and returns app JWT

Password Reset
1. User clicks "Forgot Password" → `/forgot-password`
2. Enter email → `POST /api/auth/forgot-password`
3. User gets email with link: `/reset-password?token=xxx`
4. Submit new password → `POST /api/auth/reset-password`

---

📄 Pages & Routes
Page	Route	Access
Login	`/login`	Public
Signup	`/signup`	Public
Forgot Password	`/forgot-password`	Public
Reset Password	`/reset-password`	Public
Dashboard	`/dashboard`	Protected
FAQ `/faq`	Public
Support `/support`	Public
Protected routes use a `<PrivateRoute>` component that checks `AuthContext`.

---

📂 Project Structure
smart-frontend-app/
├── public/
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # Button, Navbar, Input, FAQItem
│   ├── context/        # AuthContext.jsx
│   ├── hooks/          # useAuth.js
│   ├── pages/          # Login.jsx, Signup.jsx, Faq.jsx, Support.jsx
│   ├── routes/         # AppRoutes.jsx, PrivateRoute.jsx
│   ├── services/       # api.js, authService.js
│   ├── utils/          # validation.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── tailwind.config.js
└── README.md
---

🧪 Scripts
Command	Description
`npm run dev`	Start dev server
`npm run build`	Build for production
`npm run preview`	Preview production build
`npm run lint`	Run ESLint
---

✅ Future Improvements
- [ ] Email verification on signup
- [ ] Add 2FA with authenticator app
- [ ] Dark mode with Tailwind
- [ ] i18n for multi-language support

---

🤝 Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit and push
4. Open a Pull Request

📄 License
MIT © 2026 Michael

