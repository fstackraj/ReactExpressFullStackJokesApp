import express from "express";
const app = express();

// get a list of 5 jokes
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "What do you call a very small valentine?",
      content: "A valen-tiny!!!",
    },
    {
      id: 2,
      title: "What did the dog say when he rubbed his tail on the sandpaper?",
      content: "Ruff, Ruff!!!",
    },
    {
      id: 3,
      title: "Why don't sharks like to eat clowns?",
      content: "Because they taste funny!!!",
    },
    {
      id: 4,
      title: "Why don’t scientists trust atoms?",
      content: "Because they make up everything!!!",
    },
    {
      id: 5,
      title: "What did one ocean say to the other ocean?",
      content: "Nothing, they just waved!!!",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
