import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent';

// My tests!
// Add yet another comment

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);


// add some bugs here to make 'npm test' failed
//    expect(screen.getByTestId('help-areaXXX')).toBeInTheDocument();
    expect(screen.getByTestId('help-area')).toBeInTheDocument();
});
});
