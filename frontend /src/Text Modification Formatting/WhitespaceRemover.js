import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";

const WhitespaceRemover = () => {
  const [inputText, setInputText] = useState("");
  const [cleanedText, setCleanedText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const calculateStats = (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const letters = text.replace(/\s+/g, "").length;
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0).length;
    const lines = text.split("\n").length;

    return {
      wordCount: words,
      letterCount: letters,
      sentenceCount: sentences,
      lineCount: lines,
    };
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    const cleanedText = newText.replace(/\s+/g, " ").trim();
    setInputText(newText);
    setCleanedText(cleanedText);
    setTextStatistics(calculateStats(cleanedText));
  };

  const handleDownload = () => {
    const blob = new Blob([cleanedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cleaned-text.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanedText);
  };

  const handleClear = () => {
    setInputText("");
    setCleanedText("");
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
          <title>RabbitCode - Whitespace Remover Tool</title>
          <meta
            name="description"
            content="Streamline your text or code by removing unnecessary whitespace with RabbitCode’s Whitespace Remover. Clean up your data and make it more efficient."
          />
          <meta
            name="keywords"
            content="whitespace remover, text cleaner, remove spaces, text tool, code cleaner, whitespace tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Whitespace Remover Tool"
          />
          <meta
            property="og:description"
            content="Remove unwanted spaces from your text and code with RabbitCode's Whitespace Remover. Clean and streamline your content quickly."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Whitespace Remover Tool"
          />
          <meta
            name="twitter:description"
            content="Quickly remove excess spaces from your content with RabbitCode's Whitespace Remover. Clean up your text or code effortlessly."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Whitespace Remover</h2>
          <p>
            Struggling with messy code or cluttered text? Our Whitespace Remover
            tool streamlines your data, making it cleaner and more efficient.
            Get started today.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
              value={inputText}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              readOnly
              value={cleanedText}
            />
          </div>
          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button class="btn-421" onClick={handleDownload}>
              Download Text
            </button>
            <button class="btn-421" onClick={handleCopy}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Why Use a Whitespace Remover?</h3>
          <p>
            Whitespace might seem trivial, but it can create chaos in coding
            environments and document formatting. Extra spaces can affect the
            compilation of a program or make a document look inconsistent. Using
            our Whitespace Remover eliminates these issues, saving you both time
            and headaches. Simply input your text or code, click 'Remove', and
            voila—clean and tidy content at your fingertips.
          </p>
          <p>
            Beyond code and text documents, our tool has multiple applications,
            such as database cleaning and CSV file formatting. It's a versatile
            solution that you'll find yourself coming back to time and again. So
            why wait? Make the smart choice for cleaner, more efficient text and
            code today.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the Bold Case Converter Work?</h3>
          <p>
            To use it and get your bold text generated, all you need to do is
            simply write up the content as you would normally in the left
            column. Then as you do so, you will notice that on the right hand
            column that the text is starting to get transformed into the bolded
            version.
          </p>
          <p>
            Once you have finished writing out the text that you want to get
            bolded. You will see that all the text you want in bold is available
            to you for copying and pasting wherever you’d like. Simply highlight
            the text on the right, ‘copy’ it and then click paste into your
            desired text editor.
          </p>
          <p>
            If you are looking for an example of bolded text then please see
            below:
          </p>
          <p>𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗯𝗼𝗹𝗱 𝘁𝗲𝘅𝘁.</p>
          <p>
            Let us know also if you have any potential ideas on how we can
            improve the bold text generator further? Simply contact us via the
            contact page, we can’t wait to hear what you’re thinking.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhitespaceRemover;
