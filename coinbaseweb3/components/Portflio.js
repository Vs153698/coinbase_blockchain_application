import styled from "styled-components";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from "../static/coins";
import Coin from "./Coin";
import BalanceChart from "./BalanceChart";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
flex:1;
display: flex;
justify-content: center;

`
const Content = styled.div`
width: 100%;
max-width: 1000px;
padding: 2rem 1rem;
`
const Chart = styled.div`
border: 1px solid #282b2f;
padding: 1rem 2rem;
`
const Balance = styled.div``
const BalanceTitle = styled.div`
color: #8a919e;
font-size: 0.9rem;
`
const BalanceValue = styled.div`
font-size: 1.8rem;
font-weight: 700;
margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
margin-top:1rem;
border: 1px solid #282b2f;
`
const Table = styled.table`
width: 100%;
`
const TableRow = styled.tr`
width: 100%;
display: flex;
justify-content: space-between;
& > th{
    text-align: center;
}
`
const TableItem = styled.div`
padding: 1rem 2rem;
`
const Divider = styled.div`
border-bottom: 1px solid #282b2f;
`
const Title = styled.div`
font-size:1.5rem;
font-weight: 600;
`

const Portflio = ({Walletaddress,sanityToken,thirdWebTokens}) => {
    const [WalletBalance, setWalletBalance] = useState(0);
    // convert all token into corresponding inr value
    const tokentoinr = {}
    for (const token of sanityToken) {
        tokentoinr[token.contractaddress] = Number(token.inrprice)
    }
   
    useEffect(() => {
        const calculateBalance = async()=>{
           const totalBalance = await Promise.all(
               thirdWebTokens.map(async token =>{
                   const balance = await token.balanceOf(Walletaddress)
                   return Number(balance.displayValue) * tokentoinr[token.address]
               })
           )
           setWalletBalance(totalBalance.reduce((acc,curr)=> acc + curr,0))
        }
       return calculateBalance()
    }, [thirdWebTokens,sanityToken]);
    
    return (
        <Wrapper>
            <Content>
                <Chart>
                    <div>
                        <Balance>
                            <BalanceTitle>Portfolio Balance</BalanceTitle>
                            <BalanceValue>{'₹'}{WalletBalance.toLocaleString()}</BalanceValue>
                        </Balance>
                    </div>
                    <BalanceChart />
                </Chart>
                <PortfolioTable>
                    <TableItem>
                        <Title>Your Assets</Title>
                    </TableItem>
                    <Divider />
                    <Table>
                        <TableItem>
                            <TableRow>
                                <div style={{ flex: 3 }}>Name</div>
                                <div style={{ flex: 2 }}>Balance</div>
                                <div style={{ flex: 1 }}>price</div>
                                <div style={{ flex: 1 }}>Allocation</div>
                                <div style={{ flex: 0 }}><BsThreeDotsVertical /></div>
                            </TableRow>
                        </TableItem>
                        <Divider />
                        <div>
                            {coins.map((coin, index) => (
                                <div key={index}>
                                    <Coin coin={coin} />
                                    <Divider />
                                </div>
                            ))}
                        </div>
                    </Table>
                </PortfolioTable>
            </Content>
        </Wrapper>
    );
}

export default Portflio;