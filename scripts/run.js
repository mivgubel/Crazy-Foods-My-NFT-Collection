const main = async () => {
	const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT"); // deploy el contrato y crea lo necesario en artifacts para correrlo
	const nftContract = await nftContractFactory.deploy(); // crea un blockchain local para correr el contrato
	await nftContract.deployed(); // mined y deploy our contract to the local blockchain
	console.log("Contract deployed to: ", nftContract.address);

	// Call the function.
	let txn = await nftContract.makeAnEpicNFT();
	await txn.wait(); // Wait for it to be mined.

	// Mint another NFT for fun.
	txn = await nftContract.makeAnEpicNFT();
	// Wait for it to be mined.
	await txn.wait();

	// Call the function.
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait(); // Wait for it to be mined.

	// Call the function.
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait(); // Wait for it to be mined.

	// Call the function.
	txn = await nftContract.getTotalNFTsMinted();
	await txn.wait(); // Wait for it to be mined.
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
