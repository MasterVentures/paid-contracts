pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "../../node_modules/@openzeppelin/contracts/utils/EnumerableSet.sol";
import "../../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
import "../../node_modules/@openzeppelin/contracts/utils/Address.sol";
import './IWModel.sol';
import './WTemplate.sol';

//TODO: create factory should return the respective smart contract
contract WFactory is LibWStep {
    using EnumerableSet for EnumerableSet.AddressSet;
    using SafeMath for uint256;
    using Address for address payable;
    // Emits when an document is created
    event LogWorkflowCreated(address indexed wf);
    event LogWorkflowRemoved(address indexed wf);
    event Withdrawn(address indexed payee, uint256 weiAmount);

    address public owner;
    uint256 fee = 0.002 * 1e18;
    // workflows
    EnumerableSet.AddressSet internal workflows;
    //  uint256 public workflowCount;
    constructor() public {
        owner = msg.sender;
    }
    function setFee(uint256 _fee) public {
        require(msg.sender == owner, "INVALID_USER");
        fee = _fee;
    }

    function getFee() public returns (uint256) {
        return fee;
    }

    function withdraw(address payable payee) public {
        require(msg.sender == owner, "INVALID_USER");
        uint256 b = address(this).balance;
        payee.sendValue(address(this).balance);
        emit Withdrawn(payee, b);
    }
    // payWorkflowTemplate - payable
    function payWorkflowTemplate(address modelAddress)
    public payable returns (address) {
        require(msg.value == fee, "MUST SEND FEE BEFORE USE");
        IPaid(model).getImpl
        address wf = address(new WTemplate(owner, address(this)));
        WTemplate(wf).delegateTemplateOwner(msg.sender, modelAddress);
        bool ok = workflows.add(wf);
        emit LogWorkflowCreated(wf);
        return wf;
    }
    // removeWorkflowTemplate - admin call
    function removeWorkflowTemplate(address wf) public returns (bool) {
        require(msg.sender == owner, "INVALID_USER");
        bool ok = workflows.remove(wf);
        emit LogWorkflowRemoved(wf);
        return ok;
    }

    function count() public view returns (uint256) {
        return workflows.length();
    }

    function get(uint256 index) public view returns (address) {
        return workflows.at(index);
    }
}