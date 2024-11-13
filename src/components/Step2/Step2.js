// src/components/Step2.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../redux/reducer/formSlice';

const Step2 = ({ onNext, onPrev }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Dispatch form data to Redux store
    dispatch(saveFormData(data));
    onNext(); // Navigate to the next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Let's set up a home for all your work</h2>
      <p>You can always create another workspace later.</p>
      <div>
        <label>Workspace Name</label>
        <input
          type="text"
          {...register('workspaceName', {
            required: 'Workspace Name is required',
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Workspace Name can only contain letters and spaces',
            },
          })}
        />
        {errors.workspaceName && (
          <p style={{ color: 'red' }}>{errors.workspaceName.message}</p>
        )}
      </div>
      <div>
        <label>Workspace URL (optional)</label>
        <input
          type="text"
          {...register('workspaceURL', {
            pattern: {
              value: /^[a-zA-Z0-9-_.]*$/,
              message: 'Workspace URL can only contain letters, numbers, dashes, underscores, and periods',
            },
          })}
        />
        {errors.workspaceURL && (
          <p style={{ color: 'red' }}>{errors.workspaceURL.message}</p>
        )}
      </div>
      {/* Optional Previous Button */}
      {/* {onPrev && <button type="button" onClick={onPrev}>Previous</button>} */}
      <button type="submit">Create Workspace</button>
    </form>
  );
};

export default Step2;
