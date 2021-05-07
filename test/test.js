const { expect } = require("chai");

describe("Agreement", function() {
  it("Should return the new greeting once it's changed", async function() {
		const Agreement = await hre.ethers.getContractFactory("Agreement");
		const agreement = await Agreement.deploy();

    await agreement.deployed();
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // await greeter.setGreeting("Hola, mundo!");
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
