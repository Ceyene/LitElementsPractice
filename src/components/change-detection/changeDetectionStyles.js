import { css } from "lit";

export const changeDetectionStyles = css`
  * {
    box-sizing: border-box;
  }
  :host {
    font-size: 1rem;
    color: aliceblue;
    text-align: center;
  }
  section {
    width: 60vw;
    padding: 1rem;
    border: 3px solid aliceblue;
    margin: 0.5rem auto;
  }
  h3 {
    margin-top: 0;
  }
  p {
    width: 50vw;
    margin: 0.5rem auto;
    padding: 0.5rem;
  }
`;
