export default function App() {
  return (
    <>
    <h1>Hello Cloudflare!</h1>
    <section id="introduction">
      <p>This is a Javascript-based backend built entirely within Cloudflare's platform!</p>
    </section>
    <section id="summary">
      <h2>Demo</h2>
      <article>
        <header>A Totally Functional Widget</header>
        <form hx-post="/api/health" hx-swap="afterend">
          <input name="prompt" type="text" placeholder="Chat" />
          <input type="submit" value="Submit" />
        </form>  
      </article>
    </section>
    <section>
      <h2>Next steps:</h2>
      <ul>
        <li>Hono</li>
        <li>Cloudflare Workers</li>
        <li>D1</li>
        <li>KV</li>
        <li>AI</li>
      </ul>
    </section>
    </>
  );
}
