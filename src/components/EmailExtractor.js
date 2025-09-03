import React, { useState } from "react";

const EmailExtractor = () => {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);

  const extractEmails = () => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const found = text.match(regex);
    setEmails(found || []);
  };

  return (
    <div>
      <textarea
        className="form-control"
        rows="5"
        placeholder="Paste or type your paragraph here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button
        className="btn btn-primary mt-3"
        onClick={extractEmails}
      >
        Extract Emails
      </button>

      {emails.length > 0 && (
        <div className="mt-3">
          <h5>Extracted Emails:</h5>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmailExtractor;