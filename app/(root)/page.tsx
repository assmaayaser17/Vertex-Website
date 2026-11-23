// "/" has no content of its own: send visitors to /ar/ or /en/ based on browser language.
const redirect = `(function(){var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";location.replace(/^ar\\b/i.test(l)?"/ar/":"/en/");})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en/" />
      </noscript>
      <p style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
        <a href="/en/">English</a> · <a href="/ar/">العربية</a>
      </p>
    </>
  );
}
