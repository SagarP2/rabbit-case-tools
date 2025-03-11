import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const PNGtoWebPConverter = () => {
  const [webpUrl, setWebpUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      convertPNGtoWebP(file);
    }
  };

  const convertPNGtoWebP = (file) => {
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
          <title>RabbitCode - PNG to WebP Converter</title>
          <meta
            name="description"
            content="Convert PNG images to WebP format easily with RabbitCode's free tool. Compress and optimize your images for faster loading web content."
          />
          <meta
            name="keywords"
            content="PNG to WebP converter, image converter, WebP converter, PNG to WebP, online image converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - PNG to WebP Converter"
          />
          <meta
            property="og:description"
            content="Convert PNG images to WebP format easily with RabbitCode's free tool. Compress and optimize your images for faster loading web content."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - PNG to WebP Converter"
          />
          <meta
            name="twitter:description"
            content="Convert PNG images to WebP format with RabbitCode's free tool. Optimize your images for web performance."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>PNG to WebP Converter</h2>
          <p>
            Convert PNG images to WebP format easily - try our free PNG to WebP
            converter tool. Compress and optimize your images for faster loading
            web content.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept="image/*"
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
          <h3>Instant PNG to WebP Conversion</h3>
          <p>
            With this lightning-fast online converter, you can effortlessly
            transform your PNG images into high-quality WebP format, all in the
            blink of an eye, saving you both time and storage space. For greater
            compatibility, convert your PNG file to a JPG image instead.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is WebP and Its Advantages?</h3>
          <p>
            Developed by Google, WebP stands as an image format crafted to offer
            a dual advantage of lossless and lossy compression. This unique
            feature enables the reduction of file sizes while maintaining image
            quality, making it a valuable tool for web developers striving to
            enhance website loading speeds.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>The Need for PNG Conversion to WebP</h3>
          <p>
            In today's digital landscape, the need for conversion to WebP format
            is undeniable. WebP offers superior compression and image quality,
            ensuring faster loading times and an enhanced user experience,
            making it an essential choice for optimizing web content and
            reducing bandwidth consumption. While PNG has been a popular choice
            for image storage, it comes with disadvantages such as larger file
            sizes and slower loading times, making it less efficient for modern
            web applications.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Features of Our PNG to WebP Converter</h3>
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
          <h3>How to use our PNG to WebP converter</h3>
          <ul>
            <li>
              Select your PNG file from your computer, drag and drop or click to
              upload
            </li>
            <li>Download your converted WebP file</li>
          </ul>
          <p>
            Convert your PNG images to WebP now and let us know if you have any
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

export default PNGtoWebPConverter;
