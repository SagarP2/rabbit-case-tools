import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Function to convert image to ASCII using the library or API
const convertImageToAscii = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        // Convert image to canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert canvas to ASCII (using a simple conversion for demo)
        const { asciiArt, dimensions } = generateAsciiFromCanvas(canvas);
        resolve({ asciiArt, dimensions });
      };
      img.onerror = reject;
    };
    reader.readAsDataURL(file);
  });
};

// Function to generate ASCII from canvas (simple implementation for demo)
const generateAsciiFromCanvas = (canvas) => {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  let ascii = "";
  let asciiWidth = 0;
  let asciiHeight = 0;

  for (let y = 0; y < height; y += 6) {
    let line = "";
    for (let x = 0; x < width; x += 3) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const avg = (r + g + b) / 3;
      const char = avg > 128 ? " " : "#";
      line += char;
    }
    ascii += line + "\n";
    asciiHeight++;
  }
  asciiWidth = ascii.split("\n")[0].length; // Length of the first line
  return {
    asciiArt: ascii,
    dimensions: { width: asciiWidth, height: asciiHeight },
  };
};

const AsciiArtGenerator = () => {
  const [asciiArt, setAsciiArt] = useState("");
  const [dimensions, setDimensions] = useState({ width: 80, height: 10 });
  const [file, setFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      try {
        const { asciiArt, dimensions } = await convertImageToAscii(file);
        setAsciiArt(asciiArt);
        setDimensions(dimensions);
      } catch (error) {
        console.error("Error converting image to ASCII", error);
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([asciiArt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ascii_art.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - ASCII Art Generator</title>
          <meta
            name="description"
            content="Easily convert your images into ASCII art using RabbitCode’s online tool. Transform your pictures into creative text-based designs."
          />
          <meta
            name="keywords"
            content="ASCII art generator, image to ASCII, text art, ASCII converter, online ASCII art tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - ASCII Art Generator"
          />
          <meta
            property="og:description"
            content="Convert your images into unique ASCII art with RabbitCode’s online ASCII Art Generator."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - ASCII Art Generator"
          />
          <meta
            name="twitter:description"
            content="Convert your images into creative ASCII art text designs with RabbitCode."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>ASCII Art Generator</h2>
          <p>
            Looking for a handy online tool that can convert your picture and
            art to ASCII? Use this simple tool below.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
          </div>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              readOnly
              value={asciiArt}
              rows={dimensions.height}
              cols={dimensions.width}
              style={{ whiteSpace: "pre", overflowX: "auto", maxHeight: "10%" }}
            />
            <div className="btn-container">
              <button class="btn-421" onClick={handleDownload}>
                Download ASCII Art
              </button>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="content1">
          <h3>ASCII Art Generator</h3>
          <p>
            This tool converts images to monochrome ASCII art. You can also
            convert text to ASCII banners. Copy and paste the ASCII art as
            needed.
          </p>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AsciiArtGenerator;
