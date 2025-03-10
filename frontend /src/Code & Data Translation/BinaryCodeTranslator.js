import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const BinaryCodeTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [binaryText, setBinaryText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const convertToBinary = (text) => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

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
    setInputText(text);
    const binary = convertToBinary(text);
    setBinaryText(binary);
    const statistics = calculateTextStatistics(text);
    setTextStatistics(statistics);
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([binaryText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "binary_text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binaryText);
  };

  const clearText = () => {
    setInputText("");
    setBinaryText("");
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
          <title>RabbitCode - Binary Code Translator</title>
          <meta
            name="description"
            content="Convert your English text into binary code easily with RabbitCode's Binary Code Translator. Quickly and efficiently convert any text into binary format."
          />
          <meta
            name="keywords"
            content="binary code translator, convert text to binary, binary code, text to binary, online translator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Binary Code Translator"
          />
          <meta
            property="og:description"
            content="Transform your English text into binary code effortlessly with RabbitCode's Binary Code Translator. Convert any text into binary format with ease."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Binary Code Translator"
          />
          <meta
            name="twitter:description"
            content="Easily convert English text into binary code with RabbitCode's Binary Code Translator. Perfect for learning and data representation."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Binary Code Translator</h2>
          <p>
            You can use this handy online binary code translation tool to
            quickly convert your English text into a binary code. Simply enter
            the regular text as you would in the left column panel and then you
            will see it automatically get translated into a series of binary
            code on the right.
          </p>
          <div className="textarea-container">
            <textarea
              placeholder="Start typing your notes here..."
              rows="8"
              className="textarea-animated"
              value={inputText}
              onChange={handleTextChange}
            />
            <textarea
              placeholder="Converted text will appear here..."
              rows="8"
              className="textarea-animated"
              value={binaryText}
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
          <h3>Binary Code Generator</h3>
          <p>
            As one of the most commonly used computing languages in the world,
            binary code has a long and diverse history. When you need to write
            something in a manner that could be understood by a machine, though,
            simply injecting the text is often not enough. Many times, you need
            to convert the message into binary code. Sometimes, this can also
            make a good stylistic change to utterly transform the look and style
            of the text you are working with.
          </p>
          <p>
            Whether you wish to hide your code in a hidden message or you simply
            wish to make a smart design choice, our binary code translator could
            be what you are looking for. Such a tool can be the simplest,
            easiest way for you to change things up and keep the binary code
            available for usage whenever you might happen to need it.
          </p>
          <p>
            The challenge you might have when it comes to binary code is
            learning how to translate ASCII text into binary. This can be a huge
            undertaking, and it could take you several hours just to translate a
            few short paragraphs. Instead of wasting your valuable time like
            this, why not speed up the process and instead use our binary code
            translator?
          </p>
          <p>
            This simple to use translation tool can speed up the entire
            experience. Translation of something as important as binary code is
            very easy to make mistakes with, too, which can lead to all manner
            of problems – least of all changes to the message you intend to put
            across.
          </p>
          <p>
            If you want to avoid that kind of problem, all you need to do is
            download our translation tool and try it out for yourself. Quickly,
            you will see the immense value that stems from using binary code
            either in coding or in some form of artistic design choice intended.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How to change text to binary code?</h3>
          <p>
            All you have to do is write out text on the left hand side and then
            as you do you will see the code being generated on the right. You
            can then copy and paste this code wherever you want. You will see
            that when you paste it back on the right hand side column that it
            also gets converted back into English. You can do this back and
            forth if you wish.
          </p>
          <p>
            If you are looking for an example of binary code then please see
            below:
          </p>
          <p>
            01000010 01101001 01101110 01100001 01110010 01111001 00100000
            01000011 01101111 01100100 01100101 00100000 01010100 01110010
            01100001 01101110 01110011 01101100 01100001 01110100 01101111
            01110010
          </p>
          <p>
            Of course, if you have any questions with regards to the binary code
            generator then please do let us know and we will be more than happy
            to help you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BinaryCodeTranslator;
