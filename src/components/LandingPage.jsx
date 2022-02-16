import { ethers } from "ethers";
import fightNFT from "../utils/fightNFT.json";

export default function LandingPage(props) {
  const { CONTRACT_ADDRESS } = props;
  const { connectWallet, currentAccount, setCurrentAccount } = props.account;

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          fightNFT.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.mintNFT();

        console.log("Mining...please wait.");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedButton = () => {
    return (
      <button
        onClick={connectWallet}
        className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Connect Wallet
      </button>
    );
  };

  const renderConnectedButton = () => {
    return (
      <button
        onClick={askContractToMintNft}
        className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Mint
      </button>
    );
  };

  console.log(currentAccount);

  return (
    <section className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="relative bottom-[5vh]">Join the universe</h1>
      {currentAccount === ""
        ? renderNotConnectedButton()
        : renderConnectedButton()}
      <img className="w-[20rem] mt-[5rem]" src="../../Earth.gif"></img>
    </section>
  );
}
