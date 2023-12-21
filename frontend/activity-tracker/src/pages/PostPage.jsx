import React from "react";
import Post from "../components/Post" 

const PostPage = () => {
    return (
        <div className="post-page">
            <h1>
                {" "}
                เรื่องย่อ สัปเหร่อ หนังสุดหลอนในจักรวาลไทบ้านเดอะซีรีส์
            </h1>
            <time>25 ต.ค. 66 (21:23 น.)</time>
            <div className="author">Nawaporn</div>
            <div className="image">
                <img 
                src="https://s.isanook.com/mv/0/ud/31/156675/sappaler.jpg?ip/crop/w728h431/q80/webp"
                alt=""
                />
            </div>
            <p className="summary">
            ภาพยนตร์เรื่อง สัปเหร่อ ยังได้รับเสียงชื่นชมในด้านความแปลกใหม่
            เพราะเป็นภาพยนตร์สยองขวัญ-ตลกที่ฉีกแนวจากภาพยนตร์สยองขวัญทั่วไป
            ภาพยนตร์เรื่องนี้มีฉากตลกขำขันแทรกอยู่ตลอดเรื่อง ความเศร้า และความสะพรึงกลัว
            ผู้ชมที่ชื่นชอบภาพยนตร์สยองขวัญผสมคอมเมดี้จึงไม่ควรพลาดภาพยนตร์เรื่องนี้
            </p>
        </div>
    );
};
export default PostPage;