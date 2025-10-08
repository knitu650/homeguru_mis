# HomeGuru MIS Frontend

A comprehensive Management Information System for educational institutions built with React.

## Features

- 🎓 **Academic Management** - Classes, sections, subjects, semesters
- 👨‍🎓 **Student Management** - Admissions, enrollments, profiles, reports
- 👨‍🏫 **Teacher Management** - Onboarding, assignments, schedules
- 📊 **Attendance Tracking** - Student & teacher attendance with reports
- 📝 **Assignments & Examinations** - Complete assessment management
- 💰 **Fee Management** - Invoicing, payments, defaulters tracking
- 👥 **HR & Payroll** - Employee management, recruitment, salary processing
- 📚 **Library Management** - Book cataloging, issue/return, reservations
- 🚌 **Transport Management** - Routes, vehicles, tracking
- 🏨 **Hostel Management** - Room allocation, attendance, mess menu
- 📅 **Timetable Management** - Automated scheduling with conflict resolution
- 💬 **Communication** - Announcements, messaging, notifications
- 🎯 **Performance Management** - Appraisals and reviews
- 📈 **Reports & Analytics** - Comprehensive reporting system
- 🎫 **Helpdesk** - Ticket management system

## Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router v6** - Routing
- **Axios** - HTTP client
- **Chart.js** - Data visualization
- **Framer Motion** - Animations
- **React Toastify** - Notifications
- **CSS Modules** - Styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── assets/          # Images, fonts, styles
├── components/      # Reusable components
├── features/        # Feature modules
├── hooks/           # Custom hooks
├── services/        # API services
├── store/           # Redux store
├── routes/          # Routing configuration
├── utils/           # Utilities and helpers
├── config/          # App configuration
└── context/         # React contexts
```

## Environment Variables

See `.env.example` for all available environment variables.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.
