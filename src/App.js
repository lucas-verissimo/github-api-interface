import React from "react";

import Layout from "./components/layout";
import Profile from "./components/profile";

function App() {
  return (
    <main className="App">
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
