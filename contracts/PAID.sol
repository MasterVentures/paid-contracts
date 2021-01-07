// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.10;

import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

contract PAID is ERC20PresetMinterPauser {

    constructor() public ERC20PresetMinterPauser("PAID", "PAID") {
       // mint(address(this), 1000000 ether);
    }
}