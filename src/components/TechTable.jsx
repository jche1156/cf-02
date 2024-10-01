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
            <th scope="row">Cloudflare D1</th>
            <td>SQL Database</td>
          </tr>
          <tr>
            <th scope="row">Cloudflare KV</th>
            <td>Key-Value Store</td>
          </tr>
          <tr>
            <th scope="row">Cloudflare AI</th>
            <td>Gen AI Gateway</td>
          </tr>
          <tr>
            <th scope="row">OpenAI ChatGPT</th>
            <td>LLM Models</td>
          </tr>
          <tr>
            <th scope="row">Hono</th>
            <td>Web Framework</td>
          </tr>
        </tbody>
      </table>
    
    </article>
  );
}
