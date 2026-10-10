export const professionalStudies = [
  {
    slug: "reconciliation-engine",
    title: "Enterprise Data Reconciliation Engine",
    fullTitle: "Enterprise Data Reconciliation Engine",
    category: "01 / TELECOMMUNICATIONS",
    kind: "reconcile" as const,
    status: "Professional work · Global Logic (client: T-Mobile)",
    role: "Senior Data Engineer",
    summary:
      "Cross-system validation of billing, subscriber, cancellation, and return-order data, with a traceable discrepancy lifecycle.",
    intro:
      "An Azure-based telecom reconciliation solution comparing operational and analytical data from Oracle and Snowflake. The system identifies mismatches and manages discrepancy cases through Delta Lake.",
    context:
      "As a Senior Data Engineer at Global Logic, working with client T-Mobile from June 2026, I built ingestion, transformation, reconciliation, and case-processing workflows. I collaborated with data engineers, technical leads, and business teams on requirements, validation, UAT, and releases.",
    challenge:
      "Source records differed in format, completeness, and order classification. Missing subscriber identifiers required fallback matching, and date comparisons needed consistent treatment. Recurring mismatches had to update existing cases without creating duplicates, while resolved discrepancies needed to close with a retained processing history.",
    approach: [
      [
        "01",
        "Create a consistent comparison boundary",
        "Built Azure Data Factory and Databricks pipelines to ingest Oracle and Snowflake data, then used PySpark and Spark SQL to standardize attributes before reconciliation.",
      ],
      [
        "02",
        "Handle incomplete records explicitly",
        "Implemented matching and fallback logic using multi-table lookups, null handling, historical date comparisons, and order-type standardization. Internal identifiers, date windows, and proprietary rule definitions are omitted from this public account.",
      ],
      [
        "03",
        "Separate discrepancies from their lifecycle",
        "Designed Delta Lake processing to create cases for new discrepancies, update recurring failures, close resolved cases, and retain processed-record history. Reusable notebooks separated ingestion, transformation, rules, exception handling, and testing.",
      ],
      [
        "04",
        "Validate across environments",
        "Performed schema, null, duplicate, referential-integrity, and source-to-target checks during development and UAT. Supported environment-specific configuration, GitLab CI/CD releases, and post-deployment validation.",
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
      "GitLab CI/CD",
    ],
    outcome:
      "Delivered automated cross-system validation and discrepancy detection with case creation, updates, resolution, and processing history. Reusable notebooks and validation controls made the workflow easier to maintain and extend.",
    lesson:
      "A reconciliation result needs a history: what was compared, what failed, and whether the discrepancy remains open.",
  },
  {
    slug: "cloud-data-platform",
    title: "Cloud Data Engineering Platform",
    fullTitle: "Cloud Data Engineering Platform",
    category: "02 / CLOUD DATA ENGINEERING",
    kind: "cloud" as const,
    status: "Professional work · Fiserv",
    role: "Data Engineer",
    summary:
      "Azure ingestion and distributed transformation pipelines delivering validated financial datasets to analytical serving layers.",
    intro:
      "A cloud data engineering platform supporting batch and near real-time ingestion, distributed transformations, data-quality controls, and analytics-ready delivery for financial services.",
    context:
      "At Fiserv, from June 2023 to May 2026, I designed and developed Azure pipelines for financial data from settlement systems, merchant portals, and clearinghouses. I partnered with finance teams, analysts, and business stakeholders on source-to-target mappings, curated models, and reporting requirements.",
    challenge:
      "Relational sources, APIs, and flat files produced structured and semi-structured data with different schemas and arrival patterns. Downstream reporting depended on consistent transaction records, recoverable pipeline execution, and validation before data reached serving layers.",
    approach: [
      [
        "01",
        "Separate ingestion from transformation",
        "Built batch and near real-time ingestion frameworks with Azure Data Factory and ADLS Gen2. Databricks workflows used PySpark and Spark SQL to standardize transactions, normalize timestamps, and apply curated transformations.",
      ],
      [
        "02",
        "Validate before publishing",
        "Implemented schema validation, null checks, duplicate detection, referential-integrity checks, and reconciliation controls. Delta Lake supported the processing layer, with curated datasets served through Azure Synapse Analytics and Azure SQL Database.",
      ],
      [
        "03",
        "Tune the distributed workload",
        "Used partition pruning, caching, data partitioning, and query tuning to optimize large joins and aggregations. The engineering focus was reliable financial data delivery rather than an unverified performance target.",
      ],
      [
        "04",
        "Make operations part of the design",
        "Automated dependencies, retries, and SLA-based execution in Azure Data Factory. Azure Monitor, operational logs, and ETL health checks helped detect failed pipelines, delayed feeds, reconciliation breaks, and anomalies.",
      ],
    ],
    stack: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure Databricks",
      "Python",
      "SQL",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "Azure Monitor",
    ],
    outcome:
      "Delivered curated reporting datasets and analytical serving layers for transaction reporting, settlement summaries, fee analysis, and finance dashboards. Validation, orchestration, and monitoring supported more consistent processing and operational control.",
    lesson:
      "Reliable data delivery depends on the whole path: ingestion, transformation, validation, orchestration, and the serving layer.",
  },
  {
    slug: "financial-data-reconciliation",
    title: "Financial Data Reconciliation",
    fullTitle: "Financial Data Reconciliation",
    category: "03 / FINANCIAL SERVICES",
    kind: "finance" as const,
    status: "Professional work · Fiserv",
    role: "Data Engineer",
    summary:
      "Transaction-to-settlement validation and automated exception reporting for finance and audit workflows.",
    intro:
      "Reconciliation pipelines comparing internal financial transactions with clearinghouse settlement records, identifying mismatches and producing exception reports for investigation.",
    context:
      "This work was part of my Data Engineer role at Fiserv, June 2023–May 2026. I translated settlement, reporting, and audit requirements into Azure-based pipelines, source-to-target mappings, and curated financial data models with finance and business teams.",
    challenge:
      "Transaction and settlement records needed a consistent basis for comparison. Currency handling, timestamps, merchant classifications, duplicates, and missing values could affect validation. Finance teams needed exceptions they could investigate and reporting datasets they could trust.",
    approach: [
      [
        "01",
        "Prepare comparable financial records",
        "Used Python, PySpark, Spark SQL, and distributed transformation workflows to standardize transactions, perform currency conversions, normalize timestamps, and map merchant categories.",
      ],
      [
        "02",
        "Apply quality and reconciliation controls",
        "Implemented schema, null, duplicate, and referential-integrity checks, then compared internal transaction data with clearinghouse settlement records to identify mismatches.",
      ],
      [
        "03",
        "Connect exceptions to financial reporting",
        "Automated exception reporting and developed SQL logic for settlement amounts, net fees, and transaction-level revenue impact. Curated reporting layers supported settlement summaries, fee analysis, and audit reporting.",
      ],
      [
        "04",
        "Monitor the reconciliation path",
        "Used Azure Data Factory orchestration, retries, operational logs, Azure Monitor, and ETL health checks to surface failures, delayed feeds, and reconciliation breaks.",
      ],
    ],
    stack: [
      "Python",
      "SQL",
      "PySpark",
      "Spark SQL",
      "Azure Data Factory",
      "Azure Databricks",
      "ADLS Gen2",
      "Delta Lake",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "Azure Monitor",
    ],
    outcome:
      "Automated transaction-to-settlement comparison and exception reporting, replacing manual spreadsheet-based audit workflows. Curated datasets supported finance operations, settlement reporting, and investigation of reconciliation breaks.",
    lesson:
      "A financial discrepancy is useful only when its supporting records and reporting context are clear enough to investigate.",
  },
];
export const researchStudy = {
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
};
export const studies = [...professionalStudies, researchStudy];
export const skillGroups = [
  ["Core languages", "Python, SQL, PySpark, Spark SQL, Bash, shell scripting"],
  [
    "Azure data platform",
    "Azure Data Factory, Azure Databricks, ADLS Gen2, Azure Synapse Analytics, Azure SQL Database, Azure Monitor",
  ],
  [
    "Databases & distributed processing",
    "Snowflake, Oracle, Apache Spark, Delta Lake, Hive, Hadoop",
  ],
  [
    "Pipelines & data modeling",
    "ETL/ELT, batch and near real-time processing, incremental loads, CDC, merge/upsert logic, pipeline orchestration, dimensional modeling, curated data layers",
  ],
  [
    "Reconciliation & quality",
    "Cross-system reconciliation, settlement validation, data profiling, schema checks, null and duplicate detection, referential integrity, source-to-target validation, exception reporting",
  ],
  [
    "Delivery & operations",
    "Git, GitLab CI/CD, testing, UAT, pipeline monitoring, Azure Monitor, ETL health checks, incident response, Terraform, Docker, Jenkins",
  ],
  [
    "Performance & reporting",
    "Partition pruning, broadcast joins, caching, Spark and SQL tuning, Power BI, Tableau",
  ],
  [
    "AI research / exploration",
    "LLMs, RAG, LangGraph, AI-assisted profiling, anomaly detection, discrepancy investigation; proposed prototype work",
  ],
];
export const experience = [
  {
    dates: "JUN 2026 — PRESENT",
    title: "Senior Data Engineer",
    employer: "Global Logic",
    location: "DALLAS · CLIENT: T-MOBILE · TELECOMMUNICATIONS",
    paragraphs: [
      "Built Azure Data Factory and Databricks pipelines to reconcile billing, subscriber, cancellation, and return-order data from Snowflake and Oracle. Developed PySpark and Spark SQL matching rules, fallback handling, and Delta Lake discrepancy case management.",
      "Created reusable notebooks and validation controls, supported UAT with engineering and business teams, and delivered GitLab CI/CD releases with post-deployment validation.",
    ],
  },
  {
    dates: "JUN 2023 — MAY 2026",
    title: "Data Engineer",
    employer: "Fiserv",
    location: "DALLAS · FINANCIAL SERVICES",
    paragraphs: [
      "Designed Azure ingestion and distributed transformation pipelines for financial data from settlement systems, merchant portals, and clearinghouses. Built transaction-to-settlement reconciliation and automated exception reporting.",
      "Delivered curated datasets through Azure Synapse Analytics and Azure SQL Database. Implemented data-quality controls, Spark tuning, ADF orchestration and retries, and Azure Monitor health checks with finance and analytics teams.",
    ],
  },
  {
    dates: "JUN 2018 — JUL 2021",
    title: "Junior Data Engineer",
    employer: "Sasken Technologies",
    location: "INDIA · NETWORK, BILLING & OPERATIONAL DATA",
    paragraphs: [
      "Developed enterprise ETL/ELT workflows with Azure Data Factory, Azure Data Lake Storage, PySpark, Spark SQL, Hive, and SQL. Ingested API, FTP, and enterprise datasets; flattened JSON logs and standardized timestamps for reporting.",
      "Applied profiling, schema enforcement, reconciliation, and validation controls. Supported Spark optimization, scheduled processing, monitoring, secure data handling, and curated reporting datasets with analysts and business teams.",
    ],
  },
];
