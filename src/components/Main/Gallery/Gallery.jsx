import {imagesRequestAsync} from '../../../store/images/imagesAction';
import {useDispatch, useSelector} from 'react-redux';
import Images from './Images';
import Masonry from 'react-masonry-css';
import {useEffect, useRef} from 'react';

export const Gallery = () => {
	const images = useSelector((state) => state.images.images);
	const dispatch = useDispatch();
	const endList = useRef(null);
	let observerRequestDelay = 0;

	useEffect(() => {
		dispatch(imagesRequestAsync());
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					observerRequestDelay += 1;
					if (observerRequestDelay !== 1) {
						dispatch(imagesRequestAsync());
					}
				}
			},
			{
				rootMargin: '100px',
			}
		);

		observer.observe(endList.current);

		return () => {
			if (endList.current) {
				observer.unobserve(endList.current);
			}
		};
	}, [endList.current]);

	const breakpointColumnsObj = {
		default: 5,
		1024: 4,
		768: 3,
		640: 2
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className='my-masonry-grid'
			columnClassName='my-masonry-grid_column'
		>
			{Array.isArray(images) &&
				images.map((image) => <Images key={image.id} image={image} />)}
			<div ref={endList} />
		</Masonry>
	);
};
