import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Clock, Bug, GitCommit, GitMerge, ChevronRight, ChevronDown } from 'lucide-react';

const iconMap = {
  lead_time: <Clock size={20} color="var(--primary-color)" />,
  cycle_time: <Clock size={20} color="var(--warning-color)" />,
  bug_rate: <Bug size={20} color="var(--danger-color)" />,
  deploy_freq: <GitCommit size={20} color="var(--success-color)" />,
  pr_throughput: <GitMerge size={20} color="var(--secondary-color)" />,
};

const MetricCard = ({ metric, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isPositive = metric.trendStatus === 'positive';
  const isHigherBetter = ['deploy_freq', 'pr_throughput'].includes(metric.id);
  const ActualTrendIcon = (isPositive && isHigherBetter) || (!isPositive && !isHigherBetter) ? TrendingUp : TrendingDown;

  return (
    <div 
      className="glass-card animate-fade-in" 
      style={{ animationDelay: `${delay}ms`, cursor: 'pointer', transition: 'all 0.3s ease' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="metric-card-header">
        <h3 className="metric-title">{metric.title}</h3>
        <div className="metric-icon">
          {iconMap[metric.id] || <Clock size={20} color="var(--primary-color)" />}
        </div>
      </div>
      
      <div className="metric-value-container">
        <div className="metric-value">{metric.value} <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>{metric.unit}</span></div>
        <div className={`metric-trend trend-${metric.trendStatus}`}>
          <ActualTrendIcon size={14} />
          {metric.trend}
        </div>
      </div>
      
      <p className="metric-description">{metric.description}</p>
      
      <div style={{
        marginTop: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        color: isExpanded ? 'var(--primary-color)' : 'var(--text-muted)',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'color 0.2s'
      }}>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        {isExpanded ? 'Hide Insights' : 'Click to view Insights & Action Items'}
      </div>
      
      {isExpanded && (
        <div className="metric-insights animate-fade-in" style={{animationDelay: '0ms'}}>
          <div className="insight-title">
            <ChevronRight size={16} color="var(--secondary-color)" />
            Story Behind the Data
          </div>
          <p className="insight-text">{metric.interpretation}</p>
          
          <div className="insight-title" style={{marginTop: '1rem'}}>
            <ChevronRight size={16} color="var(--primary-color)" />
            Recommended Next Steps
          </div>
          <ul className="action-list">
            {metric.nextSteps.map((step, idx) => (
              <li key={idx} className="action-item">
                <div className="action-icon">❖</div>
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
