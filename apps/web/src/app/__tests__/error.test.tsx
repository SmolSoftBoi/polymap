import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalError from '../error';

it('allows retry', async () => {
  const reset = vi.fn();
  render(<GlobalError error={new Error('fail')} reset={reset} />);
  await userEvent.click(screen.getByRole('button', { name: /try again/i }));
  expect(reset).toHaveBeenCalled();
});
