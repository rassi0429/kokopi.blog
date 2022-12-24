import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h5>rassi0429, kokoa0429 2022.</h5>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
