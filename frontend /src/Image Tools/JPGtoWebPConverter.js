import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const JPGtoWebPConverter = () => {
  const [webpUrl, setWebpUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertJPGtoWebP(file);
    }
  };

  const convertJPGtoWebP = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Create a canvas and draw the image on it
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert canvas to WebP data URL
        const webpUrl = canvas.toDataURL("image/webp");
        setWebpUrl(webpUrl);
        setDownloadUrl(webpUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - JPG to WebP Converter</title>
          <meta
            name="description"
            content="Easily convert JPG images to WebP with RabbitCode's online converter tool. Reduce file sizes and improve your web performance with high-quality WebP images."
          />
          <meta
            name="keywords"
            content="JPG to WebP converter, image converter, JPG to WebP, WebP converter, online image converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - JPG to WebP Converter"
          />
          <meta
            property="og:description"
            content="Convert JPG to WebP with ease and improve your web performance. Reduce file sizes and preserve image quality using RabbitCode's online converter."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - JPG to WebP Converter"
          />
          <meta
            name="twitter:description"
            content="Convert JPG to WebP with ease and reduce file sizes with RabbitCode's online tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>JPG to WebP Converter</h2>
          <p>
            Convert JPG to WebP with ease! Our online converter tool allows you
            to effortlessly transform your JPEG images into WebP format,
            reducing file sizes and improving web performance.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/jpeg,image/jpg"
              style={{ display: "none" }}
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
          </div>

          {webpUrl && (
            <div className="textarea-container">
              <h3>Converted WebP Image</h3>
              <img
                src={webpUrl}
                alt="Converted WebP"
                style={{ maxWidth: "100%" }}
                className="textarea-animated"
              />
              <br />
              <div className="btn-container">
                <a
                  class="btn-421"
                  href={downloadUrl}
                  download="converted-image.webp"
                >
                  Download WebP
                </a>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className="content1">
          <h3>Instant JPEG to WebP Conversion</h3>
          <p>
            JPEG is a widely used image format, but it can result in larger file
            sizes and slower website load times. WebP is a newer image format
            that offers better compression and image quality, making it a great
            choice for web developers. If you have a picture in JPEG format and
            want to convert it to the more efficient WebP format, this tool is
            one of the simplest ways to do it. If you want to do the reverse,
            try converting from WebP to JPG for the best compatibility.
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
          <h3>The Need for Conversion to WebP</h3>
          <p>
            While JPEG is widely supported, it can result in larger file sizes
            and slower website load times. WebP, on the other hand, offers
            better compression and image quality, making it a great choice for
            web developers. Converting JPEG files to WebP ensures that your
            images can be viewed on virtually any device or browser while
            maintaining high quality and fast load times.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our JPG to WebP Converter</h3>
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
          <h3>How to use our JPG to WebP converter</h3>
          <ul>
            <li>
              Select your JPEG file from your computer, drag and drop or click
              to upload
            </li>
            <li>Download your converted WebP file</li>
          </ul>
          <p>
            Convert your JPEG images to WebP now and let us know if you have any
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

export default JPGtoWebPConverter;
