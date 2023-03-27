export const getUserById = async (id: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	return await res.json();
};

export const getUsersPosts = async (id: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);
	return await res.json();
};
