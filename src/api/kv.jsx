export const kv = async (c) => {
  const formData = await c.req.parseBody();
	let value1 = await c.env.hello_kv.get(formData.key);
	await c.env.hello_kv.put(formData.key, formData.value);
	let value2 = await c.env.hello_kv.get(formData.key);

	return c.html(
		<article id="kv-results">
			<header>Updating key {formData.key} with {formData.value}</header>
			<p>Old value: {value1}</p>
			<p>New value: {value2}</p>
		</article>
	);
};

