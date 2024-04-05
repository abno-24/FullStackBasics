import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is Another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "This is last joke",
    },
    {
      id: 5,
      title: "Fifth joke",
      content: "Okay, this will be last one",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
