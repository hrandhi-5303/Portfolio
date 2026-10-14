type Kind = "reconcile" | "finance" | "telecom" | "ai";
export default function Architecture({ kind }: { kind: Kind }) {
  const labels: Record<Kind, string[][]> = {
    reconcile: [
      ["Oracle", "Operational source"],
      ["Snowflake", "Analytical source"],
      ["Azure Databricks", "ADF ingestion + transformation"],
      ["PySpark rules", "Spark SQL reconciliation"],
      ["Discrepancy detection", "Cross-system comparisons"],
      ["Delta Lake", "Create / update / close cases"],
    ],
    finance: [
      ["Financial sources", "Transactions + settlements"],
      ["Azure Data Factory", "Batch + near real-time ingestion"],
      ["ADLS Gen2", "Raw financial datasets"],
      ["Databricks / PySpark", "Distributed transformations"],
      ["Reconcile + validate", "Quality controls + exceptions"],
      ["Synapse / Azure SQL", "Curated serving layers"],
      ["Reporting + analytics", "Finance, settlements + audit"],
    ],
    telecom: [
      ["Telecom sources", "Network, subscriber + billing"],
      ["Ingestion", "ADF / APIs / FTP"],
      ["Data Lake", "CSV / JSON / Parquet"],
      ["PySpark / Spark SQL", "Transform + standardize"],
      ["Quality validation", "Schema + reconciliation checks"],
      ["Curated data", "Validated reporting datasets"],
      ["Business analytics", "Usage, billing + KPI reporting"],
    ],
    ai: [
      ["Data sources", "Scoped datasets"],
      ["Approved context", "Documentation for retrieval"],
      ["AI agent", "Proposed RAG workflow"],
      ["Validation checks", "Profile + investigate anomalies"],
      ["Investigation results", "Evidence + human review"],
    ],
  };
  const reconcilePositions = [
    [45, 20],
    [655, 20],
    [350, 130],
    [350, 240],
    [45, 350],
    [655, 350],
  ];
  const pipelinePositions = [
    [15, 40],
    [240, 40],
    [465, 40],
    [690, 40],
    [690, 230],
    [465, 230],
    [240, 230],
  ];
  const aiPositions = [
    [45, 20],
    [655, 20],
    [350, 145],
    [45, 290],
    [655, 290],
  ];
  const positions =
    kind === "reconcile"
      ? reconcilePositions
      : kind === "ai"
        ? aiPositions
        : pipelinePositions;
  const nodes = labels[kind].map(([label, sub], i) => ({
    label,
    sub,
    x: positions[i][0],
    y: positions[i][1],
    w: 190,
    h: 70,
  }));
  const paths =
    kind === "reconcile"
      ? [
          "M235 55 H290 V165 H350",
          "M655 55 H600 V165 H540",
          "M445 200 V240",
          "M350 275 H140 V350",
          "M235 385 H655",
        ]
      : kind === "ai"
        ? [
            "M235 55 H290 V180 H350",
            "M655 55 H600 V180 H540",
            "M350 180 H140 V290",
            "M540 180 H750 V290",
          ]
        : [
            "M205 75 H240",
            "M430 75 H465",
            "M655 75 H690",
            "M785 110 V230",
            "M690 265 H655",
            "M465 265 H430",
          ];
  const title =
    kind === "reconcile"
      ? "Enterprise telecom reconciliation architecture"
      : kind === "finance"
        ? "Financial data engineering and settlement architecture"
        : kind === "telecom"
          ? "Telecom data processing and analytics architecture"
          : "Proposed AI investigation workflow";
  const captions: Record<Kind, string> = {
    reconcile:
      "Oracle and Snowflake → Azure Databricks → PySpark reconciliation rules → discrepancy detection → Delta Lake case tracking. Azure Data Factory orchestrates ingestion. Simplified public architecture.",
    finance:
      "Financial sources → Azure Data Factory → ADLS Gen2 → Databricks / PySpark → reconciliation and validation → Azure Synapse / Azure SQL → reporting and analytics.",
    telecom:
      "Telecom sources → ingestion → data lake → PySpark / Spark SQL → quality validation → curated data → business analytics.",
    ai: "Proposed research concept: scoped data and approved context → AI agent → validation checks and investigation results. No production implementation is claimed.",
  };
  return (
    <figure className="architecture">
      <div
        className="diagram-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${title}, horizontally scrollable on small screens`}
      >
        <svg viewBox="0 0 900 450" role="img" aria-label={title}>
          <title>{title}</title>
          <defs>
            <marker
              id={`arrow-${kind}`}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="currentColor" />
            </marker>
          </defs>
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {paths.map((d, i) => (
              <g key={d}>
                <path d={d} markerEnd={`url(#arrow-${kind})`} />
                <circle
                  className="flow-dot"
                  r="3"
                  fill="currentColor"
                  style={{
                    offsetPath: `path('${d}')`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              </g>
            ))}
            {nodes.map((node) => (
              <path
                key={node.label}
                d={`M${node.x} ${node.y + 2} Q${node.x + node.w / 2} ${node.y - 3} ${node.x + node.w} ${node.y} L${node.x + node.w - 2} ${node.y + node.h} Q${node.x + node.w / 2} ${node.y + node.h + 4} ${node.x} ${node.y + node.h}Z`}
                fill="#ffffff"
              />
            ))}
          </g>
          {nodes.map((node) => (
            <g key={node.label} textAnchor="middle" fill="currentColor">
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 - 2}
                fontSize="15"
                fontFamily="Arial,sans-serif"
              >
                {node.label}
              </text>
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 + 18}
                fontSize="10"
                fontFamily="Arial,sans-serif"
              >
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption>{captions[kind]}</figcaption>
    </figure>
  );
}
