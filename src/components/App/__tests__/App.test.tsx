import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../App';

describe('App', () => {
  const mockStore = configureMockStore()();

  const createWrapper = () => {
    return render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  };

  it('should not open calculator when component setup', () => {
    const { queryByTestId } = createWrapper();

    expect(queryByTestId('calculatorOuterBox')).toBeNull();
  });

  it('should toggle calculator when clicking Open Calculator button', () => {
    const { queryByTestId, getByText } = createWrapper();
    const theBtn = getByText('Open Calculator');

    expect(queryByTestId('calculatorOuterBox')).toBeNull();

    fireEvent.click(theBtn);

    expect(queryByTestId('calculatorOuterBox')).not.toBeNull();
    fireEvent.click(theBtn);

    expect(queryByTestId('calculatorOuterBox')).toBeNull();
  });

  it('should close calculator when clicking appContainer', () => {
    const { queryByTestId, getByTestId, getByText } = createWrapper();
    const theBtn = getByText('Open Calculator');
    const appContainer = getByTestId('appContainer');

    fireEvent.click(theBtn);

    expect(queryByTestId('calculatorOuterBox')).not.toBeNull();

    fireEvent.click(appContainer);

    expect(queryByTestId('calculatorOuterBox')).toBeNull();
  });
});
