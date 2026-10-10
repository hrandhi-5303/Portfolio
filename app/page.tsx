import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  Developer,
  Sketch,
  EngineeringSketch,
} from "@/components/Illustration";
import {
  professionalStudies,
  researchStudy,
  skillGroups,
  experience,
} from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">HEMASREE RANDHI · SENIOR DATA ENGINEER</p>
          <h1 className="data-headline">
            I engineer data systems that power <em>real-world decisions.</em>
          </h1>
          <p className="hero-intro">Hi, I’m Hemasree.</p>
          <p className="intro">
            I’m a Senior Data Engineer with 6+ years of experience building
            scalable cloud data platforms, distributed data pipelines,
            reconciliation frameworks, and analytics-ready solutions across
            telecommunications and financial services.
          </p>
          <p className="hero-note">
            My expertise includes Azure Data Factory, Azure Databricks, PySpark,
            Spark SQL, Snowflake, Oracle, and Delta Lake.
          </p>
          <div className="hero-links">
            <a className="button" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="/Hemasree_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
        <div className="hero-art">
          <Developer />
          <span className="handwritten">
            trusted data, thoughtful engineering.
          </span>
        </div>
        <div className="hero-bottom">
          <span>Python / SQL / PySpark / Azure</span>
          <a href="#work">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>
      <section className="wrap section" id="work">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>
            From complexity
            <br />
            to <em>clarity.</em>
          </h2>
          <p>
            A closer look at the systems, decisions,
            <br className="desktop-break" /> and ideas behind the work.
          </p>
        </div>
        <div className="work-list">
          {professionalStudies.map((study) => (
            <Link
              key={study.slug}
              className="work-row"
              href={`/work/${study.slug}`}
              data-reveal
            >
              <div className="work-art">
                <Sketch kind={study.kind} />
              </div>
              <div>
                <p className="eyebrow">{study.category}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <span className="project-status">{study.status}</span>
              </div>
              <span className="work-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap section research" id="research">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">RESEARCH / AI EXPLORATION</p>
          <h2>
            From data to <em>intelligence.</em>
          </h2>
          <p>Proposed prototypes, kept separate from professional delivery.</p>
        </div>
        <Link
          className="work-row"
          href="/work/ai-data-intelligence"
          data-reveal
        >
          <div className="work-art">
            <Sketch kind="ai" />
          </div>
          <div>
            <h3>{researchStudy.title}</h3>
            <p>{researchStudy.summary}</p>
            <span className="project-status">{researchStudy.status}</span>
          </div>
          <span className="work-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>
      <section className="wrap section earlier-projects" id="projects">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">02 / OTHER THINGS I’VE BUILT</p>
          <h2>
            Other Things I’ve <em>Built</em>
          </h2>
          <p>
            Earlier academic and personal projects in AI, mobile, and web
            development.
          </p>
        </div>
        <div className="other-grid">
          <article data-reveal>
            <span className="project-number">01</span>
            <h3>HealthAssist GPT</h3>
            <p>
              A healthcare assistant with context-aware answers grounded in
              documents. LLaMA 2, Mistral, and DeepSeek; Ada-002 embeddings,
              ChromaDB, and a Streamlit UI with citations.
            </p>
            <span className="small-label">AI / RAG / ACADEMIC PROJECT</span>
          </article>
          <article data-reveal>
            <span className="project-number">02</span>
            <h3>Photo Memo</h3>
            <p>
              A smart photo organizer built with Flutter and Firebase. Google ML
              Kit provides on-device auto-tagging, with real-time sync, Firebase
              Auth, and a PHP metadata API.
            </p>
            <span className="small-label">MOBILE / FLUTTER / ML KIT</span>
          </article>
          <article data-reveal>
            <span className="project-number">03</span>
            <h3>Sports E-Commerce</h3>
            <p>
              An end-to-end store with catalog, cart, and mock checkout. HTML,
              CSS, JavaScript, Bootstrap, PHP, and GCP Functions. Lazy loading
              and asynchronous fetch delivered ~30% faster page loads.
            </p>
            <span className="small-label">WEB / SERVERLESS / PERFORMANCE</span>
          </article>
        </div>
      </section>
      <section className="wrap section" id="engineering">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">03 / HOW I ENGINEER</p>
          <h2>
            Care in the details.
            <br />
            Confidence in the <em>system.</em>
          </h2>
        </div>
        <div className="principles">
          {[
            [
              "01",
              "Understand the data",
              "Understand source systems, business rules, schemas, and data contracts.",
              "sources",
            ],
            [
              "02",
              "Build reliable pipelines",
              "Design scalable ingestion, transformation, and orchestration workflows.",
              "pipeline",
            ],
            [
              "03",
              "Validate and reconcile",
              "Implement data-quality controls, cross-system comparisons, and exception handling.",
              "validation",
            ],
            [
              "04",
              "Optimize processing",
              "Tune Spark workloads, joins, partitioning, and queries for performance.",
              "processing",
            ],
            [
              "05",
              "Monitor and maintain",
              "Implement logging, alerting, retries, testing, and production validation.",
              "monitor",
            ],
          ].map(([n, title, text, stage]) => (
            <article data-reveal key={n}>
              <EngineeringSketch stage={stage} />
              <span className="handwritten">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <section className="skills" id="skills" aria-labelledby="skills-title">
          <h3 id="skills-title">Technical skills</h3>
          <div className="tags primary-skills">
            {[
              "Python",
              "PySpark",
              "Azure",
              "Databricks",
              "SQL",
              "Snowflake",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="skills-grid">
            {skillGroups.map(([title, list]) => (
              <details key={title}>
                <summary>
                  {title}
                  <span aria-hidden="true">＋</span>
                </summary>
                <p>{list}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
      <section className="wrap section" id="experience">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">04 / EXPERIENCE</p>
          <h2>
            The path <em>here.</em>
          </h2>
          <p>
            Over six years engineering enterprise data systems across
            telecommunications and financial services.
          </p>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article data-reveal key={job.employer}>
              <p className="eyebrow">{job.dates}</p>
              <div>
                <h3>
                  {job.title} <span>· {job.employer}</span>
                </h3>
                <p className="small-label">{job.location}</p>
                {job.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap section about" id="about" data-reveal>
        <div>
          <p className="eyebrow">05 / A LITTLE ABOUT ME</p>
          <h2>
            An engineer.
            <br />
            Always a <em>learner.</em>
          </h2>
          <p>
            I’m a Senior Data Engineer with over six years of experience
            building cloud-based data platforms and reliable data-processing
            systems.
          </p>
          <p>
            My work spans telecommunications and financial services, where I’ve
            developed distributed PySpark pipelines, cross-system reconciliation
            frameworks, automated data-quality controls, and analytics-ready
            datasets.
          </p>
          <p>
            I enjoy solving complex data problems, optimizing large-scale
            processing workloads, and building maintainable systems that turn
            raw enterprise data into trusted information.
          </p>
          <p className="education">
            Master of Science in Computer Science · University of Central
            Oklahoma
            <br />
            Bachelor of Technology in Computer Science · Andhra University,
            India
          </p>
        </div>
        <div className="about-art">
          <Sketch kind="flower" />
          <span className="handwritten">room to keep growing.</span>
        </div>
      </section>
      <section className="wrap section contact" id="contact">
        <div data-reveal>
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Let’s make
            <br />
            something <em>good.</em>
          </h2>
          <p>
            Have a project, an opportunity, or a thoughtful question?
            <br />
            I’d love to hear from you.
          </p>
          <a className="email-link" href="mailto:hemasree9767@gmail.com">
            hemasree9767@gmail.com ↗
          </a>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/hemasreerandhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/hrandhi-5303"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <Sketch kind="mail" />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
