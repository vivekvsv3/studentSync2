import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #00d5ff, #0095ff, rgba(93,0,255,.555))",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1 className="mb-4" style={{ fontSize: "3rem", fontWeight: "bold", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
        Welcome to Your Dashboard
      </h1>
      <p className="mb-5" style={{ fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>
        Choose an option below to get started:
      </p>
      <div className="d-flex flex-column gap-3">
        <Link to='/food' className="btn btn-light btn-lg" style={{ width: "200px", fontWeight: "bold" }}>
          Food
        </Link>
        {/* Uncomment when Lost & Found is ready */}
        {/* <Link to='/lost' className="btn btn-light btn-lg" style={{ width: "200px", fontWeight: "bold" }}>
          Lost & Found
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
