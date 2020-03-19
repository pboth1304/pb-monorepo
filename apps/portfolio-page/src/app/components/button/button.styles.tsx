import styled from 'styled-components';

export const PrimaryButton = styled.a`
  padding: 0.6rem 6rem;
  font-size: 1.8rem;
  font-weight: 400;
  border-radius: 10rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  color: var(--color-white);
  background-image: linear-gradient(
    135deg,
    var(--color-secondary) 35%,
    var(--color-primary) 180%
  );

  &:hover,
  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;
