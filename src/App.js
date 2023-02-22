import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked";

const initialState = ` # Header 1 Preview
## Header 2 Preview
[Link Preview](https://www.google.com)
Some inline code \`hello world\` for your enjoyment
A code block
\`\`\`
const helloMarkdown = () => {
    return 'Hello, Markdown'
}
\`\`\`
Some list items:
- Item 1
- Item 2
- Item 3
Block Quote
> This is
> a blockquote
> for your enjoyment
Some **bold** and *italicized* text
Images:
![image](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialState,
    };
  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  render() {
    let inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    let outputStyle = {
      width: "auto",
      height: "auto",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h2>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h2>
                <div className="mark-input" style={inputStyle}>
                  <textarea
                    id="editor"
                    className="input rounded"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h2>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h2>
              </div>
              <div
                id="preview"
                className="rounded"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
