import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";

export const Projects = (props) => {
  return <ProjectsContainer></ProjectsContainer>;
};

const ProjectsContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  padding: 1rem;
  ${mediaQuery.afterTablet} {
  }
`;
