import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import { describe, expect, it } from '@jest/globals';
import CreateProduct from '@/app/create/page';

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('Create Products Page', () => {
  it('Should have a title', () => {
    render(<CreateProduct></CreateProduct>);
    const header = screen.getByRole('heading');
    expect(header.innerHTML).toBe('Formulario de Registro');
  });
  it('Field Name should display an error if value characthers are major than 100', async () => {
    render(<CreateProduct></CreateProduct>);
    const idInput = screen.getByRole('textbox', {
      name: 'Nombre'
    });
    const text = Array(101).fill('a').join('');
    await waitFor(async ()=> fireEvent.change(idInput, { target: { value: text } }));
    const error = screen.getByText('¡Este campo tiene un máximo de 100 caracteres!');
    expect(error.innerHTML).toBe('¡Este campo tiene un máximo de 100 caracteres!');
  });
  it('Field name should display an error if value characthers are minor than 5', async () => {
    render(<CreateProduct></CreateProduct>);
    const idInput = screen.getByRole('textbox', {
      name: 'Nombre'
    });
    await waitFor(async ()=> fireEvent.change(idInput, { target: { value: 'test' } }));
    const error = screen.getByText('¡Este campo requiere mínimo de 5 caracteres!');
    expect(error.innerHTML).toBe('¡Este campo requiere mínimo de 5 caracteres!');
  });
  it('Should clean the form with reset button', async () => {
    render(<CreateProduct></CreateProduct>);
    const idInput = screen.getByRole('textbox', {
      name: 'Nombre'
    });
    const resetButtom = screen.getByRole('button', {
      name: 'Reiniciar'
    });
    await waitFor(async ()=> fireEvent.change(idInput, { target: { value: 'test name' } }));
    fireEvent.click(resetButtom);
    expect(idInput.getAttribute('value')).toBe('');
  });
});