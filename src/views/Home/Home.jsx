import '../../components/Card.css'
import Card from '../../components/Card'
import courses from '../../data/courses.json'

function Home() {
  return (
    <div className="page-box">
      <h1>🧩 Reusable Cards</h1>
      <p>These cards are created from JSON data using map() and props.</p>

      <div className="cards-grid">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
