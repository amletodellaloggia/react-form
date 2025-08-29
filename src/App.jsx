// Importo useState
import { useState } from "react";

// Creo lista articoli
const BlogArticles = [
  { id: 1, title: "Coding Issues: How to Understand" },
  { id: 2, title: "Coding Issues: How to Learn" },
  { id: 3, title: "Coding Issues: How to Improve" },
];

// Definisco funzione per visualizzare gli articoli staticamente
const App = () => {

  // Definisco le variabili di stato e gestione submit del form
  const [articles, setArticles] = useState(BlogArticles);
  const [newTitle, setNewTitle] = useState("");

  // Gestione submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;

    const newArticle = {
      id: articles.length + 1,
      title: newTitle,
    };

    setArticles([...articles, newArticle]);
    setNewTitle("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista Articoli Blog</h2>
      <ul className="list-group mb-3">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item">
            {article.title}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nuovo articolo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default App;
