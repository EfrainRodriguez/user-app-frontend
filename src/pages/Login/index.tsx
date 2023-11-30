import { Container } from '@mui/material';

import { useLoginMutation } from '@/redux/services/user.service';
import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { LoginFormDto } from './components/LoginForm/dtos/loginFormDto';

const Login = () => {
  const [login] = useLoginMutation();

  const handleSubmit = async (values: LoginFormDto) => {
    await login(values).unwrap();
  };

  return (
    <Container maxWidth="xs">
      <StyledBox>
        <StyledCard>
          <StyledTitle variant="h1">Login</StyledTitle>
          <LoginForm onSubmit={handleSubmit} />
        </StyledCard>
      </StyledBox>
    </Container>
  );
};

export default Login;
