import { ethers } from 'ethers';

const toHex = function(str) {
    let result = '';
    for (var i=0; i<str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}

const hashBlock = function(block) {
    let hexifiedBl = toHex(JSON.stringify(block));
    return ethers.utils.keccak256("0x" + hexifiedBl);
}

export const generateBlockAndHash = function(block, BC_DIFFICULTY) {
    let hashedBlock = hashBlock(block);
    
    while(!(hashedBlock.substr(2,BC_DIFFICULTY) === '0'.repeat(BC_DIFFICULTY))) {
        block.nounce = block.nounce + 1;
        hashedBlock = hashBlock(block);
    }
    
    return {
        blockData : block,
        blockHash : hashedBlock
    }
}