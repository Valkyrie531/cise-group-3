import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  state = {
    title: '',
    entries: []
  }

  componentDidMount = () => {
    this.getArticle();
  }

  getArticle = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({entries: data});
        console.log('Data received');
      })
      .catch(() => {
        console.log('Error');
      });
  }

  displayEntries = (entries) => {
    if (!entries.length) return null;

    entries.map((entry, index) => {
      <div key={index}>
        <h3>{entries.title}</h3>
      </div>
    });
  };

  render() {
    console.log('State', this.state);

    return (
      <div>
        <h2>Welcome</h2>

        <div className = "entries">
          {this.displayEntries(this.state.entries)}
        </div>
      </div>
    );
  }
}

export default App;
