
export const luma_food = async (c) => {
	const formData = await c.req.parseBody();
	const sys_prompt = `You are helping people find events they're interested in by summarizing and highlighting the most pertinent information. 

Is there free food here?

---
${formData.question}
---

Answer like so, with no additional content: 

{"free_food": (true || false),"reasoning": string}`  	
	const result = await c.env.AI.run(
		'@cf/meta/llama-3.2-3b-instruct', 
		{
			messages: [
				{ 
					role: 'user', 
					content: sys_prompt,
				},
			],
		});
	let response = await c.req.parseBody();

	return c.html(
		<article id="luma-results">
			<header>Free Food? {result.response.free_food}</header>
			<p>Reason: {result.response.reasoning}</p>
			<p>Debug: {JSON.stringify(result)}</p>
		</article>
	);
	
	// return c.json(result["response"]);
};

