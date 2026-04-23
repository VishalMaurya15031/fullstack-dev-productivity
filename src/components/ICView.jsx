import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';

const ICView = () => {
  const [icMetrics, setIcMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/metrics/ic');
        const data = await response.json();
        setIcMetrics(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching IC metrics:", error);
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (loading) {
    return <div style={{textAlign: 'center', padding: '3rem', color: 'var(--text-muted)'}}>Loading your metrics...</div>;
  }

  if (!icMetrics) {
    return <div style={{textAlign: 'center', padding: '3rem', color: 'var(--danger-color)'}}>Failed to load metrics. Is the backend server running?</div>;
  }

  return (
    <div className="ic-view animate-fade-in">
      <div className="view-header">
        <h2 className="view-greeting">Welcome back, {icMetrics.developerName}</h2>
        <p className="view-subtitle">{icMetrics.role} • Metrics for {icMetrics.period}</p>
      </div>
      
      <div className="metric-grid">
        {icMetrics.metrics.map((metric, index) => (
          <MetricCard 
            key={metric.id} 
            metric={metric} 
            delay={index * 100} 
          />
        ))}
      </div>
    </div>
  );
};

export default ICView;
