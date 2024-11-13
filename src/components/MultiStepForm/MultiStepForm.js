// src/MultiStepForm.js
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="multi-step-form">
      <ProgressBar step={currentStep} />
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 4 && <Step4 />}
    </div>
  );
};

export default MultiStepForm;
