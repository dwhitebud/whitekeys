import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Testimonial from "../components/Testimonial"
import CallToAction from "../components/CallToAction"

const TestimonialsPage = () => {
  return (
    <Layout>
      <Hero 
        title="Student Testimonials"
        subtitle="Hear what our students and their families have to say about their experience at White Keys Music."
        imageSrc="/piano-recital.jpg"
        imageAlt="Student piano recital"
      />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>What Our Students Say</h2>
            <div className="piano-keys-pattern"></div>
            <p className="section-intro">White Keys Music has helped hundreds of students develop their musical abilities over the years. Here are some of their experiences.</p>
          </div>
          
          <div className="testimonials-grid testimonials-grid--large">
            <Testimonial 
              quote="My daughter has been taking lessons with Cindy for three years now, and the progress she's made is incredible. The Piano Marvel method makes practice fun and she actually looks forward to her lessons each week. We've tried other instructors before, but none have been able to connect with her like Cindy does."
              author="Sarah Johnson"
              role="Parent of 9-year-old student"
            />
            <Testimonial 
              quote="As an adult student, I was nervous about starting piano lessons. Cindy made me feel comfortable from day one and tailored the lessons to my learning style and musical interests. After six months, I'm playing pieces I never thought I could master!"
              author="Michael Thompson"
              role="Adult student, age 42"
            />
            <Testimonial 
              quote="The recitals are so well organized, and Cindy's encouragement helps ease performance anxiety. My son has gained so much confidence through his piano studies. It's been wonderful to see how his musical abilities have translated to improved focus in school as well."
              author="Lisa Garcia"
              role="Parent of 11-year-old student"
            />
            <Testimonial 
              quote="I started at White Keys Music as a complete beginner at age 60. Cindy has been incredibly patient and encouraging. The way she breaks down complex concepts makes them accessible to students of any age. It's never too late to learn!"
              author="Robert Davies"
              role="Adult student, age 60"
            />
            <Testimonial 
              quote="My twins have very different learning styles, but Cindy has found ways to engage them both. One is very technical while the other is more creative, and she nurtures both approaches beautifully. The Piano Marvel software has been a game-changer for home practice."
              author="Jennifer Lewis"
              role="Parent of twin 8-year-olds"
            />
            <Testimonial 
              quote="I've been taking lessons at White Keys Music for 5 years, and it's been amazing! I recently performed in my first competition and won second place. Mrs. White helped me prepare and gave me the confidence to perform my best."
              author="Emma Wilson"
              role="Student, age 13"
            />
            <Testimonial 
              quote="The studio has a wonderful sense of community. The group classes and theory workshops complement the private lessons perfectly, and my children have made friends with other students through recitals and performances."
              author="David Chen"
              role="Parent of multiple students"
            />
            <Testimonial 
              quote="As a high school student preparing for college music auditions, Cindy's advanced instruction has been invaluable. Her attention to detail and knowledge of repertoire has helped me develop as a serious musician."
              author="Jason Martinez"
              role="Advanced student, age 17"
            />
            <Testimonial 
              quote="Our family relocated to Modesto last year, and finding White Keys Music was a blessing. The transition was seamless, and Cindy quickly assessed my daughter's level and created a program to challenge and inspire her. The studio is professional but still has a warm, welcoming atmosphere."
              author="Michelle Cooper"
              role="New family in Modesto"
            />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Parent Feedback</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="featured-testimonial">
            <div className="featured-testimonial__content">
              <blockquote>
                "What sets White Keys Music apart is their holistic approach to music education. My children aren't just learning to play songs; they're developing musicianship, theory knowledge, and performance skills. The studio recitals are always highlights of our year, and watching the progress of all the students is inspiring. Cindy creates a supportive community where students encourage each other. It's more than just piano lessons—it's a musical education that will last a lifetime."
              </blockquote>
              <div className="featured-testimonial__author">
                <strong>Amanda & John Peterson</strong>
                <span>Parents of three White Keys Music students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Student Achievements</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="achievements">
            <div className="achievement-card">
              <h3>Competition Success</h3>
              <p>Our students regularly place in local and regional piano competitions, including the Central Valley Piano Competition, Stanislaus County Music Festival, and the California Young Artists Piano Competition.</p>
            </div>
            
            <div className="achievement-card">
              <h3>Certificate of Merit</h3>
              <p>White Keys Music students consistently earn high marks in the Certificate of Merit evaluations through the Music Teachers' Association of California.</p>
            </div>
            
            <div className="achievement-card">
              <h3>College Acceptances</h3>
              <p>Several advanced students have been accepted to prestigious music programs, including those at UCLA, USC, and the San Francisco Conservatory of Music.</p>
            </div>
            
            <div className="achievement-card">
              <h3>Community Recognition</h3>
              <p>Our students have been featured performers at community events throughout Modesto, including the Modesto Symphony Orchestra's youth concert series.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Join Our Musical Community"
        description="Experience the difference at White Keys Music. Contact us today to schedule your first lesson."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Testimonials | White Keys Music - Piano Instruction in Modesto, CA" />

export default TestimonialsPage
