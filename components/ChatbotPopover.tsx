"use client";
import React, { useState } from "react";
import styles from "./ChatbotPopover.module.css";

const ChatbotPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.floating}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.floatingButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.popover}>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="6" x2="14" y2="14" />
              <line x1="6" y1="14" x2="14" y2="6" />
            </svg>
          </button>
          <div className={styles.iframeContainer}>
            <iframe
              src="https://mindmate-ai-chatbot.vercel.app/chat-page"
              title="MindMate AI Chatbot"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopover;
