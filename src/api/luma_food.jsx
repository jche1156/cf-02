
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
	const sys_prompt_food = `You are helping people find events they're interested in by summarizing and highlighting the most pertinent information. 

Is there free food here?

---
${formData.question}
---

Answer like so, with no additional content: 

{"free_food": (true || false),"reasoning": string}`  	
	const result_food = await c.env.AI.run(
		'@cf/meta/llama-3.2-3b-instruct', 
		{
			messages: [
				{ 
					role: 'user', 
					content: sys_prompt_food,
				},
			],
		});

	let ans_food = safeJSONParse(result_food["response"]);

	const sys_prompt_drinks = `You are helping people find events they're interested in by summarizing and highlighting the most pertinent information. 

Is there alcohol or beverages mentioned here?

---
${formData.question}
---

Answer like so, with no additional content: 

{"drinks": (true || false),"reasoning": string}`  	
	const result_drinks = await c.env.AI.run(
		'@cf/meta/llama-3.2-3b-instruct', 
		{
			messages: [
				{ 
					role: 'user', 
					content: sys_prompt_drinks,
				},
			],
		});

	let ans_drinks = safeJSONParse(result_drinks["response"]);

	const sys_prompt_coding = `You are helping people find events they're interested in by summarizing and highlighting the most pertinent information. 

Is the event a Hackathon or involves coding during the event?

---
${formData.question}
---

Answer like so, with no additional content: 

{"coding": (true || false),"reasoning": string}`  	
	const result_coding = await c.env.AI.run(
		'@cf/meta/llama-3.2-3b-instruct', 
		{
			messages: [
				{ 
					role: 'user', 
					content: sys_prompt_coding,
				},
			],
		});

	let ans_coding = safeJSONParse(result_coding["response"]);

	const sys_prompt_prizes = `You are helping people find events they're interested in by summarizing and highlighting the most pertinent information. 

Does the event mention prizes or rewards!
---
${formData.question}
---

Answer like so, with no additional content: 

{"prizes": (true || false),"reasoning": string}`  	
	const result_prizes = await c.env.AI.run(
		'@cf/meta/llama-3.2-3b-instruct', 
		{
			messages: [
				{ 
					role: 'user', 
					content: sys_prompt_prizes,
				},
			],
		});

	let ans_prizes = safeJSONParse(result_prizes["response"]);
	
	return c.html(
		<div id="luma_results">
			<article id="luma-food">
				<header style={ans_food["free_food"] ? "background-color: green; color: white;" : "background-color: red; color: white;"}>{ans_food["free_food"] ? "Free Food Found" : "No Free Food"}</header>
				<p>Reasoning: {ans_food["reasoning"]}</p>
			</article>
			<article id="luma-drinks">
				<header style={ans_drinks["drinks"] ? "background-color: green; color: white;" : "background-color: red; color: white;"}>{ans_drinks["drinks"] ? "Drinks" : "No Drinks..."}</header>
				<p>Reasoning: {ans_drinks["reasoning"]}</p>
			</article>
			<article id="luma-coding">
				<header style={ans_coding["coding"] ? "background-color: green; color: white;" : "background-color: red; color: white;"}>{ans_coding["coding"] ? "Coding" : "No Coding..."}</header>
				<p>Reasoning: {ans_coding["reasoning"]}</p>
			</article>
			<article id="luma-prizes">
				<header style={ans_prizes["prizes"] ? "background-color: green; color: white;" : "background-color: red; color: white;"}>{ans_prizes["prizes"] ? "Prizes!" : "No Prizes..."}</header>
				<p>Reasoning: {ans_prizes["prizes"]}</p>
			</article>
		</div>
	);
	
	// return c.json(result["response"]);
};

