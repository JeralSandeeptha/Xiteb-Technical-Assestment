import { stats } from '../../types/stats.data';
import './StatsContent.scss';

const StatsContent = () => {

  return (
    <div className='stat-content'>
      <div className="stat-content-inner">

        {
            stats.map((stat) => {
                return (
                    <div className="stat">
                        <div className="data">
                            <h1 className='stat-count'>{ stat.count }</h1>
                            <h3 className='stat-title' >{ stat.title }</h3>
                        </div>
                        <h1 className='behind-text'>{stat.count}</h1>
                    </div>
                )
            })
        }

      </div>
    </div>
  );

}

export default StatsContent
