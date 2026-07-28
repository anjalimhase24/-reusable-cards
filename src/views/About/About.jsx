import './About.css'

function About() {
  return (
    <div className="page-box about-page">
      <h1>ℹ️ About This Project</h1>
      <p>This app shows how React can switch pages using simple JavaScript routing.</p>
      <p>It combines reusable components, props, and JSON-driven cards to make the UI easy to expand.</p>

      <div className="about-highlights">
        <div className="about-card">
          <h3>React Basics</h3>
          <p>Components, props, and state are used to build the page layout.</p>
        </div>
        <div className="about-card">
          <h3>Reusable UI</h3>
          <p>Cards are created from data and rendered with map() to keep the code clean.</p>
        </div>
      </div>
    </div>
  )
}

export default About
