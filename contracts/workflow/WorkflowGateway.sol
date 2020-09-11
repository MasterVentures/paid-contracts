pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../agreements/AgreementModels.sol";
import "../workflow/WorkflowRegistry.sol";

//
// @dev Controls and executes steps by whitelisted users
//
contract WorkflowGateway is Ownable, AgreementModels {
    event WorkflowStepStart(
        address indexed sender,
        uint256 indexed current,
        uint256 indexed actorId
    );
    event WorkflowStepCompleted(
        address indexed recipient,
        uint256 indexed next,
        uint256 indexed actorId,
        uint256 documentId
    );

    mapping (address => mapping( address => bool)) whitelistedWorkflowInstances;
    WorkflowRegistry wfRegistry;

    constructor(address registry) public {
        wfRegistry = WorkflowRegistry(registry);
    }

    function executeStep(
        bytes32 id,
        address workflowInstance,
        uint256 stepId
    ) public returns (bool) {
        // Validates msg.sender
        require(
            whitelistedWorkflowInstances[msg.sender][workflowInstance] == true,
            "User has not been approved"
        );
        require(
            wfRegistry.has(workflowInstance) == true,
            "Workflow instance not registered"
        );
        BaseWorkflow wfInstance = BaseWorkflow(workflowInstance);
        require(
            wfInstance.hasStep(id, stepId) == true,
            "Workflow step not registered"
        );
        // TODO: To be implemented
        
        // Validates workflow exists in registry
        // Validates steps exists in registry *** New
        // Executes steps
        // must call workflow execute -> oracle, smart contract
        // emit LogWorkflowStepStart(msg.sender, step, steps[step].currentActor);

        // require(users[msg.sender].expires > now, "LICENSED_EXPIRED");
        // require(users[to].expires > now, "INVALID_RECIPIENT");
        // require(
        //     0 != findNext[actor][step],
        //     "WF_TEMPLATE_INVALID_ACTOR_OR_STEP"
        // );

        // uint256 next = findNext[actor][step];

        // if (steps[step].mappingType == 2) {
        //     (, uint256 fork) = model.updateSwitch(
        //         docId,
        //         to,
        //         msg.sender,
        //         steps[step],
        //         steps[next],
        //         extid,
        //         payload
        //     );
        //     next = fork;
        // } else {
        //     model.onAddRow(to, msg.sender, steps[step], steps[next], payload);
        // }

        // emit WorkflowStepCompleted(
        //     to,
        //     next,
        //     steps[next].currentActor,
        //     model.getCurrentModelIndex()
        // );
        return true;
    }

    function addUserToWhitelist(address user, address workflowInstance)
        public
        returns (bool)
    {
        whitelistedWorkflowInstances[user][workflowInstance] = true;
        // Adds user to agreement contract
        return true;
    }

    function removeUserFromWhitelist(address user, address workflowInstance)
        public
        returns (bool)
    {
        whitelistedWorkflowInstances[user][workflowInstance] = false;
        // Removes user to agreement contract
        return true;
    }
}
