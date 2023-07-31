import { StyledLink, Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Container>
  );
};
