import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
const RandomIPAddressGenerator = () => {
  const [ipv4, setIpv4] = useState("");
  const [ipv6, setIpv6] = useState("");
  const [textStatistics, setTextStatistics] = useState({
    wordCount: 0,
    letterCount: 0,
    sentenceCount: 0,
    lineCount: 0,
  });

  const generateRandomIPv4 = () => {
    return Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 256)
    ).join(".");
  };

  const generateRandomIPv6 = () => {
    return Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 65536).toString(16)
    ).join(":");
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

  const handleRandomiseIPv4 = () => {
    const randomIPv4 = generateRandomIPv4();
    setIpv4(randomIPv4);
    const statistics = calculateTextStatistics(randomIPv4);
    setTextStatistics(statistics);
  };

  const handleRandomiseIPv6 = () => {
    const randomIPv6 = generateRandomIPv6();
    setIpv6(randomIPv6);
    const statistics = calculateTextStatistics(randomIPv6);
    setTextStatistics(statistics);
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
    setIpv4("");
    setIpv6("");
    setTextStatistics({
      wordCount: 0,
      letterCount: 0,
      sentenceCount: 0,
      lineCount: 0,
    });
  };

  useEffect(() => {
    handleRandomiseIPv4();
    handleRandomiseIPv6();
  }, []);

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - Random IP Address Generator</title>
          <meta
            name="description"
            content="Generate random IP addresses easily with RabbitCode's Random IP Address Generator. Perfect for testing, network configuration, and security scenarios."
          />
          <meta
            name="keywords"
            content="random IP address generator, generate IP address, random IP tool, IP address generator"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta
            property="og:title"
            content="RabbitCode - Random IP Address Generator"
          />
          <meta
            property="og:description"
            content="Use RabbitCode's Random IP Address Generator to generate random IPs for testing, security, and network scenarios."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RabbitCode - Random IP Address Generator"
          />
          <meta
            name="twitter:description"
            content="Generate random IP addresses for testing, security, and more with RabbitCode's Random IP Address Generator."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>Random IP Address Generator</h2>
          <p>
            Discover the simplicity of generating random IP addresses with our
            online tool. Ideal for developers, testers, and network specialists,
            this Random IP Address Generator provides a quick and easy solution
            for creating unique IP addresses for various testing and security
            scenarios.
          </p>
          <div className="textarea-container">
            <textarea
              rows="4"
              readOnly
              placeholder="Random IPv4 Address"
              value={ipv4}
              className="textarea-animated"
            />

            <div className="btn-container">
              <button class="btn-421" onClick={handleRandomiseIPv4}>
                Randomise
              </button>
              <button class="btn-421" onClick={() => handleCopy(ipv4)}>
                Copy to Clipboard
              </button>
              <button class="btn-421" onClick={handleClear}>
                Clear
              </button>
            </div>

            <textarea
              rows="4"
              readOnly
              placeholder="Random IPv6 Address"
              value={ipv6}
              className="textarea-animated"
            />
          </div>
          <br />
          <div className="btn-container">
            <button class="btn-421" onClick={handleRandomiseIPv6}>
              Randomise
            </button>
            <button class="btn-421" onClick={() => handleCopy(ipv6)}>
              Copy to Clipboard
            </button>
            <button
              class="btn-421"
              onClick={() => handleDownload(ipv6, "random-ipv6.txt")}
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
          <h3>How Our IP Generator Works</h3>
          <p>
            Our Random IP Address Generator tool is designed to produce unique,
            random IP addresses with just a click. Whether you need an IP
            address for testing network configurations, simulating different
            geographic locations, or enhancing security protocols, this tool
            offers a hassle-free solution. It supports both IPv4 and IPv6
            addresses, ensuring compatibility with modern networking standards.
            With no need for installation or complex setups, you can access and
            use this generator directly from your browser, making it an
            indispensable resource for professionals and enthusiasts alike.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RandomIPAddressGenerator;
