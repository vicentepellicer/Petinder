import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { mockPets } from '@/__mocks__/pets';
import { Distance, SeeAll } from '@/components/common';
import {
	buttonVariants,
	Typography,
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	SaveButton,
	ShareButton,
	Container,
	Chip,
} from '@/components/ui';
import {
	AdultIcon,
	BabyIcon,
	DogQuestionIcon,
	FemaleIcon,
	GalleryIcon,
	MaleIcon,
	SeniorIcon,
	YoungIcon,
} from '@/components/ui/icons';
import { cn, fillGalleryImages } from '@/lib/utils';

import { AlsoSection } from './components/AlsoSection';

const PetProfilePage = ({
	params,
}: {
	params: {
		petId: string;
		locale: string;
	};
}) => {
	const { petId } = params;
	const pet = mockPets.find((pet) => pet.id === +petId);

	const buttonsTranslations = useTranslations('buttons');
	const petProfileTranslations = useTranslations('pet_profile');
	const cardTranslations = useTranslations('cards');

	if (!pet) notFound();

	const galleryImages = fillGalleryImages(pet?.petImages, 5, params.locale);

	return (
		<main className='space-y-4 py-6'>
			<section className='flex flex-col md:mx-auto md:max-w-screen-2xl md:px-4 narrow:h-[300px] md:narrow:h-[400px] lg:narrow:h-[700px] wide:h-[calc(100vh-100px)] wide:min-h-[450px]'>
				<Breadcrumb className='mx-4 font-semibold text-gray-dark md:mx-0'>
					{/* TODO: Add translations href */}
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								className='hover:text-primary-main hover:underline'
								href='/'>
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink
								className='hover:text-primary-main hover:underline'
								href='/pets'>
								Pets
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className='flex h-[70px] items-center justify-between gap-1 px-4 md:px-0'>
					<Typography tag='h2' variant='header'>
						<span className='hidden md:inline'>
							{petProfileTranslations('greeting')}
						</span>
						<span className='text-secondary-main md:hidden'>
							{petProfileTranslations('name', { name: `${pet.name}` })}
						</span>
					</Typography>
					<div className='flex items-center gap-3'>
						<ShareButton>
							<span className='hidden md:inline'>
								{buttonsTranslations('share')}
							</span>
						</ShareButton>
						<SaveButton>
							<span className='hidden md:inline'>
								{buttonsTranslations('save')}
							</span>
						</SaveButton>
					</div>
				</div>
				<div className='relative h-full'>
					{pet.petImages.length ? (
						<div
							className={cn(
								'hide-scrollbar relative grid h-full grid-flow-col gap-4 overflow-scroll md:grid-cols-[1.5fr_1.5fr_1fr_0.5fr_1fr] md:grid-rows-2',
								!pet.petImages.length && 'h-max',
							)}>
							{galleryImages.map((image, index) => (
								<Link
									key={image.id}
									href={`/pets/${params.petId}/photos?photoId=${index}`}
									className={cn(
										'relative min-w-[16rem] sm:min-w-[17.5rem] md:min-w-max',
										index === 0 && 'ml-4 md:col-span-2 md:row-span-2 md:ml-0',
										index === 1 && 'md:col-start-3 md:col-end-5',
										index === 4 && 'mr-4 md:col-start-4 md:col-end-6 md:mr-0',
										image.src.includes('placeholder') && 'pointer-events-none',
									)}>
									<Image
										fill
										alt='pet image'
										className='cursor-zoom-in rounded-2xl object-cover transition-all hover:brightness-110'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										src={image.src}
									/>
								</Link>
							))}
						</div>
					) : (
						<div className='mx-4 flex h-full flex-col items-center justify-center rounded-4 bg-gray-light p-3 text-gray-dark md:mx-0'>
							<DogQuestionIcon className='size-[100px] lg:size-max' />
							<Typography className='text-center' tag='span' variant='header'>
								{petProfileTranslations('dont_have_picture')}
							</Typography>
						</div>
					)}
					{!!pet.petImages.length && (
						<Link
							className={cn('absolute bottom-6 right-7', buttonVariants())}
							href={`/pets/${petId}/photos?photoId=0`}>
							<GalleryIcon />
							{buttonsTranslations('view_all')}
						</Link>
					)}
					{pet.status === 'urgent' && (
						<Typography
							className='pointer-events-none absolute top-3 z-10 flex justify-center rounded-br-3 rounded-tr-3 bg-secondary-main px-4 py-1.5 text-white md:top-10 md:px-7'
							variant='section-title'>
							{cardTranslations('pet_card.urgent')}
						</Typography>
					)}
				</div>
			</section>
			<Container
				as='section'
				className='grid-cols-[3fr_2.58fr] gap-4 md:grid md:py-4'>
				<div className='space-y-3'>
					<div>
						<div>
							<Distance className='text-base' distance={800} />
							<Typography
								className='hidden text-secondary-main md:block'
								tag='h2'
								variant='header'>
								{petProfileTranslations('name', { name: `${pet.name}` })}
							</Typography>
						</div>
						<div className='space-y-3'>
							<Typography className='p-2.5' tag='h3' variant='section-title'>
								{petProfileTranslations('meet_me')}
							</Typography>
							<div className='grid w-full grid-cols-3 items-center gap-2 font-semibold text-primary-main md:gap-4'>
								<div className='flex flex-col items-center justify-center gap-2.5 rounded-3 border border-primary-main bg-contrast-main p-2.5'>
									<div className='flex size-10 items-center justify-center'>
										{pet.age === 'puppy' && <BabyIcon className='h-8' />}
										{pet.age === 'young' && <YoungIcon className='h-8' />}
										{pet.age === 'adult' && <AdultIcon className='h-8' />}
										{pet.age === 'senior' && <SeniorIcon className='h-8' />}
									</div>
									<div className='text-center leading-[18px]'>
										<div>{petProfileTranslations('age.title')}:</div>
										<div>{petProfileTranslations(`age.${pet.age}`)}</div>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center gap-2.5 rounded-3 border border-primary-main bg-contrast-main p-2.5'>
									<div className='flex size-10 items-center justify-center'>
										{pet.gender === 'female' && (
											<FemaleIcon
												className='h-8 stroke-2'
												stroke='currentColor'
											/>
										)}
										{pet.gender === 'male' && (
											<MaleIcon
												className='h-8 stroke-2'
												stroke='currentColor'
											/>
										)}
									</div>
									<div className='text-center leading-[18px]'>
										<div>{petProfileTranslations('gender.title')}:</div>
										<div>{petProfileTranslations(`gender.${pet.gender}`)}</div>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center gap-2.5 rounded-3 border border-primary-main bg-contrast-main p-2.5'>
									<div className='flex size-10 items-center justify-center'>
										<span className='text-[2rem] font-bold uppercase'>
											{pet.size}
										</span>
									</div>
									<div className='text-center leading-[18px]'>
										<div>
											{petProfileTranslations.rich('size', {
												br: () => <br />,
											})}
										</div>
									</div>
								</div>
							</div>
							<Typography tag='p' variant='text'>
								{pet.description}
							</Typography>
						</div>
					</div>
					<div className='space-y-4'>
						<Typography tag='h3' variant='section-title'>
							{petProfileTranslations('traits')}
						</Typography>
						<div className='flex flex-wrap gap-2'>
							{/* TODO: Add translations  */}
							{pet.characteristics.map((characteristic, index) => (
								<Chip
									key={index}
									className='whitespace-nowrap'
									variant='primary'>
									{characteristic
										.split('')
										.map((word, index) =>
											index === 0 ? word.toLocaleUpperCase() : word,
										)}
								</Chip>
							))}
						</div>
					</div>
				</div>
				<div className='p-3'>shelter</div>
			</Container>
			<Container as='section' className='space-y-6'>
				<div className='flex items-center justify-between gap-2'>
					<Typography tag='h3' variant='section-title'>
						{petProfileTranslations('also')}:
					</Typography>
					{/* TODO: Add correct href */}
					<SeeAll href='/' />
				</div>
				<AlsoSection data={mockPets} />
			</Container>
		</main>
	);
};

export default PetProfilePage;
