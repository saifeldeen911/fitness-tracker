import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const WorkoutSchema = Yup.object().shape({
  exerciseType: Yup.string().required("Exercise type is required"),
  duration: Yup.number()
    .positive("Duration must be positive")
    .required("Duration is required"),
  caloriesBurned: Yup.number()
    .positive("Calories must be positive")
    .required("Calories burned is required"),
});

export function WorkoutForm() {
  const handleSubmit = (values, { resetForm }) => {
    // Save workout to local storage
    const workouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    workouts.push({ ...values, date: new Date().toISOString() });
    localStorage.setItem("workouts", JSON.stringify(workouts));
    resetForm();
    alert("Workout logged successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Log Your Workout
        </h2>
        <Formik
          initialValues={{ exerciseType: "", duration: "", caloriesBurned: "" }}
          validationSchema={WorkoutSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="exerciseType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Exercise Type
                </label>
                <Field
                  name="exerciseType"
                  type="text"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                    errors.exerciseType && touched.exerciseType
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="exerciseType"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration (minutes)
                </label>
                <Field
                  name="duration"
                  type="number"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                    errors.duration && touched.duration ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name="duration"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="caloriesBurned"
                  className="block text-sm font-medium text-gray-700"
                >
                  Calories Burned
                </label>
                <Field
                  name="caloriesBurned"
                  type="number"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                    errors.caloriesBurned && touched.caloriesBurned
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="caloriesBurned"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log Workout
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
