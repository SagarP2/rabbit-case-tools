import React, { useState, useEffect } from "react";
import figlet from "figlet";
import Big from "figlet/importable-fonts/Big";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";

figlet.parseFont("Big", Big);

const BigTextConverter = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [convertedText, setConvertedText] = useState("");

  useEffect(() => {
    figlet.parseFont("Big", Big);
  }, []);

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
    convertToFiglet(event.target.value);
  };

  const convertToFiglet = (text) => {
    figlet.text(text, { font: "Big" }, (err, result) => {
      if (err) {
        console.error("Error during figlet conversion:", err);
        setConvertedText("Error converting text");
        return;
      }
      setConvertedText(result);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([convertedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "figlet-text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const calculateTextStatistics = () => {
    const text = textareaValue;

    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const letters = text.replace(/\s+/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    const lines = text.split("\n");

    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Big Text Converter</title>
          <meta
            name="description"
            content="Transform your plain text into captivating figlet fonts with RabbitCode's big text generator. Elevate your messages and designs."
          />
          <meta
            name="keywords"
            content="big text generator, figlet fonts, text transformation, stylish text, font generator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="RabbitCode - Big Text Converter" />
          <meta
            property="og:description"
            content="Transform your plain text into captivating figlet fonts and enhance your messages and designs with stylish formatting."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Big Text Converter"
          />
          <meta
            name="twitter:description"
            content="Transform your plain text into captivating figlet fonts and enhance your messages and designs with stylish formatting."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Big Text Converter</h2>
          <p>
            Discover the enchantment of turning simple text into eye-catching
            figlet fonts with our big text generator. Enhance your messages,
            announcements, and designs by unlocking the creativity and power of
            striking text formatting.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={textareaValue}
              onChange={handleChange}
              placeholder="Start typing your notes here..."
              rows="8"
            />
            <textarea
              className="textarea-animated"
              value={convertedText}
              placeholder="Converted text will appear here..."
              rows="8"
              readOnly
            />
          </div>

          <div className="stats-text">
            Words: {calculateTextStatistics().wordCount} | Letters:{" "}
            {calculateTextStatistics().letterCount} | Sentences:{" "}
            {calculateTextStatistics().sentenceCount} | Lines:{" "}
            {calculateTextStatistics().lineCount}
          </div>

          <div className="btn1-container">
            <button class="btn-421" onClick={handleDownload}>
              Download Text
            </button>
            <button
              class="btn-421"
              onClick={() => navigator.clipboard.writeText(convertedText)}
            >
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={() => setTextareaValue("")}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Big Text Converter Work?</h3>
          <p>
            Our Big Text Generator makes it easy to convert plain text into
            stunning figlet fonts, providing a smooth and efficient solution.
            Simply input your desired text, and our tool instantly transforms it
            into stylish, eye-catching designs. With a single font option,
            customization is simple, enabling you to elevate your messages,
            announcements, or designs with captivating figlet fonts
            effortlessly.
          </p>
          <p>
            This tool is ideal for GitHub READMEs, allowing users to easily
            craft attention-grabbing headers and titles, instantly capturing
            visitors' interest and elevating the visual appeal of their project
            documentation.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What Are Figlet Fonts?</h3>
          <p>
            A Figlet font is a set of ASCII characters arranged to produce
            large, stylized text in terminal or text-based interfaces. These
            fonts are created using combinations of smaller ASCII characters,
            resulting in decorative and visually appealing text designs. Figlet
            fonts are often used in terminal applications, ASCII art, banners,
            and other contexts where impactful text presentation is needed.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BigTextConverter;
