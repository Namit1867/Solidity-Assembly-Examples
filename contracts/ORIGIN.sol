//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Origin {
    function originAssembly() public view returns (address) {
        assembly {
            let result := origin()
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function originSolidity() public view returns (address) {
        return tx.origin;
    }
}
