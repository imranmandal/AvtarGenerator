import React, { useEffect } from "react";

const AvtarGenerator = () => {
  function generateAvtar() {
    // HEAD
    const avtFace = new Image();
    const avtFaceNum = Math.floor(Math.random() * 7) + 1;
    const avtFaceName = "images/face" + avtFaceNum + ".png";
    avtFace.src = avtFaceName;

    // EYE
    const avtEye = new Image();
    const avtEyeNum = Math.floor(Math.random() * 5) + 1;
    const avtEyeName = "images/eye" + avtEyeNum + ".png";
    avtEye.src = avtEyeName;

    // MOUTH
    const avtMouth = new Image();
    const avtMouthNum = Math.floor(Math.random() * 5) + 1;
    const avtMouthName = "images/mouth" + avtMouthNum + ".png";
    avtMouth.src = avtMouthName;

    // HEAD LOADED
    avtFace.onload = function () {
      buildAvtar();
    };

    // EYE LOADED
    avtEye.onload = function () {
      buildAvtar();
    };

    // MOUTH LOADED
    avtMouth.onload = function () {
      buildAvtar();
    };

    function buildAvtar() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 500;
      canvas.height = 500;

      // DRAW HEAD
      ctx.drawImage(avtFace, (500 - avtFace.width) / 2, 0);

      // DRAW EYES
      ctx.drawImage(avtEye, (500 - avtEye.width) / 2, 20);

      // DRAW EYES
      ctx.drawImage(avtMouth, (500 - avtMouth.width) / 2, 180);
    }
  }

  useEffect(() => {
    generateAvtar();
  }, []);

  const downloadBtn = (e) => {
    const canvas = document.getElementById("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "Avtar.png";
    link.href = url;
    link.click();
  };
  return (
    <>
      <div className="avtar">
        <div className="d-flex flex-column avtar-container">
          <h1 className="pt-5">Avtar Generator</h1>
          <canvas id="canvas"></canvas>
        </div>{" "}
        <div className="d-flex">
          <button className="generateBtn" onClick={generateAvtar}>Generate</button>
          <button className="my-auto mx-3 downloadBtn" onClick={downloadBtn}>
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default AvtarGenerator;
