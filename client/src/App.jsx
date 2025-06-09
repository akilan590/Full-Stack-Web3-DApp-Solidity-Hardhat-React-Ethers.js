import { useState, useEffect } from 'react'
import abi from "./contractJson/chai.json"
import { ethers } from "ethers"
import Buy from './components/buy'  
import Memos from './components/memos'
import chai from './assets/chai.png'

import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x550116C2CBA2674a1bdd8eDCE742EAf6A88Df13d";  // fixed address here
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Please install MetaMask!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        })

        window.ethereum.on("accountsChanged", () => {
          window.location.reload()
        })

        setAccount(accounts[0]);  // set first account instead of whole array

        const provider = new ethers.providers.Web3Provider(ethereum); // read the Blockchain
        const signer = provider.getSigner();  // write the blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        console.log(contract)
        setState({ provider, signer, contract });

      } catch (error) {
        console.log(error)
      }
    }
    template();
  }, [])

  return (
    <div >
    <img src={chai} className="img-fluid" alt=".." width="100%" />
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
  )
}

export default App