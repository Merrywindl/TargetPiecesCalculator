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
      minHeight: '100vh',
      padding: '20px',
      paddingLeft: '60px',
      gap: '10px'
    }}>
      {/* Left side table */}
      <div style={{ 
        flex: '0 0 300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '40px'
      }}>
        <table style={{
          border: '3px solid #000',
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: '16px'
        }}>
          <tbody>
            {Array.from({ length: 13 }, (_, index) => (
              <tr key={index}>
                <td style={{
                  border: '1px solid #ccc',
                  borderRight: '3px solid #000',
                  borderBottom: index === 0 ? '3px solid #000' : '1px solid #ccc',
                  padding: '8px',
                  backgroundColor: index === 0 ? 'yellow' : (index % 2 === 0 ? '#f9f9f9' : 'white'),
                  fontWeight: index === 0 ? 'bold' : 'normal',
                  textAlign: 'center'
                }}>
                  {index === 0 ? 'Mins' : `${5 * index}`}
                </td>
                <td style={{
                  border: '1px solid #ccc',
                  borderLeft: 'none',
                  borderBottom: index === 0 ? '3px solid #000' : '1px solid #ccc',
                  padding: '8px',
                  backgroundColor: index === 0 ? 'yellow' : (index % 2 === 0 ? '#f9f9f9' : 'white'),
                  fontWeight: index === 0 ? 'bold' : 'normal',
                  textAlign: 'center'
                }}>
                  {index === 0 ? 'Hrs' : `${(5 * index / 60).toFixed(2)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side calculator */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <strong style={{ fontSize: '36px' }}>Target Pieces after downtime: {targetPiecesAfterDowntime()}</strong>
        </div>
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
      </div>
    </div>
  )
}

export default App
