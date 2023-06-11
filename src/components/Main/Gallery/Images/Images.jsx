import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import style from './Images.module.css';

export const Images = ({image}) => {
	const navigate = useNavigate();

	return (
		<div className={style.wrapper}>
			<a
				className={style.link}
				onClick={(e) => {
					e.preventDefault();
					navigate(`/photos/${image.id}`);
				}}
			>
				<img src={image.urls.small} alt={image.user.name} />
			</a>
			<button className={style.likes}>{image.likes}</button>
		</div>
	);
};

Images.propTypes = {
	image: PropTypes.object,
};

