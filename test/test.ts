import { ethers } from "hardhat";
import { Signer } from "ethers";
import  { expect } from "chai";

describe("Agreement", function() {

	let accounts: Signer[];

	beforeEach(async function () {
		accounts = await ethers.getSigners();
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

	//   ** Function partyCreate(), has(), get(), agreements() */
	//   ** 3. Test Create Agreements and Different Method to Testing : How it is working - Test Case */
	//   ** t1. Setting a Smart Agreements */
	//   ** t2. Getting a Smart Agreements by Id, and verify if is valid  */
	//   ** t3. Getting a Smart Agreements by Id */
	//   ** t4. Getting a Smart Agreements by Id, through mapping */

	it("3. Test Create Smart Agreement and Testing different way to get and validate", async () => {
		const Agreement = await ethers.getContractFactory("Agreement");
		const agreement = await Agreement.deploy();

		const Agreements = await agreement.deployed();

		const party = await accounts[4].getAddress();
		const counterparty = await accounts[5].getAddress();
	})

});
