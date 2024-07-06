import { Box, styled } from '@mui/material';

import { useContext, useState, useEffect } from 'react';

import { DataContext } from '../Context/DataProvider';

function Result() {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const Container = styled(Box)`
    height: 41vh;
  `
    const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe
                srcDoc={src}
                title='output'
                sandbox='allow-scripts'
                frameBorder="0"
                width='100%'
                height='100%'
            />
        </Container>
    )
}
export default Result;

{/* <p>HeLL</p> */ }

// p{
//     font-size:90px
//     }