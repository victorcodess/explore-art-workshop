import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

//department, objectname, creditline, additionalimages, artistdisplaybio, primaryimage

function App() {
  const [artData, setArtData] = useState({});
  const [artDatatwo, setArtDatatwo] = useState({});

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/626019"
    )
      .then((res) => res.json())
      .then((data) => {
        setArtData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/788174"
    )
      .then((res) => res.json())
      .then((data) => {
        setArtDatatwo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <pre>{JSON.stringify(artData, null, 2)}</pre> */}
      <h1 className="title">{artData?.department}</h1>

      <div className="container">
        <div className="text">
          <h1 className="name">{artData?.objectName}</h1>

          <p className="description">{artData?.creditLine}</p>

          <div className="extras">
            {artData?.additionalImages?.map((img) => {
              return (
                <img
                  src={`${img}`}
                  alt=""
                  className="art-image-extra"
                  key={img}
                />
              );
            })}
          </div>
          <p className="bio">{artData?.artistDisplayBio}</p>
        </div>

        <img src={`${artData?.primaryImage}`} alt="" className="art-image" />
      </div>

      <div className="container">
        <div className="text">
          <h1 className="name">{artDatatwo?.objectName}</h1>

          <p className="description">{artDatatwo?.creditLine}</p>

          <div className="extras">
            {artDatatwo?.additionalImages?.map((img) => {
              return (
                <img
                  src={`${img}`}
                  alt=""
                  className="art-image-extra"
                  key={img}
                />
              );
            })}
          </div>
          <p className="bio">{artDatatwo?.artistDisplayBio}</p>
        </div>

        <img src={`${artDatatwo?.primaryImage}`} alt="" className="art-image" />
      </div>
    </div>
  );
}

export default App;
