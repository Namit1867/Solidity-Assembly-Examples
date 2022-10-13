//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CallValue {
    function callValueAssembly() public payable returns (uint) {
        assembly {
            let result := callvalue()
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function callValueSolidity() public payable returns (uint) {
        return msg.value;
    }
}
