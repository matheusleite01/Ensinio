import {Container} from './styled';
import Image from 'next/image'
import picture from '../../../public/assets/icons/404-error.svg'

const ErrorMessage = () => {
  return (
    <Container role='errorFetch'>
      <Image src={picture} alt='Error message'/>
      <span>400 Bad Request Error</span>
    </Container>
  )
}

export default ErrorMessage