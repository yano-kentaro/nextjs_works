import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Page from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Page />)
    const h1 = screen.getByText('Hello, Next.js!')
    expect(h1).toBeInTheDocument()
  })
})