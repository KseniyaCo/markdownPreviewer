import React from 'react';
import marked from 'marked'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: `# Marked in the browser\nRendered by **[marked.js.org](https://marked.js.org/)**.`
    }
  }

  handleChange = e => {
    this.setState({
      result: e.target.value
    })
  }

  getMarkedText = () => {
      return { __html: marked(this.state.result, { sanitize: true }) };
  }

  render() {
      return (
      <div className="App">
        <div className="textareas column">
          <div className="textareaName">
            <p className="paragraphName">Editor</p>
            <textarea  id="editor" onChange={this.handleChange} 
            placeholder="Welcome to React Markdown Previewer!" 
            cols="60" 
            rows="10">
            # Marked in the browser
            Rendered by **[marked.js.org](https://marked.js.org/)**.
            </textarea>
          </div>
          <div className="textareaName">
            <p className="paragraphName">Previewer</p>
            <div id="preview" className="output" dangerouslySetInnerHTML={this.getMarkedText()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
