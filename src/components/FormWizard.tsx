import React, { useState } from "react";
import styled from "styled-components";
import Stepper from "./Stepper";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const StepContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface FormWizardProps {
  steps: {
    label: string;
    icon: any;
    content: React.ReactNode;
    stepColor?: string;
    labelColor?: string;
  }[];
  initialStep?: number;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  validateStep?: (step: number) => boolean;
  customButtons?: (
    currentStep: number,
    nextStep: () => void,
    prevStep: () => void
  ) => React.ReactNode;
}

const FormWizard: React.FC<FormWizardProps> = ({
  steps,
  initialStep = 0,
  containerStyle,
  buttonStyle,
  validateStep,
  customButtons,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isCompleted, setIsCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleNext = () => {
    if (validateStep && !validateStep(currentStep)) {
      return;
    }
    nextStep();
  };

  return (
    <Container style={containerStyle}>
      <Stepper steps={steps} currentStep={currentStep} />
      <StepContainer>
        {!isCompleted ? (
          steps[currentStep].content
        ) : (
          <div>
            <h2>Form Completed!</h2>
            <p>Thank you for completing the form.</p>
          </div>
        )}
      </StepContainer>
      <Navigation>
        {customButtons ? (
          customButtons(currentStep, handleNext, prevStep)
        ) : (
          <>
            {currentStep > 0 && (
              <Button onClick={prevStep} style={buttonStyle}>
                Previous
              </Button>
            )}
            <Button onClick={handleNext} style={buttonStyle}>
              {currentStep < steps.length - 1 ? "Next" : "Finish"}
            </Button>
          </>
        )}
      </Navigation>
    </Container>
  );
};

export default FormWizard;
