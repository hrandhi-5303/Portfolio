import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'


// Badge component
const Badge = ({ label }: { label: string }) => (
  <span className="px-2.5 py-1 rounded-full border border-white/15 text-xs opacity-95 hover:bg-white hover:text-black transition">
    {label}
  </span>
)

// Postcard component
const Postcard = ({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) => (
  <article className="rounded-2xl border border-white/10 p-6 bg-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
    <h3 className="text-lg font-semibold mb-4">{emoji} {title}</h3>
    {children}
  </article>
)

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        id="home"
        className="snap-start min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/hemasree.jpg"
            alt="Hemasree Randhi headshot"
            width={200}
            height={200}
            className="rounded-full border border-white/20 shadow bg-transparent"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="typewriter">Hi,Hemasree here!</span>
        </h1>

        <p className="mt-4 text-lg leading-relaxed opacity-90 max-w-2xl">
          I’m a software engineer with over 5 years of experience building scalable apps and cloud-native platforms.
          Strong in Python/Django, React, SQL, and AWS—plus Terraform, Docker, and CI/CD.
          I care about clean APIs, observable systems, and shipping reliable features fast.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="/Hemasree_Resume.pdf" target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition">
            View Resume
          </a>
          
          <a href="https://www.linkedin.com/in/hemasree-randhi-6a4b6a7b/" target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition">
            LinkedIn
          </a>
          <a href="https://github.com/hrandhi-5303" target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition">
            GitHub
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="experience"
        className="snap-start min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Skills</h2>
        <p className="opacity-80 text-sm mb-8 max-w-2xl">
          Core tools I use day-to-day. Tap “More skills” to see the rest.
        </p>

        {/* Core skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <Postcard title="Languages" emoji="📝">
            <div className="flex flex-wrap justify-center gap-2">
              {['Python','JavaScript','SQL','Java','Dart','PHP'].map(s => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </Postcard>

          <Postcard title="Frameworks" emoji="⚙️">
            <div className="flex flex-wrap justify-center gap-2">
              {['Django','Django REST Framework','React','Node.js'].map(s => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </Postcard>

          <Postcard title="Cloud (AWS-first)" emoji="☁️">
            <div className="flex flex-wrap justify-center gap-2">
              {['AWS','Lambda','EC2','S3','Redshift','API Gateway','CloudWatch','X-Ray','IAM'].map(s => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </Postcard>

          <Postcard title="DevOps & Automation" emoji="🚀">
            <div className="flex flex-wrap justify-center gap-2">
              {['Docker','Kubernetes (EKS)','Terraform','Jenkins','GitHub Actions','CodePipeline','CodeBuild'].map(s => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </Postcard>
        </div>

        {/* Collapsible: more skills */}
        <details className="mt-8 max-w-5xl w-full">
          <summary className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition mx-auto">
            More skills <span aria-hidden>▾</span>
          </summary>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Postcard title="Databases" emoji="🗄️">
              <div className="flex flex-wrap justify-center gap-2">
                {['PostgreSQL','MySQL','NoSQL','Delta Lake','Hive'].map(s => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </Postcard>

            <Postcard title="Data Engineering" emoji="📊">
              <div className="flex flex-wrap justify-center gap-2">
                {['PySpark','Airflow','Pandas','NumPy','ETL','Hadoop','Spark'].map(s => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </Postcard>

            <Postcard title="AI & ML" emoji="🤖">
              <div className="flex flex-wrap justify-center gap-2">
                {['Generative AI (LLMs)','RAG','OpenAI APIs','Embeddings','ChromaDB','TensorFlow','NLP','MLflow'].map(s => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </Postcard>

            <Postcard title="Visualization" emoji="📈">
              <div className="flex flex-wrap justify-center gap-2">
                {['Tableau','Power BI'].map(s => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </Postcard>

            <Postcard title="Testing & Agile" emoji="🧪">
              <div className="flex flex-wrap justify-center gap-2">
                {['Unit Testing','Integration Testing','TDD','Agile','Scrum','Kanban','SAFe'].map(s => (
                  <Badge key={s} label={s} />
                ))}
              </div>
            </Postcard>
          </div>
        </details>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="snap-start min-h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="space-y-6 max-w-2xl w-full">
          <article className="border border-white/10 rounded-2xl p-5">
            <h3 className="text-2xl font-semibold">HealthAssist GPT (RAG)</h3>
            <p className="text-sm opacity-80 mt-1">AI healthcare assistant with context-aware answers grounded in docs.</p>
            <ul className="list-disc list-inside text-sm text-center mt-2 space-y-1">
              <li>LLMs (LLaMA 2, Mistral, DeepSeek) for conversation.</li>
              <li>OpenAI Ada-002 embeddings + ChromaDB; Streamlit UI with citations.</li>
            </ul>
          </article>

          <article className="border border-white/10 rounded-2xl p-5">
            <h3 className="text-2xl font-semibold">Photo Memo (Mobile)</h3>
            <p className="text-sm opacity-80 mt-1">Smart photo organizer with on-device tagging.</p>
            <ul className="list-disc list-inside text-sm text-center mt-2 space-y-1">
              <li>Flutter + Firebase; Google ML Kit auto-tagging and real-time sync.</li>
              <li>Secure login with Firebase Auth; PHP metadata API.</li>
            </ul>
          </article>

          <article className="border border-white/10 rounded-2xl p-5">
            <h3 className="text-2xl font-semibold">Sports E-Commerce (Web)</h3>
            <p className="text-sm opacity-80 mt-1">End-to-end store with cart, catalog, and mock checkout.</p>
            <ul className="list-disc list-inside text-sm text-center mt-2 space-y-1">
              <li>Frontend in HTML/CSS/JS + Bootstrap; backend in PHP + GCP Functions.</li>
              <li>Lazy-loaded images & async fetch; ~30% faster page loads.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CONTACT */}
<section
  id="contact"
  className="snap-start min-h-screen flex flex-col items-center justify-center px-4 text-center"
>
  <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
  <p className="opacity-80 text-sm mb-8 max-w-xl">
    Drop me a message and I’ll get back to you soon.
  </p>

  <ContactForm />

</section>
</div>
)
}
