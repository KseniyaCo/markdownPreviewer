import React from 'react';
import marked from 'marked'

const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: `# This is an <h1> tag
      \n## This is an <h2> tag
      \n**This text is bold**
      \n\nList:\n* Item 1\n* Item 2
      \n\n[GitHub](https://github.com/KseniyaCo?tab=overview&from=2019-02-01&to=2019-02-12) - my GitHub
      \n\nAs Kanye West said:\n> We're living the future so> the present is our past.\nI think you should use an
      \`<addr>\` element here instead.
      \n\n![image example](https://habrastorage.org/webt/3f/lq/sf/3flqsfiqzb6yrzksg0o76xiagg0.png)
      \n\`\`\`
      // this is multi-line code:
      
      function anotherExample(firstLine, lastLine) {
        if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
          return multiLineCode;
        }
      }
      \n\`\`\``
    }
  }
  
  handleChange = e => {
    this.setState({
      result: e.target.value
    })
  }

  getMarkedText = () => {
      return { __html: marked(this.state.result, { sanitize: true,  renderer: renderer }) };
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
            rows="10"
            value={this.state.result} />
          </div>
          <div className="textareaName">
            <p className="paragraphName">Previewer</p>
            <div id="preview" className="output" dangerouslySetInnerHTML={this.getMarkedText()}/>
            {/* <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.getMarkedText(), { renderer: renderer })}} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
