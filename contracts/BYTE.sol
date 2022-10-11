//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Byte {
    function byteAssembly(uint x, uint y) public pure returns (uint) {
        //Xth byte in 32 byte y
        //y = 32766 (01111111 11111110)
        //x = 31
        //Output = 254 (11111110)
        assembly {
            let result := byte(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function byteSolidity(uint x, uint y) public pure returns (uint) {
        return (x >> (248 - (y * 8))) & 0xFF;
    }
}
