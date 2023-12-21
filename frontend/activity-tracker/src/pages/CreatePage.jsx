import React from "react";


const CreatePage = () => {
    return (
      <form className="CreatePage">
        <h1>Create page</h1>
        <input type="text" name="text" placeholder="text" />
        <input type="password" name="summary" placeholder="summary" />
        <input type="file" name="file" placeholder="file" />
        <button>Create page</button>
      </form>
    )
}
export default CreatePage ;