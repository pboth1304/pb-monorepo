import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${(props: { backgroundImagePath: string }) =>
    'linear-gradient(to bottom, rgba(64, 64, 64, .75) 60%, rgba(0, 212, 218, .6) 120%), url(' +
    props.backgroundImagePath +
    ')'};
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 7rem 3rem;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;

  .project-card__title {
    font-size: 2.8rem;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .project-card__type {
    line-height: 100%;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 300;
  }

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

export default ProjectCardContainer;
