import { Link } from "react-router-dom";


const BlogList = ({title, blogs}) => {
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
         {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h4>{blog.title}</h4>
                <h5>By: {blog.author}</h5>
                </Link>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;