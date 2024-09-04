import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const GoalSchema = Yup.object().shape({
  weeklyWorkouts: Yup.number()
    .positive("Must be positive")
    .required("Required"),
  weeklyCalories: Yup.number()
    .positive("Must be positive")
    .required("Required"),
});

export function GoalsSetting() {
  const [goals, setGoals] = useState({
    weeklyWorkouts: "",
    weeklyCalories: "",
  });

  useEffect(() => {
    const storedGoals = JSON.parse(
      localStorage.getItem("fitnessGoals") || "{}"
    );
    setGoals(storedGoals);
  }, []);

  const handleSubmit = (values) => {
    localStorage.setItem("fitnessGoals", JSON.stringify(values));
    setGoals(values);
    alert("Goals updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Set Your Fitness Goals
        </h2>
        <Formik
          initialValues={goals}
          validationSchema={GoalSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="weeklyWorkouts"
                  className="block text-sm font-medium text-gray-700"
                >
                  Weekly Workouts Goal
                </label>
                <Field
                  name="weeklyWorkouts"
                  type="number"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                    errors.weeklyWorkouts && touched.weeklyWorkouts
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="weeklyWorkouts"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="weeklyCalories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Weekly Calories Burn Goal
                </label>
                <Field
                  name="weeklyCalories"
                  type="number"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                    errors.weeklyCalories && touched.weeklyCalories
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="weeklyCalories"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Set Goals
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
