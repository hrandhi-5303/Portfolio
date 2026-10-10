import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Developer, Sketch } from "@/components/Illustration";
import { studies, skillGroups } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE ENGINEER · BUILDER · CURIOUS HUMAN</p>
          <h1>
            Complex systems.
            <br />
            Thoughtfully <em>simple.</em>
          </h1>
          <p className="intro">
            Hi, I’m Hemasree. I build reliable software at the intersection of
            full-stack engineering, cloud platforms, and intelligent data.
          </p>
          <p className="hero-note">
            Clean APIs. Observable systems. Features that work.
          </p>
          <div className="hero-links">
            <a className="button" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="/Hemasree_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume ↗
            </a>
          </div>
        </div>
        <div className="hero-art">
          <Developer />
          <span className="handwritten">a little code, a lot of care.</span>
        </div>
        <div className="hero-bottom">
          <span>Python / React / AWS</span>
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
          {studies.map((study) => (
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
      <section className="wrap section" id="projects">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">02 / OTHER PROJECTS</p>
          <h2>
            More things
            <br />
            I’ve <em>built.</em>
          </h2>
          <p>
            Small explorations. Practical problems.
            <br />A good reason to learn something new.
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
              "Understand before building",
              "Translate business requirements into clear boundaries, useful APIs, and a plan the team can share.",
            ],
            [
              "02",
              "Make reliability a feature",
              "Build in automated tests, observability, secure defaults, and repeatable infrastructure from the start.",
            ],
            [
              "03",
              "Ship, learn, refine",
              "Use CI/CD and thoughtful code reviews to deliver reliable features and keep improving.",
            ],
          ].map(([n, title, text]) => (
            <article data-reveal key={n}>
              <span className="handwritten">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <details className="skills">
          <summary>
            Inside my toolkit <span aria-hidden="true">＋</span>
          </summary>
          <div className="skills-grid">
            {skillGroups.map(([title, list]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{list}</p>
              </div>
            ))}
          </div>
        </details>
      </section>
      <section className="wrap section" id="experience">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">04 / EXPERIENCE</p>
          <h2>
            The path <em>here.</em>
          </h2>
          <p>
            Over five years building applications
            <br />
            and platforms that scale reliably.
          </p>
        </div>
        <div className="timeline">
          <article data-reveal>
            <p className="eyebrow">JAN 2022 — PRESENT</p>
            <div>
              <h3>
                Software Engineer <span>· Fiserv</span>
              </h3>
              <p className="small-label">DALLAS / FINTECH</p>
              <p>
                Full-stack lending features with Django REST Framework and
                React. Secure onboarding and transaction APIs, AWS
                infrastructure with Terraform, and automated delivery with
                Docker and Jenkins.
              </p>
              <p>
                Resume-reported outcomes: 45% lower latency, 80% shorter
                deployment cycles, 99.99% uptime, and 30% lower MTTR with
                DataDog and CloudWatch.
              </p>
            </div>
          </article>
          <article data-reveal>
            <p className="eyebrow">JUN 2018 — JUL 2021</p>
            <div>
              <h3>
                Software Developer <span>· Sasken Technologies</span>
              </h3>
              <p className="small-label">INDIA / CLOUD-NATIVE APPLICATIONS</p>
              <p>
                AWS applications, CI/CD with CodePipeline and CodeBuild, and
                migration to Docker and Kubernetes on EKS. Monitoring with
                CloudWatch and X-Ray, alongside IAM, encryption, and audit
                logging.
              </p>
              <p>
                Resume-reported outcomes: 35% lower infrastructure costs,
                deployments from one hour to under ten minutes, 40% better fault
                tolerance, and 50% lower MTTR.
              </p>
            </div>
          </article>
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
            I’m Hemasree Randhi, a software engineer who cares about clean code
            and the people who use it. My work spans fintech SaaS, cloud-native
            applications, and applied AI.
          </p>
          <p>
            I enjoy turning complex requirements into software that is clear,
            secure, and dependable—and collaborating with product, design, and
            DevOps teams to get there.
          </p>
          <p className="education">
            MS, Computer Science · University of Central Oklahoma
            <br />
            BTech, Computer Science · Andhra University, India
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
              href="https://www.linkedin.com/in/hemasree-randhi-6a4b6a7b/"
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
