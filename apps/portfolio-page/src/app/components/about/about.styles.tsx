import styled from 'styled-components';

const AboutContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  line-height: 1.8;
  text-align: center;

  .text {
    color: var(--color-secondary);
    font-weight: 400;
    font-size: 2.4rem;
  }

  .text--highlight {
    font-size: 2.8rem;
    font-weight: 500;
  }
`;

export default AboutContainer;
