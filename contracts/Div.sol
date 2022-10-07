//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Div {
    function divAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := div(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function divSolidity(uint x, uint y) public pure returns (uint) {
        return x / y;
    }
}
