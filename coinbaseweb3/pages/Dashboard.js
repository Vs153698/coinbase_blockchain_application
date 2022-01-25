import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Portflio from "../components/Portflio";

const Container = styled.div`
display:flex;
height: 100vh;
width:100vw;
background-color:#0a0b0d;
color: white;
`
const MainContainer = styled.div`
flex:1
`
const Dashboard = ({address}) => {
    return (
        <Container>
            <MainContainer>
            <Header/>
            <Main/>
            </MainContainer>
        </Container>
    );
}

export default Dashboard;