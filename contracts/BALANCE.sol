//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Balance {
    function balanceAssembly(address account) public view returns (uint) {
        assembly {
            let result := balance(account)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function balanceSolidity(address account) public view returns (uint) {
        return account.balance;
    }
}
