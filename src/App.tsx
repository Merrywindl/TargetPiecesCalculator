import { useState } from 'react'
import './App.css'

function App() {
  const [targetPieces, setTargetPieces] = useState('')
  const [downtime, setDowntime] = useState('')

  // Calculate target pieces after downtime
  const targetPiecesAfterDowntime = () => {
    const target = parseFloat(targetPieces) || 0
    const downtimeValue = parseFloat(downtime) || 0
    return Math.round((1 - downtimeValue) * target)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <label htmlFor="targetPieces" style={{ fontSize: '27px', minWidth: '180px', fontWeight: 'bold' }}>
          Target Pieces:
        </label>
        <input
          id="targetPieces"
          type="number"
          value={targetPieces}
          onChange={(e) => setTargetPieces(e.target.value)}
          placeholder="Enter target pieces"
          style={{ 
            padding: '12px', 
            width: '300px', 
            fontSize: '24px',
            MozAppearance: 'textfield'
          }}
        />
      </div>
      <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <label htmlFor="downtime" style={{ fontSize: '27px', minWidth: '180px', fontWeight: 'bold' }}>
          Downtime:
        </label>
        <input
          id="downtime"
          type="number"
          value={downtime}
          onChange={(e) => setDowntime(e.target.value)}
          placeholder="Enter downtime"
          style={{ 
            padding: '12px', 
            width: '300px', 
            fontSize: '24px',
            MozAppearance: 'textfield'
          }}
        />
      </div>
      <button 
        style={{ 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '15px 30px', 
          border: 'none', 
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '30px',
          display: 'none',
          fontSize: '18px'
        }}
      >
        Calculate
      </button>
      <div style={{ marginBottom: '30px' }}>
        <strong style={{ fontSize: '36px' }}>Target Pieces after downtime: {targetPiecesAfterDowntime()}</strong>
      </div>
    </div>
  )
}

export default App
