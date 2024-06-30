import { useState } from "react";

export interface WizardStep<T> {
  label: string;
  content: T;
}

export const useFormWizard = <T>(initialSteps: WizardStep<T>[]) => {
  const [steps, setSteps] = useState<WizardStep<T>[]>(initialSteps);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const goToStep = (step: number) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  };

  const resetWizard = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return {
    currentStep,
    steps,
    isCompleted,
    nextStep,
    prevStep,
    goToStep,
    resetWizard,
  };
};
