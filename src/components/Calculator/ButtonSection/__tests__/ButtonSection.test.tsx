import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ButtonSection from '../ButtonSection';

describe('ButtonSection', () => {
  const mockStore = configureMockStore()();
  const createWrapper = () => {
    return render(
      <Provider store={mockStore}>
        <ButtonSection />
      </Provider>
    );
  };

  it('should render nineteen calculatorBtn', () => {
    const { queryAllByTestId } = createWrapper();

    expect(queryAllByTestId('calculatorBtn').length).toBe(19);
  });
});
