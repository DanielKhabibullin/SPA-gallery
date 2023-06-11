import {URL_API} from '../api/const.js';

export const ratingRequest = (id, rating, token) => {
	let method;
	if (rating) {
		method = 'DELETE';
	} else {
		method = 'POST';
	}
	fetch(`${URL_API}/photos/${id}/like`, {
		method: `${method}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
