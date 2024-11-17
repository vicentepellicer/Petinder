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

interface TermsAndConditionsPageProps {
	params: {
		locale: string;
	};
}

// TODO: Add translations

const termsAndConditionsItems = [
	{
		title: 'Accounts',
		text: 'When you create an account with us, you must provide us with accurate, complete, and up-to-date information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
	},
	{
		title: 'Intellectual Property',
		text: 'The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Your Company Name].',
	},
	{
		title: 'Links To Other Web Sites',
		text: 'Our Service may contain links to third-party websites or services that are not owned or controlled by [Your Company Name]. [Your Company Name] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that [Your Company Name] shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.',
	},
	{
		title: 'Governing Law',
		text: 'These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.',
	},
	{
		title: 'Changes',
		text: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.',
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

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
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
					<h1 className='m-4 text-center text-4xl font-bold'>
						Terms and Conditions
					</h1>
					<div className='space-y-4'>
						<div>
							<span className='font-bold'>Last updated:</span> [date]
						</div>
						<p>
							Your access to and use of the Service is conditioned on your
							acceptance of and compliance with these Terms. These Terms apply
							to all visitors, users, and others who access or use the Service.{' '}
						</p>
						<p>
							By accessing or using the Service, you agree to be bound by these
							Terms. If you disagree with any part of the terms, then you may
							not access the Service.{' '}
						</p>
					</div>
				</div>
				<Accordion type='multiple'>
					{termsAndConditionsItems.map(({ title, text }, index) => (
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

export default TermsAndConditionsPage;
