import styled from "styled-components"

export const ProjectBoxStyles = styled.span`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: inline-block;
  margin: 15px;
  text-align: left;

  & > div:last-child {
    padding: 8px;
  }

  h5 {
    font-weight: bold;
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.85em;
    line-height: 1.25;
    margin-bottom: 6px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    margin-left: -3px;
    margin-right: -3px;

    div {
      padding: 0 6px;
      margin: 3px;
      font-size: 0.75em;
      color: #50A7C2;
      border: 2px solid #50A7C2;
      border-radius: 6px;
    }
  }
`