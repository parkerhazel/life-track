import styled from "styled-components";

const Navbar = () => {

    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    return (
        <div style={{backgroundColor: "#D0DBE1", display: "flex", flexDirection: "row"}}>
            <Text2>LIFETRACK</Text2>
            <p>{getCurrentDate()}</p>
        </div>
    )
}

export default Navbar

const Text2 = styled.div`

  width: 650px;
  font-size: 70px;
  font-family: Roboto;
  font-weight: 600;
  color: #135bc6;
  top: 36px;
`;