export const studies = [
  {
    slug: "reconciliation-engine",
    title: "Reconciliation Engine",
    fullTitle: "Enterprise Data Reconciliation Engine",
    category: "01 / TELECOMMUNICATIONS · 2026",
    kind: "reconcile" as const,
    status: "Enterprise engineering experience",
    role: "Lead Technical Developer / Data Engineer",
    summary:
      "Bringing operational and analytical records into agreement—with traceable discrepancy management.",
    intro:
      "An enterprise data reconciliation solution to identify inconsistencies between operational and analytical systems, covering customer accounts, subscriptions, cancellations, and return orders.",
    context:
      "As Lead Technical Developer / Data Engineer, I designed and developed ingestion, transformation, reconciliation, and tracking logic in collaboration with cross-functional engineering teams. This public case study describes the engineering approach without exposing internal identifiers or proprietary business rules.",
    challenge:
      "Source systems used inconsistent formats and order-type values. Missing subscription identifiers required fallback matching, while date-based comparisons needed consistent handling. The reconciliation process also had to prevent duplicate discrepancy cases and retain processing history.",
    approach: [
      [
        "01",
        "Normalize heterogeneous sources",
        "Integrated Oracle and Snowflake data through scalable Azure Databricks and PySpark ingestion and transformation pipelines. Normalized formats and order-type values before comparison.",
      ],
      [
        "02",
        "Match with explicit business rules",
        "Implemented customer-account and subscription-identifier matching, including fallback handling for missing identifiers and date-based reconciliation conditions. Proprietary rule definitions are omitted.",
      ],
      [
        "03",
        "Track the discrepancy lifecycle",
        "Developed discrepancy identification and lifecycle logic covering case creation, updates, and resolution. Delta Lake-based processing and tracking supported history and reconciliation consistency.",
      ],
      [
        "04",
        "Validate and prepare for release",
        "Supported data validation, testing, debugging, and deployment preparation, collaborating across engineering teams and using GitLab for version control.",
      ],
    ],
    stack: [
      "Python",
      "PySpark",
      "Spark SQL",
      "Azure Databricks",
      "Azure Data Factory",
      "ADLS Gen2",
      "Snowflake",
      "Oracle",
      "Delta Lake",
      "GitLab",
    ],
    outcome:
      "Implemented rule-based comparisons across heterogeneous sources and mechanisms to identify and track discrepancies. Improved processing structure and traceability, and supported automated discrepancy case lifecycle management.",
    lesson:
      "Reconciliation needs more than a match: it needs a consistent history of what changed and how a discrepancy was resolved.",
  },
  {
    slug: "cloud-data-platform",
    title: "Cloud Data Platform",
    fullTitle: "Cloud Data Engineering & ETL Platform",
    category: "02 / ENTERPRISE DATA ENGINEERING",
    kind: "cloud" as const,
    status: "Enterprise engineering contribution",
    role: "Software / Data Engineer",
    summary:
      "Reusable ingestion, transformation, and validation workflows for enterprise analytical data.",
    intro:
      "Cloud-based data engineering solutions supporting ingestion, transformation, validation, and processing of enterprise datasets.",
    context:
      "As a Software / Data Engineer, I contributed to ingestion and transformation workflows, cloud storage and analytical database integration, and development, testing, and release processes. This was collaborative enterprise engineering work.",
    challenge:
      "Heterogeneous sources introduced schema and transformation inconsistencies. Data quality needed to hold across multiple pipeline stages, and incremental processing had to remain reliable as datasets changed. Pipeline failures required careful investigation.",
    approach: [
      [
        "01",
        "Connect and ingest",
        "Developed and maintained ingestion workflows using Azure Data Factory, Azure Data Lake Storage Gen2, and enterprise data sources.",
      ],
      [
        "02",
        "Transform and validate",
        "Built PySpark and SQL processing logic in Azure Databricks, implementing schema validation and data-quality checks across ingestion and transformation stages.",
      ],
      [
        "03",
        "Handle evolving datasets",
        "Supported batch processing, transformations, and incremental data handling with Delta Lake, cloud storage, and analytical databases including Azure SQL and Snowflake.",
      ],
      [
        "04",
        "Support reliable releases",
        "Troubleshot pipeline failures and data inconsistencies across development, testing, and production environments. Supported version control, testing, and release processes with GitLab CI/CD.",
      ],
    ],
    stack: [
      "Python",
      "SQL",
      "PySpark",
      "Azure Data Factory",
      "Azure Databricks",
      "ADLS Gen2",
      "Azure SQL",
      "Snowflake",
      "Delta Lake",
      "GitLab CI/CD",
    ],
    outcome:
      "Contributed to reusable enterprise data-processing workflows, supported reliable ingestion and transformation of analytical datasets, and improved data validation and processing consistency.",
    lesson:
      "Data quality belongs at every boundary. Validation and clear processing stages make a pipeline easier to trust and troubleshoot.",
  },
  {
    slug: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    fullTitle: "AI & Data Intelligence",
    category: "03 / AI ENGINEERING · RESEARCH & DEVELOPMENT",
    kind: "ai" as const,
    status: "Portfolio concept / proposed prototype",
    role: "Exploration & research",
    summary:
      "Exploring how LLM-powered workflows could help profile, validate, and investigate enterprise data.",
    intro:
      "An AI engineering exploration into intelligent data profiling, anomaly detection, and discrepancy investigation. This is a proposed prototype, not a confirmed production deployment.",
    context:
      "This exploration examines how AI and LLM-powered workflows could support enterprise data engineering. Relevant technologies include Python, LLMs, RAG, LangGraph, Snowflake, and cloud data platforms. These are proposed tools, not a claim of a deployed agentic system.",
    challenge:
      "Enterprise data investigation requires evidence and context. An assistant should distinguish a measured data issue from a suggested explanation, and make its reasoning inspectable without exposing confidential data.",
    approach: [
      [
        "01",
        "Profile and validate data",
        "Explore intelligent profiling and data-quality checks to describe datasets and identify possible anomalies. Deterministic validation would establish the evidence before model interpretation.",
      ],
      [
        "02",
        "Retrieve relevant context",
        "Investigate RAG as a way to connect questions with approved documentation, dataset definitions, and validation results.",
      ],
      [
        "03",
        "Guide discrepancy investigation",
        "Prototype a LangGraph-based workflow for AI-assisted reconciliation and root-cause analysis, with explicit steps for gathering evidence and reporting uncertainty.",
      ],
      [
        "04",
        "Evaluate before adoption",
        "A proposed evaluation would assess evidence grounding, false positives, and usefulness to reviewers. Human review and scoped data access would remain part of the design.",
      ],
    ],
    stack: [
      "Python",
      "LLMs",
      "RAG",
      "LangGraph",
      "Snowflake",
      "Cloud data platforms",
    ],
    outcome:
      "The current outcome is a defined exploration direction and proposed prototype approach. No production implementation, benchmark, or deployment outcome is claimed.",
    lesson:
      "AI can suggest where to look. Evidence and human judgment should decide what a discrepancy means.",
  },
];
export const skillGroups = [
  ["Languages", "Python, JavaScript, SQL, Java, Dart, PHP"],
  ["Frameworks", "Django, Django REST Framework, React, Node.js"],
  [
    "Cloud",
    "AWS, Lambda, EC2, S3, Redshift, API Gateway, CloudWatch, X-Ray, IAM, GCP, Azure Data Factory, Azure Databricks, ADLS Gen2, Azure SQL",
  ],
  [
    "DevOps & automation",
    "Docker, Kubernetes (EKS), Terraform, Jenkins, GitHub Actions, CodePipeline, CodeBuild, GitLab CI/CD",
  ],
  [
    "Databases",
    "PostgreSQL, MySQL, NoSQL, Delta Lake, Hive, Snowflake, Oracle",
  ],
  [
    "Data engineering",
    "PySpark, Spark SQL, Airflow, Pandas, NumPy, ETL, Hadoop, Spark",
  ],
  [
    "AI & ML",
    "Generative AI (LLMs), RAG, OpenAI APIs, Embeddings, ChromaDB, TensorFlow, NLP, MLflow; exploring LangGraph",
  ],
  ["Visualization", "Tableau, Power BI"],
  [
    "Testing & delivery",
    "Unit Testing, Integration Testing, TDD, Agile, Scrum, Kanban, SAFe",
  ],
];
