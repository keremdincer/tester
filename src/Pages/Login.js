import React from 'react'

import ReactCodeInput from 'react-code-input'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  loginCard: {
    width: '320px',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    textAlign: 'center',
    background: 'white',
    boxShadow: '0 0 5px rgba(0,0,0,.13)',
    borderRadius: '6px'
  },
  description: {
    marginBottom: '16px'
  },
  submitBtn: {
    marginTop: '16px',
    padding: '8px',
    fontSize: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  }
}

// ({ match }) =>

export default class Login extends React.Component {

  render () {
    return (
      <div style={styles.container}>
        <div className="LoginCard" style={styles.loginCard}>
          <div style={{ margin: '16px' }}>
            <p style={styles.description}>Lütfen bu sayfaya ulaştığınız linkle birlikte gönderilen güvenlik kodunu giriniz.</p>
            <form>
              <ReactCodeInput autoFocus name='pin' type='tel' fields={6} onChange={(e) => console.log(e)} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
