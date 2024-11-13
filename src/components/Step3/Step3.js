// src/components/Step3.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { saveFormData } from '../../redux/reducer/formSlice';

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
    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h2>How are you planning to use Eden?</h2>
      <p>We’ll streamline your setup experience accordingly.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        <div
          className={`option-card ${selectedOption === 'myself' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('myself')}
          style={{
            border: selectedOption === 'myself' ? '2px solid #6A5ACD' : '2px solid #ccc',
            padding: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👤</div>
          <strong>For myself</strong>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>

        <div
          className={`option-card ${selectedOption === 'team' ? 'selected' : ''}`}
          onClick={() => handleOptionChange('team')}
          style={{
            border: selectedOption === 'team' ? '2px solid #6A5ACD' : '2px solid #ccc',
            padding: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
          <strong>With my team</strong>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>

      {errors.selectedOption && (
        <p style={{ color: 'red' }}>Please select an option to proceed.</p>
      )}

      <div>
        {/* {onPrev && <button type="button" onClick={onPrev} style={{ marginRight: '10px' }}>Previous</button>} */}
        <button
          type="submit"
          style={{ padding: '0.75rem 2rem', borderRadius: '5px', backgroundColor: '#6A5ACD', color: '#fff', border: 'none', cursor: 'pointer' }}
          disabled={!selectedOption}
        >
          Create Workspace
        </button>
      </div>
    </form>
  );
};

export default Step3;
