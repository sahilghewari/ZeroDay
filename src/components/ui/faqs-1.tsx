import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqsSection() {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
			<div className="space-y-2">
					<h2 className="text-3xl font-bold md:text-4xl">ZeroDay Hackathon — FAQs</h2>
					<p className="text-muted-foreground max-w-2xl">
						Answers to common questions about the ZeroDay Hackathon: who can participate, how to register,
						submission rules, judging criteria, prizes and logistics. If you don't find what you need,
						please reach out to the team.
					</p>
				</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card/50 w-full -space-y-px rounded-lg "
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
					>
						<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<p className="text-muted-foreground">
				Can't find what you're looking for? Contact our{' '}
				<a href="#" className="text-primary hover:underline">
					Email Support
				</a>
			</p>
		</div>
	);
}

const questions = [
	{
		id: 'item-1',
		title: 'What is ZeroDay Hackathon?',
		content:
			'ZeroDay is a social-impact and AI/ML-focused hackathon where students, professionals and hobbyists come together to build solutions that drive measurable social impact. Teams work over the event period to design, prototype and present a working solution.',
	},
	{
		id: 'item-2',
		title: 'Who can participate and are there eligibility rules?',
		content:
			'ZeroDay is open to students, professionals and anyone with an interest in technology and social impact. Some categories may have specific eligibility (e.g., student-only tracks). Check the category rules on the registration page for details.',
	},
	{
		id: 'item-3',
		title: 'How do I register and what is the team size?',
		content:
			'Register via the registration page. Teams may range from 1–4 members unless a category specifies otherwise. Each team should designate one primary contact during registration.',
	},
	{
		id: 'item-4',
		title: 'What are the problem statements and can we propose our own idea?',
		content:
			'We publish official problem statements before the event. Teams can choose one of the provided problems or propose their own idea; unsolicited ideas must still satisfy judging criteria and any category-specific constraints.',
	},
	{
		id: 'item-5',
		title: 'What is the submission format and deadline?',
		content:
			'Submissions must include a link to your repository (GitHub/GitLab), a short demo video (3–5 mins), and a README explaining setup and features. Submission deadlines are listed on the timeline — late submissions may not be accepted.',
	},
	{
		id: 'item-6',
		title: 'How are projects judged?',
		content:
			'Projects are evaluated by a panel of judges against criteria such as impact (social benefit), technical innovation, design and UX, feasibility, and presentation. Check the judging rubric on the website for weights.',
	},
	{
		id: 'item-7',
		title: 'What prizes are available?',
		content:
			'We offer cash prizes, mentorship opportunities, and partner-sponsored rewards across multiple categories. Prize details and category winners are listed on the prizes page.',
	},
	{
		id: 'item-8',
		title: 'Are there any code of conduct or IP rules?',
		content:
			'Participants must follow the event Code of Conduct. Intellectual property rights are typically retained by the creators unless otherwise agreed with sponsors — see the Terms & Conditions for specifics.',
	},
	{
		id: 'item-9',
		title: 'Will there be workshops or mentorship during the event?',
		content:
			'Yes — we run workshops, office hours and mentor sessions throughout the hackathon. Check the schedule for exact times and sign-up details.',
	},
	{
		id: 'item-10',
		title: 'How do I get support on the day of the event?',
		content:
			'Use the event Slack/Discord channels for help, or contact the support team via the email provided on the site. There will also be on-site/virtual volunteers to assist with logistics and technical questions.',
	},
];
