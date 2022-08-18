import storyData from "../storyData"

export default function RandomStory(){
    const stories = storyData
   const randomNumber = Math.floor(Math.random() * stories.length)
   const randomStory = stories[randomNumber]
   const upvotes = randomStory.upvotes

    return(
        <div className="main-story mainContent">
        <h1>{randomStory.title}</h1>
        <h2>{randomStory.number}</h2>
        <p>{randomStory.mainStory}</p>
        <span>Upvotes: {randomStory.upvotes}</span> <button> <img src="../assets/images/icon-plus.svg" alt="" /></button>
        <br />
        <span>Downvotes: {randomStory.downvotes}</span> <button><img src="../assets/images/icon-minus.svg" alt="" /></button> 
        <hr></hr>
        </div>
    )
}