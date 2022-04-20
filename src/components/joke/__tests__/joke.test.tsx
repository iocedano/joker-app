import { render, screen } from "@testing-library/react"
import Joke from ".."

const JOKES_MOKE = {
  setup: 'What does a turkey dress up as for Halloween?',
  delivery: 'A gobblin\'!',
}

const JOKE_MOKE_DATA_ISSUE = {
  joke: 'I visited my friend at his new house.\n He told me to make myself at home.\nSo I threw him out.\nI hate having visitors.'
}

describe('components/Joke', () => {
  it('should prenset the joke with setup and delivery are present', () => {
    render(<Joke {...JOKES_MOKE} />);

    expect(screen.getByText(JOKES_MOKE.setup)).not.toBeNull();
    expect(screen.getByText(JOKES_MOKE.delivery)).not.toBeNull()
  })
  
  it('should present the joke when the joke prop is present', () => {
    const data = {...JOKES_MOKE, ...JOKE_MOKE_DATA_ISSUE};
    const { container } = render(<Joke {...data} />);

    expect(container.querySelectorAll('p')).toHaveLength(4);
  })
})