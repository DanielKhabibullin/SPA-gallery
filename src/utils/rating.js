import {URL_API} from '../api/const.js';

export const ratingRequest = (id, rating, token) => {
	let method;
	if (rating) {
		method = 'POST';
	} else {
		method = 'DELETE';
	}
	fetch(`${URL_API}/photos/${id}/like`, {
		method: `${method}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
