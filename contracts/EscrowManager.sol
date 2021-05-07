// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.10 <=0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/utils/escrow/Escrow.sol";

contract EscrowManager {
    mapping(bytes32 => Escrow) escrows;
    constructor() {}

    function withdraw() public pure returns (bool) {
        return true;
    }

    function deposit() public pure returns(bool) {
        return true;
    }

    function has() public pure returns (bool) {
        return true;
    }
}
