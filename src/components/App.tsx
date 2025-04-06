import { AuthProvider } from "../context/AuthProvider.js";
import { h, useEffect, useState } from "../core/roboto.js";
import { Dashboard } from "./Dashboard.js";


export const App = () => {

  return (
   <AuthProvider children={<Dashboard/>}/>
  );
};
