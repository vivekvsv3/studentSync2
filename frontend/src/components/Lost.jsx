import { Link } from "react-router-dom";

const Lost = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>This is the Lost</h1>
        <Link to='/home' className="btn btn-light my-5">back to home</Link>
    </div>
  )
}

export default Lost