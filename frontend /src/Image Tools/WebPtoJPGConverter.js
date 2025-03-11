import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const WebPtoJPGConverter = () => {
  const [jpgUrl, setJpgUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "image/webp") {
        convertWebPtoJPG(file);
      } else {
        setError("Please select a WebP file.");
      }
    }
  };

  const convertWebPtoJPG = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const webpImage = event.target.result;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const jpgUrl = canvas.toDataURL("image/jpeg");
        setJpgUrl(jpgUrl);
        setDownloadUrl(jpgUrl);
        setError(""); // Clear any previous errors
      };
      img.src = webpImage;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - WebP to JPG Converter</title>
          <meta
            name="description"
            content="Convert your WebP images to JPEG format with RabbitCode's free online tool. Upload and download high-quality JPG images."
          />
          <meta
            name="keywords"
            content="WebP to JPG converter, image converter, WebP to JPEG, online converter, WebP conversion"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - WebP to JPG Converter"
          />
          <meta
            property="og:description"
            content="Convert WebP images to JPEG with RabbitCode's free tool. Optimize your images for better compatibility and smaller file sizes."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - WebP to JPG Converter"
          />
          <meta
            name="twitter:description"
            content="Convert WebP images to JPEG with RabbitCode's free tool. Optimize your images for better compatibility and smaller file sizes."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>WebP to JPG Converter</h2>
          <p>
            Easily convert your WebP images to JPEG format with our free online
            converter. Upload your WebP image file and download the same image
            as JPG.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/webp"
              style={{ display: "none" }}
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
            {error && <p className="error">{error}</p>}
          </div>

          <br />
          {jpgUrl && (
            <div className="textarea-container">
              <h3>Converted JPG Image</h3>
              <img
                src={jpgUrl}
                alt="Converted JPG"
                style={{ maxWidth: "100%" }}
                className="textarea-animated"
              />
              <br />
              <div className="btn-container">
                <a
                  class="btn-421"
                  href={downloadUrl}
                  download="converted-image.jpg"
                >
                  Download JPG
                </a>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className="content1">
          <h3>Instant WebP to JPEG Conversion</h3>
          <p>
            WebP is a relatively new image format with good compression and
            image quality, but not all web browsers and image viewers support it
            yet. If you have a picture in WebP format and want to convert it to
            the more common JPG format, this tool is one of the simplest ways to
            do it. For the smallest size, convert an image from JPG to WebP.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is WebP and Its Advantages?</h3>
          <p>
            WebP is an image format developed by Google, designed to provide
            both lossless and lossy compression. This allows for smaller file
            sizes without a significant loss in image quality. It's particularly
            useful for web developers aiming to speed up website load times.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>The Need for Conversion to JPEG</h3>
          <p>
            While WebP offers many advantages, it's not universally supported.
            JPEG, on the other hand, is almost universally compatible.
            Converting WebP files to JPEG ensures that your images can be viewed
            on virtually any device or browser.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our WebP to JPG Converter</h3>
          <ul>
            <li>
              Fast Processing: High-speed conversion without compromising
              quality.
            </li>
            <li>
              Privacy Focused: The conversion is done in your browser and never
              sent to us.
            </li>
            <li>
              Free: No need to pay for the conversion and no logins required.
            </li>
          </ul>
        </div>
        <br />
        <div className="content1">
          <h3>How to use our WebP to JPG converter</h3>
          <ul>
            <li>
              Select your WebP file from your computer, drag and drop or click
              to upload
            </li>
            <li>Click the "Convert" button to start the conversion process</li>
            <li>Download your converted JPG file</li>
          </ul>
          <p>
            Convert your WebP images to JPEG now and let us know if you have any
            questions or suggestions!
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>User Feedback and Continuous Improvement</h3>
          <p>
            Your feedback is crucial for us to improve our service. If you have
            any questions, issues, or suggestions, please reach out through our
            support channels.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebPtoJPGConverter;
