import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const PlainTextConverter = () => {
  const [text, setText] = useState(""); // Single state for text

  const calculateTextStatistics = (text) => {
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

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setText("");
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(text);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Plain Text Converter</title>
          <meta
            name="description"
            content="Convert your rich text into plain text without losing formatting. Use RabbitCode's Plain Text Converter to remove embedded code and easily copy and paste across applications."
          />
          <meta
            name="keywords"
            content="plain text converter, text formatting, remove background code, copy and paste text, text converter tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Plain Text Converter"
          />
          <meta
            property="og:description"
            content="RabbitCode's Plain Text Converter removes embedded code while preserving text formatting, making it easy to copy and paste across applications."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Plain Text Converter"
          />
          <meta
            name="twitter:description"
            content="Convert your rich text into plain text with RabbitCode’s Plain Text Converter. Remove embedded code and copy and paste seamlessly."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Plain Text Converter</h2>
          <p>
            Are you having trouble losing your numbering, bulleted lists, or
            tabbed formatting when copying and pasting rich text into an online
            form? Convert Case's Plain Text Converter is the solution. Our
            online tool maintains your formatting while eliminating unwanted
            embedded code, making it easy to copy and paste between applications
            or forms. Say goodbye to frustration and hello to smooth, efficient
            productivity.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing your notes here..."
              rows="10"
            />
          </div>

          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
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
          <h3>How to Use Convert Case's Plain Text Converter</h3>
          <p>
            Using our Plain Text Converter is easy. Simply copy the rich text
            you want to convert and paste it into the converter. Our tool will
            automatically strip away all embedded code while preserving your
            numbered, bulleted, and tabbed formatting. Then, you can copy the
            plain text and paste it into any online form or application without
            losing your formatting. Say goodbye to manual reformatting and enjoy
            seamless productivity with Convert Case's Plain Text Converter.
          </p>
        </div>

        <br />

        <div className="content1">
          <h3>
            What types of formatting does the Plain Text Converter preserve?
          </h3>
          <p>
            Our converter preserves numbered, bulleted, and tabbed formatting,
            making it easy for you to copy and paste your text into any online
            form or application without losing your formatting.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use the Plain Text Converter on my mobile device?</h3>
          <p>
            Yes, you can use our converter on any device with internet access,
            including your mobile device.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Is the Plain Text Converter free to use?</h3>
          <p>
            Yes, our converter is completely free to use. Simply visit our
            website and start converting your rich text to plain text today.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>
            Does the Plain Text Converter support languages other than English?
          </h3>
          <p>
            Yes, our converter supports a wide range of languages, including
            non-Latin scripts. Simply copy and paste your text into the
            converter and let us do the rest.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>
            How does the Plain Text Converter differ from other online
            converters?
          </h3>
          <p>
            Our converter not only removes the frustrating embedded code from
            your rich text, but also preserves your formatting, making it easy
            for you to use your text in any online form or application without
            having to manually reformat it.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlainTextConverter;
