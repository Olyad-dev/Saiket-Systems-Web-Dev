const db = require("../Config/db");

// READ: Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE: Add a book
exports.createBook = async (req, res) => {
  const { title, author, published_year } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO books (title, author, published_year) VALUES (?, ?, ?)",
      [title, author, published_year]
    );
    res.status(201).json({ id: result.insertId, title, author });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === parseInt(id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books[bookIndex] = { ...books[bookIndex], ...req.body };
  res.status(200).json({ message: "Book updated!", data: books[bookIndex] });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  books = books.filter((b) => b.id !== parseInt(id));
  res.status(200).json({ message: `Deleted book with ID ${id}` });
};
