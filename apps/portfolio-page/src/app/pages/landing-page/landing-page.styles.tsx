import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: 50vh repeat(4, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default LandingPageContainer;
