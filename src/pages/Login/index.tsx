import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useCustomDispatch } from '@/hooks/reduxHooks';
import { setAccessToken } from '@/redux/slices/user.slice';
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

  const dispatch = useCustomDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormDto) => {
    const response = await login(values).unwrap();

    dispatch(setAccessToken(response.accessToken));

    navigate('/');
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
