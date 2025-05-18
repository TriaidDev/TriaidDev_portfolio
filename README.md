<<<<<<< HEAD

# TRIAIDDEV Portfolio Website

A modern, responsive portfolio website for TRIAIDDEV, showcasing web development services and projects.

## Features

- Responsive design for all device sizes
- Interactive UI with smooth animations and transitions
- Dedicated pages for services, projects, about, and contact
- Contact form with validation and API integration
- Modern dark theme with neon green accents

## Tech Stack

- React.js with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Shadcn UI components
- React Query for API calls

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Deployment Options

### Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository
3. Set the build command: `npm run build`
4. Set the publish directory: `dist`
5. Deploy!

### Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will automatically detect the build settings
4. Deploy!

### Backend Deployment Options

For the backend API, you have several options:

1. **Netlify Functions**: Deploy serverless functions alongside your frontend
   - Create a `netlify/functions` directory
   - Move the API logic to serverless functions
   - Configure redirects in `netlify.toml`

2. **Vercel Serverless Functions**: Similar to Netlify Functions
   - Create an `api` directory at the root
   - Implement your API endpoints as serverless functions

3. **Heroku**: For a dedicated backend server
   - Create a Node.js/Express backend
   - Deploy to Heroku

4. **Supabase**: For a fully-managed backend
   - Use Supabase for authentication, database, and storage
   - Connect using the Supabase client

5. **Firebase**: Alternative to Supabase
   - Use Firebase Authentication, Firestore, and Cloud Functions
   - Connect using the Firebase SDK

## Backend Implementation

This project includes a simulated backend API for the contact form. To implement a real backend:

1. Create a server using Node.js/Express, or use serverless functions
2. Implement the following endpoints:
   - POST /api/contact - Process contact form submissions
3. Connect to a database (MongoDB, PostgreSQL, etc.) to store the messages
4. Implement email notifications using services like SendGrid or Nodemailer
5. Update the frontend API functions in `src/api/FormHandler.ts` to point to your real backend

## Environment Variables

For production, you'll need to set up the following environment variables:

- `VITE_API_URL` - URL to your backend API
- `VITE_EMAIL_SERVICE` - Email service for notifications (if applicable)

## Further Customization

- Update colors in `tailwind.config.ts` to match your brand
- Replace placeholder content with your actual services and projects
- Add Google Analytics or other tracking tools
=======
# TriaidDev_portfolio
portfolio of TriaidDev 
>>>>>>> ca6bd936236423d52df9dacf1b17ef1fd511c79a
