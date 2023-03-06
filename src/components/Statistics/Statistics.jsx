import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Stat from './Stat';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ? title : 'Some files statistics'}</h2>

      <ul className={css['stat-list']}>
        {stats.map(stat => (
          <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
