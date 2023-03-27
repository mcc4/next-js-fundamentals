import { Suspense } from "react";
import UserPosts from "./posts";

export default async function Users() {
	const fetchUser = await fetch(
		"https://jsonplaceholder.typicode.com/users/id"
	);
	const user = await fetchUser.json();

	const getUserPosts = fetch(
		"https://jsonplaceholder.typicode.com/posts?userId=1"
	);

	// const [users, posts] = await Promise.all([getUsers, getUserPosts]);

	return (
		<div>
			<h1>Users Page</h1>

			<p>{user.name}</p>

			<Suspense fallback={"Loading..."}>
				{/* @ts-expect-error Async Server Component */}
				<UserPosts promise={getUserPosts} />
			</Suspense>
		</div>
	);
}
