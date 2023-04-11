import { Component } from 'react'
import './App.css'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap'
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons';

const INITIAL_STATE = `This is a paragraph. 

**With bolded text.**

> Block Quotes!

# Heading 1
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](http://vicentemferrer.000webhostapp.com)

This is an inline \`<div></div>\`

This is a block of code:

\`\`\`
  const { prop } = Object;

  console.log(prop);
\`\`\`

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
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

    const markdown = marked(text, { breaks: true });

    return (
      <Container className='text-center mt-auto mx-auto'>
        <Row className='m-5'>
          <Col sm={6}>
            <Card className='Card'>
              <CardTitle className='left pt-3 ps-3'>
                <h3><FontAwesomeIcon icon={ faPencil } /> Editor</h3>
              </CardTitle>
              <CardBody>
                <textarea className='form-control' value={ text } id='editor' onChange={ this.handleChange } />
              </CardBody>
            </Card>
          </Col>         
          <Col sm={6}>
            <Card className='Card'>
              <CardTitle className='left pt-3 ps-3'>
                <h3><FontAwesomeIcon icon={ faEye } /> Preview</h3>
              </CardTitle>
              <CardBody>
                <div id='preview' className='preview' dangerouslySetInnerHTML={{ __html: markdown }} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App
