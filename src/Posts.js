import Post from './Post'


function Posts(){
    const posts = [{title: "why i like flags", content: "flags are the bomb!!!!!!"}, {title: "this flag makes me cry", content: "i get emotional when i see this flag waving"}]
    const postsToDisplay = posts.map(post => {
        return <Post post={post}/>
    }) 
    return (
        <>
        <h2>Posts</h2>
        {postsToDisplay}
        </>
    )
}

export default Posts