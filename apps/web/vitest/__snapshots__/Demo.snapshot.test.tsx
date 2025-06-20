import { render } from '@testing-library/react';

import { Demo } from '../../src/components/Demo';

describe('Demo snapshot', () => {
  it('matches', () => {
    const { container } = render(<Demo message="Snapshot" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
