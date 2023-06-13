import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {Date} from './Date/Date.jsx';
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
					window.scrollTo(0, 0);
				}}
			>
				<img src={image.urls.small}
					alt={image.user.name}
				/>
			</a>
			<Date className={style.date} date={image.created_at} />
			<button className={style.likes}>{image.likes}</button>
		</div>
	);
};

Images.propTypes = {
	image: PropTypes.object,
};
