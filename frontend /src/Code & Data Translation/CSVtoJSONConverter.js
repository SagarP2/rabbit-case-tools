import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const CSVtoJSONConverter = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const calculateTextStatistics = (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n").length;
    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines,
    };
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTopText(text);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
    convertCSVToJSON(text);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvContent = e.target.result;
        setTopText(csvContent);
        const statistics = calculateTextStatistics(csvContent);
        setTextStatistics(statistics);
        convertCSVToJSON(csvContent);
      };
      reader.readAsText(file);
    }
  };

  const convertCSVToJSON = (csv) => {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const json = lines.slice(1).map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
    setBottomText(JSON.stringify(json, null, 2));
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([bottomText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted.json";
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bottomText);
  };

  const clearText = () => {
    setTopText("");
    setBottomText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - CSV to JSON and JSON to CSV Converter</title>
          <meta
            name="description"
            content="Convert CSV to JSON and vice versa with RabbitCode's free online tool. Easily convert your CSV data to JSON format and back to CSV with just a few clicks."
          />
          <meta
            name="keywords"
            content="CSV to JSON, JSON to CSV, convert CSV to JSON, convert JSON to CSV, online CSV converter"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - CSV to JSON and JSON to CSV Converter"
          />
          <meta
            property="og:description"
            content="Easily convert your CSV data to JSON format and back to CSV with RabbitCode's simple online converter."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - CSV to JSON and JSON to CSV Converter"
          />
          <meta
            name="twitter:description"
            content="Convert CSV to JSON and JSON to CSV with RabbitCode's free online tool. Streamline your data conversion tasks effortlessly."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Convert CSV to JSON and JSON to CSV</h2>
          <p>
            This is a simple tool that allows you to convert CSV to JSON and
            vice versa JSON to CSV as well. Simply copy and paste your code into
            the corresponding field and see it get converted back in the next
            field.
          </p>

          <div className="input-container">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              id="file-input"
            />
            <label htmlFor="file-input" className="custom-file-upload">
              Drag & drop a CSV file here or click to upload
            </label>
          </div>
          <br />
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="6"
              className="textarea-animated"
              value={topText}
              onChange={handleTextChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              rows="6"
              className="textarea-animated"
              value={bottomText}
              readOnly
            />
          </div>

          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button class="btn-421" onClick={downloadText}>
              Download Text
            </button>
            <button class="btn-421" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={clearText}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>What does the CSV to JSON converter do?</h3>
          <p>
            Whether you have some JSON code or some CSV code that you want
            converting int the new format, you can use the tool above to
            automatically do that for you.
          </p>
          <p>
            Simply copy the data you have into the above field, JSON code into
            the JSON field and the CSV data into the CSV field and then you can
            see it automatically be converted into your desired format in the
            field next to it. Copy it and then paste it where you need to.
          </p>
          <p>
            If you have any questions about the converter or even have some
            suggestions on how we can improve it further, then we’d love to hear
            about it.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CSVtoJSONConverter;
