
export const health = async (c) => {
	const formData = await c.req.parseBody();
	return c.html(
		<article>
			<header>You Sent a Message</header>
			{formData.prompt}
		</article>
	);
};

