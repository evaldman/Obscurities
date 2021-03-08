import React, {useState} from "react";
import  {Dropdown} from "semantic-ui-react"
import { useHistory } from "react-router-dom";

function NewPost({hobbies, currentUser}) {
  const history = useHistory()
  const [newPost, setNewPost] = useState({
    user_id: currentUser.id,
    hobby_id: "",
    title: "",
    description: "",
    image: "",
    content: ""

  })

  function handleChange(e){
    const value = e.target.name === "hobby_id" ? parseInt(e.target.value) : e.target.value
    setNewPost({...newPost, [e.target.name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
    .then(res => res.json())
    .then(data => {
      history.push(`/posts/${data.id}`)
    })
   
    
  }

  const options = hobbies.map(hobby => {
    return <option key={hobby.id} value={hobby.id}> {hobby.name}</option>
  })

  function handleOptionChange(){

  }
  return <div>
    <form onSubmit={handleSubmit}> 
      <select value={newPost.hobby_id} name="hobby_id" onChange={handleChange}>
        {options}
      </select>
      <input type='text' placeholder='title' value={newPost.title} name="title" onChange={handleChange}></input>
      <input type='text' placeholder='description' value={newPost.description} name="description" onChange={handleChange}></input>
      <input type='text' placeholder='image' value={newPost.image} name="image" onChange={handleChange}></input>
      <textarea  placeholder='content' value={newPost.value} name="content" onChange={handleChange}></textarea>
      <button type="submit">Create Post</button>
    
    </form>
  </div>;
}

export default NewPost;
