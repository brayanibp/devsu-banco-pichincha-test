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
  it('Should Clean the form with reset button', async () => {
    render(<CreateProduct></CreateProduct>);
    const idInput = screen.getByRole('textbox', {
      name: 'ID'
    });
    const resetButtom = screen.getByRole('button', {
      name: 'Reiniciar'
    });

    await waitFor(async ()=> await fireEvent.change(idInput, { target: { value: 'trj-cred' } }));
    console.log(idInput.innerHTML);
    const newInput = screen.getByText('trj-cred');
    fireEvent.click(resetButtom);
    expect(newInput).toContain('');
  });
})