import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { describe, expect, it } from '@jest/globals';
import { Navbar } from '@/components/navbar/navbar';

describe('Navbar', () => {
  it('It should have a link for redirect to /products', () => {
    render(<Navbar></Navbar>);
    const header = screen.getByRole('link', {
      name: "BANCO PICHINCHA"
    });
    expect(
      String(header.getAttribute('href'))
    )
    .toBe("/products");
  });
})