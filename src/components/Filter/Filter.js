import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from '../../redux/actions-phone/actions-phone';
import { getFilter } from '../../redux/selector-phone/selector-phone';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = event =>
    dispatch(contactActions.changeFilter(event.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
