import { fireEvent, render, screen } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ConfirmAction } from '../';


const onActionMock = jest.fn();

describe('ConfirmAction tests', () => {
  test('should open the dialog by clicking the Close button', () => {
    render(
      <ConfirmAction message='Do you want to delete this content section?' onAction={onActionMock}>
        <FontAwesomeIcon icon={faXmark} />
      </ConfirmAction>);

    const closeBtn = screen.getByTestId('closeBtn');
    fireEvent.click(closeBtn);
    const acceptBtn = screen.getByTestId('acceptBtn');
    fireEvent.click(acceptBtn);

    expect(onActionMock).toHaveBeenCalled();
  });
});