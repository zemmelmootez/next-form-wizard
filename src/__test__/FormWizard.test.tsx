import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormWizard from "../components/FormWizard";
import { faUser, faCog, faCheck } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    label: "Personal details",
    icon: faUser,
    content: <div>First Tab Content</div>,
  },
  {
    label: "Additional Info",
    icon: faCog,
    content: <div>Second Tab Content</div>,
  },
  {
    label: "Last step",
    icon: faCheck,
    content: <div>Third Tab Content</div>,
  },
];

test("renders FormWizard component", () => {
  render(<FormWizard steps={steps} />);
  expect(screen.getByText("First Tab Content")).toBeInTheDocument();
});

test("navigates through steps", () => {
  render(<FormWizard steps={steps} />);
  fireEvent.click(screen.getByText("Next"));
  expect(screen.getByText("Second Tab Content")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Next"));
  expect(screen.getByText("Third Tab Content")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Finish"));
  expect(screen.getByText("Form Completed!")).toBeInTheDocument();
});
