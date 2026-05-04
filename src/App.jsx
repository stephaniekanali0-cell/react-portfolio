import { useState } from 'react'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import AddProjectForm from './components/AddProjectForm'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'track-me',
      description: 'Description for project 1',
      link: 'https://github.com/stephaniekanali0-cell/track--me.git'
    },
    {
      id: 2,
      title: 'my-hobbies',
      description: 'Know my likes and passion better.',
      link: 'https://github.com/stephaniekanali0-cell/myhobbies.git'
    },
    {
      id: 3,
      title: 'my-HTML-website',
      description: 'This is to learn more about HTML and keep track of the changes.',
      link: 'https://github.com/stephaniekanali0-cell/my-HTML-website.git'
    },
    {
      id: 4,
      title: 'wordly',
      description: 'This is my final project for module two.',
      link:'https://github.com/stephaniekanali0-cell/Wordly.git'
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="app">
      <header className="hero">
        <span className="eyebrow">Creative agency showcase</span>
        <h1>Display your best work in a polished portfolio</h1>
        <p className="hero-copy">
          Add new projects, search the portfolio instantly, and make every case study easy to explore.
        </p>
      </header>

      <section className="controls">
        <div className="panel">
          <h2>Add a new project</h2>
          <AddProjectForm onAddProject={handleAddProject} />
        </div>
        <div className="panel search-panel">
          <h2>Search projects</h2>
          <SearchBar onSearchChange={handleSearchChange} />
        </div>
      </section>

      <section className="project-section">
        <div className="section-header">
          <h2>Portfolio projects</h2>
          <p>Projects update dynamically as you add them.</p>
        </div>
        <ProjectList projects={filteredProjects} />
      </section>
    </div>
  )
}

export default App
