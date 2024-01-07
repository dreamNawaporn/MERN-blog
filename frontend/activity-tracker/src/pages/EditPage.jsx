import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useEffect,u } from "react";

const EditPage = () => {
    return (
        <form className="Updetepost">
        <h1>Login</h1>
        <input type="text" name="text" placeholder="text" />
        <input type="password" name="summary" placeholder="summary" />
        <input type="file" name="file" id="file" />
        <button>Updete post</button>
      </form>
    )
}
export default EditPage ;