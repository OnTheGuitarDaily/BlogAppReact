import { useContext } from "react";
import { TodoContext } from "../../StateManagement/context";
import CardComponent from '../Card/card';
import { Link, useParams } from "react-router-dom";

export default function List() {
  const { state } = useContext(TodoContext);
  const { id } = useParams()

  const handleLiClick = (postId, postBody, postTitle, postUserId) => {
    localStorage.setItem('post', JSON.stringify(
      {
        id: postId,
        body: postBody,
        title: postTitle,
        userId: postUserId
      }
    ));
  };




  return (
    <>
      <h1 className='col-10 mx-auto'>Posts</h1>
      <main className="col-10 mx-auto">
      <ul>
       
          {state.posts.map(post => (
            <Link to={`post/:${post.id}`}>
            <li onClick={() => { handleLiClick(post.id, post.body, post.title, post.userId)}} key={post.id}>
              <CardComponent 
              title={post.title}
              body={post.body}
              id={post.id}
              className={'mt-3'}
              />
            </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}
