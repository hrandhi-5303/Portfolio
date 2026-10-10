export default function Architecture({
  kind,
}: {
  kind: "reconcile" | "cloud" | "ai";
}) {
  const nodes =
    kind === "reconcile"
      ? [
          {
            x: 15,
            y: 35,
            w: 155,
            h: 60,
            label: "Oracle",
            sub: "Operational source",
          },
          {
            x: 15,
            y: 175,
            w: 155,
            h: 60,
            label: "Snowflake",
            sub: "Analytical source",
          },
          {
            x: 235,
            y: 95,
            w: 180,
            h: 70,
            label: "Databricks",
            sub: "Ingest + transform",
          },
          {
            x: 480,
            y: 95,
            w: 165,
            h: 70,
            label: "Reconciliation",
            sub: "Business rules",
          },
          {
            x: 710,
            y: 30,
            w: 155,
            h: 60,
            label: "Matching",
            sub: "Consistent records",
          },
          {
            x: 710,
            y: 170,
            w: 155,
            h: 60,
            label: "Discrepancies",
            sub: "Case management",
          },
          {
            x: 480,
            y: 260,
            w: 165,
            h: 60,
            label: "Delta Lake",
            sub: "Processing history",
          },
        ]
      : kind === "cloud"
        ? [
            {
              x: 15,
              y: 95,
              w: 135,
              h: 70,
              label: "Data sources",
              sub: "Enterprise datasets",
            },
            {
              x: 195,
              y: 95,
              w: 135,
              h: 70,
              label: "Data Factory",
              sub: "Ingestion",
            },
            {
              x: 375,
              y: 95,
              w: 135,
              h: 70,
              label: "Databricks",
              sub: "Transform + validate",
            },
            {
              x: 555,
              y: 95,
              w: 135,
              h: 70,
              label: "Delta Lake",
              sub: "Track + process",
            },
            {
              x: 735,
              y: 95,
              w: 145,
              h: 70,
              label: "Analytical store",
              sub: "Azure SQL / Snowflake",
            },
          ]
        : [
            {
              x: 15,
              y: 45,
              w: 180,
              h: 70,
              label: "Data sources",
              sub: "Scoped datasets",
            },
            {
              x: 15,
              y: 195,
              w: 180,
              h: 70,
              label: "Context",
              sub: "Approved documents",
            },
            {
              x: 310,
              y: 110,
              w: 190,
              h: 80,
              label: "AI agent",
              sub: "Proposed RAG workflow",
            },
            {
              x: 615,
              y: 40,
              w: 240,
              h: 70,
              label: "Validation checks",
              sub: "Profile + detect anomalies",
            },
            {
              x: 615,
              y: 195,
              w: 240,
              h: 70,
              label: "Investigation results",
              sub: "Evidence + human review",
            },
          ];
  const paths =
    kind === "reconcile"
      ? [
          "M170 65 H200 V120 H235",
          "M170 205 H200 V140 H235",
          "M415 130 H480",
          "M645 120 H680 V60 H710",
          "M645 145 H680 V200 H710",
          "M788 230 V290 H645",
        ]
      : kind === "cloud"
        ? ["M150 130 H195", "M330 130 H375", "M510 130 H555", "M690 130 H735"]
        : [
            "M195 80 H250 V135 H310",
            "M195 230 H250 V165 H310",
            "M500 135 H550 V75 H615",
            "M500 165 H550 V230 H615",
          ];
  const title =
    kind === "reconcile"
      ? "Reconciliation architecture"
      : kind === "cloud"
        ? "Cloud data pipeline"
        : "Proposed AI investigation workflow";
  return (
    <figure className="architecture">
      <div
        className="diagram-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${title}, horizontally scrollable on small screens`}
      >
        <svg viewBox="0 0 900 350" role="img" aria-label={title}>
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
                fill="#f8f5ed"
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
      <figcaption>
        {kind === "reconcile"
          ? "Oracle and Snowflake → ingestion and Databricks transformation → reconciliation rules → matching or discrepancies → case management and Delta Lake tracking."
          : kind === "cloud"
            ? "Data sources → Azure Data Factory → Azure Databricks → Delta Lake → analytical data store. Simplified view of the processing stages."
            : "Proposed concept: data sources and approved context → AI agent → validation checks and investigation results. No production deployment is claimed."}
      </figcaption>
    </figure>
  );
}
