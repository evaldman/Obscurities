import React from 'react'
import Comment from './Comment'

function Comments({comments}) {
    const display = comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
    })
    console.log(comments)
    return (
        <div>
            {display}
        </div>
    )
}

export default Comments
