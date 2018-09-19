
import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/app.scss';
import Router from './Router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);

      this.setState();
    });

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can add to home screen
      btnAdd.style.display = 'block';
      console.log('Хуй! Хуй! Хуй!');
    });

    btnAdd.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      btnAdd.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
    window.addEventListener('appinstalled', (evt) => {
      app.logEvent('a2hs', 'installed');
    });



  }

  render() {
    const loaded = this.state.loaded;
    return (
      <div>
        {!loaded && <div className={`load${this.state.loading ? '' : ' loaded'}`}>
          <div className='load__icon-wrap'>
            <svg className='load__icon'>
              <path fill='#ee1a2d' d='M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z' />
            </svg>
          </div>
        </div>}
        <div>
          <Router />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
