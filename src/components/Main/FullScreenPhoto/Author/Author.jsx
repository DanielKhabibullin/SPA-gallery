import style from './Author.module.css';
import PropTypes from 'prop-types';

export const Author = ({image}) => (
	<a className={style.link}
		href={image.user.links.html}
		target={'_blank'}
		rel={'noreferrer'}
	>
		<img src={image.user.profile_image.medium} alt={image.user.name} />
		<p>{image.user.name}</p>
	</a>
);

Author.propTypes = {
	image: PropTypes.object,
};
