import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

export const oai_food = async (c) => {
	const formData = await c.req.parseBody();
	const apiKey = c.env.OPENAI_API_KEY; 
	const baseUrl = c.env.AI_GATEWAY_ENDPOINT;

	const Step = z.object({
		explanation: z.string(),
		output: z.string(),
	});

	const Reasoning = z.object({
		steps: z.array(Step),
		conclusion: z.string(),
		has_food: z.boolean(),
		color_code: z.string(),
		score: z.number(),
	});

	const openai = new OpenAI({
	  apiKey,
	  baseUrl,
	});

  const model = "gpt-4o-mini";
	let analyses = {};
	let messages;
	let topic;
	let concern;
	let response;
	let content;
	let chatCompletion;

	// START COPYPASTA
	// -----------------------------------
	// As a visitor, I want to know whether there is free food at the event.
  topic = "Food";
  concern = "Will there be food? Will it be free?";
  messages = [
    { role: "system", content: `You are an events concierge, helping people find events they are interested in. You will be given an events description. Answer the following question: '${concern}' Guide the user through the reasoning behind your conclusion step by step. You will also be assigning a color code based on the likelihood of there being food. Use a gradient from #b54433 for 'No ${topic}', #f5c489 for 'Possibly ${topic}', and #8ecf3a for 'Confirmed ${topic}'. Also, you'll give a score out of 100 based on your assessment of the likelihood.` },
    { role: "user", content: formData.question },
  ];
  chatCompletion = await openai.chat.completions.create({
	  model,
	  messages,
	  response_format: zodResponseFormat(Reasoning, "reasoning"),
	  max_tokens: 512,
	});
	response = chatCompletion.choices[0].message;
  content = JSON.parse(response.content);
    analyses[topic] = {
	  headerColor: content.color_code,
	  conclusion: content.conclusion,
	  score: content.score,
	}
  analyses[topic].headline = (
	content.score >= 85 ? `${topic}!` : 
	(content.score >= 60 ? `Possibly ${topic}` : 
	(content.score >= 30 ? `Potentially ${topic}` : `${topic} Unlikely`)))
	// -----------------------------------
	// As a visitor, I want to know whether there are drinks at the event.
  topic = "Drinks";
  concern = "Are there be beverages being served?";
  messages = [
    { role: "system", content: `You are an events concierge, helping people find events they are interested in. You will be given an events description. Answer the following question: '${concern}' Guide the user through the reasoning behind your conclusion step by step. You will also be assigning a color code based on the likelihood of there being food. Use a gradient from #b54433 for 'No ${topic}', #f5c489 for 'Possibly ${topic}', and #8ecf3a for 'Confirmed ${topic}'. Also, you'll give a score out of 100 based on your assessment of the likelihood.` },
    { role: "user", content: formData.question },
  ];
  chatCompletion = await openai.chat.completions.create({
	  model,
	  messages,
	  response_format: zodResponseFormat(Reasoning, "reasoning"),
	  max_tokens: 512,
	});
	response = chatCompletion.choices[0].message;
  content = JSON.parse(response.content);
    analyses[topic] = {
	  headerColor: content.color_code,
	  conclusion: content.conclusion,
	  score: content.score,
	}
  analyses[topic].headline = (
	content.score >= 85 ? `${topic}!` : 
	(content.score >= 60 ? `Possibly ${topic}` : 
	(content.score >= 30 ? `Potentially ${topic}` : `${topic} Unlikely`)))
	// -----------------------------------
	// As a visitor, I want to know whether there is free food at the event.
  topic = "Coding";
  concern = "Will there be coding?";
  messages = [
    { role: "system", content: `You are an events concierge, helping people find events they are interested in. You will be given an events description. Answer the following question: '${concern}' Guide the user through the reasoning behind your conclusion step by step. You will also be assigning a color code based on the likelihood of there being food. Use a gradient from #b54433 for 'No ${topic}', #f5c489 for 'Possibly ${topic}', and #8ecf3a for 'Confirmed ${topic}'. Also, you'll give a score out of 100 based on your assessment of the likelihood.` },
    { role: "user", content: formData.question },
  ];
  chatCompletion = await openai.chat.completions.create({
	  model,
	  messages,
	  response_format: zodResponseFormat(Reasoning, "reasoning"),
	  max_tokens: 512,
	});
	response = chatCompletion.choices[0].message;
  content = JSON.parse(response.content);
    analyses[topic] = {
	  headerColor: content.color_code,
	  conclusion: content.conclusion,
	  score: content.score,
	}
  analyses[topic].headline = (
	content.score >= 85 ? `${topic}!` : 
	(content.score >= 60 ? `Possibly ${topic}` : 
	(content.score >= 30 ? `Potentially ${topic}` : `${topic} Unlikely`)))
	// -----------------------------------
	// As a visitor, I want to know whether there is free food at the event.
  topic = "Prizes";
  concern = "Will there be prizes?";
  messages = [
    { role: "system", content: `You are an events concierge, helping people find events they are interested in. You will be given an events description. Answer the following question: '${concern}' Guide the user through the reasoning behind your conclusion step by step. You will also be assigning a color code based on the likelihood of there being food. Use a gradient from #b54433 for 'No ${topic}', #f5c489 for 'Possibly ${topic}', and #8ecf3a for 'Confirmed ${topic}'. Also, you'll give a score out of 100 based on your assessment of the likelihood.` },
    { role: "user", content: formData.question },
  ];
  chatCompletion = await openai.chat.completions.create({
	  model,
	  messages,
	  response_format: zodResponseFormat(Reasoning, "reasoning"),
	  max_tokens: 512,
	});
	response = chatCompletion.choices[0].message;
  content = JSON.parse(response.content);
    analyses[topic] = {
	  headerColor: content.color_code,
	  conclusion: content.conclusion,
	  score: content.score,
	}
  analyses[topic].headline = (
	content.score >= 85 ? `${topic}!` : 
	(content.score >= 60 ? `Possibly ${topic}` : 
	(content.score >= 30 ? `Potentially ${topic}` : `${topic} Unlikely`)))
	// -----------------------------------
	// END COPYPASTA




	// Format the data as a payload to the webpage
	
	return c.html(
		<div id="luma_results">
			<article id="luma-food">
				<header style={`color: white; background-color: ${analyses["Food"]["headerColor"]}`}>{analyses["Food"].headline}</header>
				<p>{analyses["Food"].conclusion}</p>
			</article>
			<article id="luma-drinks">
				<header style={`color: white; background-color: ${analyses["Drinks"]["headerColor"]}`}>{analyses["Drinks"].headline}</header>
				<p>{analyses["Drinks"].conclusion}</p>
			</article>
			<article id="luma-coding">
				<header style={`color: white; background-color: ${analyses["Coding"]["headerColor"]}`}>{analyses["Coding"].headline}</header>
				<p>{analyses["Coding"].conclusion}</p>
			</article>
			<article id="luma-prizes">
				<header style={`color: white; background-color: ${analyses["Prizes"]["headerColor"]}`}>{analyses["Prizes"].headline}</header>
				<p>{analyses["Prizes"].conclusion}</p>
			</article>
		</div>
	);
};

// <footer>
// 	Content: <span>{JSON.stringify(content)}</span>
// </footer>
