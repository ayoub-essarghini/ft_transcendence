import { h } from "../core/roboto.js";
import { Layout } from "../layout/layout.js";

export const LeaderBoard = () => {
  return (
    <Layout
      children={
        <div>
          <h1>Leader Board</h1>
          <p>Welcome to the LeaderBoard</p>
        </div>
      }
    />
  );
};
