//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CallDataSize {
    //let data := calldataload(add(4, mul(offset, 0x20)))
    function callDataSizeAssembly(uint a,uint b) public pure returns (uint) {
        assembly {
            let data := sub(calldatasize(),4)
            mstore(0x0, data)
            return(0x0, 32)
        }
    }
}