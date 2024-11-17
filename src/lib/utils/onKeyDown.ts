export const onKeyDown = (
	event: React.KeyboardEvent,
	key: KeyboardEventKey,
	callback: () => void,
) => {
	if (event.key === key) {
		callback();
	}
};
