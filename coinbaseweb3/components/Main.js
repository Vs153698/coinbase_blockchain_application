import styled from "styled-components";
import Portflio from "./Portflio";
const Wrapper = styled.div`
display:flex;
max-height: calc(100% - 64px);
overflow: scroll;
& div{
    border-radius: 0.4rem;
}
`
const Main = () => {
    return (
        <Wrapper>
            <Portflio/>
        </Wrapper>
    );
}

export default Main;