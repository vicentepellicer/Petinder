export const highlightText = (item: string, keyword: string) => {
	const lowerCasedInputValue = keyword.toLowerCase();
	const hitIndex = item.toLocaleLowerCase().indexOf(lowerCasedInputValue);
	if (hitIndex === -1) return item;
	const before = item.slice(0, hitIndex);
	const match = item.slice(hitIndex, hitIndex + keyword.length);
	const after = item.slice(hitIndex + keyword.length);
	return (
		<>
			{before}
			<b>{match}</b>
			{after}
		</>
	);
};
