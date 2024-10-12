function generate() {
  var quotes = {
    "- Andre Gide":
      "“Art is a collaboration between God and the artist, and the less the artist does the better.”",
    "-Georgia O’Keeffe":
      "“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.”",
    "– Ray Bradbury":
      "“Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.”",
    "– Scott Adams":
      "“Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.”",
    "– Neil Gaiman":
      "“The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So, write and draw and build and play and dance and live only as you can.”",
    "- Shakira":
      "“My songs are a reflection of how I think and how I feel at that moment. But I’m conscious of the fact that artists have a responsibility before the masses and they have to take care of their words.”",
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
