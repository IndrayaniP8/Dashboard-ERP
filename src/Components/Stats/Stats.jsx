import React from 'react'
import './Stats.css'

import { StatsData } from '../../Data/Data';
import Stat from '../Stat/Stat';


const Stats = () => {
  return (
    <div className="Stats">
      {StatsData.map((stat, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Stat
              title={stat.title}
              color={stat.color}
              barValue={stat.barValue}
              value={stat.value}
              png={stat.png}
              series={stat.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
