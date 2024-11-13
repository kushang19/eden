// src/Step1.js
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/reducer/formSlice";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later.</p>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          {...register("fullName", {
            required: "Full Name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Full Name can only contain letters and spaces",
            },
          })}
        />
        {errors.fullName && (
          <p style={{ color: "red" }}>{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <label>Display Name</label>
        <input
          type="text"
          {...register("displayName", {
            required: "Display Name is required",
          })}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName.message}</p>
        )}
      </div>
      <button type="submit">Create Workspace</button>
    </form>
  );
};

export default Step1;
