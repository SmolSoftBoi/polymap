'use client';

import type { FC, ReactNode } from 'react';

/**
 * Feature item structure for {@link FeatureHighlights}.
 */
export interface Feature {
  /** Emoji or icon to represent the feature. */
  icon: ReactNode;
  /** Description of the feature. */
  text: string;
}

/** Props for {@link FeatureHighlights}. */
export interface FeatureHighlightsProps {
  /** Array of features to display. */
  features: Feature[];
}

/**
 * Lists the application's key features using icons.
 */
export const FeatureHighlights: FC<FeatureHighlightsProps> = ({ features }) => {
  return (
    <ul className="grid gap-4">
      {features.map((feature, index) => (
        <li className="flex items-start gap-2" key={index}>
          <span className="text-xl" aria-hidden>
            {feature.icon}
          </span>
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  );
};
