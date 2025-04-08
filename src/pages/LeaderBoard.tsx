import { h } from "../core/roboto.js";
import { Layout } from "../pages/layout/layout.js";

export const LeaderBoard = () => {
  return (
    <Layout
      children={
        <div class='text-white'>
          <h1>Leader Board</h1>
          <p>Welcome to the LeaderBoard</p>
        </div>
      }
    />
  );
};
