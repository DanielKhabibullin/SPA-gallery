import {formatDate} from '../../../../utils/formatDate';
import PropTypes from 'prop-types';
import style from './Date.module.css';

export const Date = ({date}) => (
	<p className={style.date}>{formatDate(date)}</p>
);

Date.propTypes = {
	date: PropTypes.string,
};
