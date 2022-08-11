export default function Story(props) {
    return (
        <div className="main-story mainContent">
        <h1>{props.title}</h1>
        <h2>{props.number}</h2>
        <p>{props.mainStory}</p>
        <span>Upvotes: {props.upvotes}</span>
        <br />
        <span>Downvotes: {props.downvotes}</span>
        <hr></hr>
        </div>
    )
}