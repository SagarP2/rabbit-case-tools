import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const PNGtoJPGConverter = () => {
  const [jpgUrl, setJpgUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertPNGtoJPG(file);
    }
  };
  const convertPNGtoJPG = (file) => {
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
        // Convert canvas to JPG data URL
        const jpgUrl = canvas.toDataURL("image/jpeg");
        setJpgUrl(jpgUrl);
        setDownloadUrl(jpgUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - PNG to JPG Converter</title>
          <meta
            name="description"
            content="Effortlessly convert PNG images to high-quality JPG format with RabbitCode's user-friendly tool. Streamline your image optimization for better compatibility and smaller file sizes."
          />
          <meta
            name="keywords"
            content="PNG to JPG converter, image converter, PNG to JPG, JPG converter, online image converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - PNG to JPG Converter"
          />
          <meta
            property="og:description"
            content="Convert PNG to JPG effortlessly with RabbitCode's online converter tool. Optimize your images for better compatibility and smaller sizes."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - PNG to JPG Converter"
          />
          <meta
            name="twitter:description"
            content="Convert PNG to JPG with ease using RabbitCode's online converter tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>PNG to JPG Converter</h2>
          <p>
            Effortlessly convert PNG images to high-quality JPG format with our
            user-friendly tool. Streamline your image optimization process for
            enhanced compatibility and smaller file sizes. Make the switch from
            PNG to JPG with ease!
          </p>
          <div className="input-container">
            <input
              type="file"
              accept="image/png"
              style={{ display: "none" }}
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
          </div>

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
          <h3>Instant PNG to JPG Conversion</h3>
          <p>
            Experience lightning-fast image format transformation with our PNG
            to JPG conversion tool. Whether you need enhanced compatibility or
            prefer the efficiency of JPG, our online converter ensures a quick
            and hassle-free transition. Instantly switch your PNG images to JPG
            format and take control of your visual content with ease.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is JPG and Its Advantages?</h3>
          <p>
            JPEG (Joint Photographic Experts Group) is a widely used image file
            format known for its efficient compression methods, making it
            suitable for photographs and images with continuous tones and
            gradients.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>The Need for PNG Conversion to JPEG</h3>
          <p>
            Converting PNG images to JPEG (JPG) is essential for reducing file
            sizes, improving web compatibility, and enhancing loading times on
            websites. JPEG's efficient compression makes it ideal for
            photographic images, resulting in smaller file sizes without a
            significant loss in quality. This conversion ensures that images
            display consistently across all devices and web browsers, while also
            optimizing storage efficiency and simplifying sharing and editing
            processes.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our PNG to JPG Converter</h3>
          <ul>
            <li>
              Fast Processing: High-speed conversion without compromising
              quality.
            </li>
            <li>
              Privacy Focussed: The conversion is done in your browser and never
              sent to us.
            </li>
            <li>
              Free: No need to pay for the conversion and no logins required.
            </li>
          </ul>
        </div>
        <br />
        <div className="content1">
          <h3>How to use our PNG to JPG converter</h3>
          <ul>
            <li>
              Select your PNG file from your computer, drag and drop or click to
              upload
            </li>
            <li>Download your converted JPG file</li>
          </ul>
          <p>
            Convert your PNG images to JPG now and let us know if you have any
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
export default PNGtoJPGConverter;
