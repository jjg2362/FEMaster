import "./css/main.css";
import Header from "./components/organisms/Header";
import Story from "./components/organisms/Story";
import Post from "./components/organisms/Post";

const initiate = () => {
  const header = new Header();
  const story = new Story();
  const post = new Post();

  const app = document.getElementById("app");

  app.innerHTML += header.render();
  app.innerHTML += story.render();
  app.innerHTML += post.render();
};

initiate();
