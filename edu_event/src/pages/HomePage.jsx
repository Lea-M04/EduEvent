import React from 'react';
import '../assets/css/styles.css'; 

const HomePage = () => {
  return (
    <div id="page-top">


 <header className="masthead">
  <div className="container">
    <div className="masthead-subheading">Welcome to EduEvent!</div>
    <div className="masthead-heading text-uppercase">
      Empowering Learning & Collaboration
    </div>
    <p className="text-white mt-4 fs-5">
      EduEvent is a dynamic platform designed to bring together students, professionals,
      organizations, and innovators under one digital roof. Whether you're looking to expand your knowledge,
      participate in impactful events, or grow your professional network — we are here to support your journey.
    </p>
    <p className="text-white fs-5">
      Explore internships, hackathons, training opportunities, and meet others who share your passion for growth and learning.
    </p>
    <a className="btn btn-primary btn-xl text-uppercase mt-3" href="#services">
      Explore Opportunities
    </a>
  </div>
</header>

     <section className="page-section" id="services">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">What We Offer</h2>
      <h3 className="section-subheading text-muted">
        Discover endless possibilities for growth, networking, and skill-building.
      </h3>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-calendar-alt fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Events</h4>
        <p className="text-muted">
          Stay updated with educational, tech, and business events from across the globe. 
          From conferences to local meetups and online webinars — everything you need is one click away.
        </p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-network-wired fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Networking</h4>
        <p className="text-muted">
          Connect with professionals, industry experts, and like-minded learners. 
          Build meaningful relationships, find collaborators, or simply expand your visibility in your field.
        </p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-briefcase fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Internships</h4>
        <p className="text-muted">
          Discover internship openings in tech, marketing, design, and more.
          Gain practical experience and take the first step toward your professional career.
        </p>
      </div>
      <div className="col-md-4 mt-5">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-code fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Hackathons</h4>
        <p className="text-muted">
          Unleash your creativity through innovation marathons. Team up, build projects,
          and compete for real-world impact, recognition, and prizes.
        </p>
      </div>
      <div className="col-md-4 mt-5">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-chalkboard-teacher fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Trainings</h4>
        <p className="text-muted">
          Join our expert-led sessions covering technical skills, soft skills, and industry tools.
          Learn at your own pace and stay ahead in a rapidly changing world.
        </p>
      </div>
      <div className="col-md-4 mt-5">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className="fas fa-book-open fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="my-3">Resources</h4>
        <p className="text-muted">
          Access a curated library of articles, templates, research materials, and step-by-step guides.
          Everything you need to stay informed and inspired.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="page-section bg-light" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Story</h2>
            <h3 className="section-subheading text-muted">How EduEvent came to life.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/1.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2021</h4>
                  <h4 className="subheading">Humble Beginnings</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">We started as a small team passionate about educational access and community growth.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/2.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2022</h4>
                  <h4 className="subheading">Expanding Reach</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">We partnered with universities and local organizations to reach more learners.</p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/3.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2023</h4>
                  <h4 className="subheading">Global Community</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">With thousands of users, we now support global events and multi-language content.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Journey!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Team</h2>
            <h3 className="section-subheading text-muted">Driven by passion and purpose.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/1.jpg" alt="..." />
                <h4>Gazmend Zeqiri</h4>
                <p className="text-muted">CEO & Founder</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/2.jpg" alt="..." />
                <h4>Arbenita Dauti</h4>
                <p className="text-muted">Community Lead</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/3.jpg" alt="..." />
                <h4>Elir Kastrati</h4>
                <p className="text-muted">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Have an event, idea, or collaboration in mind?  
              Let’s build something impactful together.
            </h3>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required />
                  <div className="invalid-feedback">A name is required.</div>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required />
                  <div className="invalid-feedback">A valid email is required.</div>
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required />
                  <div className="invalid-feedback">A phone number is required.</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required></textarea>
                  <div className="invalid-feedback">Please enter a message.</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
