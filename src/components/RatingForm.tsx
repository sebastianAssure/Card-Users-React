import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import type { RatingFormValues } from '../interfaces/types';

function RatingForm() {
  const [ratings, setRatings] = useState<RatingFormValues[]>([]);

  const initialValues: RatingFormValues = {
    name: '',
    rating: 5,
    feedback: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    rating: Yup.number()
      .required('Rating is required')
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating cannot be more than 5'),
    feedback: Yup.string()
      .when('rating', {
        is: (rating: number) => rating < 3,
        then: (schema) => schema.required('Feedback is required for ratings below 3'),
        otherwise: (schema) => schema.optional(),
      }),
  });

  const handleSubmit = (values: RatingFormValues) => {
    setRatings([...ratings, values]);
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Rating Form</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="rating" className="block mb-1 font-medium">Rating (1-5 stars)</label>
              <Field
                as="select"
                id="rating"
                name="rating"
                className="w-full p-2 border rounded"
              >
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
              </Field>
              <ErrorMessage
                name="rating"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="feedback" className="block mb-1 font-medium">
                Feedback {values.rating < 3 && <span className="text-red-500">*</span>}
              </label>
              <Field
                as="textarea"
                id="feedback"
                name="feedback"
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Share your feedback"
              />
              <ErrorMessage
                name="feedback"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit Rating
            </button>
          </Form>
        )}
      </Formik>

      {ratings.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold mb-2">Ratings List:</h3>
          <div className="space-y-4 flex flex-wrap gap-2 justify-center">
            {ratings.map((rating, index) => (
              <div key={index} className="p-4 border rounded bg-gray-50">
                <p><strong>Name:</strong> {rating.name}</p>
                <p><strong>Rating:</strong> {Array(5).fill('★').fill('☆', rating.rating)}</p>
                <p><strong>Feedback:</strong> {rating.feedback || 'No feedback provided'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default RatingForm;