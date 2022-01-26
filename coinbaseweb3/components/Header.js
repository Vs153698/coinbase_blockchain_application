import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";
import styled from "styled-components";
import TransferModal from "./Modal/TransferModal";

Modal.setAppElement('#__next') // to make modal work in nextjs we have to do this little hack
const Wrapper = styled.div`
width: calc(100% - 3rem);
padding: 1rem 1.5rem;
border-bottom: 1px solid #282b2f;
display:flex;
align-items: center;
`
const Title = styled.div`
font-size: 2rem;
font-weight: 600;
flex: 1;
`
const ButtonsContainer = styled.div`
display:flex;
`
const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }

`
const WalletLink = styled.div`
font-size: 0.8rem;
border: 1px solid #282b2f;
border-radius:50rem;
font-size: 1.2rem;
margin-right: 1rem;
padding: 0 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
const WalletLinkTitle = styled.div`
font-size: 1.1rem;
margin-bottom: 0.3rem;
color: #278d75;
font-weight: 600;
`
const WalletAddresses = styled.div`
width: 100%;
font-size:0.8rem;
text-align: center;
`

const Header = ({ Walletaddress, connectWallet }) => {
    const router = useRouter()
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#0a0b0d',
            padding: 0,
            border: 'none',
        },
        overlay:{
            backgroundColor:'rgba(10,11,13,0.75)'
        }
    }
    return (
        <Wrapper>
            <Title>Assets</Title>
            <ButtonsContainer>
                <WalletLink>
                    <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                    <WalletAddresses>{Walletaddress.slice(0, 7)}...{Walletaddress.slice(35)}</WalletAddresses>
                </WalletLink>
                <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
                    Buy/Sell
                </Button>
                <Link href={"/?transfer=1"} passHref>
                    <Button style={{ backgroundColor: "transparent", color: "white" }}>Send/Receive</Button>
                </Link>
            </ButtonsContainer>
            <Modal style={customStyles} isOpen={!!router.query.transfer} onRequestClose={() => router.push('/')}>
                <TransferModal />
            </Modal>
        </Wrapper>
    );
}

export default Header;