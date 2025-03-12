import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomDateGenerator = () => {
  const [randomDate, setRandomDate] = useState("");

  const handleRandomise = () => {
    const randomDate = new Date(
      new Date().getTime() +
        Math.random() *
          (new Date(2100, 0, 1).getTime() - new Date(1900, 0, 1).getTime())
    ).toLocaleDateString();
    setRandomDate(randomDate);
  };

  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setRandomDate("");
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Random Date Generator</title>
          <meta
            name="description"
            content="Generate random dates effortlessly with RabbitCode's Random Date Generator. Ideal for test data, planning events, and more!"
          />
          <meta
            name="keywords"
            content="random date generator, random date picker, generate dates, random date tool, test data"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random Date Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Random Date Generator to easily generate random dates for testing, event planning, and more!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random Date Generator"
          />
          <meta
            name="twitter:description"
            content="Generate random dates easily with RabbitCode's Random Date Generator. Perfect for testing and planning!"
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random Date Generator</h2>
          <p>
            Discover the simplicity of generating random dates with our Random
            Date Generator. Whether you're in need of test data for software
            development, planning events, or simply exploring date-related
            scenarios, this tool provides a quick and easy solution. Dive into
            the versatility of the Random Date Generator and streamline your
            date selection process today.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              rows="6"
              readOnly
              value={randomDate}
            />
          </div>
          <br />
          <div className="btn-container">
            <button className="btn-421" onClick={handleRandomise}>
              Randomise
            </button>
            <button className="btn-421" onClick={() => handleCopy(randomDate)}>
              Copy to Clipboard
            </button>
            <button
              className="btn-421"
              onClick={() => handleDownload(randomDate, "random-date.txt")}
            >
              Download Text
            </button>
            <button className="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How do I generate a random date?</h3>
          <p>
            The Random Date Generator is designed to produce random dates within
            a user-specified range. By entering a start and end date, users can
            generate one or multiple random dates that fall within the given
            timeframe. This tool is ideal for all sorts of use cases from
            developers who need placeholder dates, event planners seeking random
            selection, or individuals curious about date-related probabilities.
            With a user-friendly interface, the generator simplifies the process
            of obtaining random dates, making it accessible for a wide array of
            projects and purposes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomDateGenerator;
