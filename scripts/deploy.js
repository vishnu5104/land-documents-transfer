const hre = require('hardhat');

async function main() {
    const OwnershipTransfer = await hre.ethers.getContractFactory('OwnershipTransfer');
    const ownershipTransfer = await OwnershipTransfer.deploy();
    await ownershipTransfer.deployed();

    console.log('Market deployed to:', ownershipTransfer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
