const hre = require("hardhat");

async function main() {
  [account] = await hre.ethers.getSigners();
  console.log("Address:", account.address);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  console.log("Token deployed to:", token.address);

  const Factory = await ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();
  console.log("Factory deployed to:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
