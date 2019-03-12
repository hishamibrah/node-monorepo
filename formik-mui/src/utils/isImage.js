export default function(file) {
	const fileName = file.name || file.path;
	const suffix = fileName.substr(fileName.indexOf('.') + 1).toLowerCase();
	return !!~['jpg', 'jpeg', 'bmp', 'png'].indexOf(suffix);
}