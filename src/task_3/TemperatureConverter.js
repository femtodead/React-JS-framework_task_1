
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'





const convertCf = (e) => {

    e.target.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.value = (e.target.value * 9/5)+32;

}

const convertFc = (e) => {

    e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.value = (e.target.value - 32)* 5/9;

}



function TemperatureConverter() {
    // const [value, setValue] = useState([]);



    // const makeANentry = (e) => {
    //     const c = e.target.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.value
    //     const f = e.target.previousElementSibling.lastElementChild.firstElementChild.value
    //     let newVal = value;
    //     newVal.push([c,f]);
    //     setValue(newVal);
    //     console.log(value);
    // }



    return ( 
    <div>
        <h1>Первая задача</h1>
        <TextField onChange={convertCf} 
          id="outlined-number"
          label="Цельсия"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField onChange={convertFc}
          id="outlined-number"
          label="Фарингейта"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button  variant="outlined">Button</Button>
        
        
        
    </div>
     );
}
// (1 °C × 9/5) + 32 
export default TemperatureConverter;