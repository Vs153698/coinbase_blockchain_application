import styled from "styled-components";
import Portflio from "./Portflio";
import Promos from "./Promos";
const Wrapper = styled.div`
display:flex;
max-height: calc(100vh - 64px);
overflow: hidden;
overflow-y: scroll;
::-webkit-scrollbar{
    display: none;
}
& > div{
    border-radius: 0.4rem;
}
`
const Main = ({Walletaddress,sanityToken,thirdWebTokens}) => {
    return (
        <Wrapper>
            <Portflio  Walletaddress={Walletaddress}  sanityToken={sanityToken} thirdWebTokens={thirdWebTokens} />
            <Promos/>
        </Wrapper>
    );
}

export default Main;