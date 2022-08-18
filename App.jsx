import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Story from "./components/Story";
import Comment from "./components/Comment";
import storyData from "./storyData"
import Randomstory from  "./components/Randomstory"

export default function App() {
  // const storyElements = storyData.map(story => {
  //   return <Story title={story.title} 
  //   number={story.number} 
  //   mainStory={story.mainStory} 
  //   upvotes={story.upvotes} 
  //   downvotes={story.downvotes} />
  // })

   

  return (
    <div>
      <Navbar />
      <Main />
      {/* {storyElements} */}
      <Randomstory />
      <Comment />
    </div>
  )
}
