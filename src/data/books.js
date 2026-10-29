// Prices are demo values.
export const books = [
  { id: "ddia", coverImage: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", price: 5400, skill: "Distributed systems", color: "#2f5bff", blurb: "Storage engines, replication, partitioning and consensus, explained from first principles." },
  { id: "cc", coverImage: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg", title: "Clean Code", author: "Robert C. Martin", price: 3800, skill: "Code quality", color: "#1f8a5b", blurb: "Naming, functions and refactoring habits that keep a codebase readable for years." },
  { id: "pp", coverImage: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg", title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", price: 4200, skill: "Engineering craft", color: "#c2410c", blurb: "Practical habits for debugging, tooling and building software that lasts." },
  { id: "sicp", coverImage: "https://covers.openlibrary.org/b/isbn/9780262510875-L.jpg", title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson & Gerald Sussman", price: 4800, skill: "Computer science", color: "#7c3aed", blurb: "Abstraction, recursion and interpreters taught through Scheme." },
  { id: "kr", coverImage: "https://covers.openlibrary.org/b/isbn/9780131103627-L.jpg", title: "The C Programming Language", author: "Brian Kernighan & Dennis Ritchie", price: 3600, skill: "Systems programming", color: "#0e7490", blurb: "The compact, definitive guide to C from the people who created it." },
  { id: "ddd", coverImage: "https://covers.openlibrary.org/b/isbn/9780321125217-L.jpg", title: "Domain-Driven Design", author: "Eric Evans", price: 5600, skill: "Software architecture", color: "#be185d", blurb: "Model complex business domains and keep code aligned with how experts think." },
  { id: "gof", coverImage: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg", title: "Design Patterns", author: "Gamma, Helm, Johnson & Vlissides", price: 4400, skill: "Software architecture", color: "#4d7c0f", blurb: "Twenty-three reusable object-oriented patterns and when to apply them." },
  { id: "clrs", coverImage: "https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg", title: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest & Stein", price: 7200, skill: "Algorithms", color: "#334155", blurb: "The standard reference on algorithms, data structures and complexity analysis." },
];

export const skills = [
  { label: "Distributed systems", bookId: "ddia" },
  { label: "Algorithms", bookId: "clrs" },
  { label: "Software architecture", bookId: "ddd" },
  { label: "Systems programming", bookId: "kr" },
  { label: "Code quality", bookId: "cc" },
  { label: "Computer science", bookId: "sicp" },
];

export const authors = [
  {
    name: "Martin Kleppmann",
    role: "Researcher, distributed systems",
    photo: "https://covers.openlibrary.org/a/olid/OL7477772A-M.jpg",
    bookIds: ["ddia"],
  },
  {
    name: "Robert C. Martin",
    role: "Software craftsman",
    photo: "https://covers.openlibrary.org/a/olid/OL2653686A-M.jpg",
    bookIds: ["cc"],
  },
  {
    name: "Andrew Hunt",
    role: "Co-author of The Pragmatic Programmer",
    photo: "https://www.amazon.in/Andrew-Hunt/e/B001HMRWA6",
    bookIds: ["pp"],
  },
  {
    name: "David Thomas",
    role: "Co-author of The Pragmatic Programmer",
    photo: "https://en.wikipedia.org/wiki/Dave_Thomas_%28programmer%29",
    bookIds: ["pp"],
  },
  {
    name: "Harold Abelson",
    role: "MIT computer scientist and educator",
    photo: "https://en.wikipedia.org/wiki/Hal_Abelson",
    bookIds: ["sicp"],
  },
  {
    name: "Gerald Jay Sussman",
    role: "MIT professor and computer scientist",
    photo: "https://www.computer.org/profiles/gerald-jay-sussman",
    bookIds: ["sicp"],
  },
  {
    name: "Brian Kernighan",
    role: "Computer scientist and co-author of The C Programming Language",
    photo: "https://covers.openlibrary.org/a/olid/OL946967A-M.jpg",
    bookIds: ["kr"],
  },
  {
    name: "Dennis Ritchie",
    role: "Creator of the C programming language",
    photo: "https://en.wikipedia.org/wiki/Dennis_Ritchie",
    bookIds: ["kr"],
  },
  {
    name: "Eric Evans",
    role: "Domain-driven design pioneer",
    bookIds: ["ddd"],
  },
  {
    name: "Erich Gamma",
    role: "Co-author of Design Patterns",
    photo: "https://alchetron.com/Erich-Gamma",
    bookIds: ["gof"],
  },
  {
    name: "Richard Helm",
    role: "Co-author of Design Patterns",
    photo: "https://en.wikipedia.org/wiki/Richard_Helms",
    bookIds: ["gof"],
  },
  {
    name: "Ralph Johnson",
    role: "Co-author of Design Patterns",
    photo: "https://news.uchicago.edu/story/w-ralph-johnson-pre-eminent-uchicago-critic-latin-poetry-1933-2024",
    bookIds: ["gof"],
  },
  {
    name: "John Vlissides",
    role: "Co-author of Design Patterns",
    photo: "http://c2.com/ppr/wiki/ComponentDesignPatterns/JohnVlissides.html",
    bookIds: ["gof"],
  },
  {
    name: "Thomas H. Cormen",
    role: "Co-author of Introduction to Algorithms",
    photo: "https://web.cs.dartmouth.edu/news/2013/08/algorithm-ninth-century-term-21st-century-computing",
    bookIds: ["clrs"],
  },
  {
    name: "Charles E. Leiserson",
    role: "Co-author of Introduction to Algorithms",
    photo: "https://www.eecs.mit.edu/people/charles-leiserson/",
    bookIds: ["clrs"],
  },
  {
    name: "Ronald L. Rivest",
    role: "Co-author of Introduction to Algorithms",
    photo: "https://en.wikipedia.org/wiki/Ron_Rivest",
    bookIds: ["clrs"],
  },
  {
    name: "Clifford Stein",
    role: "Co-author of Introduction to Algorithms",
    photo: "https://ieor.columbia.edu/content/clifford-stein",
    bookIds: ["clrs"],
  },
];

export const tags = ["All", ...Array.from(new Set(books.map((b) => b.skill)))];
export const getBook = (id) => books.find((b) => b.id === id);
