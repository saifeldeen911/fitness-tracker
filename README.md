# Fitness Tracking Application

## Description

The Fitness Tracking Application is a web-based tool that allows users to log their workouts, monitor their progress, and set fitness goals. Built with React, this application provides a user-friendly interface for tracking fitness activities and visualizing progress over time.

## Features

- Log workouts with exercise type, duration, and calories burned
- View workout history in a tabular format
- Set and update weekly fitness goals
- Responsive design for various device sizes
- Data persistence using local storage


## Technologies Used

- React
- React Router for navigation
- Formik and Yup for form handling and validation
- Tailwind CSS for styling
- Local Storage API for data persistence


## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```plaintext
git clone https://github.com/saifeldeen911/fitness-tracker
cd fitness-tracking-app
```


2. Install the dependencies:

```plaintext
npm install
```


3. Start the development server:

```plaintext
npm start
```


4. Open your browser and visit `http://localhost:3000` to view the application.


## Usage

1. **Logging a Workout**

1. Navigate to the "Log Workout" page
2. Fill in the exercise type, duration, and calories burned
3. Click "Log Workout" to save the entry



2. **Viewing Progress**

1. Go to the "Progress" page to see a table of all logged workouts



3. **Setting Goals**

1. Visit the "Goals" page
2. Enter your weekly workout and calorie burn goals
3. Click "Set Goals" to save your targets





## Project Structure

- `src/App.js`: Main component with routing setup
- `src/components/WorkoutForm.js`: Component for logging workouts
- `src/components/ProgressDashboard.js`: Component for displaying workout history
- `src/components/GoalsSetting.js`: Component for setting and updating fitness goals
