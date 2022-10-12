//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Address {
    function addressAssembly() public view returns (address) {
        assembly {
            let result := address()
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function addressSolidity() public view returns (address) {
        return address(this);
    }
}
