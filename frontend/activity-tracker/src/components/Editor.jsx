import React from "react";


const Editor = () => {
    return (
        <div className="content">
        <ReactQuill value={value} theme="snow" modules={modules} />
    </div>
    )
}
export default Editor ;