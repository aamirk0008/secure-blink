# Vue.js Business Application

A comprehensive Vue.js application with authentication, dashboard, and contact form functionality.

## Features

- **Landing Page**: Navigation bar with Home, About, Contact links
- **Authentication**: Login system with route protection
- **Dashboard**: User insights and analytics display
- **Contact Form**: Form submission with API integration
- **Routing**: Vue Router with authentication guards
- **Styling**: Tailwind CSS for responsive design

## Project Structure

\`\`\`
src/
├── components/
│   ├── Home.vue          # Landing page component
│   ├── Login.vue         # Authentication page
│   ├── Dashboard.vue     # User dashboard
│   ├── Navigation.vue    # Navigation bar
│   └── ContactForm.vue   # Contact form component
├── App.vue               # Root component
├── main.js              # Application entry point
└── style.css            # Global styles with Tailwind
\`\`\`

## Setup Instructions

1. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Configure Environment Variables** (optional):
   Create a `.env` file in the root directory:
   \`\`\`
   VUE_APP_CONTACT_API=https://your-api-endpoint.com/contact
   \`\`\`

3. **Run Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   The application will be available at `http://localhost:3000`

4. **Build for Production**:
   \`\`\`bash
   npm run build
   \`\`\`

## API Integration

The contact form is configured to submit data to an API endpoint. Update the `VUE_APP_CONTACT_API` environment variable with your actual API URL.

Expected API format:
- **Method**: POST
- **Content-Type**: application/json
- **Body**: `{ name: string, email: string, message: string }`

## Authentication

The application uses localStorage for simple authentication state management. In a production environment, replace this with proper JWT tokens and secure authentication.

## Dependencies

- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router 4**: Official router for Vue.js
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

## Development Notes

- The dashboard displays placeholder data - replace with actual API calls
- Authentication is simplified for demo purposes
- Contact form includes error handling and loading states
- All routes are properly configured with authentication guards
