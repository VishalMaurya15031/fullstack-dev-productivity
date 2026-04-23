import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Lightbulb, Target } from 'lucide-react';

const ManagerView = () => {
  const [managerMetrics, setManagerMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/metrics/manager');
        const data = await response.json();
        setManagerMetrics(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Manager metrics:", error);
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (loading) {
    return <div style={{textAlign: 'center', padding: '3rem', color: 'var(--text-muted)'}}>Loading team metrics...</div>;
  }

  if (!managerMetrics) {
    return <div style={{textAlign: 'center', padding: '3rem', color: 'var(--danger-color)'}}>Failed to load metrics. Is the backend server running?</div>;
  }

  return (
    <div className="manager-dashboard animate-fade-in">
      <div className="view-header">
        <h2 className="view-greeting">{managerMetrics.teamName} Dashboard</h2>
        <p className="view-subtitle">Period: {managerMetrics.period} • Health: <span style={{color: 'var(--success-color)'}}>{managerMetrics.teamHealth}</span></p>
      </div>

      <div className="summary-cards">
        {managerMetrics.summaryMetrics.map((metric, idx) => {
          const isPositive = metric.trendStatus === 'positive';
          const isHigherBetter = ['deploy_freq_team', 'pr_throughput_team'].includes(metric.id);
          const ActualTrendIcon = (isPositive && isHigherBetter) || (!isPositive && !isHigherBetter) ? TrendingUp : TrendingDown;
          
          return (
            <div key={metric.id} className="glass-card summary-card" style={{animationDelay: `${idx * 50}ms`}}>
              <h4 className="metric-title" style={{marginBottom: '0.5rem'}}>{metric.title}</h4>
              <div className="metric-value" style={{fontSize: '1.75rem', marginBottom: '0.5rem'}}>{metric.value}</div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <span className={`metric-trend trend-${metric.trendStatus}`}>
                  <ActualTrendIcon size={14} />
                  {metric.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="manager-insights-grid">
        <div className="glass-card insight-panel" style={{animationDelay: '300ms'}}>
          <h3 className="panel-title">
            <Lightbulb className="panel-list-icon" />
            Team Insights
          </h3>
          <ul className="panel-list">
            {managerMetrics.insights.map((insight, idx) => (
              <li key={idx} className="panel-list-item">
                {insight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card insight-panel" style={{animationDelay: '400ms'}}>
          <h3 className="panel-title">
            <Target className="panel-list-icon" style={{color: 'var(--secondary-color)'}} />
            Recommended Actions
          </h3>
          <ul className="panel-list">
            {managerMetrics.actionItems.map((action, idx) => (
              <li key={idx} className="panel-list-item" style={{borderLeft: '4px solid var(--secondary-color)'}}>
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerView;

