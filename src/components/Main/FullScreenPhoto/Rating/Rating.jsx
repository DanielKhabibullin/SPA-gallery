import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ratingRequest} from '../../../../utils/rating';
import PropTypes from 'prop-types';
import style from './Rating.module.css';

export const Rating = ({image, id}) => {
	const token = useSelector((state) => state.token.token);
	const [likeCount, setLikeCount] = useState(image.likes);
	const [likeState, setLikeState] = useState(image.liked_by_user);

	useEffect(() => {
		setLikeCount(image.likes);
		setLikeState(image.liked_by_user);
	}, [image.liked_by_user]);

	const handleRating = () => {
		if (token === '') {
			alert('Авторизуйтесь, чтобы ставить лайки');
			return;
		}

		if (likeState) {
			setLikeCount((state) => state - 1);
			setLikeState(false);
			ratingRequest(id, false, token);
		} else {
			setLikeCount((state) => state + 1);
			setLikeState(true);
			ratingRequest(id, true, token);
		}
	};

	return (
		<div className={style.likesWrapper}>
			<button
				className={!likeState ? style.likeBtn : style.dislikeBtn}
				onClick={() => handleRating()}
			/>
			<p className={style.likes}>{likeCount}</p>
		</div>
	);
};

Rating.propTypes = {
	image: PropTypes.object,
	id: PropTypes.string,
};
