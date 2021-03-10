import React from 'react'
import Comment from './Comment'

function Comments({comments, currentUser, handleDelete}) {
    const display = comments.map(comment => {
        return <Comment key={comment.id} comment={comment} currentUser={currentUser} handleDelete={handleDelete}/>
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Comments
