import { h } from "../core/roboto.js";
import { Layout } from "../layout/layout.js";

export const Dashboard = () => {
  return (
    <Layout
      children={
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard</p>
        </div>
      }
    />
  );
};
