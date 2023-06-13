import PropTypes from 'prop-types';
import {formatDateWithoutTime} from '../../../../../utils/formatDate.js';
import style from './Date.module.css';
export const Date = ({date}) => (
	<p className={style.date}>{formatDateWithoutTime(date)}</p>
);

Date.propTypes = {
	date: PropTypes.string
};
