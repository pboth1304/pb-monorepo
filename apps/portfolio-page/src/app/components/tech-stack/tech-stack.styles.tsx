import styled from 'styled-components';

export const TechStackContainer = styled.section`
  grid-column: full-start / full-end;
  grid-row: 3 / 4;

  display: grid;
  grid-template-rows: repeat(8, 5rem);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export const TechStackBackgroundImg = styled.div`
  grid-row: 1 / 6;
  grid-column: full-start / full-end;
  background-image: linear-gradient(
      to top,
      rgba(64, 64, 64, 0.75) 60%,
      rgba(0, 212, 218, 0.6) 120%
    ),
    url('/assets/img/back-img-tech.jpg');
  background-position: center center;
  background-size: cover;
`;

export const TechStackTextContent = styled.div`
  grid-row: 1 / 5;
  grid-column: center-start / center-end;
  color: var(--color-white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .heading-2 {
    font-size: 4rem;
    font-weight: 400;
  }

  .tech-stack__text {
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const TechStackTechList = styled.div`
  grid-row: 5 / 7;
  grid-column: center-start / center-end;

  display: grid;
  grid-template-rows: 1fr min-content 1fr;
  grid-template-columns: 1fr repeat(5, 19rem) 1fr;
  grid-column-gap: 1rem;

  border-radius: 1.5rem;
  background-color: var(--color-white);
`;

export const TechStackTechListItem = styled.div`
  grid-column: ${(props: { gridColStart: number; gridColEnd: number }) =>
      props.gridColStart} /
    ${(props: { gridColStart: number; gridColEnd: number }) => props.gridColEnd};
  display: flex;
`;
