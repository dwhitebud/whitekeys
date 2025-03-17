import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import CallToAction from "../components/CallToAction"

const AboutPage = () => {
  return (
    <Layout>
      <Hero 
        title="About White Keys Music"
        subtitle="Learn more about our studio philosophy, teaching methods, and the benefits of learning piano with us."
        imageSrc="/piano-studio.jpg"
        imageAlt="White Keys Music Studio"
      />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Our Story</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="about-content">
            <p>
              White Keys Music was established in 1992 by Cindy White, a passionate piano educator with a vision to create a nurturing environment where students of all ages could discover the joy of making music.
            </p>
            <p>
              After earning her Master's degree in Music Education from California State University, Stanislaus, Cindy began teaching piano from her home in Modesto. As her student base grew, she expanded to a dedicated studio space where White Keys Music continues to thrive today.
            </p>
            <p>
              Over the past three decades, White Keys Music has helped hundreds of students develop their musical abilities, fostering not only technical skills but also a lifelong appreciation for music.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Meet Cindy White</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="about-section">
            <div className="about-image">
              <StaticImage
                src="../images/piano-teacher.jpg"
                alt="Cindy White, Piano Teacher"
                placeholder="blurred"
                width={400}
                height={500}
                objectFit="cover"
                style={{ borderRadius: "var(--border-radius)" }}
              />
            </div>
            <div className="about-content">
              <h3>Experienced Educator</h3>
              <p>With over 30 years of teaching experience, Cindy White has developed a teaching philosophy that combines traditional piano pedagogy with innovative methods to engage students of all learning styles. Her approach emphasizes not only technical skill development but also music theory, ear training, and performance opportunities.</p>
              
              <h3>Professional Background</h3>
              <ul>
                <li>Master's in Music Education, CSU Stanislaus</li>
                <li>Bachelor's in Piano Performance, San Francisco Conservatory of Music</li>
                <li>Certified Piano Marvel Instructor</li>
                <li>Member of the Music Teachers' Association of California</li>
                <li>Regular performer with Central Valley Symphony Orchestra</li>
              </ul>
              
              <h3>Teaching Philosophy</h3>
              <p>Cindy believes that every student has unique musical potential waiting to be discovered. Her student-centered approach adapts to individual learning styles, helping students build confidence alongside skill. She creates a supportive environment where mistakes are viewed as learning opportunities, and achievements are celebrated together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Our Studio</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="about-section about-section--reverse">
            <div className="about-content">
              <h3>Modern Facilities</h3>
              <p>White Keys Music studio is equipped with professional-grade instruments and technology to enhance the learning experience:</p>
              <ul>
                <li>Two Yamaha grand pianos for lessons and recitals</li>
                <li>Digital workstations with Piano Marvel software</li>
                <li>Comfortable waiting area for parents and families</li>
                <li>Extensive music library</li>
                <li>Recording equipment for student progress evaluation</li>
              </ul>
              
              <h3>Convenient Location</h3>
              <p>Located in central Modesto, our studio offers easy access, ample parking, and a welcoming atmosphere for students and families.</p>
            </div>
            <div className="about-image">
              <StaticImage
                src="../images/piano-studio.jpg"
                alt="White Keys Music Studio"
                placeholder="blurred"
                width={500}
                height={400}
                objectFit="cover"
                style={{ borderRadius: "var(--border-radius)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Begin Your Piano Journey?"
        description="Contact us today to schedule your first lesson or learn more about our studio programs."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About | White Keys Music - Piano Instruction in Modesto, CA" />

export default AboutPage
