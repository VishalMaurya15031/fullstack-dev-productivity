import React, { useState } from 'react';
import ICView from './components/ICView';
import ManagerView from './components/ManagerView';
import { Activity } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('ic');

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">
          <Activity className="app-title-icon" size={32} />
          DevInsight MVP
        </div>
        
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'ic' ? 'active' : ''}`}
            onClick={() => setActiveTab('ic')}
          >
            My Performance
          </button>
          <button 
            className={`nav-tab ${activeTab === 'manager' ? 'active' : ''}`}
            onClick={() => setActiveTab('manager')}
          >
            Team Summary
          </button>
        </div>
      </header>

      <main>
        {activeTab === 'ic' ? <ICView /> : <ManagerView />}
      </main>
    </div>
  );
}

export default App;
