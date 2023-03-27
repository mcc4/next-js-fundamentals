import { Suspense } from "react";

export default async function Users() {
	const fetchUser = await fetch(
		"https://jsonplaceholder.typicode.com/users/id"
	);
	const user = await fetchUser.json();
	const getUserPosts = await fetch(
		"https://jsonplaceholder.typicode.com/posts?userId=1"
	).then((res) => res.json());

	// const [users, posts] = await Promise.all([getUsers, getUserPosts]);

	return (
		<div>
			<h1>Users Page</h1>

			<p>{user.name}</p>
			<Suspense fallback={"Loading..."}>
				{getUserPosts.map((p) => {
					return <div key={p.id}>{p.title}</div>;
				})}
			</Suspense>
		</div>
	);
}
