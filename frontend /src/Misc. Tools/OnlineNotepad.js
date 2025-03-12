import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const OnlineNotepad = () => {
  const [text, setText] = useState("");

  const calculateTextStatistics = () => {
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
    setText("");
  };

  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics();

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Free Online Notepad</title>
          <meta
            name="description"
            content="Use RabbitCode's free online notepad to quickly write, save, and edit notes. Your notes are saved directly in your browser for convenience."
          />
          <meta
            name="keywords"
            content="online notepad, free notepad, browser notepad, save notes, quick notepad"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Free Online Notepad"
          />
          <meta
            property="og:description"
            content="Write, save, and edit your notes easily with RabbitCode's free online notepad. Accessible from any browser."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Free Online Notepad"
          />
          <meta
            name="twitter:description"
            content="Save and manage your notes easily with RabbitCode's free online notepad. Notes are saved locally in your browser."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Free Online Notepad</h2>
          <p>
            Use the free quick online notepad by simply entering your text and
            notes. The way this online notepad works, it will ensure that it is
            saved by the browser that you are operating on.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your content here"
              rows="10"
            />
          </div>
          <div className="stats-text">
            Words: {wordCount} | Letters: {letterCount} | Sentences:{" "}
            {sentenceCount} | Lines: {lineCount}
          </div>
          <div className="btn1-container">
            <button
              class="btn-421"
              onClick={() => handleDownload(text, "notepad-content.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={() => handleCopy(text)}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>About Online Notepad</h3>
          <p>
            Online Notepad offers a completely free tool accessible right in
            your web browser. Easily craft various notes, ideas, and to-do
            lists, copying and pasting text as needed. This minimalist notepad
            includes an autosave function, enabling convenient text storage.
            Learn more in the 'How Does This Work' section to understand how
            text retrieval works seamlessly when revisiting—simply ensure
            consistent use of the same browser and device without clearing
            cookies.
          </p>
          <p>
            Online Notepad comes from the same team as Convert Case. Explore
            some of our other text tools like small text generator or wide text
            generator.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How does this work?</h3>
          <p>
            All data is stored in your browser's temporary files automatically
            and is never sent to us. If you come back to the site again with the
            same browser, it'll be here waiting for you. It's a simple
            alternative to Evernote or OneNote which require you to create
            accounts.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Where did my notes go?</h3>
          <p>
            If your notes have disappeared, you may have cleared your browser's
            temporary files. If you do this regularly, be sure to uncheck the
            box to clear offline web site data to keep your notes safe.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineNotepad;
