'use client';

import type { FC } from 'react';

/** Testimonial structure for {@link Testimonials}. */
export interface Testimonial {
  /** The user's quote. */
  quote: string;
  /** Name of the user. */
  author: string;
}

/** Props for {@link Testimonials}. */
export interface TestimonialsProps {
  /** List of testimonials to display. */
  testimonials: Testimonial[];
}

/**
 * Shows a simple list of customer testimonials.
 */
export const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <ul className="grid gap-4">
      {testimonials.map((t, index) => (
        <li className="space-y-1" key={index}>
          <blockquote className="italic">{t.quote}</blockquote>
          <cite className="text-sm text-gray-500 not-italic">— {t.author}</cite>
        </li>
      ))}
    </ul>
  );
};
