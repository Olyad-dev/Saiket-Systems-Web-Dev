let books = [{ id: 1, title: "Sample Book" }];

exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

exports.createBook = (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json({ message: "Book added!", data: newBook });
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
