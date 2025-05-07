import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';

import { Container, Form, Title } from './styles';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const signUp = useAuthStore((state) => state.signUp);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isLoading = useAuthStore((state) => state.isLoading);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    signUp(username.trim());
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>Welcome to CodeLeap network!</Title>
        <InputGroup
          label="Please enter your username"
          placeholder="John doe"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          type="submit"
          text="ENTER"
          isDisabled={!username.trim() || isLoading}
          isLoading={isLoading}
        />
      </Form>
    </Container>
  );
};

export default SignUp;
