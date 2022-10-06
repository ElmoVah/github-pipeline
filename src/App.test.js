import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'

test('renders app header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const element = screen.getByText('Anecdotes')
  expect(element).toBeDefined()
})