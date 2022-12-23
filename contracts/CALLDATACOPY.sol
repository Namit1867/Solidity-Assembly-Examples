//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CallDataCopy {

    //NOTE :-
    //calldatacopy copies a number of bytes of the transaction data to memory.
    

    // function callDataCopyAssembly(uint x, uint y,uint _destBytes) public pure returns (uint) {
    //     assembly {
    //         let a := mload(0x00) //load pointer for 0x00 location
    //         calldatacopy(a,4,add(4,64)) //copy calldata[4] .... calldata[4+32] as starting 4 bytes is for function selector
    //         return(add(0x00,_destBytes), 32)
    //     }
    // }

    function callDataCopyAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let a := mload(0x00) //load pointer for 0x00 location
            calldatacopy(a,add(4,32),32) //copy calldata[4] .... calldata[4+32] as starting 4 bytes is for function selector
            return(a, 32)
        }
    }

    function callDataCopySolidity(uint x, uint y) public pure returns (uint) {
        uint _y = y;
        return _y;
    }

    function callDataCopyAssemUsingFreePtr(uint x, uint y) public pure returns (uint) {
        assembly {
            let a := mload(0x40) //load pointer for 0x40 location
            calldatacopy(a,add(4,32),32) //copy calldata[4] .... calldata[4+32] as starting 4 bytes is for function selector
            return(a, 32)
        }
    }

}
