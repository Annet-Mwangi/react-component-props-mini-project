import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/posts"; // Ensure you have a data source for posts

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About about="A blog about React" />
      <main>
        <ArticleList posts={posts} />
      </main>
    </div>
  );
}

export default App;
