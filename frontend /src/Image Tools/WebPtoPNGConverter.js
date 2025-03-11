import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const WebPtoPNGConverter = () => {
  const [pngUrl, setPngUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "image/webp") {
        convertWebPtoPNG(file);
      } else {
        setError("Please select a WebP file.");
      }
    }
  };

  const convertWebPtoPNG = (file) => {
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
        const pngUrl = canvas.toDataURL("image/png");
        setPngUrl(pngUrl);
        setDownloadUrl(pngUrl);
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
          <title>RabbitCode - WebP to PNG Converter</title>
          <meta
            name="description"
            content="Easily convert your WebP images to PNG format with RabbitCode's free online tool. Upload your WebP image file and download the same image as PNG instantly."
          />
          <meta
            name="keywords"
            content="WebP to PNG converter, image converter, WebP to PNG, online converter, WebP conversion"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - WebP to PNG Converter"
          />
          <meta
            property="og:description"
            content="Convert WebP images to PNG with RabbitCode's free tool. Optimize your images for transparency and better quality."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - WebP to PNG Converter"
          />
          <meta
            name="twitter:description"
            content="Convert WebP images to PNG with RabbitCode's free tool. Optimize your images for transparency and better quality."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>WebP to PNG Converter</h2>
          <p>
            Easily convert your WebP images to PNG format with our free online
            converter. Upload your WebP image file and download the same image
            as PNG instantly.
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
          {pngUrl && (
            <div className="textarea-container">
              <h3>Converted PNG Image</h3>
              <img
                src={pngUrl}
                alt="Converted PNG"
                style={{ maxWidth: "100%" }}
                className="textarea-animated"
              />
              <br />
              <div className="btn-container">
                <a
                  class="btn-421"
                  href={downloadUrl}
                  download="converted-image.png"
                >
                  Download PNG
                </a>
              </div>
            </div>
          )}
        </div>
        <br />
        <div className="content1">
          <h3>Instant WebP to PNG Conversion</h3>
          <p>
            WebP is a relatively new image format with good compression and
            image quality, but not all web browsers and image viewers support it
            yet. If you have a picture in WebP format and want to convert it to
            the more common PNG format, this tool is one of the simplest ways to
            do it. Vice versa, try converting from WebP to PNG for the best
            compatibility.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is WebP and Its Advantages?</h3>
          <p>
            WebP is a modern image file format developed by Google. It is
            designed to provide both high-quality and efficient compression for
            images on the internet. WebP images typically have smaller file
            sizes compared to formats like JPEG and PNG, while maintaining good
            image quality. This makes WebP a popular choice for web developers
            and designers who want to optimize their websites for faster loading
            times without compromising on visual quality. However, it's not yet
            supported by all web browsers, so PNG may be a better option for
            vector graphics.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>The Need for Conversion to PNG</h3>
          <p>
            PNG is a better choice for images that require transparency or for
            images with text or sharp lines. PNG images are also lossless,
            meaning that they don't lose quality when compressed. This makes
            them ideal for images that need to be edited or resized frequently.
            Additionally, PNG images are supported by virtually all web browsers
            and image viewers, making them a more universal choice for web
            developers.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our WebP to PNG Converter</h3>
          <ul>
            <li>
              Fast Processing: High-speed conversion without compromising
              quality.
            </li>
            <li>
              Keeps Transparency: Preserve Transparency with our WebP
              conversion.
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
          <h3>How to use our WebP to PNG converter</h3>
          <ul>
            <li>
              Select your WebP file from your computer, drag and drop or click
              to upload
            </li>
            <li>Click the "Convert" button to start the conversion process</li>
            <li>Download your converted PNG file</li>
          </ul>
          <p>
            Convert your WebP images to PNG now and let us know if you have any
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

export default WebPtoPNGConverter;
