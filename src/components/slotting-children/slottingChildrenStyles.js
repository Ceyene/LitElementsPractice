import { css } from "lit";

export const slottingChildrenStyles = css`
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
    margin: 0.5rem auto;
    border: 3px solid aliceblue;
    padding: 0.5rem;
  }
`;
