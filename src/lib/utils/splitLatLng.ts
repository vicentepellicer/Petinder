export const splitLatLng = (location: string) => {
	const [lat, lng] = location.split(',');
	return { lat: Number(lat), lng: Number(lng) };
};
