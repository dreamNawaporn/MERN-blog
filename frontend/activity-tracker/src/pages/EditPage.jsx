import React from "react";


const EditPage = () => {
    return (
        <form className="CreatePage">
        <h1>Login</h1>
        <input type="text" name="text" placeholder="text" />
        <input type="password" name="summary" placeholder="summary" />
        <input type="file" name="file" id="file" />
        <button>Create page</button>
      </form>
    )
}
export default EditPage ;