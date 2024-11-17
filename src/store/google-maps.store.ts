import type { MapCameraProps, MapProps } from '@vis.gl/react-google-maps';
import { create } from 'zustand';

type GoogleMapsState = {
	cameraProps: { center: MapProps['center']; zoom: MapCameraProps['zoom'] };
	location: {
		lat: number;
		lng: number;
	};
	setCameraProps: ({ center, zoom }: MapCameraProps) => void;
	setLocation: (location: { lat: number; lng: number }) => void;
};

export const useGoogleMapsStore = create<GoogleMapsState>((set) => ({
	cameraProps: {
		center: {
			lat: 41.390205,
			lng: 2.154007,
		},
		zoom: 12,
	},
	location: {
		lat: 41.390205,
		lng: 2.154007,
	},
	setCameraProps: ({ center, zoom }) =>
		set((state) => ({ cameraProps: { ...state.cameraProps, center, zoom } })),
	setLocation: (location) => set({ location }),
}));
