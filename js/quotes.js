const quotes = [
  {
    quote:
      "Quality without results is pointless. Results without quality is boring.",
    author: "Johan Cruyff",
  },
  {
    quote:
      "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: "Arthur C. Clarke",
  },
  {
    quote:
      "The greatest weakness of all weaknesses is to fear too much to appear weak.",
    author: "Jacques-Benigne Bossuet",
  },
  {
    quote: "Those who cannot remember the past are condemned to repeat it.",
    author: "George Santayana",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "You may not be interested in war, but war is interested in you.",
    author: "Leon Trotsky",
  },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quote:
      "Immature love says: I love you because I need you. Mature love says: I need you because I love you.",
    author: "Erich Fromm",
  },
  {
    quote: "Not All Those Who Wander Are Lost.",
    author: "JRR Tolkein",
  },
  {
    quote: "Quantity has a quality all its own.",
    author: "Joseph Stalin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
