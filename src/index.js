import { Hono } from 'hono';
import { api } from './api';
import Home from "./components/Home";
import About from "./components/About";
const app = new Hono()

app.route("/api", api);

app.get('/', async(c) => {
	return c.html(<Home />);
})

app.get('/about', async(c) => {
	return c.html(<About />);
})

export default app;
