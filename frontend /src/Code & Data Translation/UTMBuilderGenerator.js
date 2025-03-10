import React, { useState } from "react";
import Footer from "../component/Footer";
import "../Text Modification Formatting/text.css";
import { Helmet } from "react-helmet";
// Function to generate UTM URL
const generateUTMURL = (url, source, medium, name, term, content) => {
  let utmURL = `${url}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${name}`;
  if (term) utmURL += `&utm_term=${term}`;
  if (content) utmURL += `&utm_content=${content}`;
  return utmURL;
};

// Function to download text as a file
const downloadText = (text) => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "utm_code.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const UTMBuilderGenerator = () => {
  const [url, setURL] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [utmURL, setUTMURL] = useState("");

  const handleGenerate = () => {
    const generatedURL = generateUTMURL(
      url,
      source,
      medium,
      name,
      term,
      content
    );
    setUTMURL(generatedURL);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(utmURL).then(() => {
      alert("UTM code copied to clipboard!");
    });
  };

  const handleClear = () => {
    setURL("");
    setSource("");
    setMedium("");
    setName("");
    setTerm("");
    setContent("");
    setUTMURL("");
  };

  return (
    <div className="container">
      <main>
        <Helmet>
          <title>RabbitCode - UTM Builder</title>
          <meta
            name="description"
            content="Easily create UTM codes with our UTM Builder tool. Track and analyze the performance of your marketing campaigns efficiently."
          />
          <meta
            name="keywords"
            content="UTM builder, UTM code generator, marketing campaign tracker, track marketing campaigns, generate UTM codes"
          />
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content="RabbitCode - UTM Builder" />
          <meta
            property="og:description"
            content="Create accurate UTM codes for tracking your marketing campaigns with ease using RabbitCode's UTM Builder."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rabbitcode.agency" />
          <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add OG image */}
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="RabbitCode - UTM Builder" />
          <meta
            name="twitter:description"
            content="Generate and track marketing campaigns with RabbitCode’s UTM Builder tool."
          />
          <meta name="twitter:image" content="/path-to-your-image.jpg" />{" "}
          {/* Add Twitter image */}
          {/* Additional SEO Meta Tags */}
          <link rel="canonical" href="https://rabbitcode.agency" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <h1>Rabbit Case Online</h1>
        <div className="content">
          <h2>UTM Builder</h2>
          <p>
            Welcome to our UTM Builder Generator, a powerful tool designed to
            help marketers create custom UTM codes for tracking their marketing
            campaigns. With a user-friendly interface, generating precise and
            accurate UTM codes has never been easier. Optimize your marketing
            efforts by gaining valuable insights into your campaign performance
            and boost your ROI today.
          </p>
          <div className="form-container">
            <div>
              <label>
                Destination URL:
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setURL(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Campaign Source:
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Campaign Medium:
                <input
                  type="text"
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Campaign Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label>
                Campaign Term:
                <input
                  type="text"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Campaign Content:
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="textarea-container">
            <textarea
              placeholder="Generated UTM code will appear here..."
              rows="4"
              value={utmURL}
              readOnly
            />
          </div>

          <div className="btn1-container">
            <button class="btn-421" onClick={handleGenerate}>
              Generate UTM Code
            </button>
            <button class="btn-421" onClick={() => downloadText(utmURL)}>
              Download Text
            </button>
            <button class="btn-421" onClick={handleCopyToClipboard}>
              Copy to Clipboard
            </button>
            <button class="btn-421" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <br />
        <div className="content1">
          <h3>How Does the UTM Builder Generator Work?</h3>
          <p>
            Our UTM Builder Generator streamlines the process of creating UTM
            codes for your marketing campaigns. To get started, enter your
            campaign's destination URL, campaign source, medium, name, and any
            relevant terms or content. The generator will then combine these
            elements to create a unique UTM code, which you can append to your
            URL for tracking purposes.
          </p>
          <p>
            By using UTM codes in your marketing campaigns, you can gather
            crucial data on traffic sources, user behavior, and the
            effectiveness of your strategies. This valuable information allows
            you to make data-driven decisions, optimize your marketing efforts,
            and ultimately, achieve better results for your business. Embrace
            the power of our UTM Builder Generator to enhance your marketing
            campaigns today.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What is a UTM Builder?</h3>
          <p>
            A UTM Builder is a tool that allows users to create custom tracking
            links with UTM parameters to monitor the performance of digital
            campaigns and identify traffic sources.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What does UTM stand for?</h3>
          <p>
            UTM stands for Urchin Tracking Module. It's a format used by Google
            to track unique URLs and their traffic sources in Google Analytics
            and other products.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Why should I use a UTM Builder?</h3>
          <p>
            Using a UTM Builder ensures accurate and consistent tracking of
            marketing efforts, helping to pinpoint which campaigns, platforms,
            or ads drive traffic and conversions.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>What are the main UTM parameters?</h3>
          <p>The primary UTM parameters are:</p>
          <ul>
            <li>
              utm_source - Identifies the traffic source (e.g., Google,
              Facebook).
            </li>
            <li>
              utm_medium - Describes the marketing medium (e.g., email, cpc,
              social).
            </li>
            <li>
              utm_campaign - Specifies the specific campaign or promotion.
            </li>
            <li>utm_term - Used for paid search to identify keywords.</li>
            <li>
              utm_content - Differentiates similar content or links within the
              same ad.
            </li>
          </ul>
        </div>
        <br />
        <div className="content1">
          <h3>How do I use a UTM-built link?</h3>
          <p>
            Once generated, use the UTM-tagged link in your campaigns, ads,
            emails, or social posts. When users click on the link, their actions
            will be tracked based on the UTM parameters.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Does it integrate with analytics platforms?</h3>
          <p>
            Yes, most analytics platforms, especially Google Analytics,
            automatically recognize and categorize traffic based on UTM
            parameters.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Are there limits to how many UTM links I can create?</h3>
          <p>There are no limits. Create as many as you want.</p>
        </div>
        <br />
        <div className="content1">
          <h3>Can I use UTM parameters for offline campaigns?</h3>
          <p>
            Yes, but the process is indirect. For offline campaigns, you'd often
            create a UTM-tagged URL and convert it into a QR code. When scanned,
            the QR code directs to the UTM link, allowing tracking of offline
            engagements.
          </p>
        </div>
        <br />
        <div className="content1">
          <h3>Are UTM links case-sensitive?</h3>
          <p>
            Yes, UTM parameters are case-sensitive. It's essential to be
            consistent when sharing and using them.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UTMBuilderGenerator;
