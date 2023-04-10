import { Component } from 'react'
import './App.css'
import { Col, Container, Row } from 'reactstrap'
import { marked } from 'marked'

const INITIAL_STATE = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: INITIAL_STATE
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;

    const markdown = marked.parse(text);

    return (
      <Container className='text-center m-5'>
        <h1 className='m-5'>Convert your Markdown here</h1>
        <Row className='m-5'>
          <Col sm={6}>
            <textarea className='form-control' value={ text } id='editor' onChange={ this.handleChange } />
          </Col>
          <Col sm={6}>
            <div id='preview' className='preview' dangerouslySetInnerHTML={{ __html: markdown }}></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App
