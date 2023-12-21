import React from "react";
import { Link } from "react-router-dom";

const Post =() => {
    return(
        <div className="post">
            <div className="image">
                <Link>
                <img src="https://www.sanook.com/movie/156675/" alt=""/>
                </Link>
            </div>
            <div className="texts">
                <Link>
                <h2>
                สัปเหร่อ เป็นภาพยนตร์แนวสยองขวัญ-ตลก 
                จะเข้าฉายวันที่ 5 ตุลาคม 2566 กำกับโดย ธิติ ศรีนวล ภาพยนตร์เรื่องนี้เป็นภาคแยกจากซีรีส์เรื่อง
                 ไทบ้านเดอะซีรีส์ โดยเล่าเรื่องราวของ 
                </h2>
                </Link>
                <p className="info">
                    <a href="" className="author">
                        
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Post;