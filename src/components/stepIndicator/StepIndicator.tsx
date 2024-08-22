import React, { useState } from "react";
import "./StepIndicator.scss";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
  onStepChange: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
  onStepChange,
}) => {
  const [resetTextColor, setResetTextColor] = useState<boolean>(false);

  const handleStepChange = (step: number) => {
    setResetTextColor(true);
    onStepChange(step);
    setTimeout(() => setResetTextColor(false), 0);
  };

  return (
    <div className="step-indicator">
      {steps.map((step, index) => {
        const isActiveStep = currentStep === index + 1;
        const isCompletedStep = currentStep > index + 1;

        return (
          <div
            key={index}
            className={`step-item ${isActiveStep ? "active-step" : ""} ${
              isCompletedStep ? "completed-step" : ""
            }`}
            onClick={() => handleStepChange(index + 1)}
          >
            <div className="step-number-container">
              <div
                className={`step-number ${
                  isActiveStep
                    ? "active-number"
                    : isCompletedStep
                    ? "completed-number"
                    : ""
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
            <div
              className={`step-label ${
                resetTextColor ? "reset-text-color" : ""
              }`}
            >
              {step}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
