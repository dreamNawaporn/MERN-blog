import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const baseURL = import.meta.env.VITE_BASE_URL;


const PostPage = ({_id, cover, title, createdAt, author, summary}) => {
    const [postInfo, setPostsInfo] = useState(null);
    const [userInfo ] = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        fetch(`${baseURL}/post`).then((Response) => {
            Response.json().then((postInfo) => {
                setPosts(postInfo);
            })
        })
    }, [])
    return (
        <div className="post-page">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={`${baseURL}/${cover}`} alt="" />
                </Link>
            </div>
            <h1>{postInfo.title}</h1>
            <time>{format(new Date(postInfo.createdAt), "dd MMMM yyyy HH:MM")}</time>
            <div className="author">By @{postInfo.author.username}</div>
            {userInfo?.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                        <svg>
                            xmlns=""
                            fill= "none"
                            viewBox=" 0 0 24 24"
                            strokeWidth = {1.5}

                        </svg>
                        Edit this post
                    </Link>
                </div>
                
            )}
            <div className="image">
                <img 
                src={`${baseURL}/${postInfo.cover}`} alt=""
                />
            </div>
           <div className="content" dangerouslySetInnerHTML={{__html: postInfo.context}}></div>
        </div>
    );
};
export default PostPage;