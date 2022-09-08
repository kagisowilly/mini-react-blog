import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (   
        <div className="home">
        {isPending && <div className="loader">Loading.........</div>}
        {error && <div style={{
            color: "red",
            fontSize: "40px"
        }
        } className="error">{error}</div>}
        {blogs && <BlogList blogs={blogs} title={"Blogs"} />}
        </div>
     );
}
 
export default Home;