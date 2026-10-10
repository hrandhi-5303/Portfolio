export const professionalStudies = [
  {
    slug: "reconciliation-engine",
    title: "Enterprise Telecom Reconciliation Engine",
    fullTitle: "Enterprise Telecom Reconciliation Engine",
    category: "01 / TELECOMMUNICATIONS",
    kind: "reconcile" as const,
    status: "GlobalLogic · Client: T-Mobile",
    role: "Senior Data Engineer",
    summary:
      "Cross-system validation of billing, subscriber, cancellation, and return-order data, with a traceable discrepancy lifecycle.",
    intro:
      "An Azure-based telecom reconciliation solution comparing operational and analytical data from Oracle and Snowflake. The system identifies mismatches and manages discrepancy cases through Delta Lake.",
    context:
      "As a Senior Data Engineer at GlobalLogic, working with client T-Mobile from June 2026, I built ingestion, transformation, reconciliation, and case-processing workflows. I collaborated with data engineers, technical leads, and business teams on requirements, validation, UAT, and releases.",
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
      "Azure Data Factory",
      "Azure Databricks",
      "PySpark",
      "Apache Spark",
      "Spark SQL",
      "Python",
      "SQL",
      "ADLS Gen2",
      "Snowflake",
      "Oracle",
      "Delta Lake",
      "GitLab",
    ],
    outcome:
      "Delivered automated cross-system validation and discrepancy detection with case creation, updates, resolution, and processing history. Reusable notebooks and validation controls made the workflow easier to maintain and extend.",
    lesson:
      "A reconciliation result needs a history: what was compared, what failed, and whether the discrepancy remains open.",
    period: "June 2026 – Present",
  },
  {
    slug: "financial-data-reconciliation",
    title: "Financial Data Engineering & Settlement Reconciliation",
    fullTitle: "Financial Data Engineering & Settlement Reconciliation",
    category: "02 / FINANCIAL SERVICES",
    kind: "finance" as const,
    status: "Fiserv",
    role: "Data Engineer",
    summary:
      "Transaction-to-settlement validation and automated exception reporting for finance and audit workflows.",
    intro:
      "Designed and developed scalable Azure data pipelines for financial transactions, settlement records, merchant data, and clearinghouse information. Ingestion, distributed transformation, reconciliation, and validation delivered curated datasets for finance reporting and analytics.",
    context:
      "This work was part of my Data Engineer role at Fiserv, June 2023–May 2026. I translated settlement, reporting, and audit requirements into Azure-based pipelines, source-to-target mappings, and curated financial data models with finance and business teams.",
    challenge:
      "Transaction and settlement records needed a consistent basis for comparison. Currency handling, timestamps, merchant classifications, duplicates, and missing values could affect validation. Finance teams needed exceptions they could investigate and reporting datasets they could trust.",
    approach: [
      [
        "01",
        "Prepare comparable financial records",
        "Built batch and near real-time ingestion from relational systems, APIs, and flat files with Azure Data Factory and ADLS Gen2. PySpark and Spark SQL transformations standardized financial records, currencies, timestamps, and merchant categories.",
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
        "Deliver and optimize analytical datasets",
        "Built curated datasets in Azure Synapse Analytics and Azure SQL Database for settlement analysis, finance reporting, and audits. Optimized joins, aggregations, partitioning, and caching in Spark workloads.",
      ],
      [
        "05",
        "Monitor the reconciliation path",
        "Used Azure Data Factory orchestration, retries, operational logs, Azure Monitor, and ETL health checks to surface failures, delayed feeds, and reconciliation breaks.",
      ],
    ],
    stack: [
      "Azure Data Factory",
      "Azure Databricks",
      "ADLS Gen2",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "PySpark",
      "Spark SQL",
      "Python",
      "SQL",
      "Delta Lake",
      "Azure Monitor",
    ],
    outcome:
      "Automated transaction-to-settlement comparison and exception reporting, replacing manual spreadsheet-based audit workflows. Curated datasets supported finance operations, settlement reporting, and investigation of reconciliation breaks.",
    lesson:
      "A financial discrepancy is useful only when its supporting records and reporting context are clear enough to investigate.",
    period: "June 2023 – May 2026",
  },
  {
    slug: "telecom-data-analytics",
    title: "Enterprise Telecom Data Processing & Analytics",
    fullTitle: "Enterprise Telecom Data Processing & Analytics",
    period: "June 2018 – July 2021",
    category: "03 / TELECOMMUNICATIONS",
    kind: "telecom" as const,
    status: "Sasken Technologies",
    role: "Junior Data Engineer",
    summary:
      "ETL/ELT pipelines turning network, subscriber, billing, and operational datasets into validated reporting data.",
    intro:
      "Developed and maintained enterprise data pipelines for telecommunications network, subscriber, billing, and operational datasets. PySpark transformations and quality controls prepared curated data for reporting and analytics.",
    context:
      "As Junior Data Engineer at Sasken Technologies from June 2018 to July 2021, I developed ETL/ELT workflows and worked with analysts, reporting teams, and business stakeholders on mappings, processing rules, and reporting datasets.",
    challenge:
      "API, FTP, and enterprise sources arrived as CSV, JSON, and Parquet. Nested operational logs and timestamps across regions required standardization. Malformed records, missing values, and billing inconsistencies needed to be detected before affecting downstream reporting.",
    approach: [
      [
        "01",
        "Ingest diverse source formats",
        "Built Azure Data Factory ingestion workflows for APIs, FTP sources, and enterprise datasets into Azure Data Lake Storage and big data environments. Used source-to-target mappings and profiling to define consistent data flows.",
      ],
      [
        "02",
        "Transform operational data",
        "Developed PySpark and Spark SQL processing to parse and flatten nested JSON, normalize timestamps, and perform joins, aggregations, and filtering across subscriber usage, billing, and operational data.",
      ],
      [
        "03",
        "Validate and reconcile",
        "Applied schema enforcement, datatype checks, null validation, duplicate detection, and record-level filtering. Quality-control and reconciliation frameworks identified usage anomalies, billing inconsistencies, and invalid records.",
      ],
      [
        "04",
        "Prepare reporting datasets",
        "Supported curated data for network usage, billing behavior, fraud indicators, churn-related metrics, and executive KPI reporting. Worked with analysts to align transformations with reporting requirements.",
      ],
      [
        "05",
        "Optimize and operate",
        "Used broadcast joins, caching, and partition pruning to tune Spark workloads. Supported orchestration, retries, dependencies, monitoring, logging, alerting, production troubleshooting, and controlled data access.",
      ],
    ],
    stack: [
      "Azure Data Factory",
      "Azure Data Lake Storage",
      "PySpark",
      "Spark SQL",
      "SQL",
      "Hive",
      "Hadoop",
      "Python",
      "Azure Monitor",
    ],
    outcome:
      "Delivered standardized, validated datasets for telecommunications analytics and reporting. Reconciliation controls supported data trust, while workload tuning, orchestration, and monitoring improved maintainability and operational reliability.",
    lesson:
      "Operational reporting starts with consistent source data. Validation and traceable transformations make curated datasets easier to trust.",
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
  ["Programming", "Python, SQL, Spark SQL, Bash, Shell Scripting"],
  [
    "Big Data & Distributed Processing",
    "PySpark, Apache Spark, Azure Databricks, Delta Lake, Hive, Hadoop",
  ],
  [
    "Azure Data Platform",
    "Azure Data Factory, ADLS Gen2, Azure Synapse Analytics, Azure SQL Database, Azure Monitor, Azure Storage",
  ],
  ["Enterprise Databases", "Snowflake, Oracle"],
  [
    "Data Engineering",
    "ETL/ELT, Data Ingestion, Data Transformation, Incremental Loads, CDC, Merge, Upsert, Workflow Orchestration, Metadata-Driven Ingestion",
  ],
  [
    "Data Warehousing & Analytics",
    "Data Warehousing, Dimensional Modeling, Curated Data Layers, Data Marts, Advanced SQL, KPI Reporting",
  ],
  [
    "Data Quality & Governance",
    "Schema Validation, Data Profiling, Source-to-Target Mapping, Duplicate Detection, Referential Integrity, Reconciliation, Audit Logging",
  ],
  [
    "Performance Engineering",
    "Partition Pruning, Caching, Broadcast Joins, Spark Optimization, SQL Query Tuning",
  ],
  [
    "DevOps & Monitoring",
    "Git, GitLab CI/CD, Terraform, Docker, Jenkins, Linux, Azure Monitor",
  ],
  ["Reporting", "Power BI, Tableau, Grafana"],
];
export const experience = [
  {
    dates: "June 2026 – Present",
    title: "Senior Data Engineer",
    employer: "GlobalLogic (Client: T-Mobile)",
    location: "DALLAS · TELECOMMUNICATIONS",
    paragraphs: [
      "Built Azure Data Factory and Databricks pipelines to reconcile billing, subscriber, cancellation, and return-order data from Snowflake and Oracle. Developed PySpark and Spark SQL matching rules, fallback handling, and Delta Lake discrepancy case management.",
      "Created reusable notebooks and validation controls, supported UAT with engineering and business teams, and delivered GitLab CI/CD releases with post-deployment validation.",
    ],
  },
  {
    dates: "June 2023 – May 2026",
    title: "Data Engineer",
    employer: "Fiserv",
    location: "DALLAS · FINANCIAL SERVICES",
    paragraphs: [
      "Designed Azure ingestion and distributed transformation pipelines for financial data from settlement systems, merchant portals, and clearinghouses. Built transaction-to-settlement reconciliation and automated exception reporting.",
      "Delivered curated datasets through Azure Synapse Analytics and Azure SQL Database. Implemented data-quality controls, Spark tuning, ADF orchestration and retries, and Azure Monitor health checks with finance and analytics teams.",
    ],
  },
  {
    dates: "June 2018 – July 2021",
    title: "Junior Data Engineer",
    employer: "Sasken Technologies",
    location: "INDIA · NETWORK, BILLING & OPERATIONAL DATA",
    paragraphs: [
      "Developed enterprise ETL/ELT workflows with Azure Data Factory, Azure Data Lake Storage, PySpark, Spark SQL, Hive, and SQL. Ingested API, FTP, and enterprise datasets; flattened JSON logs and standardized timestamps for reporting.",
      "Applied profiling, schema enforcement, reconciliation, and validation controls. Supported Spark optimization, scheduled processing, monitoring, secure data handling, and curated reporting datasets with analysts and business teams.",
    ],
  },
];
