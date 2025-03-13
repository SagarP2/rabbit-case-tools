import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const ReverseTextGenerator = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  // Function to calculate text statistics
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

  // Function to reverse the text
  const reverseText = (text) => {
    return text.split("").reverse().join("");
  };

  // Function to handle text input change
  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setConvertedText(reverseText(inputText));
  };

  // Function to handle text download
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "reversed_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Function to handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
  };

  // Function to handle clear text
  const handleClear = () => {
    setText("");
    setConvertedText("");
  };

  // Calculate statistics based on converted text
  const { wordCount, letterCount, sentenceCount, lineCount } =
    calculateTextStatistics(convertedText);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Backwards Text Generator</title>
          <meta
            name="description"
            content="Transform your regular text into backwards text with RabbitCode’s Backwards Text Generator. Create unique messages and text effects quickly and easily."
          />
          <meta
            name="keywords"
            content="backwards text generator, text effects, reverse text, online tool, reverse message, create unique text"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Backwards Text Generator"
          />
          <meta
            property="og:description"
            content="Convert your regular text into backwards text with RabbitCode’s Backwards Text Generator. Make your messages stand out with this fun tool."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Backwards Text Generator"
          />
          <meta
            name="twitter:description"
            content="Use RabbitCode’s Backwards Text Generator to flip your text and create interesting effects. Type or paste your text and watch it transform!"
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Backwards Text Generator</h2>
          <p>
            Normal front facing text to backwards text. A simple online backward
            text generator tool that allows you to switch the way your text is
            facing. Simply write or paste the text in the left column and see it
            get converted in the right.
          </p>
          <div className="textarea-container">
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
            />
            <textarea
              value={convertedText}
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              readOnly
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
          <h3>Flip Your Text Backwards Converter</h3>
          <p>
            Whether it’s for stylistic purposes, comedic value, or any other
            reason, you might sometimes wish to turn your letters around. In a
            literal sense, this means using a reverse text generator. Put
            simply, most of our keyboards do not allow for us to actually
            reverse the writing that we have produced – at least not easily.
            Instead of having to learn all of the various keyboard controls to
            line this up, you can quickly and easily use our text generator to
            make things easier.
          </p>
          <p>
            A reverse text generator can be a simple and easy to use tool for
            various purposes, not least saving you valuable time and effort. One
            of the biggest challenges in making reverse text is learning how to
            self-edit this. Why not save yourself some valuable time and effort,
            then, by using a text generator that reverses the content for you?
          </p>
          <p>
            Now, you can turn around a job that would normally take hours and
            instead turn it into something that should take a few simple
            moments. The speed of transformation is massive, leaving you with a
            hugely impressive solution for reversing text in an instant.
          </p>
          <p>
            No longer do you need to mess around trying to self-edit this.
            Instead, you just copy or write in the text you wish to have
            reversed into the left-hand box on our reverse text generator. Then,
            you need to hit the ‘Download Text’ and/or ‘Copy to Clipboard’
            button to receive a copy of the edited content. You can then use
            this in any way that you wish.
          </p>
          <p>
            We have designed the whole process to ensure you can get the
            absolute maximum out of the effort that you put in here. For that
            reason, take a look today at our reverse text generator and see if
            you can speed-up your text editing from here.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How to Reverse Text?</h3>
          <p>
            All you have to do is write the text as you would normally in the
            left panel and then you will see it getting converted in the right
            panel. Then you can simply copy and paste it to wherever you wish.
          </p>
          <p>.txet sdrawkcab fo ecnetnes elpmaxe na si sihT</p>
          <p>
            Of course, if you do have any questions about the Backwards Text
            Generator and have any suggestions on how we can improve further,
            then please do let us know and we will be more than happy to help.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReverseTextGenerator;
