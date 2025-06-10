# 🫖 Buy & Chai ☕  

**Support creators one chai at a time — powered by Web3.**  
> A modern, decentralized donation DApp using Ethereum, built with ❤️ using Solidity, Hardhat, and React.

---

---

## 📂 Table of Contents  
- [📝 About](#-about)  
- [🚀 Features](#-features)  
- [⚙️ Blockchain Architecture](#-blockchain-architecture)  
- [🛠 Tech Stack](#-tech-stack)  
- [📦 Installation](#-installation)  
- [🧠 Smart Contract Logic](#-smart-contract-logic)  
 - [📄 License](#-license)

---

## 📝 About

**Buy & Chai** is a decentralized platform for sending Ethereum tips to someone along with a heartfelt message — just like buying them a real cup of chai! ☕

Built using **Solidity smart contracts**, the app records every donation permanently on the Ethereum blockchain, ensuring transparency and decentralization.

---

## 🚀 Features

✅ Donate ETH with a custom message  
✅ Record sender’s name, address, and timestamp  
✅ View all memos on a beautiful table interface  
✅ MetaMask integration for secure transactions  
✅ Fully decentralized with on-chain data  

---

## ⚙️ Blockchain Architecture

### 🔐 Solidity  
Smart contract language used to create and manage:
- Chai donations (via buyChai(name, message) function)
- Structs like Memo storing from, name, message, and timestamp
- Public arrays for on-chain memo tracking

### 🛠 Hardhat  
Development environment for compiling, deploying, and testing smart contracts.  
Key Features:
- Local Ethereum node for testing
- Deployment scripts
- Plugin support (e.g., Etherscan verification, gas reports)

bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia


### 🔌 Ethers.js  
Lightweight JavaScript library for:
- Connecting frontend to Ethereum network
- Sending transactions and interacting with smart contracts
- Wallet integration via MetaMask

js
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);
await contract.buyChai(name, message, { value: ethers.utils.parseEther("0.001") });


### 🌐 MetaMask Wallet  
- Used for account management and signing transactions  
- Fully integrated with Ethereum testnets like **Sepolia**

---

## 🛠 Tech Stack

| Layer        | Tech                                |
|--------------|-------------------------------------|
| Smart Contract | Solidity                          |
| Dev Environment | Hardhat                         |
| Frontend     | React, JSX, Custom CSS              |
| Blockchain Library | Ethers.js                    |
| Wallet       | MetaMask                           |
| Deployment   | Vercel / Netlify / Alchemy / Infura |

---


bash
git clone https://github.com/your-username/buy-and-chai.git
cd buy-and-chai
npm install



---

## 🧠 Smart Contract Logic

solidity
struct Memo {
    address from;
    uint256 timestamp;
    string name;
    string message;
}

function buyChai(string memory name, string memory message) public payable {
    require(msg.value > 0, "Can't buy chai for free!");

    memos.push(Memo(
        msg.sender,
        block.timestamp,
        name,
        message
    ));
}


> All transactions are permanently recorded on-chain. This means anyone can verify who supported whom and when!

---## 📄 License

Licensed under the MIT License.

---

## 👨‍💻 Built By  
**Akilan**  
Frontend Developer & Web3 Enthusiast 🌐💻  
[GitHub](https://github.com/your-github-id) • [LinkedIn](#)
