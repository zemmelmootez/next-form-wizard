# Next.js Form Wizard

Next.js Form Wizard is a customizable wizard component for multi-step forms in Next.js applications. It provides a flexible interface to manage form navigation, validation, and step controls with ease.

## Features

- **Multi-step Form Navigation:** Easily navigate between steps in a wizard-like interface.
- **Customizable Buttons:** Define custom navigation buttons for each step.
- **Form Validation:** Implement step-wise validation to control navigation.
- **Flexible Configuration:** Customize step labels, icons, colors, and content.
- **Lightweight and Responsive:** Designed to be lightweight and responsive out-of-the-box.

## Installation

Install the package using npm:

```bash
npm install nextjs-form-wizard
```

Or using yarn:

```bash
yarn add nextjs-form-wizard
```

## Usage

### Importing Components and Hooks

Import the `FormWizard` component and `useFormWizard` hook into your Next.js application:

```typescript
import { FormWizard, useFormWizard } from "nextjs-form-wizard";
```

### Example Usage

Create a list of steps and define validation logic for each step. Use the `FormWizard` component to render the wizard:

```typescript
import React from "react";

const steps = [
  { label: "Step 1", icon: "icon1", content: <div>Step 1 content</div> },
  { label: "Step 2", icon: "icon2", content: <div>Step 2 content</div> },
  { label: "Step 3", icon: "icon3", content: <div>Step 3 content</div> },
];

const validateStep = (step: number) => {
  // Add validation logic for each step
  return true; // Replace with actual validation logic
};

const customButtons = (
  currentStep: number,
  nextStep: () => void,
  prevStep: () => void
) => (
  <div>
    {currentStep > 0 && <button onClick={prevStep}>Back</button>}
    <button onClick={nextStep}>
      {currentStep < steps.length - 1 ? "Next" : "Finish"}
    </button>
  </div>
);

const MyForm = () => (
  <div>
    <h1>Next.js Form Wizard Example</h1>
    <FormWizard
      steps={steps}
      validateStep={validateStep}
      customButtons={customButtons}
    />
  </div>
);

export default MyForm;
```

### Props

#### FormWizardProps

| Prop            | Type                                                                             | Description                                                                 |
| --------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `steps`         | `{ label: string; icon: string; content: ReactNode }[]`                          | Array of objects defining each step in the form wizard.                     |
| `validateStep`  | `(step: number) => boolean`                                                      | Function to validate each step before allowing navigation to the next step. |
| `customButtons` | `(currentStep: number, nextStep: () => void, prevStep: () => void) => ReactNode` | Custom navigation buttons component.                                        |
| `initialStep`   | `number`                                                                         | Initial step index to start the wizard (default: `0`).                      |

### License

MIT License. See [LICENSE](./LICENSE) for more information.

### Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

### Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](<[link-to-your-issues-page](https://github.com/zemmelmootez/nextjs-form-wizard/issues)>) on GitHub.

---
