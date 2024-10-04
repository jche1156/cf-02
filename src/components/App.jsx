export default function App() {
  return (
    <>
    <h1>Hello Cloudflare!</h1>
    <section id="introduction">
      <p>This is a Javascript-based backend built entirely within Cloudflare's platform!</p>
      <p>In this demo, you can use the widget to parse an event's description, and Hack-bot will tell you whether or not the event is worth going to!</p>
      
    </section>
    <section id="summary">
      <h2>Demos</h2>
      <article>
        <header>Tech Event Summarizer</header>
        <form hx-post="/api/oai_food" hx-target="#luma-results">
          <input name="question" type="text" placeholder="event_info" />
          <input type="submit" value="Submit" />
        </form>
        <div id="luma-results" />
      </article>
    </section>
    <section>
      <h2>Cool Stuffs:</h2>
      <ul>
        <li><a href="https://api.lu.ma/discover/get-paginated-events?discover_place_api_id=discplace-BDj7GNbGlsF7Cka&pagination_limit=50">Luma Public API</a></li>
      </ul>
    </section>
    </>
  );
}
