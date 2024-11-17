import { type UseEmblaCarouselType } from 'embla-carousel-react';
import type useEmblaCarousel from 'embla-carousel-react';

export type CarouselApi = UseEmblaCarouselType[1];
export type CarouselOptions = UseCarouselParameters[0];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
