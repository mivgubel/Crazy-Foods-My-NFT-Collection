const main = async () => {
	const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
	const nftContract = await nftContractFactory.deploy();
	await nftContract.deployed();

	console.log("Contract deployed to: ", nftContract.address);

	// Call the function.
	let txn = await nftContract.makeAnEpicNFT();
	await txn.wait(); // Wait for it to be mined.
	console.log("Minted NFT #1");

	/* Second Call to the function
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait(); // Wait for it to be mined.
	console.log("Mined NFT #2");
    */
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();
