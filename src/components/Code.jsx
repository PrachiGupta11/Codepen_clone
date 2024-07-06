import Editor from "./Editor";
import {Box, styled} from '@mui/material';
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

function Code()
{
    const {html,css,js,setHtml,setCss,setJs}= useContext(DataContext);

    const Container=styled(Box)`
      display: flex;
      background-color: #060606;
    `
    return(
        <Container>
            <Editor 
            language='xml'
            heading='HTML' 
            value={html} 
            onChange={setHtml}
            icon='/' 
            color='#FF3C41' 
            />  
            <Editor 
            language='css'
            heading='CSS' 
            value={css} 
            onChange={setCss}
            icon='*' 
            color='#0EBEFF' 
            />
            <Editor 
            language='javascript'
            heading='JavaScript' 
            icon='( )' 
            color='#FCD000' 
            value={js} 
            onChange={setJs}
            />
        </Container>
    )
}
export default Code;