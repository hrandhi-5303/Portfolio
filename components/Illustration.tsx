export function Developer() {
  return (
    <svg
      className="developer"
      viewBox="0 0 440 430"
      role="img"
      aria-labelledby="developer-title"
    >
      <title id="developer-title">
        Hand-drawn female data engineer waving hello beside a data pipeline
      </title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M34 353 Q204 348 410 356 M58 361 L54 410 M386 359 L392 410" />
        <path
          d="M138 275 Q130 224 174 211 L252 215 Q286 244 290 304 L275 346 L132 345Z"
          fill="#e5e2d7"
        />
        <path
          d="M161 165 Q143 107 182 89 Q227 61 258 113 L271 217 Q242 234 221 204 L172 209 Q149 209 145 195Z"
          fill="#262521"
        />
        <path
          d="M174 128 Q182 122 194 111 Q209 139 244 134 L245 166 Q240 202 214 204 Q179 197 174 165Z"
          fill="#f8f5ed"
        />
        <path d="M187 155 L192 156 M228 155 L233 154 M207 161 L204 173 L211 175 M198 183 Q209 192 222 181 M204 204 L201 219 M224 202 L232 219" />
        <path d="M179 227 Q199 245 233 224 M152 247 Q132 277 116 280 M235 255 Q254 271 276 282" />
        <g className="wave-arm">
          <path
            d="M151 247 Q119 246 99 214 L82 180 L103 167 Q120 210 159 220"
            fill="#e5e2d7"
          />
          <path
            d="M82 180 Q67 164 64 150 L56 123 Q56 116 62 119 L74 140 L70 108 Q72 98 77 108 L85 134 L85 103 Q90 95 93 107 L95 134 L101 112 Q109 108 107 119 L104 148 Q119 131 123 138 Q126 142 109 161 L103 167"
            fill="#f8f5ed"
          />
        </g>
        <path d="M119 287 Q126 278 143 283 L170 297 M270 284 Q292 276 311 298" />
        <path d="M144 282 L310 284 L290 346 L166 343Z" fill="#f8f5ed" />
        <path d="M156 349 L310 350 M185 307 Q194 301 203 307 Q194 313 185 307 V326 Q194 332 203 326 V307 M203 317 L219 317 M219 310 L235 310 L235 324 L219 324Z M235 317 L254 317 M254 310 L270 310 L270 324 L254 324Z" />
        <path d="M336 316 L363 316 L360 346 L341 346Z M363 320 Q383 319 372 335 L362 337 M343 302 Q337 291 345 283 M355 302 Q361 292 356 285" />
        <path d="M47 276 Q20 249 27 225 Q52 227 57 275 M57 274 Q67 237 86 236 Q89 263 57 284 M42 299 L70 299 L67 346 L47 346Z M56 299 L55 267" />
        <g className="hi-bubble">
          <path
            d="M294 68 Q319 51 352 63 Q375 74 365 102 Q351 121 320 109 L299 126 L304 105 Q282 91 294 68Z"
            fill="#f8f5ed"
          />
          <text
            x="316"
            y="94"
            stroke="none"
            fill="currentColor"
            fontSize="25"
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            hi!
          </text>
        </g>
        <path d="M311 184 L315 173 L319 184 L330 188 L319 191 L315 202 L311 191 L300 188Z M119 69 L124 56 M111 74 L98 70 M133 76 L142 68" />
      </g>
    </svg>
  );
}
export function Sketch({
  kind = "cloud",
}: {
  kind?:
    | "cloud"
    | "reconcile"
    | "finance"
    | "telecom"
    | "ai"
    | "flower"
    | "mail";
}) {
  return (
    <svg
      className={`sketch sketch-${kind}`}
      viewBox="0 0 280 180"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "reconcile" || kind === "finance" ? (
          <>
            <path d="M27 30 L103 27 L108 131 L29 135Z M176 31 L251 34 L247 138 L175 133Z M45 54 L85 54 M45 70 L90 68 M46 86 L77 86 M194 57 L229 57 M191 75 L230 76 M192 93 L222 93 M113 66 Q141 40 166 65 M155 53 L167 66 L154 71 M165 111 Q140 137 115 109 M125 104 L114 108 L121 121" />
            <path d="M46 110 L53 117 L68 100 M195 112 L201 119 L216 104" />
          </>
        ) : kind === "ai" ? (
          <>
            <path d="M60 46 Q54 28 76 23 Q93 13 103 32 Q132 24 137 43 Q154 53 142 69 Q159 88 139 101 Q134 125 111 115 Q90 132 77 113 Q53 116 54 95 Q35 77 53 64 Q38 54 60 46Z M87 38 L94 52 L80 70 L100 85 L90 106 M111 43 L114 68 L131 83 M72 86 L58 95 M95 53 L115 68 M99 85 L117 99 M160 69 L189 69 L189 42 L237 42 M160 93 L202 94 L203 130 L242 130 M211 69 L249 69 M222 93 L249 93" />
            <circle cx="242" cy="42" r="5" />
            <circle cx="247" cy="130" r="5" />
          </>
        ) : kind === "flower" ? (
          <>
            <path d="M142 167 Q129 127 144 89 M141 129 Q110 96 98 116 Q101 140 141 142 M141 111 Q168 88 182 104 Q172 127 140 127" />
            <path d="M144 49 Q120 6 105 30 Q92 50 128 65 Q89 62 97 83 Q104 103 135 81 Q127 113 149 112 Q172 107 153 79 Q190 103 197 81 Q202 61 162 63 Q199 39 180 25 Q157 13 150 49Z" />
            <circle cx="145" cy="65" r="16" />
          </>
        ) : kind === "mail" ? (
          <>
            <path d="M49 56 L226 47 L233 139 L55 147Z M51 57 L140 108 L226 48 M56 144 L112 98 M233 137 L173 92 M91 23 Q136 7 177 21 M190 25 L199 29" />
          </>
        ) : (
          <>
            <path d="M66 79 Q41 78 40 59 Q38 35 65 31 Q76 8 101 23 Q124 4 145 26 Q173 20 181 42 Q208 39 211 62 Q213 83 189 84Z M122 87 L121 112 M121 112 L54 112 L54 131 M122 112 L193 111 L194 130 M121 113 L121 133 M29 134 L81 133 L80 163 L28 164Z M96 134 L148 135 L147 165 L95 164Z M168 133 L221 135 L220 165 L168 163Z M40 145 L64 145 M107 146 L131 146 M181 146 L205 146" />
          </>
        )}
      </g>
    </svg>
  );
}
export function EngineeringSketch({ stage }: { stage: string }) {
  const drawings: Record<string, string> = {
    sources:
      "M28 40 Q52 21 76 40 Q52 57 28 40 M28 40 V90 Q52 109 76 90 V40 M28 65 Q52 84 76 65 M94 40 L145 39 L149 104 L97 105Z M109 56 L134 56 M109 73 L136 72 M81 73 L94 73",
    pipeline:
      "M15 40 L53 39 L53 80 L15 81Z M72 40 L110 39 L110 80 L72 81Z M129 40 L167 39 L167 80 L129 81Z M53 60 L72 60 M110 60 L129 60 M30 54 L40 66 L30 73 M85 55 L96 55 M84 66 L97 66 M142 56 L151 65 L142 74",
    validation:
      "M30 28 L130 26 L134 113 L33 116Z M49 47 L112 47 M49 70 L56 78 L70 61 M80 70 L113 70 M50 95 L57 102 L71 84 M82 94 L113 94",
    processing:
      "M64 26 L120 26 L122 81 L65 82Z M74 26 V17 L131 17 L133 71 M88 48 L101 48 M89 58 L102 58 M45 92 L80 91 L80 114 L45 115Z M109 92 L146 93 L146 116 L109 115Z M93 82 V88 M64 91 V87 L127 87 L127 92",
    monitor:
      "M24 30 L150 28 L153 101 L26 103Z M36 82 L58 81 L70 59 L85 90 L103 46 L117 78 L140 77 M69 116 L112 116 M90 103 V115",
  };
  return (
    <svg
      className="engineering-sketch"
      viewBox="0 0 180 140"
      aria-hidden="true"
    >
      <path
        d={drawings[stage] || drawings.pipeline}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
