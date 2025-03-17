import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import CallToAction from "../components/CallToAction"

// Piano lesson icons
const beginnerIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`
const intermediateIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M7 11c0-3 2-5 5-5s5 2 5 5c0 .273-.022.543-.066.807M17 17c-1.21.734-2.72 1-5 1-2.281 0-3.79-.266-5-1m12-6c0 5.523-4.477 10-10 10S2 16.523 2 11 6.477 1 12 1s10 4.477 10 10Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`
const advancedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M12 12c0-4 4-4 4-4s-1 4 0 8c1 4-4 4-4 4"></path><path d="M8.5 8.5 12 12l3.5-3.5M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`
const groupIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`

const LessonsPage = () => {
  return (
    <Layout>
      <Hero 
        title="Piano Lessons for All Levels"
        subtitle="Discover our range of programs designed to meet the needs of students at every stage of their musical journey."
        cta="Contact Us"
        ctaLink="/contact"
        imageSrc="/piano-lessons.jpg"
        imageAlt="Student and teacher at piano"
      />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Our Programs</h2>
            <p>White Keys Music offers personalized instruction for students of all ages and skill levels.</p>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="features">
            <Feature 
              title="Beginner Lessons" 
              description="Perfect for new students, our beginner program establishes a solid foundation in piano basics, note reading, and rhythm."
              icon={beginnerIcon} 
            />
            <Feature 
              title="Intermediate Studies" 
              description="Build on fundamentals with more complex pieces, expanded theory, and performance techniques for developing pianists."
              icon={intermediateIcon} 
            />
            <Feature 
              title="Advanced Training" 
              description="For serious students, our advanced program focuses on virtuosic repertoire, sophisticated interpretation, and performance preparation."
              icon={advancedIcon} 
            />
            <Feature 
              title="Group Classes" 
              description="Combine the benefits of private instruction with collaborative learning in our small group sessions focusing on theory and ensemble playing."
              icon={groupIcon} 
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>The Piano Marvel Method</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="row">
            <div className="col">
              <p>White Keys Music is proud to utilize the innovative Piano Marvel teaching system, a technology-enhanced approach that motivates students and accelerates learning.</p>
              
              <h3>Key Benefits:</h3>
              <ul className="check-list">
                <li>Immediate feedback on playing accuracy</li>
                <li>Gamified learning to increase student engagement</li>
                <li>Progress tracking and performance assessment</li>
                <li>Extensive library of pieces at every skill level</li>
                <li>Theory lessons integrated with practical skills</li>
              </ul>
              
              <p>Piano Marvel combines the best of traditional teaching with modern technology, allowing students to practice more effectively between lessons. Our studio is equipped with digital workstations where students can experience Piano Marvel during their lessons, and the software can be accessed at home for consistent practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Lesson Structure & Pricing</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h3>30-Minute Lessons</h3>
                <p className="pricing-card__price">$30<span>/lesson</span></p>
              </div>
              <div className="pricing-card__content">
                <p>Recommended for younger beginners (ages 5-8)</p>
                <ul>
                  <li>Weekly private instruction</li>
                  <li>Piano Marvel access</li>
                  <li>Recital opportunities twice yearly</li>
                  <li>Flexible scheduling</li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__header">
                <h3>45-Minute Lessons</h3>
                <p className="pricing-card__price">$45<span>/lesson</span></p>
              </div>
              <div className="pricing-card__content">
                <p>Our most popular option for students ages 9+</p>
                <ul>
                  <li>Weekly private instruction</li>
                  <li>Piano Marvel access</li>
                  <li>Theory and technique development</li>
                  <li>Recital opportunities twice yearly</li>
                  <li>Festival and competition preparation</li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h3>60-Minute Lessons</h3>
                <p className="pricing-card__price">$60<span>/lesson</span></p>
              </div>
              <div className="pricing-card__content">
                <p>Ideal for intermediate to advanced students</p>
                <ul>
                  <li>Comprehensive weekly instruction</li>
                  <li>Piano Marvel access</li>
                  <li>Advanced repertoire and techniques</li>
                  <li>Music theory and history integration</li>
                  <li>Performance preparation</li>
                  <li>College audition coaching</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
            <p>Lessons are paid monthly. A one-time registration fee of $25 includes initial materials.</p>
            <p>Discounts available for families with multiple students enrolled.</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Recitals & Performance Opportunities</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="row">
            <div className="col">
              <p>At White Keys Music, we believe that performance is an essential part of musical development. Throughout the year, students have various opportunities to showcase their skills:</p>
              
              <div className="performance-opportunities">
                <div className="performance-item">
                  <h3>Studio Recitals</h3>
                  <p>Held twice yearly (winter and spring), our studio recitals allow students to perform for family and friends in a supportive environment. Each recital includes a reception where students can celebrate their achievements.</p>
                </div>
                
                <div className="performance-item">
                  <h3>Community Performances</h3>
                  <p>Students may participate in community events, playing at local senior centers, community festivals, and other venues throughout Modesto.</p>
                </div>
                
                <div className="performance-item">
                  <h3>Festivals & Competitions</h3>
                  <p>For students seeking additional challenges, we prepare students for various music festivals, competitions, and Certificate of Merit evaluations through the Music Teachers' Association of California.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Begin Piano Lessons?"
        description="Contact us to schedule a consultation and learn more about our programs."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Lessons | White Keys Music - Piano Instruction in Modesto, CA" />

export default LessonsPage
