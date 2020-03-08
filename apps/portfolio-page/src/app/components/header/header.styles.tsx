import styled from 'styled-components';

const HeaderContainer = styled.header`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
      to top,
      rgba(64, 64, 64, 0.85) 60%,
      rgba(0, 212, 218, 0.7) 120%
    ),
    url('/assets/img/hero.jpg');
  background-size: cover;
  background-position: center center;

  .heading-primary {
    font-weight: 300;
    font-size: 9rem;
    line-height: 1;
    animation-name: fade-in-left;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    /* Fix animations bug for Chrome */
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    transform: translateZ(0);
    color: var(--color-white);
  }

  .heading-primary--highlight {
    color: var(--color-primary);
  }

  .heading-primary--pre {
    color: var(--color-white);
    opacity: 0.8;
    font-size: 2.5rem;
    font-weight: 200;
    letter-spacing: 2px;
    animation-name: fade-in;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
  }

  /* Animations */
  @keyframes fade-in-left {
    0% {
      opacity: 0;
      transform: translateX(-3rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0.8;
    }
  }
`;

export default HeaderContainer;
