import React from "react";
import Review from "./Review";
import people from "./data";
function App() {
  return (
    <main>
      <div>
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review people={people} />
    </main>
  );
}

export default App;
