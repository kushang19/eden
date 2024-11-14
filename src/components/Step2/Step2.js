// src/components/Step2.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../redux/reducer/formSlice';
import './step2.css'; // Import the external CSS file

const Step2 = ({ onNext, onPrev }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveFormData(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step2-form">
      <h2>Let's set up a home for all your work</h2>
      <p className="subtext">You can always create another workspace later.</p>
      <div className="form-group">
        <label htmlFor="workspaceName">Workspace Name</label>
        <input
          id="workspaceName"
          type="text"
          placeholder='Eden'
          {...register('workspaceName', {
            required: 'Workspace Name is required',
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Workspace Name can only contain letters and spaces',
            },
          })}
          className={`form-input ${errors.workspaceName ? 'error' : ''}`}
        />
        {errors.workspaceName && <p className="error-message">{errors.workspaceName.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="workspaceURL">Workspace URL (optional)</label>
        <input
          id="workspaceURL"
          type="text"
          placeholder='www.eden.com'
          {...register('workspaceURL', {
            pattern: {
              value: /^[a-zA-Z0-9-_.]*$/,
              message: 'Workspace URL can only contain letters, numbers, dashes, underscores, and periods',
            },
          })}
          className={`form-input ${errors.workspaceURL ? 'error' : ''}`}
        />
        {errors.workspaceURL && <p className="error-message">{errors.workspaceURL.message}</p>}
      </div>
      <button type="submit" className="submit-button">Create Workspace</button>
    </form>
  );
};

export default Step2;
