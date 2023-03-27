import { Post } from "../models/user";

interface Props {
	promise: Promise<Post[]>;
}

export default async function UserPosts({ promise }: Props) {
	const posts = await promise;
	return (
		<>
			{posts.map((p) => {
				return <div key={p.id}>{p.title}</div>;
			})}
		</>
	);
}
