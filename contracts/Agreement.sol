pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Agreement is Ownable {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
    }

    function create() public returns (bool) {
        return true;
    }

    function has() public view returns(bool) {
        return true;
    }

    function modify() public returns (bool) {
        return true;
    }

    function dispute() public returns (bool) {
        return true;
    }

    function close() public returns (bool) {
        return true;
    }
}