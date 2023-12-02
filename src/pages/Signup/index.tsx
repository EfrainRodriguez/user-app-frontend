import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useSignupMutation } from '@/redux/services/user.service';
import SignupForm from './components/SignupForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { SignupFormDto } from './components/SignupForm/dtos/signupFormDto';

const Signup = () => {
  const [signup] = useSignupMutation();

  const navigate = useNavigate();

  const handleSubmit = async (values: SignupFormDto) => {
    try {
      const response = await signup(values).unwrap();
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <StyledTitle variant="h1">Signup</StyledTitle>
          <SignupForm onSubmit={handleSubmit} />
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Signup;
