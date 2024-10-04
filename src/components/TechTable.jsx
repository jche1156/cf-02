export default function TechTable() {
  return (
    <article>
      <header>
        <strong>Technologies</strong>
      </header>
      <table class="striped">
        <thead>
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cloudflare Workers</th>
            <td>Serverless Platform</td>
          </tr>
          <tr>
            <th scope="row">Cloudflare AI</th>
            <td>Gen AI Gateway</td>
          </tr>
          <tr>
            <th scope="row"><s>OpenAI ChatGPT</s> Meta Llama 3.2 3B Instruct</th>
            <td>LLM Model</td>
          </tr>
          <tr>
            <th scope="row">Hono</th>
            <td>Web Framework</td>
          </tr>
          <tr>
            <th scope="row">HTMX</th>
            <td>AJAX</td>
          </tr>
          <tr>
            <th scope="row">Wrangler</th>
            <td>All-In-One Cloud Deployment Tool</td>
          </tr>
          <tr>
            <th scope="row">Pico CSS</th>
            <td>Semantic HTML Library</td>
          </tr>
        </tbody>
      </table>
    
    </article>
  );
}
