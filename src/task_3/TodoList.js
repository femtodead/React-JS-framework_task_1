import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField'




function TodoList () {
    const [inputValue, setInputValue] = React.useState('');
    const [submittedValue, setsubmittedValue] = React.useState('');
    const [listWorck, setlistWorck] = React.useState([]);





    React.useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    const Submit = (e) => {
        console.log(listWorck);
        e.preventDefault();
        setsubmittedValue(inputValue);
        setInputValue('');
        const card =  (<React.Fragment> <Card variant="outlined">
        
            
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {inputValue && inputValue}
                </Typography>
          
          
          
              </CardContent>
              <Button onClick={delElem} variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
            
          
          </Card> </React.Fragment>);
          let newList;
          if (listWorck == []){
              newList = [];
              newList.push(card);
          }else{
            newList = listWorck
            newList.push(card);
          }
          setlistWorck(newList)
          console.log(listWorck);
    }
    

    const delElem = (event) =>{
        event.target.parentElement.remove()
    }



    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );
    

    
 
    return ( 
        <Box sx={{ minWidth: 275 }}>
        <h1>Вторая задача</h1>
            <form onSubmit={Submit}>
            <TextField type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button type='submit' variant="outlined">Добавить</Button>
            </form>
        {listWorck.length > 0 && listWorck.map((el)=> el)}
        
    </Box>

     );
}

export default TodoList ;