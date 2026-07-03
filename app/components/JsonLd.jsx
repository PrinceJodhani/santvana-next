// app/components/JsonLd.jsx
// Renders a schema.org JSON-LD block. Server component (no client JS shipped).

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (our own data, no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
