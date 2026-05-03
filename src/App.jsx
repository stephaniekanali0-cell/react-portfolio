import { useState } from 'react'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import AddProjectForm from './components/AddProjectForm'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for project 1',
      link: 'https://example.com/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for project 2',
      link: 'https://example.com/project2'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for project 3',
      link: 'https://example.com/project3'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description for project 4',
      link: 'https://example.com/project4'
    }
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
      <h1>Creative Agency Portfolio</h1>
      <AddProjectForm onAddProject={handleAddProject} />
      <SearchBar onSearchChange={handleSearchChange} />
      <ProjectList projects={filteredProjects} />
    </div>
  )
}

export default App
