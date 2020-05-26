export const handleDoubleClickPrevent = (e) => {
	e.preventDefault();
	e.stopPropagation();
	return false;
}