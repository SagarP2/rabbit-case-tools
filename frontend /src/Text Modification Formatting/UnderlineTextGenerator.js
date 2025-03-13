import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Function to convert text to underlined text
const toUnderlineText = (text) => {
  return text
    .split("")
    .map((char) => `${char}\u0332`)
    .join("");
};

const UnderlineTextGenerator = () => {
  const [topText, setTopText] = useState("");
  const [underlinedText, setUnderlinedText] = useState("");
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
    setTopText("");
    setUnderlinedText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTopText(text);
    const transformedText = toUnderlineText(text);
    setUnderlinedText(transformedText);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Underline Text Generator</title>
          <meta
            name="description"
            content="Quickly and easily underline your text with RabbitCode’s Underline Text Generator. Copy and paste your text and get it formatted with an underline."
          />
          <meta
            name="keywords"
            content="underline text, text formatting, online tool, text generator, underline generator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Underline Text Generator"
          />
          <meta
            property="og:description"
            content="Underline your text effortlessly with RabbitCode’s Underline Text Generator. A simple and effective way to format your text."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Underline Text Generator"
          />
          <meta
            name="twitter:description"
            content="Easily underline your text with RabbitCode’s Underline Text Generator. Just paste your text and see the magic happen."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Underline Text</h2>
          <p>
            Get your text quickly underlined using the underline text generator
            tool below. Paste or write the text you want underlined on the left
            and get it converted to have the font underline on the right panel.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              placeholder="Start typing your notes here..."
              rows="8"
              value={topText}
              onChange={handleTextChange}
            />
            <textarea
              className="textarea-animated"
              placeholder="Converted text will appear here..."
              rows="8"
              value={underlinedText}
              readOnly
            />
          </div>

          <div className="stats-text">
            Words: {textStatistics.wordCount} | Letters:{" "}
            {textStatistics.letterCount} | Sentences:{" "}
            {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() =>
                handleDownload(underlinedText, "underlined-text.txt")
              }
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(underlinedText)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Underliner Text Converter</h3>
          <p>
            Do you need to find an easy way to quickly draw attention to a piece
            of text? Then you should really take a look at our underline text
            formatting tool. Text editing is a time consuming process, but this
            underline text program gives you the simplest, quickest, and easiest
            way to make the adjustments as you would have wanted. With an
            underline text editor, you can add that all important emphasis to
            any piece of text that needs changing. Remove the stress and the
            challenge of text editing with an underline text adjustment that can
            really make the text stand out for the right reasons.
          </p>
          <p>
            If you ever need to format and adjust your content, then using
            underline text is a very wise choice. This looks great, adds in some
            much-needed detail, and can freshen up the entire look and feel of a
            piece of content. You can also easily draw attention to key numbers,
            statements, or facts that are listed within your content. An
            underline text section is one that should immediately and instantly
            draw attention. It can help to create emphasis, to encourage people
            to read that section, or simply make it easier to stand out.
          </p>
          <p>
            Instead of having to edit all of the content on your own, though,
            our underline text editor makes the job that little bit easier. The
            biggest thing you can do for yourself when it comes to editing and
            improving content is to take a look at the best way to format each
            section.
          </p>
          <p>
            When you feel like the addition of some underline text could be
            useful, copy in what you need to our left-hand side box. This will
            then automatically show the underline text on the right-hand box,
            ready for you to copy and/or download.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How to underline text?</h3>
          <p>
            Simply write up the text that you want converting (or simply paste
            it in, if you already have it on hand) in the first panel you see on
            the left and then you will see that the text is automatically
            getting generated by the converter on the next panel. You will then
            be able to go ahead and copy that specific underlined text and paste
            it wherever you like.
          </p>
          <p>
            If you are looking for an example of italic text then please see
            below:
          </p>
          <p>T̲h̲i̲s̲ ̲i̲s̲ ̲a̲n̲ ̲e̲x̲a̲m̲p̲l̲e̲ ̲o̲f̲ ̲u̲n̲d̲e̲r̲l̲i̲n̲e̲ ̲t̲e̲x̲t̲.̲</p>
          <p>
            Do you think we can improve on the underline text converter further?
            Send us a message as we’d love to hear your suggestions. We read
            every single one at the Convert Case team.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnderlineTextGenerator;
