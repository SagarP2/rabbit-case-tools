import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const SVGtoPNGConverter = () => {
  const [pngUrl, setPngUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertSVGtoPNG(file);
    }
  };

  const convertSVGtoPNG = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const svg = event.target.result;
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
      };
      img.src = svg;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - SVG to PNG Converter</title>
          <meta
            name="description"
            content="Convert SVG images to high-quality PNG format with RabbitCode's easy-to-use tool. Streamline your image optimization process for better web performance."
          />
          <meta
            name="keywords"
            content="SVG to PNG converter, image converter, online converter, SVG to PNG, web image optimization"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - SVG to PNG Converter"
          />
          <meta
            property="og:description"
            content="Convert SVG images to PNG with RabbitCode's free tool. Optimize your images for better performance on the web."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - SVG to PNG Converter"
          />
          <meta
            name="twitter:description"
            content="Convert SVG images to PNG with RabbitCode's free tool. Optimize your images for better web performance."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>SVG to PNG Converter</h2>
          <p>
            Effortlessly convert SVG images to high-quality PNG format with our
            user-friendly tool. Streamline your image optimization process for
            enhanced compatibility and smaller file sizes. Make the switch from
            SVG to PNG with ease!
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/svg+xml"
              style={{ display: "none" }}
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
          </div>

          {pngUrl && (
            <div className="textarea-container">
              <h3>Converted PNG Image</h3>
              <img
                src={pngUrl}
                alt="Converted PNG"
                style={{ maxWidth: "100%" }}
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
          <h3>Instant SVG to PNG Conversion</h3>
          <p>
            Experience lightning-fast image format transformation with our SVG
            to PNG conversion tool. Whether you need transparent backgrounds or
            prefer the versatility of PNG, our online converter ensures a quick
            and hassle-free transition. Instantly switch your SVG images to PNG
            format and take control of your visual content with ease.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Advantages of SVG to PNG Conversion</h3>
          <p>
            Converting SVG (Scalable Vector Graphics) to PNG format offers
            several advantages:
          </p>
          <ul>
            <li>
              Compatibility: PNG is supported by all major web browsers,
              ensuring that your images will display correctly across different
              platforms.
            </li>
            <li>
              Transparency: PNG supports transparent backgrounds, allowing you
              to create images with non-rectangular shapes or overlay them on
              other elements.
            </li>
            <li>
              File Size Optimization: SVG files can sometimes be large,
              especially if they contain complex vector graphics. Converting
              them to PNG can help reduce file size without sacrificing image
              quality.
            </li>
            <li>
              Easy Sharing: PNG files are widely supported and can be easily
              shared with others, making it a convenient format for distributing
              your visual content.
            </li>
          </ul>
        </div>
        <br />

        <br />
        <div className="content1">
          <h3>Features of Our SVG to PNG Converter</h3>
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
          <h3>How to use our SVG to PNG converter</h3>
          <ul>
            <li>
              Select your SVG file from your computer, drag and drop or click to
              upload
            </li>
            <li>Click the "Convert" button to start the conversion process</li>
            <li>Download your converted PNG fil</li>
          </ul>
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

export default SVGtoPNGConverter;
