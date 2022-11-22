import axios from 'axios';
import { Contract, providers } from 'ethers';
import Web3Modal from 'web3modal';
import { MarketAddressABI, MarketAddress } from '../context/constants';

export const getWeb3Modal = () => {
    let modal = new Web3Modal({
        network: 'mumbai',
        providerOptions: {},
        disableInjectedProvider: false,
    });
    return modal;
};

export async function getProviderOrSigner(web3ModalRef, needSigner = false) {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
        window.alert('Change the network to mumbai');
        throw new Error('Change network to mumbai');
    }

    if (needSigner) {
        return web3Provider.getSigner();
    }

    return web3Provider;
}

export const getContract = (signerOrProvider) => {
    return new Contract(MarketAddress, MarketAddressABI, signerOrProvider);
};
