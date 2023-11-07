import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import { describe, expect, it } from '@jest/globals';
import Products from '@/app/products/page';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Products List Page', () => {
  it('Search bar should be available', () => {
    render(<Products></Products>);
    let searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'Credito' } });
    searchInput = screen.getByRole('textbox');
    expect((searchInput as HTMLInputElement).value).toBe('Credito');
  });
  it('Should display records number', () => {
    render(<Products></Products>);
    const results = screen.getByText(/Resultados/);
    expect(results.innerHTML).toContain('Resultados');
  });
  it('Should display a table', async () => {
    render(<Products></Products>);
    const table = screen.getByRole('table');
    expect(Boolean(table)).toBeTruthy();
  });
});