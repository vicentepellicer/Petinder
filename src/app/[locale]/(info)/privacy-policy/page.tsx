import { ChevronLeftCircle } from 'lucide-react';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Container,
} from '@/components/ui';

interface PrivacyPolicyPageProps {
	params: {
		locale: string;
	};
}

// TODO: Add translations

const privacyPolicyItems = [
	{
		title: 'Information Collection and Use',
		text: 'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name ("Personal Information").',
	},
	{
		title: 'Log Data',
		text: "Like many site operators, we collect information that your browser sends whenever you visit our Site ('Log Data'). This Log Data may include information such as your computer's Internet Protocol ('IP') address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.Like many site operators, we collect information that your browser sends whenever you visit our Site ('Log Data'). This Log Data may include information such as your computer's Internet Protocol ('IP') address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.",
	},
	{
		title: 'Communications',
		text: 'We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that is relevant to our services. You can opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.',
	},
	{
		title: 'Cookies',
		text: "Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use 'cookies' to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.",
	},
	{
		title: 'Security',
		text: 'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
	},
	{
		title: 'Changes to This Privacy Policy',
		text: 'This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.',
	},
	{
		title: 'Contact Us',
		text: 'If you have any questions about this Privacy Policy, please contact us.',
	},
];

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
	params: { locale },
}) => {
	unstable_setRequestLocale(locale);
	return (
		<main>
			<Link
				className='absolute left-5 top-5 z-10 transition-all hover:scale-110'
				href='/'>
				<ChevronLeftCircle size={40} />
			</Link>
			<Container className='mt-20'>
				<div className='mb-5'>
					<h1 className='m-4 text-center text-4xl font-bold'>Privacy Policy</h1>
					<div className='space-y-4'>
						<div>
							<span className='font-bold'>Last updated:</span> [date]
						</div>
						<p>
							[Your Company Name] operates [Your Website URL] . This page
							informs you of our policies regarding the collection, use, and
							disclosure of Personal Information we receive from users of the
							Site.
						</p>
						<p>
							We use your Personal Information only for providing and improving
							the Site. By using the Site, you agree to the collection and use
							of information in accordance with this policy.
						</p>
					</div>
				</div>
				<Accordion type='multiple'>
					{privacyPolicyItems.map(({ title, text }, index) => (
						<AccordionItem key={title} className='border-none' value={title}>
							<AccordionTrigger className='flex justify-start gap-2'>
								<span>{index + 1}.</span>
								<div className='grow text-left text-lg'>{title}</div>
							</AccordionTrigger>
							<AccordionContent asChild>{text}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</main>
	);
};

export default PrivacyPolicyPage;
