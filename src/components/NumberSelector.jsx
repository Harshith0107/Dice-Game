import styled from 'styled-components'

function NumberSelector({setError, error, selectedNumber, setSelectedNumber} ) {

    const arrayNumbers =[1,2,3,4,5,6];

    const numberSelectorHandler = (number) =>{
        setSelectedNumber(number);
        setError("");
    }

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
    {arrayNumbers.map((number,i) => (
        <Box
        isselected={number===selectedNumber}
        key ={i}
        onClick={
            () => numberSelectorHandler(number)
        }
        >{number}</Box>))}
  </div>
  <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;


const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap : 24px;
}

.error{
    color : red;
}

p{
    font-size: 24px;
    font-weight: 700px;
}
`;

const Box = styled.div`
height : 72px;
width : 72px;
border : 1px solid black;
display : grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isselected ?  "black" : "white")};
color: ${(props) => (!props.isselected ?  "black" : "white")};

&:hover{

background-color: #1c1c1c;
color : white;
transition : 0.3s background ease-in;
}
`
