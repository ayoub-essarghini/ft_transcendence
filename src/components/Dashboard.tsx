import { h } from "../core/roboto.js";
import { Layout } from "../layout/layout.js";
import { Link } from "./Link.js";

export const Dashboard = () => {
  return (
    <Layout
      children={
        <div>
        <h1>Users</h1>
        <Link to="/user/:id" params={{ id: 'soufiane' }} className="text-blue-500" children={"SHOW uSER"} />
        
      
      </div>
      }
    />
  );
};
