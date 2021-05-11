// SPDX-License-Identifier: MIT

//** Standard ERC20 - Simple Paid Token */
//** Author Alex Hong : PAID Network 2021.3 */

pragma solidity >=0.6.10 <=0.8.4;

//** remove previous contract and create standard ERC20 contract */
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {

    constructor() ERC20("ERC20 Token", "WETH") {}

    function mintToWallet(address address_, uint256 amount)
        public
        payable
        returns (bool)
    {
        _mint(address_, amount);
        return true;
    }
}
