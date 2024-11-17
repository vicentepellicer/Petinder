'use client';

import type {
	AdvancedMarkerRef,
	MapCameraChangedEvent,
	MapProps,
} from '@vis.gl/react-google-maps';
import { Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import React from 'react';
import './GoogleMaps.styles.css';

import { Card } from '@/components/common';
import { PawIcon } from '@/components/ui/icons';
import { cn, splitLatLng } from '@/lib/utils';
import { useGoogleMapsStore } from '@/store/google-maps.store';

const defaultMapContainerStyle: MapProps['style'] = {
	width: '100%',
	height: '100%',
	borderRadius: '15px',
	border: '1px solid #ccc',
	overflow: 'hidden',
};

const defaultMapOptions: MapProps = {
	zoomControl: true,
	tilt: 0,
	gestureHandling: 'auto',
	mapTypeId: 'roadmap',
	defaultZoom: 12,
	mapId: '706f885587124294',
	fullscreenControl: false,
	mapTypeControl: false,
	clickableIcons: false,
};

type Data = Pet[];

interface GoogleMapsProps extends MapProps {
	data?: Data;
}

export const GoogleMaps: React.FC<GoogleMapsProps> = ({ data, ...props }) => {
	const [clickedMarkerData, setClickerMarkerData] = React.useState<Pet | null>(
		null,
	);
	const { cameraProps, location, setCameraProps } = useGoogleMapsStore();

	const handleCameraChange = React.useCallback(
		(ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
		[setCameraProps],
	);

	const markerRefs = React.useRef<AdvancedMarkerRef[]>([]);

	const onMarkerClick = (clickedItem: Pet) => {
		if (!clickedItem) return;
		setClickerMarkerData(clickedItem);
	};

	const onInfoWindowClose = () => {
		setClickerMarkerData(null);
	};

	const onMapClick = () => {
		if (clickedMarkerData) {
			setClickerMarkerData(null);
		}
	};

	return (
		<Map
			{...props}
			{...defaultMapOptions}
			{...cameraProps}
			style={defaultMapContainerStyle}
			onCameraChanged={handleCameraChange}
			onClick={onMapClick}>
			{data?.map((item, index) => {
				const { lat, lng } = splitLatLng(item.location);
				return (
					<AdvancedMarker
						key={item.id}
						ref={(ref) => {
							markerRefs.current[index] = ref;
						}}
						position={{ lat, lng }}
						zIndex={2}
						onClick={() => onMarkerClick(item)}>
						<PawIcon
							className={cn(
								'size-10 text-primary-main drop-shadow-sm',
								item.status === 'urgent' && 'text-secondary-main',
							)}
						/>
						{clickedMarkerData?.id === item.id && (
							<InfoWindow
								anchor={markerRefs.current[index]}
								zIndex={3}
								onCloseClick={onInfoWindowClose}>
								<Card className='relative h-[300px] w-[200px]' data={item} />
							</InfoWindow>
						)}
					</AdvancedMarker>
				);
			})}
			<AdvancedMarker position={location} zIndex={1} />
		</Map>
	);
};
