import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Function to generate a random strong password
const generateRandomPassword = () => {
  const length = 12; // Set the desired length of the password
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

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
  const lines = text.split("\n").length;
  return {
    wordCount: words.length,
    letterCount: letters,
    sentenceCount: sentences.length,
    lineCount: lines,
  };
};

const StrongPasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  // Handle random password generation
  const handleRandomize = () => {
    const newPassword = generateRandomPassword();
    setPassword(newPassword);
    const statistics = calculateTextStatistics(newPassword);
    setTextStatistics(statistics);
  };

  // Handle downloading text content
  const handleDownload = (text, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Handle copying text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Handle clearing text area
  const handleClear = () => {
    setPassword("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  // Generate a random password on component mount
  useEffect(() => {
    handleRandomize();
  }, []);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Strong Password Generator</title>
          <meta
            name="description"
            content="Generate strong and secure random passwords with RabbitCode's Strong Password Generator. Safeguard your online accounts today."
          />
          <meta
            name="keywords"
            content="strong password generator, secure password generator, random password generator, password generator tool"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Strong Password Generator"
          />
          <meta
            property="og:description"
            content="Generate secure and strong random passwords with RabbitCode's Strong Password Generator to protect your online accounts."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Strong Password Generator"
          />
          <meta
            name="twitter:description"
            content="Safeguard your online accounts with RabbitCode's Strong Password Generator. Generate random, secure passwords in seconds."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Strong Password Generator</h2>
          <p>
            Tired of weak passwords that put your online accounts at risk?
            Upgrade your security with Convert Case's strong, random password
            generator. This free tool creates robust random passwords tailored
            to your needs, ensuring your information stays safe.
          </p>
          <div className="textarea-container">
            <textarea
              className="textarea-animated"
              value={password}
              placeholder="Strong Password"
              rows="4"
              readOnly
            />
          </div>
          <br />
          <div className="btn-container">
            <button class="btn-421" onClick={handleRandomize}>
              Randomize
            </button>
            <button class="btn-421" onClick={() => handleCopy(password)}>
              Copy to Clipboard
            </button>
            <button
              class="btn-421"
              onClick={() => handleDownload(password, "strong-password.txt")}
            >
              Download Text
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How Does Our Strong Password Generator Work?</h3>
          <p>
            Our strong password generator crafts highly secure random passwords
            by combining letters, numbers, and symbols in unpredictable
            sequences. Unlike simple, guessable passwords, ours withstand brute
            force attacks and hacking attempts. Ideal for all your accounts, our
            tool provides the security you need in a digital world, ensuring
            your personal and professional information is protected.
          </p>
          <p>
            Having a strong password is essential because it helps prevent
            unauthorized access to your personal or work-related accounts,
            protecting sensitive information from being exposed or misused.
            Strong passwords act as a first line of defence against cyber
            threats, including hacking and identity theft. By using complex and
            unique passwords for each account, you significantly lower the risk
            of your accounts being compromised, ensuring your digital security
            and privacy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrongPasswordGenerator;
