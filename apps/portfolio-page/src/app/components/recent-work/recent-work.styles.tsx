import styled from 'styled-components';

export const RecentWorkContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 4 / 5;

  padding: 4rem 0;
  text-align: center;

  .heading-2 {
    font-size: 4rem;
    font-weight: 400;
  }
`;

export const ProjectsGrid = styled.div`
  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 35rem));
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  justify-items: center;
`;
