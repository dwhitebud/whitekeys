import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Testimonial from "../components/Testimonial"
import CallToAction from "../components/CallToAction"

// Piano icons in SVG format for features
const pianoLessonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44" height="44"><path d="M0 107.7v296.7c0 7.1 5.8 12.9 12.9 12.9h486.2c7.1 0 12.9-5.8 12.9-12.9V107.7c0-7.1-5.8-12.9-12.9-12.9H12.9C5.8 94.8 0 100.6 0 107.7zm144 268.3H48v-48h96v48zm0-96H48v-48h96v48zm0-96H48v-48h96v48zm96 192h-80v-48h80v48zm0-96h-80v-48h80v48zm0-96h-80v-48h80v48zm96 192h-80v-48h80v48zm0-96h-80v-48h80v48zm0-96h-80v-48h80v48zm80 192h-64v-48h64v48zm0-96h-64v-48h64v48zm0-96h-64v-48h64v48z" fill="currentColor"/></svg>`
const musicNoteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M9 18V5l12-2v13H9zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3h-6z" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linejoin="round"/></svg>`
const certificateIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="M2 9.5C2 6.46 4.46 4 7.5 4h9c3.04 0 5.5 2.46 5.5 5.5v5c0 3.04-2.46 5.5-5.5 5.5h-9C4.46 20 2 17.54 2 14.5v-5Z" stroke="currentColor" fill="none" stroke-width="1.5"/><path d="m15 13.5 5.5 5.5M9 13.5 3.5 19" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const IndexPage = () => (
  <Layout>
    <Hero 
      title="Excellence in Piano Education"
      subtitle="Discover the joy of playing piano with Cindy White and the proven Piano Marvel method. Over 30 years of teaching experience in Modesto, California."
      cta="Schedule a Lesson"
      ctaLink="/contact"
      imageSrc="/piano-hero.jpg"
      imageAlt="Piano keyboard with hands playing"
    />

    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2>Why Choose White Keys Music?</h2>
          <p>Our studio provides exceptional piano instruction for students of all ages and skill levels.</p>
          <div className="piano-keys-pattern"></div>
        </div>
        
        <div className="features">
          <Feature 
            title="Expert Instruction" 
            description="With over 30 years of experience teaching piano, Cindy White knows how to bring out the best in each student."
            icon={pianoLessonIcon} 
          />
          <Feature 
            title="Piano Marvel Method" 
            description="Using the innovative Piano Marvel teaching system that combines technology and traditional methods for effective learning."
            icon={musicNoteIcon} 
          />
          <Feature 
            title="All Skill Levels" 
            description="From beginners taking their first steps to advanced students preparing for performances, we help you reach your goals."
            icon={certificateIcon} 
          />
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
            <h3>Piano Educator with Passion</h3>
            <p>Cindy White has dedicated her life to the art of piano instruction. With a Master's degree in Music Education and over three decades of teaching experience, she has guided hundreds of students on their musical journeys.</p>
            <p>Her approach combines traditional techniques with modern teaching methods, ensuring that each student receives personalized attention and achieves their full potential.</p>
            <Link to="/about" className="btn btn--secondary">Read More About Cindy</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section testimonials">
      <div className="container">
        <div className="text-center">
          <h2>What Our Students Say</h2>
          <div className="piano-keys-pattern"></div>
        </div>
        
        <div className="testimonials-grid">
          <Testimonial 
            quote="My daughter has been taking lessons with Cindy for three years now, and the progress she's made is incredible. The Piano Marvel method makes practice fun!"
            author="Sarah Johnson"
            role="Parent"
          />
          <Testimonial 
            quote="As an adult student, I was nervous about starting piano lessons. Cindy made me feel comfortable from day one and tailored the lessons to my learning style."
            author="Michael Thompson"
          />
          <Testimonial 
            quote="The recitals are so well organized, and Cindy's encouragement helps ease performance anxiety. My son has gained so much confidence through his piano studies."
            author="Lisa Garcia"
            role="Parent"
          />
        </div>
        
        <div className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
          <Link to="/testimonials" className="btn">Read More Testimonials</Link>
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

export const Head = () => <Seo title="Home | White Keys Music - Piano Instruction in Modesto, CA" />

export default IndexPage
