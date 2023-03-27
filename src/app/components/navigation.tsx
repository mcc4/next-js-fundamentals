import Link from "next/link";

export default function Navigation() {
	return (
		<div className="flex flex-row justify-between w-full p-2">
			<div>Mike</div>
			<div>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">Users</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
