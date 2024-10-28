const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/not-found");

const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// If we use this middleware we can't use below code NOTE: this work for only static files
app.use(express.static(path.join(__dirname, "public")));

// // this
// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // this NOTE: this route not working before example howewer we should use like about.html
// app.get("/about", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Routes
app.use("/api/posts", posts);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
