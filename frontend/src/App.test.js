import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Mock the components to avoid full rendering
jest.mock('./HomePage.react', () => () => <div>HomePage</div>);
jest.mock('./EmployeeForm', () => () => <div>EmployeeForm</div>);
jest.mock('./EmployeeList', () => () => <div>EmployeeList</div>);
jest.mock('./AttendanceForm', () => () => <div>AttendanceForm</div>);
jest.mock('./AttendanceList', () => () => <div>AttendanceList</div>);
jest.mock('./ListSalary', () => () => <div>ListSalary</div>);

import App from './App.react';

describe('App', () => {
  test('renders HomePage on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});