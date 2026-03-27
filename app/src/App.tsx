import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Cloud, ExternalLink, MessageCircle } from "lucide-react";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { api } from "./lib/trpcClient";

function App() {
	const utils = api.useUtils();

	const { data, isLoading, isError } = api.counter.get.useQuery();

	const incrementMutation = api.counter.increment.useMutation({
		onSuccess: async () => {
			await utils.counter.get.invalidate();
		},
	});

	const count = data?.count ?? "--";

	return (
		<div className="min-h-screen bg-background text-foreground p-8">
			{/* Hero Section */}
			<section className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 py-12">
				<div className="flex items-center justify-center -space-x-4">
					<div className="p-4 bg-muted rounded-full">
						<img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
					</div>
					<div className="p-4 bg-muted rounded-full z-10">
						<img
							src={reactLogo}
							className="w-16 h-16 animate-spin-slow"
							alt="React logo"
						/>
					</div>
				</div>

				<div className="space-y-4">
					<Badge variant="outline">UNC Charlotte x Vite v4</Badge>
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
						Niner Dashboard <span className="text-primary">Redux</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-prose mx-auto">
						Edit <code>src/App.tsx</code> to start building your custom student
						experience.
					</p>
				</div>

				<Button
					variant="default"
					size="lg"
					onClick={() => incrementMutation.mutate()}
					disabled={isLoading || incrementMutation.isPending}
				>
					Count is {count}
				</Button>
				{isError && (
					<p className="text-sm text-destructive">
						Failed to load counter from backend.
					</p>
				)}
			</section>

			{/* Bento Grid Section */}
			<section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<ExternalLink className="w-5 h-5" /> Documentation
						</CardTitle>
						<CardDescription>
							Your technical questions, answered
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						<Button
							variant="secondary"
							asChild
							className="w-full justify-start"
						>
							<a href="https://vite.dev/" target="_blank">
								<img src={viteLogo} className="w-4 h-4 mr-2" alt="" /> Explore
								Vite
							</a>
						</Button>
						<Button
							variant="secondary"
							asChild
							className="w-full justify-start"
						>
							<a href="https://react.dev/" target="_blank">
								<img src={reactLogo} className="w-4 h-4 mr-2" alt="" /> Learn
								React
							</a>
						</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Connect with us</CardTitle>
						<CardDescription>Join the developer community</CardDescription>
					</CardHeader>
					<CardContent className="grid grid-cols-2 gap-3">
						<Button variant="outline" asChild>
							<a href="https://github.com/vitejs/vite" target="_blank">
								<ExternalLink className="w-4 h-4 mr-2" /> GitHub
							</a>
						</Button>
						<Button variant="outline" asChild>
							<a href="https://chat.vite.dev/" target="_blank">
								<MessageCircle className="w-4 h-4 mr-2" /> Discord
							</a>
						</Button>
						<Button variant="outline" asChild>
							<a href="https://x.com/vite_js" target="_blank">
								<ExternalLink className="w-4 h-4 mr-2" /> X.com
							</a>
						</Button>
						<Button variant="outline" asChild>
							<a href="https://bsky.app/" target="_blank">
								<Cloud className="w-4 h-4 mr-2" /> Bluesky
							</a>
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}

export default App;
