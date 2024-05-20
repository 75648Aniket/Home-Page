import React from "react";

import Hero from "./Hero/Hero";
import Featured from "./Fearured/Featured";
import Recent from "./Hero/Recent";
import Image1 from "../../story/A1.png";
import Image2 from "../../story/A2.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Our Success Stories</h2>
        <div style={styles.imageContainer}>
          <img src={Image1} alt="Success Story 1" style={styles.image} />
          <img src={Image2} alt="Success Story 2" style={styles.image} />
        </div>
      </div>

      <div className="container" style={styles.container}>
        <h3 style={styles.heading}>View More</h3>
        <h2 style={styles.heading}>It is the NUMBER that keeps us motivated</h2>
      </div>

      <div className="boxContainer" style={styles.boxContainer}>
        <div style={styles.box}>
          <h2>350+ Resources</h2>
        </div>
        <div style={styles.box}>
          <h2>450+ Projects</h2>
        </div>
        <div style={styles.box}>
          <h2>150+ Clients</h2>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "50px",
    marginBottom: "20px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
  },
  image: {
    maxWidth: "50%",
    height: "auto",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px", 
    padding: "20px",
  },
  box: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px", 
    flex: "1", 
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    height:"150px" 
  },
};

export default Home;
