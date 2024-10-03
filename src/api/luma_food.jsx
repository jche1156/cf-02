
function safeJSONParse(jsonString) {
    try {
        // Try parsing the JSON
        return JSON.parse(jsonString);
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.error("SyntaxError: Unable to parse JSON. Attempting to fix...");
            // Attempt common fixes (e.g., replace unescaped quotes)
            const fixedString = jsonString
                .replace(/[\u0000-\u0019]+/g, "") // Remove control characters
                .replace(/\\(?!["\\/bfnrtu])/g, ""); // Fix unescaped backslashes

            try {
                // Retry parsing the fixed string
                return JSON.parse(fixedString);
            } catch (secondError) {
                console.error("Second attempt to parse failed.");
                return null; // Return null or handle accordingly if still invalid
            }
        } else {
            // Handle other types of errors if needed
            console.error("Unknown error while parsing JSON:", e);
            return null;
        }
    }
}

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

	let ans = safeJSONParse(result["response"]);
	
	return c.html(
		<article id="luma-results">
			<header>Free Food? {ans["free_food"] ? "Free Food Found" : "No Free Food"}</header>
			<p>Reasoning: {ans["reasoning"]}</p>
		</article>
	);
	
	// return c.json(result["response"]);
};

