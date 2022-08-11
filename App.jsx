import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Story from "./components/Story"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Story 
      title="Random story title"
      number="#1"
      mainStory="Main story"
      upvotes={0}
      downvotes={0}
      />
      <Story 
      title="Crazy sstory"
      number="#2"
      mainStory="Main story"
      upvotes={0}
      downvotes={0}
      />
      <Story 
      title="Sad story"
      number="#3"
      mainStory="Main story"
      upvotes={0}
      downvotes={0}
      />
    </div>
  );
}
