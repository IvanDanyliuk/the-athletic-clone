import { fireEvent, render, screen } from '@testing-library/react';
import { ConfirmAction } from '../';


const onDeleteMock = jest.fn();

describe('ConfirmAction tests', () => {
  test('should open the dialog by clicking the Close button', () => {
    render(<ConfirmAction onDelete={onDeleteMock} />);

    const closeBtn = screen.getByTestId('closeBtn');
    fireEvent.click(closeBtn);
    const acceptBtn = screen.getByTestId('acceptBtn');
    fireEvent.click(acceptBtn);

    expect(onDeleteMock).toHaveBeenCalled();
  });
});