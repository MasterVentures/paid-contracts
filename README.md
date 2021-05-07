# PAID Contracts V2

Before to Start
---
#### Validate Develop Environment
---
- Node v14.16.0 or +
- Solc v0.8.0 or +
- Hardhat v2.2.1 or +

#### For Testing (Like Ganache for Hardhat)
---
```
npx hardhat node
```
#### Start migration
---
```
npx hardhat run --network localhost scripts/deploy.js --verbose
```

#### Start truffle test
---
```
npx hardhat test
```

## environment variables (.env file)
---
MNEMONIC=
<br/>
INFURAKEY=
<br/>
PRIVATE_KEY=
<br/>
URL_BSC=https://bsc-dataseed1.binance.org
<br/>
URL_TESTNET_BSC=https://data-seed-prebsc-1-s1.binance.org:8545
<br/>
URL_MOONBEAM_TESTNET=https://rpc.testnet.moonbeam.network

### Last ETH Gas Reporter
---
![](./gasreporter.png)


### Last Contract Size Reporter
---
![](./sizereporter.png)

