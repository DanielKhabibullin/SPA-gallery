import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Outlet, Link} from 'react-router-dom';
import {imagesRequestAsync} from '../../../store/images/imagesAction.js';
import style from './FullScreenPhoto.module.css';
import Author from './Author';
import Date from './Date';
import Rating from './Rating';
import {Preloader} from '../../../UI/Preloader/Preloader.jsx';

export const FullScreenPhoto = () => {
	const dispatch = useDispatch();
	const image = useSelector((state) => state.images.images);
	const status = useSelector((state) => state.images.status);
	const {id} = useParams();

	useEffect(() => {
		dispatch(imagesRequestAsync(id));
	}, [id]);
	return (
		<>
			{status === 'loading' ? (
				<Preloader size={200} />
			) : (
				!Array.isArray(image) && (
					<div className={style.wrapper}>
						<Link to="/" className={style.backButton}>
							Назад
						</Link>

						<img
							className={style.image}
							src={image.urls.regular}
							alt={image.user.name}
						/>
						<div className={style.dataWrapper}>
							<Author image={image} />
							<Rating image={image} id={id} />
							<Date date={image.created_at} />
						</div>
						<Outlet />
					</div>
				)
			)}
		</>
	);
};
