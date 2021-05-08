import { ethers } from "hardhat";
import { Signer } from "ethers";
import  { expect } from "chai";


describe("Agreement", function() {

	let accounts: Signer[];

	beforeEach(async function () {
		accounts = await ethers.getSigners();
	});

  	it("Should return the new value of Payment and Recipient changes", async function() {
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
		console.log("Get OwnerShip of Agreement :", (await Agreements.owner()).toString());
		expect((await Agreements.connect(accounts[3]).owner())).to.equal(await accounts[0].getAddress());
  });
});
