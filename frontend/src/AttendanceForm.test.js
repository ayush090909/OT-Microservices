import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import AttendanceForm from './AttendanceForm';

describe('AttendanceForm', () => {
  test('renders the form with all fields', () => {
    render(
      <MemoryRouter>
        <AttendanceForm />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Employee ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });
});