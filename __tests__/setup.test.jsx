
import { render, screen } from '@testing-library/react'
import Setup from '../src/pages/setup'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Setup />)

    const heading = screen.getByRole('heading', {
      name: /Setup Home/i,
    })

    expect(heading).toBeInTheDocument()
  })
})