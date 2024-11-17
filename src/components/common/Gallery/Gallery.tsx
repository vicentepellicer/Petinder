'use client';

import { DialogTitle } from '@radix-ui/react-dialog';
import { useKeyboard } from '@siberiacancode/reactuse';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useSwipeable } from 'react-swipeable';

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	SaveButton,
	ShareButton,
} from '@/components/ui';
import { cn, range, variants } from '@/lib/utils';

interface GalleryProps {
	open: boolean;
	images: PetImage[];
	index: number;
	navigation?: boolean;
}

export const Gallery = ({ open, index, images, navigation }: GalleryProps) => {
	const [direction, setDirection] = React.useState(0);
	const [loaded, setLoaded] = React.useState(false);
	const [isMiniGalleryIsShowed, setIsMiniGalleryIsShowed] =
		React.useState(false);
	const { petId } = useParams<{ petId: string }>();
	const router = useRouter();
	const buttonsTranslations = useTranslations('buttons');

	const filteredImages = images?.filter((img) =>
		range(index - 15, index + 15).includes(img.id),
	);

	const changePhotoId = (newVal: number) => {
		if (newVal > index) {
			setDirection(1);
		} else {
			setDirection(-1);
		}
		router.push(`/pets/${petId}/photos?photoId=${newVal}`);
	};

	const handleClose = () => {
		router.push(`/pets/${petId}`, { scroll: false });
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (index < images.length - 1) {
				changePhotoId(index + 1);
			}
		},
		onSwipedRight: () => {
			if (index > 0) {
				changePhotoId(index - 1);
			}
		},

		onSwipedDown: () => {
			handleClose();
		},
	});

	useKeyboard({
		onKeyDown(event) {
			const eventKey = event.key as KeyboardEventKey;
			if (eventKey === 'ArrowRight' && index + 1 < images.length) {
				changePhotoId(index + 1);
			}
			if (eventKey === 'ArrowLeft' && index > 0) {
				changePhotoId(index - 1);
			}
			if (eventKey === 'Escape') {
				handleClose();
			}
		},
	});

	return (
		<Dialog open={open}>
			<DialogTitle className='sr-only'>Pet images gallery</DialogTitle>
			<DialogDescription>Pet images gallery</DialogDescription>
			<DialogContent className='portrait:p-5' onClickOutside={handleClose}>
				<MotionConfig
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}>
					<div
						className='relative z-50 flex aspect-square w-full max-w-7xl items-center square-15:h-full'
						{...handlers}>
						{/* Main image */}
						<div className='flex w-full flex-col overflow-hidden rounded-4'>
							<div
								aria-label='Toggle mini gallery'
								aria-pressed={isMiniGalleryIsShowed}
								className='relative z-[60] flex aspect-square items-center justify-center narrow:aspect-square'
								role='button'
								tabIndex={0}
								onClick={() => setIsMiniGalleryIsShowed((prev) => !prev)}>
								<AnimatePresence custom={direction} initial={false}>
									<motion.div
										key={index}
										animate='center'
										className='absolute'
										custom={direction}
										exit='exit'
										initial='enter'
										variants={variants}>
										<Image
											priority
											alt='Next.js Conf image'
											height={navigation ? 853 : 1280}
											src={`${images[index].src}`}
											width={navigation ? 1280 : 1920}
											onLoad={() => setLoaded(true)}
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
						{/* Buttons + bottom nav bar */}
						<div className='absolute inset-0 mx-auto flex max-w-7xl items-center justify-center'>
							{/* Buttons */}
							{loaded && (
								<div className='relative aspect-square h-full max-h-full w-full'>
									{navigation && (
										<>
											{index > 0 && (
												<Button
													aria-label='gallery prev button'
													className='hover:bg-primary-main absolute left-3 top-[calc(50%-16px)] z-[60] hidden bg-white shadow transition-colors md:inline-flex'
													size='icon'
													variant='ghost'
													onClick={() => changePhotoId(index - 1)}>
													<ChevronLeftIcon
														data-carrousel-previous
														className='text-primary-main relative right-[2px] block size-8 transition-colors group-hover:text-white'
													/>
												</Button>
											)}
											{index + 1 < images.length && (
												<Button
													aria-label='gallery next button'
													className='hover:bg-primary-main absolute right-3 top-[calc(50%-16px)] z-[60] hidden bg-white shadow transition-colors md:inline-flex'
													size='icon'
													variant='ghost'
													onClick={() => changePhotoId(index + 1)}>
													<ChevronRightIcon
														data-carrousel-previous
														className='text-primary-main relative left-[2px] block size-8 transition-colors group-hover:text-white'
													/>
												</Button>
											)}
										</>
									)}
									<div className='absolute -top-12 left-0 z-[60] flex w-full items-center justify-between gap-1 text-white square-15:top-0 square-15:p-3'>
										<div className='flex w-full gap-2'>
											<Button
												className='square-15:text-primary-main square-15:hover:bg-primary-main gap-1 rounded-full p-0 text-white/75 transition hover:text-white square-15:bg-white square-15:px-4 square-15:py-2 square-15:shadow square-15:hover:text-white'
												variant='ghost'
												onClick={handleClose}>
												<ChevronLeftIcon />
												{buttonsTranslations('close')}
											</Button>
										</div>
										{navigation && (
											<div className='square-15:text-primary-main flex h-10 shrink-0 basis-14 items-center justify-center gap-1 rounded-full p-0 text-white/75 transition square-15:bg-white square-15:px-4 square-15:py-2 square-15:shadow'>
												<span className='font-bold'>{index + 1}</span>/
												<span>{images.length}</span>
											</div>
										)}
										<div className='flex w-full items-center justify-end gap-2'>
											<ShareButton
												className='square-15:text-primary-main square-15:hover:bg-primary-main gap-1 rounded-full p-0 text-white/75 transition hover:text-white square-15:bg-white square-15:px-4 square-15:py-2 square-15:shadow square-15:hover:text-white'
												size='default'>
												<span className='hidden md:inline'>
													{buttonsTranslations('share')}
												</span>
											</ShareButton>
											<SaveButton
												className='square-15:text-primary-main square-15:hover:bg-primary-main gap-1 rounded-full p-0 text-white/75 transition hover:text-white square-15:bg-white square-15:px-4 square-15:py-2 square-15:shadow square-15:hover:text-white'
												size='default'>
												<span className='hidden md:inline'>
													{buttonsTranslations('save')}
												</span>
											</SaveButton>
										</div>
									</div>
								</div>
							)}
						</div>
						{/* Bottom Nav bar */}
						{navigation && (
							<div
								className={cn(
									'fixed inset-x-0 bottom-0 z-[60] overflow-hidden bg-gradient-to-b from-black/0 to-black/60 transition-opacity',
									isMiniGalleryIsShowed
										? 'landscape:visible landscape:opacity-100'
										: 'landscape:invisible landscape:opacity-0',
								)}>
								<motion.div
									initial={false}
									className={cn(
										'relative mx-auto mb-6 mt-6 flex aspect-square h-[100px] transition-all',
										isMiniGalleryIsShowed
											? 'delay-75 landscape:translate-y-0'
											: 'landscape:translate-y-full',
									)}>
									<AnimatePresence initial={false}>
										{filteredImages.map(({ id, src }, filteredIndex) => (
											<motion.button
												key={id}
												exit={{ width: '0%' }}
												animate={{
													scale: filteredIndex === index ? 1.25 : 1,
													width: '100%',
													x: `${Math.max(index * -100, 15 * -100)}%`,
												}}
												className={`${
													filteredIndex === index
														? 'z-20 rounded-3 shadow shadow-black/50'
														: 'z-10'
												} ${id === 0 ? 'rounded-l-3' : ''} ${
													id === images.length - 1 ? 'rounded-r-3' : ''
												} relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
												initial={{
													width: '0%',
													x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
												}}
												onClick={() => changePhotoId(filteredIndex)}>
												<Image
													alt='small photos on the bottom'
													height={120}
													src={src}
													width={180}
													className={`${
														filteredIndex === index
															? 'brightness-110 hover:brightness-110'
															: 'brightness-50 contrast-125 hover:brightness-75'
													} h-full transform object-cover transition`}
												/>
											</motion.button>
										))}
									</AnimatePresence>
								</motion.div>
							</div>
						)}
					</div>
				</MotionConfig>
			</DialogContent>
		</Dialog>
	);
};
