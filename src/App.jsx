// Creo lista articoli
const BlogArticles = [
  { id: 1, title: "Coding Issues: How to Understand" },
  { id: 2, title: "Coding Issues: How to Learn" },
  { id: 3, title: "Coding Issues: How to Improve" },
];

// Definisco funzione per visualizzare gli articoli staticamente
const App = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista Articoli Blog</h2>
      <ul className="list-group mb-3">
        {BlogArticles.map((article) => (
          <li key={article.id} className="list-group-item">
            {article.title}
          </li>
        ))}
      </ul>
      <form className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nuovo articolo..."
        />
      </form>
    </div>
  );
};

export default App;
