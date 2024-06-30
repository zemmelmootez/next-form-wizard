import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface StepperContainerProps {
  lineColor?: string;
  completedLineColor?: string;
}

const StepperContainer = styled.div<StepperContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
  position: relative;
`;

const Step = styled.div<{
  $active: boolean;
  $completed: boolean;
  stepColor?: string;
  labelColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$active ? props.stepColor || "#0070f3" : "#ccc")};
  position: relative;
  z-index: 1;
`;

const StepIcon = styled.div<{
  $active: boolean;
  $completed: boolean;
  stepColor?: string;
}>`
  background-color: ${(props) =>
    props.$completed ? props.stepColor || "#0070f3" : "#ccc"};
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const StepLabel = styled.div<{ $active: boolean; labelColor?: string }>`
  font-size: 14px;
  color: ${(props) => (props.$active ? props.labelColor || "#333" : "#ccc")};
`;

const Line = styled.div<{
  $active: boolean;
  lineColor?: string;
  completedLineColor?: string;
}>`
  position: absolute;
  top: 45%;
  height: 2px;
  background-color: ${(props) =>
    props.$active
      ? props.completedLineColor || "#0070f3"
      : props.lineColor || "#ccc"};
  z-index: 0;
  transform: translateY(-50%);
`;

interface StepperProps {
  steps: {
    label: string;
    icon: IconDefinition;
    stepColor?: string;
    labelColor?: string;
  }[];
  currentStep: number;
  lineColor?: string;
  completedLineColor?: string;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  lineColor,
  completedLineColor,
}) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index !== steps.length - 1 && (
            <Line
              $active={index < currentStep}
              lineColor={lineColor}
              completedLineColor={completedLineColor}
              style={{
                left: `${(index + 0.2) * (130 / steps.length)}%`,
                width: `calc(${100 / (steps.length - 1)}% - 50px)`,
              }}
            />
          )}
          <Step
            $active={index === currentStep}
            $completed={index <= currentStep}
            stepColor={step.stepColor}
            labelColor={step.labelColor}
          >
            <StepIcon
              $active={index === currentStep}
              $completed={index <= currentStep}
              stepColor={step.stepColor}
            >
              <FontAwesomeIcon icon={step.icon} />
            </StepIcon>
            <StepLabel
              $active={index === currentStep}
              labelColor={step.labelColor}
            >
              {step.label}
            </StepLabel>
          </Step>
        </React.Fragment>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
``;
