// src/components/Step3.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { saveFormData } from '../../redux/reducer/formSlice';
import './step3.css'; // Import the CSS file for styling

const Step3 = ({ onNext, onPrev }) => {
  const dispatch = useDispatch();
  const { handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      selectedOption: '',
    },
  });

  const selectedOption = watch('selectedOption');

  const onSubmit = () => {
    // Save selected option to Redux store
    dispatch(saveFormData({ selectedOption }));
    onNext();
  };

  const handleOptionChange = (option) => {
    setValue('selectedOption', option, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step3-form">
      <h2>How are you planning to use Eden?</h2>
      <p className="subtext">We’ll streamline your setup experience accordingly.</p>

      <div className="options-container">
        <div
          className={`option-card ${selectedOption === 'myself' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('myself')}
        >
          <div className="option-icon">👤</div>
          <strong>For myself</strong>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>

        <div
          className={`option-card ${selectedOption === 'team' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('team')}
        >
          <div className="option-icon">👥</div>
          <strong>With my team</strong>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>

      {errors.selectedOption && (
        <p className="error-message">Please select an option to proceed.</p>
      )}

      <div>
        {/* {onPrev && <button type="button" onClick={onPrev} className="nav-button">Previous</button>} */}
        <button
          type="submit"
          className="submit-button options-btn"
          disabled={!selectedOption}
        >
          Create Workspace
        </button>
      </div>
    </form>
  );
};

export default Step3;
