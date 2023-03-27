import { Suspense } from "react";
import UserPosts from "./posts";
import { getUserById, getUsersPosts } from "./users";

export default async function Users() {
	const user = await getUserById("1");
	const userPosts = await getUsersPosts("1");

	return (
		<div>
			<h1>Users Page</h1>

			<p>{user.name}</p>

			<Suspense fallback={"Loading..."}>
				{/* @ts-expect-error Async Server Component */}
				<UserPosts promise={userPosts} />
			</Suspense>
		</div>
	);
}
