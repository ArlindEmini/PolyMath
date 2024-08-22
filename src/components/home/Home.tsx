import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Home.scss";
import StepIndicator from "../stepIndicator/StepIndicator";
import { PersonalInformationForm } from "../personalInformationForm/PersonalInformationForm";
import { WebPresence } from "../webPresence/WebPresence";
import { Experience } from "../experience/Experience";
import { useForm, SubmitHandler } from "react-hook-form";

const Home: React.FC = () => {
  const steps = [
    "Welcome Page",
    "Personal Information",
    "Web Presence",
    "Experience",
    "Education",
    "Expectations",
    "Supporting Documents",
    "Summary",
  ];
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleStepChange = (step: number) => {
    if (step > 0 && step <= steps.length) {
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    handleStepChange(currentStep + 1);
  };

  const handlePrevious = () => {
    handleStepChange(currentStep - 1);
  };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm<any>({});

  const onFormSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInformationForm register={register} />;
      case 2:
        return <PersonalInformationForm register={register} />;
      case 3:
        return <WebPresence register={register} />;
      case 4:
        return <Experience register={register} watch={watch} />;
      default:
        return <div>Welcome Page Content</div>;
    }
  };

  return (
    <>
      <div className="home-container">
        <div>
          {renderCurrentStep()}
          <div className="buttons">
            <Button
              variant="primary"
              className="btn-previous"
              onClick={handlePrevious}
            >
              {" "}
              Previous
            </Button>
            <Button
              variant="primary"
              className="btn-next"
              type="submit"
              onClick={handleNext}
            >
              Next
            </Button>
            {/* <Button
              variant="primary"
              className="btn-next"
              type="submit"
              onClick={handleSubmit(onFormSubmit)}
            >
              Submit Form
            </Button> */}
          </div>
        </div>

        <div className="stepper-section">
          <StepIndicator
            currentStep={currentStep}
            steps={steps}
            onStepChange={handleStepChange}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
