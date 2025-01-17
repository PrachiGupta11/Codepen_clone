import { Box, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

import { useState } from 'react';

function Editor({ heading, language, value, onChange, icon, color }) {

  const Container = styled(Box)`
      flex-grow:1;
      flex-basic:0;
      display:flex;
      flex-direction:column;
      padding:0px 8px 8px;
    `
  const Header = styled(Box)`
      display:flex;
      justify-content: space-between;
      background:#060606;
      color:#AAAEBC;
      font-weight:700 ;
    `

  const Heading = styled(Box)`
      background:#1d1e22;
      display:flex;
      padding:9px 12px;
      
    `
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: 'black'
            }}
          >
            {icon}

          </Box>

          {heading}

        </Heading>

        <CloseFullscreen
          fontSize='small'
          style={{ alignSelf: 'center' }}
          onClick={() => setOpen(prevState => !prevState)}
        />

      </Header>

      <ControlledEditor
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />

    </Container>
  )
}
export default Editor;