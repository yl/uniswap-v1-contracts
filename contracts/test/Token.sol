// SPDX-License-Identifier: MIT
// FOR TEST PURPOSES ONLY. NOT PRODUCTION SAFE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Test Token", "TT") {
        _mint(msg.sender, 21000000 * 10**decimals());
    }
}
