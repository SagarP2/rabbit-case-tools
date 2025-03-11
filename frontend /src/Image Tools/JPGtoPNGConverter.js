import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const JPGtoPNGConverter = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertJPGtoPNG(file);
    }
  };

  const convertJPGtoPNG = (file) => {
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

        // Convert canvas to PNG data URL
        const pngUrl = canvas.toDataURL("image/png");
        setImageUrl(pngUrl);
        setDownloadUrl(pngUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - JPG to PNG Converter</title>
          <meta
            name="description"
            content="Easily convert JPG images to PNG with transparent backgrounds using RabbitCode's online tool. Preserve high quality and switch formats in seconds."
          />
          <meta
            name="keywords"
            content="JPG to PNG converter, image format converter, JPG to PNG, online image converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - JPG to PNG Converter"
          />
          <meta
            property="og:description"
            content="Convert JPG images to PNG with transparent backgrounds and lossless quality using RabbitCode’s online converter."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - JPG to PNG Converter"
          />
          <meta
            name="twitter:description"
            content="Convert JPG to PNG with high quality and transparent backgrounds using RabbitCode's online tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>JPG to PNG Converter</h2>
          <p>
            Experience the power of format transformation with our JPG to PNG
            converter. Whether you need transparent backgrounds, lossless
            quality, or versatile editing options, our user-friendly tool has
            you covered. Easily switch from JPG to PNG and elevate your image
            processing capabilities today.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/jpeg"
              style={{ display: "none" }}
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop an image here or click to upload
            </label>
          </div>
          <br />

          {imageUrl && (
            <div className="textarea-container">
              <img
                src={imageUrl}
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
          <h3>Instant JPG to PNG Conversion</h3>
          <p>
            Unlock the power of instant transformation with our JPG to PNG
            converter. Our intuitive tool empowers you to swiftly convert JPG
            images into high-quality PNG format while maintaining precise
            control over image clarity and transparency. Say goodbye to format
            constraints and effortlessly elevate your visuals to the next level.
            Depending on the type of image, you may be better converting from
            JPG to WebP for the best file size/quality ratio.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is PNG and Its Advantages?</h3>
          <p>
            PNG, or Portable Network Graphics, is a highly versatile image file
            format known for its unique advantages. Unlike some other formats,
            PNG employs lossless compression, ensuring that image quality
            remains intact while reducing file sizes. It excels in supporting
            transparency with alpha channels, making it perfect for images with
            irregular shapes or transparent backgrounds, such as logos and
            icons. PNG also accommodates a wide range of color depths, from
            grayscale to true color, ensuring flexibility for various image
            types. It enjoys universal browser compatibility, guaranteeing
            consistent display across different platforms. With its ability to
            render text and line art with precision, PNG is well-suited for
            diagrams and graphics. Moreover, PNG files can be edited and resaved
            multiple times without any loss in quality, making them a top choice
            for graphic design and image editing. Overall, PNG's lossless
            compression, transparency support, and compatibility make it a
            preferred format for a myriad of graphic applications.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>The Need for JPEG Conversion to PNG</h3>
          <p>
            Converting JPEG images to PNG is crucial for preserving
            transparency, maintaining lossless quality, and enabling advanced
            editing, making it ideal for graphics, logos, and web visuals. It
            ensures that images display consistently across platforms and is
            particularly valuable for sharp-edged graphics and text, which
            benefit from PNG's clarity and absence of compression artifacts.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our JPG to PNG Converter</h3>
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
          <h3>How to use our JPG to PNG converter</h3>
          <ul>
            <li>
              Select your JPG file from your computer, drag and drop or click to
              upload
            </li>
            <li>Download your converted PNG file</li>
          </ul>
          <p>
            Convert your JPG images to PNG now and let us know if you have any
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

export default JPGtoPNGConverter;
