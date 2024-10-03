export default function App() {
  return (
    <>
    <h1>Hello Cloudflare!</h1>
    <section id="introduction">
      <p>This is a Javascript-based backend built entirely within Cloudflare's platform!</p>
    </section>
    <section id="summary">
      <h2>Demos</h2>
      <article>
        <header>Luma Food</header>
        <form hx-post="/api/luma_food" hx-target="#luma-results">
          <input name="question" type="text" placeholder="event_info" />
          <input type="submit" value="Submit" />
        </form>
        <div id="luma-results" />
      </article>
    </section>
    <section>
      <h2>Next steps:</h2>
      <ul>
        <li><s>Hono</s></li>
        <li><s>Cloudflare Workers</s></li>
        <li>D1</li>
        <li><s>KV</s></li>
        <li><s>AI</s></li>
      </ul>
    </section>
    </>
  );
}
