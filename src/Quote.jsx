import React, { useState, useEffect } from "react";
import "./App.css";

// Array of motivational quotes
const quotes = [
 "The goal of a successful trader is to make the best trades. Money is secondary. – Alexander Elder",
  "Risk comes from not knowing what you’re doing. – Warren Buffett",
  "In trading and investing, it’s not about how much you make but rather how much you don’t lose. – Bernard Baruch",
  "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
  "The market is a device for transferring money from the impatient to the patient. – Warren Buffett",
  "The successful warrior is the average man, with laser-like focus. – Bruce Lee",
  "There is no one-size-fits-all strategy in trading. Risk management and discipline are key. – Unknown",
  "You should learn from your competitor, but never copy. Copy and you die. – Jack Ma",
  "The best traders have no ego. They are disciplined and patient. – Anonymous",
  "Failing to plan is planning to fail. – Alan Lakein",
  "The market is a reflection of the collective mood of the market participants. – John Murphy",
  "One of the most difficult things to do in trading is to have the courage to wait for the right opportunity. – Anonymous",
  "In trading and investing, it's not about how much you make but rather how much you don't lose. – Bernard Baruch",
  "Good traders need a plan, discipline, and risk management. – Richard Dennis",
  "The market is a mirror of the trader's psyche. – Tom Basso",
  "To be a successful trader, you must first develop the mindset of a winner. – Anonymous",
  "A trader's greatest enemy is their own emotions. – Anonymous",
  "It’s not about how much you make but how much you keep. – Unknown",
  "Trade with the market, not against it. – Anonymous",
  "Always protect your downside, and let your profits run. – Anonymous",
  "Consistency is the hallmark of the successful trader. – Anonymous",
  "Don’t be a hero. Be a trader. – Ed Seykota",
  "Cut your losses short and let your profits run. – Jesse Livermore",
  "The market is a game of probabilities, not certainties. – Anonymous",
  "Control your risk or risk losing control. – Anonymous",
  "The market is designed to transfer money from the Active to the Patient. – Warren Buffett",
  "A successful trader is one who can adapt to changing market conditions. – Anonymous",
  "Trading is more about managing your emotions than managing money. – Anonymous",
  "Emotions can cloud judgment. Stick to your trading plan. – Anonymous",
  "The only way to truly manage risk is to understand it. – Anonymous",
  "A disciplined trader is a successful trader. – Anonymous",
  "Risk management is the key to long-term success in trading. – Anonymous",
  "In trading, losing is inevitable. How you handle losses determines your success. – Anonymous",
  "The essence of successful trading is discipline. – Anonymous",
  "Don't let a winning trade turn into a losing one by not managing your risk. – Anonymous",
  "Success in trading comes from understanding risk and managing it effectively. – Anonymous",
  "Good trading is not about being right; it's about making money. – Anonymous",
  "Traders who can control their emotions will have an edge over those who can't. – Anonymous",
  "Effective risk management means knowing when to trade and when to stay out. – Anonymous",
  "A good trade is one where you manage your risk and your reward is greater than your risk. – Anonymous",
  "In trading, the only thing you can control is your risk. – Anonymous",
  "The key to trading success is to develop a plan and stick to it. – Anonymous",
  "Traders need to be patient and wait for the right opportunities. – Anonymous",
  "The best traders are those who are disciplined and patient. – Anonymous",
  "Never risk more than you can afford to lose. – Anonymous",
  "The more you lose, the more you need to know why. – Anonymous",
  "The market is always right. Your job is to understand and adapt. – Anonymous",
  "Success in trading is not just about making money, but managing the risk to keep it. – Anonymous",
];

// Function to get a random quote
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Quote = () => {
  // State to hold the current quote
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    // Set an interval to refresh the quote every 15 seconds
    const intervalId = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000); // 15 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quote">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
    </div>
  );
};

export default Quote;
