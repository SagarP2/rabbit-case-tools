import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const WideTextGenerator = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [wideText, setWideText] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const handleChange = (event) => {
    const text = event.target.value;
    setTextareaValue(text);
    const widenedText = transformToWideText(text);
    setWideText(widenedText);
    setTextStatistics(calculateTextStatistics(widenedText));
  };

  const transformToWideText = (text) => {
    return text.split('').map(char => {
      // Replace each character with its wide counterpart if available, or use the character itself
      return char + ' '; // Add space between characters
    }).join('');
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
    const lines = text.split("\n");

    return {
      wordCount: words.length,
      letterCount: letters,
      sentenceCount: sentences.length,
      lineCount: lines.length,
    };
  };

  const handleDownload = () => {
    const blob = new Blob([wideText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wide-text.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    setTextareaValue("");
    setWideText("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(wideText);
  };

  return (
    <div className="container">
      <main>
      <Helmet>
        <title>RabbitCode - Wide Text Generator</title>
        <meta
          name="description"
          content="Create unique and stylish vaporwave text with RabbitCode's Wide Text Generator. Easily widen and space out your text to give it a cool aesthetic vibe."
        />
        <meta
          name="keywords"
          content="vaporwave text generator, wide text, aesthetic text, font generator, spaced text, unique text styling"
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="RabbitCode - Wide Text Generator" />
        <meta
          property="og:description"
          content="Transform your text into stylish, spaced-out vaporwave text with RabbitCode's Wide Text Generator. Perfect for creating unique, aesthetic fonts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rabbitcode.agency" />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Add OG image */}
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="RabbitCode - Wide Text Generator"
        />
        <meta
          name="twitter:description"
          content="Easily widen and space out your text to create cool, aesthetic fonts with RabbitCode's Wide Text Generator."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Add Twitter image */}
        {/* Additional SEO Meta Tags */}
        <link rel="canonical" href="https://rabbitcode.agency" />
        <meta name="robots" content="index, follow" />
      </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Wide Text Generator</h2>
          <p>
            A simple to use online vaporwave text generator tool that widens and
            spaces out your text. It basically converts your normal text into a
            vaporwave font, you will see that it is also referred to as an
            aesthetic font. Essentially you will have your standard font widened
            via this wide text generator.
          </p>
          <div className="textarea-container">
            <textarea
              value={textareaValue}
              onChange={handleChange}
              placeholder="Start typing your notes here..."
              rows="8"
            className="textarea-animated"
            />
            <textarea
              value={wideText}
              placeholder="Converted text will appear here..."
              rows="8"
             className="textarea-animated"
              readOnly
            />
          </div>
        
          <div className="stats-text">
          Words: {textStatistics.wordCount} | Letters: {textStatistics.letterCount} | Sentences: {textStatistics.sentenceCount} | Lines: {textStatistics.lineCount}
          </div>
          <div className="btn1-container">
            <button class="btn-421" onClick={handleDownload}>Download Text</button>
            <button class="btn-421" onClick={handleCopy}>Copy to Clipboard</button>
            <button class="btn-421" onClick={handleClear}>Clear</button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>Vaporwave Wide Aesthetic Text Generator</h3>
          <p>
            Do you need to create and adjust some text? Are you looking to move
            the text into a wider style? Then you need a wide text generator.
            This simple, easy to use tool allows for you to drop your text needs
            quickly and easily into the box on the left.
          </p>
          <p>
            Either type in or paste the text that you wish to convert, and it
            will be turned into wide text in front of your eyes. Then, all that
            you need to do is hit the ‘Copy to Clipboard’ or ‘Download Text’
            button, and you can quickly and easily grab hold of all of the wide
            generated text. This can be used for anything, from adjusting text
            on a website to using wide text for a particular stylistic choice
            that you happen to have in mind.
          </p>
          <p>
            If you wish to remove the challenge that comes from generating wide
            text yourself, then this tool removes the challenge almost entirely.
            You just need to copy in the text you need, and our text generator
            can quickly make the adjustment for you. Wide text can be great for
            many reasons, especially if you are trying to fill in a large space
            on a style sheet.
          </p>
          <p>
            This can quickly ensure you spend less time fretting over how to
            make wide text. Why spend hours going through a piece of text
            yourself when you could just drop it into our wide text generator?
          </p>
          <p>
            Now, you can easily and effectively generate all of the text that
            you might need by using a simple, effective text generator. Remove
            the stress, minimise the challenge, and master the process in a
            matter of moments. Instead of fretting or doing a task that can be
            automated on your own, use our wide text generator and make sure you
            speed things up.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>How Do You Get the Aesthetic Font Text?</h3>
          <p>
            Simply write or paste the existing text that you want converting
            into the left column. Then you will see that the vaporwave text is
            generated into the right column. You are able to then simply copy
            this text and paste it where you’d like.
          </p>
          <p>
            This aesthetic text generator allows you to make a point stand out
            from the rest of your text. If you are looking to grab attention on
            social media or simply want to have a little play around, then
            vaporwave aesthetic text is a great way to do exactly that.
          </p>
          <p>
            Our wide text generator is based from the full-width text that was
            derived from Asian computer and IT systems where Asian characters
            are considered full width but Latin characters half width given
            their relatively smaller size.
          </p>
          <p>
            Ｔｈｉｓ ｉｓ ａｎ ｅｘａｍｐｌｅ ｏｆ ｗｉｄｅ ａｅｓｔｈｅｔｉｃ ｔｅｓｔ。
          </p>
          <p>
            Please do let us know if you have any potential questions with
            regards to the aesthetic text generator and if you have any
            potential issues copying and pasting the vaporwave text - we will be
            more than happy to help you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WideTextGenerator;
