'use client';

import type { FC, ReactNode } from 'react';

/**
 * Step information for {@link HowItWorks}.
 */
export interface Step {
  /** Icon representing the step. */
  icon: ReactNode;
  /** Title of the step. */
  title: string;
  /** Detailed explanation. */
  description: string;
}

/** Props for {@link HowItWorks}. */
export interface HowItWorksProps {
  /** Steps describing the process. */
  steps: Step[];
}

/**
 * Explains how the application works using a simple list of steps.
 */
export const HowItWorks: FC<HowItWorksProps> = ({ steps }) => {
  return (
    <ol className="grid list-inside list-decimal gap-6">
      {steps.map((step, index) => (
        <li className="flex items-start gap-2" key={index}>
          <span className="text-xl" aria-hidden>
            {step.icon}
          </span>
          <div>
            <div className="font-semibold">{step.title}</div>
            <p className="text-sm">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};
