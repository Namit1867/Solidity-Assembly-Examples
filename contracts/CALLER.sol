//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Caller {
    function callerAssembly() public view returns (address) {
        assembly {
            let result := caller()
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function callerSolidity() public view returns (address) {
        return msg.sender;
    }
}
