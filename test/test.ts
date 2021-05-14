import { ethers } from "hardhat";
import { Signer } from "ethers";
import  { expect, assert } from "chai";
import { Nda } from "../template/nda.html"


describe("Agreement", () => {

	let accounts: Signer[]

	beforeEach(async function () {
		accounts = await ethers.getSigners();
		console.log("Get TimeStamp:", Math.floor((await ethers.provider.getBlock("latest")).timestamp / 1000));
	});

	//   ** Function SetPayment, SetRecipient, GetPayment, GetRecipient */
	//   ** 1. Test Initial Value of Smart Contract : How it is working - Test Case */
	//   ** t1. Setting Payment Value */
	//   ** t2. Setting Recipient Address */
	//   ** t3. Getting Payment Value*/
	//   ** t4. Getting Recipient Address*/

  	it("1. Should return the new value of Payment and Recipient changes", async function() {
		const Agreement = await ethers.getContractFactory("Agreement");
		const agreement = await Agreement.deploy();
		const payments = '1500000000000000000';
		const recipient = '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc';

    	const Agreements = await agreement.deployed();

		console.log("Agreement Address Deployed: ", Agreements.address);
		await Agreements.setPayment(payments);
		await Agreements.setRecipient(recipient);
		console.log("Get Payments: ", (await Agreements.getPayment()).toString());
		expect(await Agreements.connect(accounts[3]).getPayment()).to.equal('1500000000000000000');
		console.log("Get Address Recipient: ", (await Agreements.getRecipient()).toString());
		expect((await Agreements.connect(accounts[0]).getRecipient()).toLowerCase()).to.equal('0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc');
	});

  	//   ** Function owner(), transferOwnership(), renounceOwnership() */
	//   ** 2. Test OwnerShip Functions of Smart Contract : How it is working - Test Case */
	//   ** t1. Getting Current Owner */
	//   ** t2. Setting Transfer OwnerShip */
	//   ** t3. Setting Renounce OwnerShip */
	//   ** t4. Verify Smart Contract Don't Have any Owner */

	it("2. Should be Setting and Getting the OwnerShip of the Smart Contract", async () => {
		const Agreement = await ethers.getContractFactory("Agreement");
		const agreement = await Agreement.deploy();

		const Agreements = await agreement.deployed();

		console.log("Owner of th Smart Contract:", (await Agreements.owner()).toString());
		expect(await Agreements.owner()).to.equal(await accounts[0].getAddress());
		await Agreements.transferOwnership(await accounts[1].getAddress());
		await Agreements.connect(accounts[1]).renounceOwnership();
		console.log("New OwnerShip of the Smart Contract:", (await Agreements.owner()).toString());
		expect(await Agreements.owner()).to.equal('0x0000000000000000000000000000000000000000');
	});

	//   ** Function create(), addWhitelisted(), agreements(), whiteListed() */
	//   ** 3. Test Create Agreements and Different Method to Testing : How it is working - Test Case */
	//   ** t1. Setting a Smart Agreements */
	//   ** t2. Getting a Smart Agreements by Id, and verify if is valid  */
	//   ** t3. Getting a Smart Agreements by Id */
	//   ** t4. Getting a Smart Agreements by Id, through mapping */

	it("3. Test Create Smart Agreement and Testing different way to get and validate", async () => {
		const Agreement = await ethers.getContractFactory("Agreement");
		const Token = await ethers.getContractFactory("ERC20Token");
		const agreement = await Agreement.deploy();
		const ERC20 = await Token.deploy();
		const payments = '1500000000000000000';
		const recipient = '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc';

		const Agreements = await agreement.deployed();
		const ERC20Token = await ERC20.deployed();

		await Agreements.setPayment(payments);
		await Agreements.setRecipient(recipient);

		const party = await accounts[4].getAddress();
		const peersSigner = [
			await accounts[5].getAddress(),
			await accounts[6].getAddress(),
			await accounts[7].getAddress(),
			await accounts[8].getAddress(),
			await accounts[9].getAddress()]
		console.log("Agreement Address: ", Agreements.address, "ERC20 Address: ", ERC20Token.address);
		peersSigner.unshift(party);
		console.log("Peers Signer: ", peersSigner);

		// Add ERC20 Token for all Signer
		await ERC20Token.mintToWallet(party, '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[0], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[1], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[2], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[3], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[4], '15000000000000000000');
		console.log("Verify Balance of ERC20 for Creator: ", (await ERC20Token.balanceOf(peersSigner[0])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 1: ", (await ERC20Token.balanceOf(peersSigner[0])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 2: ", (await ERC20Token.balanceOf(peersSigner[1])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 3: ", (await ERC20Token.balanceOf(peersSigner[2])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 4: ", (await ERC20Token.balanceOf(peersSigner[3])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 5: ", (await ERC20Token.balanceOf(peersSigner[4])).toString());
		// Valid Value of Smart Agreements
		const timestamp = Math.floor((await ethers.provider.getBlock("latest")).timestamp / 1000);
		const amountSigner = 6;
		const IPFSAddr:string = "QmaMLRsvmDRCezZe2iebcKWtEzKNjBaQfwcu7mcpdm8eY2";
		const FormTmplId = ethers.utils.id(Nda);
		const Form = ethers.utils.id(Nda);
		const digest:string = "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000";
		console.log("Get TimeStamp:", timestamp);
		// Create a New Smart Agreements
		await ERC20Token.connect(accounts[4]).increaseAllowance(Agreements.address, payments);
		const agreementTx =  await Agreements.connect(accounts[4]).create(
			ERC20Token.address,
			(timestamp + 1),
			(timestamp + 5),
			amountSigner,
			IPFSAddr,
			FormTmplId,
			Form,
			digest
		);
		console.log("Gas Estimate: ", agreementTx.gasLimit.toString());
		if (agreementTx.gasLimit == null ) {
			agreementTx.gasLimit = await ethers.provider.estimateGas(agreementTx);
		};
		const receipt = await agreementTx.wait();
		const agreementId = receipt.events[3].args.id.toString();
		const agreementCreated = await Agreements.connect(accounts[4]).agreements(agreementId);
		console.log("Smart Agreement: ", agreementCreated);
		// Expect and Asserts
		expect(agreementCreated[1]).to.equal(false);
		expect(agreementCreated[2]).to.equal(0);
		expect(agreementCreated[3]).to.equal(amountSigner);
		expect(agreementCreated[6]).to.equal(timestamp+1);
		expect(agreementCreated[7]).to.equal(timestamp+5);
		expect(agreementCreated[8][0]).to.equal(party);
		expect(agreementCreated[11][0]).to.equal(IPFSAddr);
		const addWhitelisted = await Agreements.connect(accounts[4]).addWhitelisted(
			agreementId,
			amountSigner,
			peersSigner
		);
		if (addWhitelisted.gasLimit == null ) {
			addWhitelisted.gasLimit = await ethers.provider.estimateGas(addWhitelisted);
		};
		const receipt2 = await addWhitelisted.wait();
		// Testing the Account in the Mapping of Whitelisted
		expect((await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 0))[4][0]).to.equal((await accounts[4].getAddress()));
		expect((await Agreements.connect(accounts[5]).whiteListed(agreementId, party, 1))[4][0]).to.equal((await accounts[5].getAddress()));
		expect((await Agreements.connect(accounts[6]).whiteListed(agreementId, party, 2))[4][0]).to.equal((await accounts[6].getAddress()));
		expect((await Agreements.connect(accounts[7]).whiteListed(agreementId, party, 3))[4][0]).to.equal((await accounts[7].getAddress()));
		expect((await Agreements.connect(accounts[8]).whiteListed(agreementId, party, 4))[4][0]).to.equal((await accounts[8].getAddress()));
		expect((await Agreements.connect(accounts[9]).whiteListed(agreementId, party, 5))[4][0]).to.equal((await accounts[9].getAddress()));

		console.log("WhiteListed Creator: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 0))[4][0], "Account: ", (await accounts[4].getAddress()));
		console.log("WhiteListed Peer 1: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 1))[4][0], "Account: ", (await accounts[5].getAddress()));
		console.log("WhiteListed Peer 2: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 2))[4][0], "Account: ", (await accounts[6].getAddress()));
		console.log("WhiteListed Peer 3: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 3))[4][0], "Account: ", (await accounts[7].getAddress()));
		console.log("WhiteListed Peer 4: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 4))[4][0], "Account: ", (await accounts[8].getAddress()));
		console.log("WhiteListed Peer 5: ", (await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 5))[4][0], "Account: ", (await accounts[9].getAddress()));
	})

	//   ** Function pendingSign(), agreements(), whiteListed() */
	//   ** 4. Test Create Agreements, change state to Pending Sign still Complete and Different Method to Testing : How it is working - Test Case */
	//   ** t1. Setting a Smart Agreements */
	//   ** t2. Call pendingSign Method, and verify if is valid  */
	//   ** t3. Complete the Signer and verify if is valid*/
	//   ** t4. Getting a Smart Agreements by Id, with status Completed */

	it("4. Test Create Agreements, change state to Pending Sign still Complete and Different Method to Testing", async () => {
		const Agreement = await ethers.getContractFactory("Agreement");
		const Token = await ethers.getContractFactory("ERC20Token");
		const agreement = await Agreement.deploy();
		const ERC20 = await Token.deploy();
		const payments = '1500000000000000000';
		const recipient = '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc';

		const Agreements = await agreement.deployed();
		const ERC20Token = await ERC20.deployed();

		await Agreements.setPayment(payments);
		await Agreements.setRecipient(recipient);

		const party = await accounts[4].getAddress();
		const peersSigner = [
			await accounts[5].getAddress(),
			await accounts[6].getAddress()]
		console.log("Agreement Address: ", Agreements.address, "ERC20 Address: ", ERC20Token.address);
		peersSigner.unshift(party);
		console.log("Peers Signer: ", peersSigner);

		// Add ERC20 Token for all Signer
		await ERC20Token.mintToWallet(peersSigner[0], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[1], '15000000000000000000');
		await ERC20Token.mintToWallet(peersSigner[2], '15000000000000000000');
		console.log("Verify Balance of ERC20 for Creator: ", (await ERC20Token.balanceOf(peersSigner[0])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 1: ", (await ERC20Token.balanceOf(peersSigner[1])).toString());
		console.log("Verify Balance of ERC20 for Peer Signer 2: ", (await ERC20Token.balanceOf(peersSigner[2])).toString());
		// Valid Value of Smart Agreements
		const timestamp = Math.floor((await ethers.provider.getBlock("latest")).timestamp / 1000);
		const amountSigner = 3;
		const IPFSAddr:string = "QmaMLRsvmDRCezZe2iebcKWtEzKNjBaQfwcu7mcpdm8eY2";
		const FormTmplId = ethers.utils.id(Nda);
		const Form = ethers.utils.id(Nda);
		const digest:string = "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000";
		console.log("Get TimeStamp:", timestamp);
		// Create a New Smart Agreements
		await ERC20Token.connect(accounts[4]).increaseAllowance(Agreements.address, payments);
		const agreementTx =  await Agreements.connect(accounts[4]).create(
			ERC20Token.address,
			(timestamp + 10),
			(timestamp + 15),
			amountSigner,
			IPFSAddr,
			FormTmplId,
			Form,
			digest
		);
		console.log("Gas Estimate: ", agreementTx.gasLimit.toString());
		if (agreementTx.gasLimit == null ) {
			agreementTx.gasLimit = await ethers.provider.estimateGas(agreementTx);
		};
		const receipt = await agreementTx.wait();
		const agreementId = receipt.events[3].args.id.toString();
		const agreementCreated = await Agreements.connect(accounts[4]).agreements(agreementId);
		// Expect and Asserts
		expect(agreementCreated[1]).to.equal(false);
		expect(agreementCreated[2]).to.equal(0);
		expect(agreementCreated[3]).to.equal(amountSigner);
		expect(agreementCreated[6]).to.equal(timestamp+10);
		expect(agreementCreated[7]).to.equal(timestamp+15);
		expect(agreementCreated[8][0]).to.equal(party);
		expect(agreementCreated[11][0]).to.equal(IPFSAddr);
		const addWhitelisted = await Agreements.connect(accounts[4]).addWhitelisted(
			agreementId,
			amountSigner,
			peersSigner
		);
		if (addWhitelisted.gasLimit == null ) {
			addWhitelisted.gasLimit = await ethers.provider.estimateGas(addWhitelisted);
		};
		const receipt2 = await addWhitelisted.wait();
		// Testing the Account in the Mapping of Whitelisted
		expect((await Agreements.connect(accounts[4]).whiteListed(agreementId, party, 0))[4][0]).to.equal((await accounts[4].getAddress()));
		expect((await Agreements.connect(accounts[5]).whiteListed(agreementId, party, 1))[4][0]).to.equal((await accounts[5].getAddress()));
		expect((await Agreements.connect(accounts[6]).whiteListed(agreementId, party, 2))[4][0]).to.equal((await accounts[6].getAddress()));
		// Pending Signer 1
		console.log("Start Peer Signer 1 ==========================");
		await ERC20Token.connect(accounts[5]).increaseAllowance(Agreements.address, payments);
		const peerSignerOneTx = await Agreements.connect(accounts[5]).pendingSign(
			ERC20Token.address,
			agreementId,
			(timestamp + 10),
			(timestamp + 15),
			IPFSAddr,
			Form,
			digest
		);
		// if (peerSignerOneTx.gasLimit == null ) {
		// 	peerSignerOneTx.gasLimit = await ethers.provider.estimateGas(addWhitelisted);
		// };
		// Testing the Account in the Mapping of Whitelisted if signed boolean change true
		expect((await Agreements.connect(accounts[5]).whiteListed(agreementId, party, 0))[2]).to.equal(true);
		console.log("Peer Signed 1 Signed: ", ((await Agreements.connect(accounts[5]).whiteListed(agreementId, party, 0))[2]))
		let agreementUpdated = await Agreements.connect(accounts[5]).agreements(agreementId);
		console.log("Status of Smart Agreements after Peer Signed 1 Signed: ", agreementUpdated[2])
		expect(agreementUpdated[2]).to.equal(1);
		// Pending Signer 2
		await ERC20Token.connect(accounts[6]).increaseAllowance(Agreements.address, payments);
		const peerSignerTwoTx = await Agreements.connect(accounts[6]).pendingSign(
			ERC20Token.address,
			agreementId,
			(timestamp + 10),
			(timestamp + 15),
			IPFSAddr,
			Form,
			digest
		);
		// if (peerSignerTwoTx.gasLimit == null ) {
		// 	peerSignerTwoTx.gasLimit = await ethers.provider.estimateGas(addWhitelisted);
		// };
		// Testing the Account in the Mapping of Whitelisted if signed boolean change true
		expect((await Agreements.connect(accounts[6]).whiteListed(agreementId, party, 0))[2]).to.equal(true);
		console.log("Peer Signed 2 Signed: ", ((await Agreements.connect(accounts[6]).whiteListed(agreementId, party, 0))[2]))
		agreementUpdated = await Agreements.connect(accounts[6]).agreements(agreementId);
		console.log("Status of Smart Agreements after Peer Signed 2 Signed: ", agreementUpdated[2])
		expect(agreementUpdated[2]).to.equal(2);
	})

});
