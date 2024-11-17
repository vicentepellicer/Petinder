'use client';

/* eslint-disable no-alert */

import {
	Calendar,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Input,
	Avatar,
	Chip,
	PlaygroundCard,
	StarsOverview,
	Button,
	Progress,
	Badge,
	RadioGroup,
	RadioGroupItem,
	Checkbox,
	Slider,
} from '@ui';
import { Bell, Eye, Search, UserRound } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { useMemo, useState } from 'react';

import { mockPets } from '@/__mocks__/pets';
import { Card } from '@/components/common';
import * as Icons from '@/components/ui/icons';
import { PawIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { useSideMenuStore } from '@/store/side-menu.store';

interface Example {
	name: string;
	component: React.ReactNode;
	customClassName?: string;
	backgroundColor?: string;
	gridPosition?: string;
}

interface Component {
	component: string;
	examples: Example[];
}

const showPlaygroundRoute = process.env.NODE_ENV === 'development';

const Playground = () => {
	// Input with password visibility toggle
	const [inputType, setInputType] = useState('password');
	const [showPassword, setShowPassword] = useState(false);

	// Progress value
	const [progressValue, setProgressValue] = useState(1);
	const progressMaxValue = 10;

	// RadioGroup
	const [value, setValue] = useState('default');

	// Sidemenu store
	const toggleSideMenu = useSideMenuStore((state) => state.toggle);

	const [sliderValue, setSliderValue] = useState(20);

	// Calendar
	const initialDays: Date[] = [];
	const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

	const togglePasswordVisibility = React.useCallback(() => {
		setShowPassword(!showPassword);
		setInputType(showPassword ? 'password' : 'text');
	}, [showPassword]);

	const calendarFooter = React.useMemo(
		() =>
			days && days.length > 0 ? (
				<>
					<p>You selected {days.length} day(s).</p>
					<button onClick={() => setDays([])}>Clear</button>
				</>
			) : (
				<p>Please pick one or more days.</p>
			),
		[days],
	);

	const components = useMemo(
		(): Component[] => [
			{
				component: 'Input',
				examples: [
					{
						name: 'Input | Default',
						component: <Input />,
					},
					{
						name: 'Input | With label and placeholder',
						component: <Input label='Input label' placeholder='Write here' />,
					},
					{
						name: 'Input | With left icon',
						component: <Input label='Input label' prependIcon={<Search />} />,
					},
					{
						name: 'Input | With right icon (clickable)',
						component: (
							<Input
								appendIcon={<Eye onClick={() => togglePasswordVisibility()} />}
								label='Input label'
								type={inputType}
							/>
						),
					},
					{
						name: 'Input | With right word (clickable)',
						component: (
							<Input
								label='Input label'
								type={inputType}
								appendIcon={
									<div
										className='cursor-pointer text-primary-main'
										role='button'
										tabIndex={0}
										onClick={() => togglePasswordVisibility()}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												togglePasswordVisibility();
											}
										}}>
										Show
									</div>
								}
							/>
						),
					},
					{
						name: 'Input | With feedback message',
						component: (
							<Input
								feedbackMessage='This is an error feedback message'
								label='Input label'
							/>
						),
					},
				],
			},
			{
				component: 'Avatar',
				examples: [
					{
						name: 'Avatar | default styles, default size',
						component: <Avatar />,
						backgroundColor: 'bg-black',
					},
					{
						name: 'Avatar | With img prop',
						component: <Avatar img='/img/dog-1.jpg' />,
					},
					{
						name: 'Avatar | With withIcon prop',
						component: (
							<Avatar withIcon={<UserRound className='text-white' />} />
						),
					},
					{
						name: 'Avatar | With fallbackText prop',
						component: <Avatar fallbackText='PT' />,
					},
					{
						name: 'Avatar - With notification prop',
						component: <Avatar img='/img/dog-1.jpg' notification={1} />,
					},
					{
						name: 'Avatar - size "md"',
						component: (
							<Avatar img='/img/dog-1.jpg' notification={1} size='md' />
						),
					},
					{
						name: 'Avatar - size "lg"',
						component: (
							<Avatar img='/img/dog-1.jpg' notification={1} size='lg' />
						),
					},
				],
			},
			{
				component: 'Chip',
				examples: [
					{
						name: 'Chip - default styles with children',
						component: <Chip>Chip</Chip>,
					},
					{
						name: 'Chip - variant "primary"',
						component: <Chip variant='primary'>Chip</Chip>,
					},

					{
						name: 'Chip - onClose',
						component: (
							<Chip onClose={() => alert('Close button clicked')}>Chip</Chip>
						),
						customClassName: 'bg-black',
					},
					{
						name: 'Chip - startContent',
						component: (
							<Chip
								startContent={<UserRound className='h-4 w-4 text-[#636363]' />}>
								Chip
							</Chip>
						),
					},
					{
						name: 'Chip - endContent',
						component: (
							<Chip
								endContent={<UserRound className='h-4 w-4 text-[#636363]' />}>
								Chip
							</Chip>
						),
					},
				],
			},
			{
				component: 'Card',
				examples: [
					{
						name: 'Card | Image + Text',
						component: (
							<PlaygroundCard className='rounded-3xl shadow-xl'>
								<Image
									alt='card image of a dog'
									className='h-auto w-auto rounded-t-3xl'
									height={500}
									src='/img/dog-1.jpg'
									width={500}
								/>{' '}
								<div className='flex w-full flex-col items-center justify-center gap-1 p-5 text-center'>
									<h3 className='text-xl font-bold'>Lorem ipsum dolor</h3>
									<span>Madrid, 28013</span>
									<small>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Veritatis accusamus optio ex aspernatur distinctio corrupti
										tempore quas porro provident, vel minus facilis nam earum
										dolorem aperiam sed quae veniam ipsa, voluptatum quia ullam
										ab voluptate? Nisi accusamus quisquam a, eveniet iste esse
										facilis eos. Facere possimus veritatis eveniet quos amet?
									</small>
								</div>
							</PlaygroundCard>
						),
					},
					{
						name: 'Card | Image and text overlay',
						component: (
							<PlaygroundCard className='relative overflow-hidden rounded-3xl'>
								<div className='absolute h-full w-full rounded-3xl bg-gradient-to-t from-black/80 to-black/10' />
								<Image
									alt='card image of a dog'
									className='h-auto w-auto'
									height={500}
									src='/img/dog-1.jpg'
									width={500}
								/>{' '}
								<div className='absolute top-0 flex h-full flex-col justify-between gap-2 p-5 text-white'>
									<div />
									<div>
										<h3>by Meelis Paloson</h3>
										<h4 className='text-xl font-bold'>
											The main reasons for pet brands to advertise on
											Petinder.online
										</h4>
									</div>
									<small>
										In the digital age, advertising is essential for the
										promotion of goods and services. Pet-oriented brands
										should...
									</small>
								</div>
							</PlaygroundCard>
						),
					},
					{
						name: 'Card | Only image',
						component: (
							<PlaygroundCard>
								<div className='h-[200px]'>
									<Image
										alt='card image of a dog'
										className='h-auto w-auto rounded-3xl'
										height={500}
										src='/img/dog-1.jpg'
										width={500}
									/>{' '}
								</div>
							</PlaygroundCard>
						),
					},
				],
			},
			{
				component: 'Tabs',
				examples: [
					{
						name: 'Tabs',
						component: (
							<Tabs defaultValue='posts'>
								<TabsList className='w-full'>
									<TabsTrigger className='w-full' value='posts'>
										Posts
									</TabsTrigger>
									<TabsTrigger className='w-full' value='photos'>
										Photos
									</TabsTrigger>
								</TabsList>
								<TabsContent value='posts'>
									Make changes to your account here.
								</TabsContent>
								<TabsContent value='photos'>
									Change your password here.
								</TabsContent>
							</Tabs>
						),
					},
				],
			},
			{
				component: 'Accordion',
				examples: [
					{
						name: 'Accordion - default and type single',
						component: (
							<Accordion collapsible type='single'>
								<AccordionItem value='item-1'>
									<AccordionTrigger>Is it accessible?</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger>Is it styled?</AccordionTrigger>
									<AccordionContent>
										Yes. It comes with default styles that matches the website
										color scheme.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						),
					},
					{
						name: 'Accordion - multiple type accordion trigger variant primary',
						component: (
							<Accordion type='multiple'>
								<AccordionItem value='item-1'>
									<AccordionTrigger variant='primary'>
										Is it accessible?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger variant='primary'>
										Is it styled?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It comes with default styles that matches the website
										color scheme.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						),
					},
					{
						name: 'Accordion - defaultIcon with custom classes',
						component: (
							<Accordion type='multiple'>
								<AccordionItem value='item-1'>
									<AccordionTrigger defaultIconClassName='text-secondary-main'>
										Is it accessible?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger defaultIconClassName='text-secondary-main'>
										Is it styled?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It comes with default styles that matches the website
										color scheme.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						),
					},
					{
						name: 'Accordion - customIcon',
						component: (
							<Accordion type='multiple'>
								<AccordionItem value='item-1'>
									<AccordionTrigger
										customIcon={
											<Eye className='relative transition-all group-data-[state=open]:rotate-180' />
										}>
										Is it accessible?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger
										customIcon={
											<UserRound className='relative transition-colors group-data-[state=open]:text-secondary-main' />
										}>
										Is it accessible?
									</AccordionTrigger>
									<AccordionContent>
										Yes. It comes with default styles that matches the website
										color scheme.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						),
					},
				],
			},
			{
				component: 'SideMenu',
				examples: [
					{
						name: 'SideMenu | default',
						component: (
							<button
								className='rounded-full border bg-primary-main px-5 py-2.5 text-white'
								onClick={() => toggleSideMenu()}>
								Open side menu
							</button>
						),
					},
				],
			},
			{
				component: 'Button',
				examples: [
					{
						name: 'Button | Default',
						component: <Button>Click me</Button>,
					},
					{
						name: 'Button | Ghost',
						component: <Button variant='ghost'>Click me</Button>,
					},
					{
						name: 'Button | Link',
						component: <Button variant='link'>Click me</Button>,
					},
					{
						name: 'Button | Icon ',
						component: (
							<Button size='icon' variant='ghost'>
								<Eye />
							</Button>
						),
					},
					{
						name: 'Button | Icon and Text ',
						component: (
							<Button>
								<Eye color='white' />
								Pet
							</Button>
						),
					},
				],
			},
			{
				component: 'Carousel',
				examples: [
					{
						name: 'Carousel',
						component: (
							<Carousel
								className='h-full w-full p-10'
								opts={{ align: 'center' }}
								orientation='vertical'>
								<CarouselContent className='h-[125px]'>
									{Array.from({ length: 20 }).map((_, index) => (
										<CarouselItem
											key={index}
											className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
											<Card
												key={index}
												className='flex flex-col rounded-3xl shadow-md'
												data={mockPets[0]}>
												<div className='background__gradient--primary rounded-t-3xl p-5 text-center font-bold text-white'>
													test
												</div>
												<div className='h-full'>
													<div className={cn('h-full p-5')}>content</div>
												</div>
											</Card>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						),
					},
					{
						name: 'Carousel',
						component: (
							<Carousel className='w-full' opts={{ align: 'start' }}>
								<CarouselContent className='h-[350px]'>
									{mockPets.map((pet) => (
										<CarouselItem
											key={pet.id}
											className='md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
											<Card data={pet} />
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						),
					},
				],
			},
			{
				component: 'Progress',
				examples: [
					{
						name: 'Progress - default',
						component: (
							<Progress maxValue={progressMaxValue} value={progressValue} />
						),
					},
					{
						name: 'Progress - size md | progressLabel fraction',
						component: (
							<Progress
								maxValue={progressMaxValue}
								progressLabel='fractional'
								size='md'
								value={progressValue}
							/>
						),
					},
					{
						name: 'Progress - size lg | progressLabel percentual',
						component: (
							<Progress
								maxValue={progressMaxValue}
								progressLabel='percentual'
								size='lg'
								value={progressValue}
							/>
						),
					},
					{
						name: 'Progress - size lg | progressLabel integer | mainColor blue | backgroundColor gray',
						component: (
							<Progress
								backgroundColor='bg-gray-light'
								mainColor='bg-blue-500'
								maxValue={progressMaxValue}
								progressLabel='integer'
								size='lg'
								value={progressValue}
							/>
						),
					},
					{
						name: 'Progress - testing buttons',
						component: (
							<div className='mx-auto flex max-w-xs justify-between gap-2'>
								<button
									className='rounded-full border bg-primary-main px-5 py-2.5 text-white'
									onClick={() =>
										progressValue < progressMaxValue &&
										setProgressValue((prev) => prev + 1)
									}>
									Test progress
								</button>
								<button
									className='rounded-full border bg-primary-main px-5 py-2.5 text-white'
									onClick={() => setProgressValue(1)}>
									Reset
								</button>
							</div>
						),
						gridPosition: 'md:col-span-2 lg:col-span-5',
					},
				],
			},
			{
				component: 'Calendar',
				examples: [
					{
						name: 'Calendar | default',
						component: (
							<Calendar
								fixedWeeks
								pagedNavigation
								showOutsideDays
								footer={calendarFooter}
								min={1}
								mode='multiple'
								selected={days}
								onSelect={setDays}
							/>
						),
						gridPosition: 'md:col-span-2 lg:col-span-5',
						customClassName: 'p-0',
					},
				],
			},
			{
				component: 'Badge',
				examples: [
					{
						name: 'Badge - icon and value more than 9',
						component: <Badge content='21' icon={<Bell />} />,
					},
					{
						name: 'Badge - icon and value less than 9',
						component: <Badge content='4' icon={<Bell />} />,
					},
					{
						name: 'Badge - dot and avatar',
						component: (
							<Badge dot content={4}>
								<Avatar img='/img/dog-1.jpg' />
							</Badge>
						),
					},
					{
						name: 'Badge - dot + icon + pulse animation',
						component: <Badge dot pulse content={4} icon={<Bell />} />,
					},
					{
						name: 'Badge - pulse animation',
						component: <Badge pulse content='4' icon={<Bell />} />,
					},
				],
			},
			{
				component: 'StarsOverview',
				examples: [
					{
						name: 'StarsOverview | rate 1 - No text',
						component: <StarsOverview rate={1} />,
					},
					{
						name: 'StarsOverview | rate 2 - No text',
						component: <StarsOverview rate={2} />,
					},
					{
						name: 'StarsOverview | rate 3 - With text',
						component: (
							<StarsOverview rate={3}>
								<span>3 (312 overviews from the site)</span>
							</StarsOverview>
						),
					},
					{
						name: 'StarsOverview | rate 4 - No text',
						component: <StarsOverview rate={4} />,
					},
					{
						name: 'StarsOverview | rate 5 - With text',
						component: (
							<StarsOverview rate={5}>
								<span>5 (2312 overviews from the site)</span>
							</StarsOverview>
						),
					},
				],
			},
			{
				component: 'Radio',
				examples: [
					{
						name: 'RadioGroup',
						component: (
							<>
								<RadioGroup
									defaultValue='default'
									label='Radio Group Label'
									value={value}
									onValueChange={setValue}>
									<RadioGroupItem radioValue='default'>Default</RadioGroupItem>
									<RadioGroupItem
										description='Radio item with description'
										radioValue='description'>
										Description
									</RadioGroupItem>
									<RadioGroupItem
										className='max-w-full flex-col justify-center rounded-lg border-2 p-5 data-[checked="true"]:border-primary-main data-[checked="true"]:text-primary-main'
										radioValue='custom-icon-column'
										customIcon={
											<Eye className='group-data-[checked="true"]:text-primary-main' />
										}>
										Custom Item Column
									</RadioGroupItem>
									<RadioGroupItem
										className='max-w-[200px] flex-row justify-between rounded-lg border-2 p-5 data-[checked="true"]:border-primary-main data-[checked="true"]:text-primary-main'
										radioValue='custom-icon-row'
										customIcon={
											<Eye className='group-data-[checked="true"]:text-primary-main' />
										}>
										Custom Item Row
									</RadioGroupItem>
								</RadioGroup>
								<div className='mt-5'>Selected: {value}</div>
							</>
						),
					},
				],
			},
			{
				component: 'Checkbox',
				examples: [
					{
						name: 'Checkbox',
						component: <Checkbox>Checkbox</Checkbox>,
					},
					{
						name: 'Checkbox with feedback message',
						component: (
							<Checkbox feedbackMessage='Checkbox with feedback message'>
								Checkbox
							</Checkbox>
						),
					},
				],
			},
			{
				component: 'Slider',
				examples: [
					{
						name: 'Slider',
						component: (
							<Slider
								showLabels
								defaultValue={[sliderValue]}
								labelsText='km'
								max={100}
								min={1}
								step={1}
								value={[sliderValue]}
								onValueChange={(value) => setSliderValue(value[0])}
							/>
						),
					},
					{
						name: 'Slider with custom icon',
						component: (
							<Slider
								showLabels
								defaultValue={[sliderValue]}
								labelsText='km'
								max={100}
								min={1}
								step={1}
								value={[sliderValue]}
								customIcon={
									<PawIcon className='size-5 rounded-full bg-gradient-primary p-1 text-white' />
								}
								onValueChange={(value) => setSliderValue(value[0])}
							/>
						),
					},
				],
			},
		],
		[
			calendarFooter,
			days,
			inputType,
			progressValue,
			sliderValue,
			togglePasswordVisibility,
			toggleSideMenu,
			value,
		],
	);

	return showPlaygroundRoute ? (
		<main className='flex min-h-screen flex-col gap-5 bg-gray-light p-5'>
			<h1 className='text-center text-4xl font-bold'>Playground</h1>
			<div className='flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-xl'>
				<div className='flex flex-col gap-4'>
					<Accordion
						className='flex flex-wrap items-center gap-6'
						type='multiple'>
						<AccordionItem className='w-full' value='accordion-item'>
							<AccordionTrigger className='flex gap-2'>
								<h2 className='grow text-center text-2xl font-bold'>Icons</h2>
							</AccordionTrigger>
							<AccordionContent className='flex flex-wrap gap-5'>
								{Object.keys(Icons).map((key) => {
									const Icon = Icons[key as keyof typeof Icons];
									return (
										<div
											key={key}
											className='flex flex-col items-center justify-center gap-1'>
											<span className='text-gray-dark'>{key}</span>
											<Icon className='size-10' />
										</div>
									);
								})}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className='flex flex-col gap-10'>
					{components.map(({ component, examples }) => (
						<Accordion
							key={component}
							className='relative flex h-full flex-col justify-between gap-5'
							type='multiple'>
							<AccordionItem value='accordion-item'>
								<AccordionTrigger className='flex gap-2'>
									<div className='mx-auto inline-flex flex-wrap justify-center gap-5'>
										<span className='text-2xl font-bold'>Component:</span>{' '}
										<div className='text-center'>
											<span className='rounded bg-black p-2 text-2xl font-bold text-white'>
												{component}
											</span>
										</div>
									</div>
								</AccordionTrigger>
								<AccordionContent className='mt-5'>
									<div className='grid gap-5 px-4 md:grid-cols-2 lg:grid-cols-4'>
										{examples
											.filter(({ name }) => name !== 'Carousel')
											.map(
												({
													name,
													component,
													customClassName,
													gridPosition,
												}) => (
													<PlaygroundCard
														key={name}
														className={cn(
															'flex flex-col rounded-3xl shadow-xl',
															gridPosition,
														)}>
														<div className='rounded-t-3xl bg-gradient-primary p-5 text-center font-bold text-white'>
															{name}
														</div>
														<div
															className={cn(
																'h-full rounded-b-3xl p-5',
																customClassName,
															)}>
															{component}
														</div>
													</PlaygroundCard>
												),
											)}
									</div>
									{examples
										.filter(({ name }) => name === 'Carousel')
										.map(({ component }, index) => (
											<div key={index}>{component}</div>
										))}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					))}
				</div>
			</div>
		</main>
	) : (
		notFound()
	);
};

export default Playground;
