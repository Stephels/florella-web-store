# Florella – React Web Store

Florella is a React-based e-commerce storefront for a fictional flower and cake boutique, built as a HyperionDev Capstone Project. Visitors can browse products, register and log in, add items to a cart, choose a shipping method, and get help understanding shipping options — all powered by Redux for state management.

## Features

- **Landing, About, Contact, Store, and Cart pages**, with a persistent header and navigation menu on every route.
- **Registration** with validated fields — first name, surname, username, email, and a password that must meet strength requirements (uppercase, lowercase, number, special character).
- **Login/logout**, with the logged-in username stored in Redux and displayed in the header.
- **Product catalog** rendered dynamically with `array.map()`, each item keyed uniquely.
- **Shopping cart** — add, remove, and adjust quantities, with the running subtotal calculated live via Redux.
- **Shipping selection** (Standard or Express), each with its own cost added to the order total.
- **Help popup** explaining what each shipping option includes.
- Custom CSS styling throughout, no external UI framework required.

## Tech Stack

- [React](https://react.dev/) (via Create React App)
- [React Router](https://reactrouter.com/) for page navigation
- [Redux Toolkit](https://redux-toolkit.js.org/) + React-Redux for state management
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) for form handling and validation
- [React Modal](https://reactcommunity.org/react-modal/) for the registration success popup

## Known Limitations

This is a front-end learning project with no backend or database. Registered
users (including passwords) are stored only in memory via Redux and are lost
on page refresh. Passwords are also compared in plain text rather than
hashed, which would never be acceptable in a production application with
real user data.

## Getting Started

### Prerequisites

You'll need [Node.js](https://nodejs.org/) (v18 or later recommended) and npm installed. Check your versions with:

```bash
node -v
npm -v
```

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Stephels/florella-web-store.git
   ```

2. Move into the project folder:

   ```bash
   cd florella-web-store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The app should open automatically at [http://localhost:3000](http://localhost:3000). If it doesn't, open that address in your browser manually.

## Using the App

- Browse the **Store** page to view flowers ("Blooms") and cakes ("Bakes").
- Pick a type from the dropdown on a product card, then click **Add to Cart**.
- Visit the **Cart** page to review your items, adjust quantities, choose a shipping method, and click **Help** if you're unsure which shipping option to pick.
- Click **Register** to create an account, then **Log In** with your new username and password — once logged in, your username appears in the header along with a **Log Out** option.

## Project Structure

```
src/
├─ Components/   # Page and UI components (Header, Footer, Cart, Products, Login, Register, etc.)
├─ Redux/        # Redux slices and store configuration (user, cart, products)
├─ Styles/       # Component-specific CSS files
├─ Data/         # Static product data
├─ Images/       # Product photos, icons, and logos
├─ Fonts/        # Custom font files
```

## Author

Stephanie Hochfelden
