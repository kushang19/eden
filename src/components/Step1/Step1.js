// src/Step1.js
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/reducer/formSlice";
import './step1.css'; // Import the external CSS

const Step1 = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveFormData(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step1-form">
      <h2>Welcome! First things first...</h2>
      <p className="subtext">You can always change them later.</p>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Steve Jobs"
          {...register("fullName", {
            required: "Full Name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Full Name can only contain letters and spaces",
            },
          })}
          className={`form-input ${errors.fullName ? 'error' : ''}`}
        />
        {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          type="text"
          placeholder="Steve"
          {...register("displayName", {
            required: "Display Name is required",
          })}
          className={`form-input ${errors.displayName ? 'error' : ''}`}
        />
        {errors.displayName && <p className="error-message">{errors.displayName.message}</p>}
      </div>
      <button type="submit" className="submit-button">Create Workspace</button>
    </form>
  );
};

export default Step1;
