import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';


const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();

    const handleClick = () =>{
      fetch('http://localhost:8000/blogs/' + id,{
        method: 'DELETE'
      }).then(()=>{
        history.push('/')
      })
    }
    return ( 
        <div className="blog-details">
        {isPending && <div className="loader">Loading.........</div>}
        {error && <div style={{
            color: "red",
            fontSize: "40px"
        }
        } className="error">{error}</div>}            
               {blog && 
                    <article>
                        <h4>{blog.title}</h4>
                        <h5>By: {blog.author}</h5>
                        <p>{blog.body}</p>
                        <button onClick={handleClick}> DELETE</button>
                    </article>
               }
        </div>
     ); 
}
 
export default BlogDetails;