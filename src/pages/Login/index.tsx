import { Container } from '@mui/material';

import LoginForm from './components/LoginForm';
import {
  StyledBox,
  StyledCard,
  StyledTitle
} from './components/styledComponents';
import { LoginFormDto } from './components/LoginForm/dtos/loginFormDto';

const Login = () => {
  const handleSubmit = (values: LoginFormDto) => {
    console.log(values); // TODO: implement network call
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
