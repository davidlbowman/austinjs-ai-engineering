import { ArrowDown, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const tradeoffs = [
	{
		benefit: "Increased Productivity",
		benefitDetail: "45% reduction in development time",
		cost: "Skill Erosion",
		costDetail: "Weaker debugging abilities",
	},
	{
		benefit: "Improved Code Quality",
		benefitDetail: "Early bug detection",
		cost: "Security Issues",
		costDetail: "Vulnerable code generation",
	},
	{
		benefit: "Better Collaboration",
		benefitDetail: "Data-driven insights",
		cost: "Integration Complexity",
		costDetail: "Steep learning curves",
	},
	{
		benefit: "Personalized Assistance",
		benefitDetail: "Adapts to coding styles",
		cost: "Job Role Shifts",
		costDetail: "25% work shifting to AI",
	},
];

export function ProsConsSection() {
	return (
		<section>
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-center mb-12">
					Benefits & Costs of AI in Software Engineering
				</h2>

				<Card>
					<CardHeader>
						<CardTitle>The Trade-offs</CardTitle>
						<CardDescription>
							Every benefit comes with an associated cost that engineers must
							consider
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="overflow-x-auto">
							<table className="w-full table-fixed">
								<tbody>
									{tradeoffs.map((item) => (
										<tr key={item.benefit} className="border-b last:border-0">
											<td className="py-4 px-2 w-[45%] hidden md:table-cell">
												<div className="flex items-start gap-2">
													<CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
													<div>
														<div className="text-purple-600 dark:text-purple-400 font-semibold">
															{item.benefit}
														</div>
														<div className="text-sm mt-1">
															{item.benefitDetail}
														</div>
													</div>
												</div>
											</td>
											<td className="py-4 px-2 w-[10%] text-center hidden md:table-cell">
												<ArrowRight className="h-5 w-5 text-purple-500 dark:text-purple-400 inline-block" />
											</td>
											<td className="py-4 px-2 w-[45%] hidden md:table-cell">
												<div className="flex items-start gap-2 justify-end">
													<div className="text-right">
														<div className="text-purple-500/60 dark:text-purple-400/60 font-semibold">
															{item.cost}
														</div>
														<div className="text-sm mt-1">
															{item.costDetail}
														</div>
													</div>
													<XCircle className="h-5 w-5 text-purple-500/60 dark:text-purple-400/60 flex-shrink-0 mt-0.5" />
												</div>
											</td>

											<td className="py-4 px-2 md:hidden">
												<div className="text-center space-y-3">
													<div>
														<div className="text-purple-600 dark:text-purple-400 font-semibold">
															{item.benefit}
														</div>
														<div className="text-sm">{item.benefitDetail}</div>
													</div>
													<ArrowDown className="h-4 w-4 text-purple-500 dark:text-purple-400 mx-auto" />
													<div>
														<div className="text-purple-500/60 dark:text-purple-400/60 font-semibold">
															{item.cost}
														</div>
														<div className="text-sm">{item.costDetail}</div>
													</div>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="mt-8 p-4 border rounded-lg bg-purple-100/70 dark:bg-purple-900/20">
							<p className="text-center">
								<strong>Key Insight:</strong> AI enhances efficiency and
								innovation, but introduces risks tied to its inherent
								limitations in{" "}
								<span className="text-accent-purple">context and compute</span>,
								which engineers must actively mitigate.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
