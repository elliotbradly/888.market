export const initWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
  debugger
  return cpy;
};

export const updateWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
  return cpy;
};


export const pollWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {


  const { wallet, connected } = useWallet();


  const wallets = [];
  var count;

  if (window['cardano'] == null) {
    bal.slv({ walBit: { idx: "poll-wallet", src: 'wallet-not-present', lst: wallets } });
    return cpy
  }

  for (const key in window['cardano']) {
    if (window['cardano'][key].enable && wallets.indexOf(key) === -1) {
      wallets.push(key);
    }
  }

  wallets

  bal.slv({ walBit: { idx: "poll-wallet", src: 'wallet-not-present', lst: wallets } });
  //debugger


  //if (wallets.length === 0 && count < 3) {
  //    setTimeout(() => {
  //this.pollWallets(count + 1);
  //    }, 1000);
  //   return;
  // }

  //  this.setState({
  //      wallets,
  //      whichWalletSelected: wallets[0]
  //  }, () => {
  //      this.refreshData()
  // });


  return cpy;
};



export const openWallet = async (cpy: WalletModel, bal: WalletBit, ste: State) => {



  const walletKey = bal.src;

  try {
    cpy.api = await window['cardano'][walletKey].enable();
  } catch (err) {
    console.log(err);
    bal.slv({ walBit: { idx: "open-wallet-error", src: walletKey } });

    return cpy
  }

  let walletIsEnabled = false;

  //const userAddress = (await wallet.getRewardAddresses())[0];
  //const res = await backendGetNonce(userAddress);

  // try {
  //   const walletName = bal.src;
  //   walletIsEnabled = await window['cardano'][ walletKey ].isEnabled();
  // } catch (err) {
  //   console.log(err)
  //   bal.slv({ walBit: { idx: "open-wallet-error", val: walletIsEnabled } });

  //  return cpy
  // }

  //const userAddress = (await wallet.getRewardAddresses())[0];
  //const signature = await wallet.signData(userAddress, nonce);
  //const res = await backendVerifySignature(nonce, userAddress, signature);
  //if (res.result === true) {
  // setState(2);
  //} else {
  //  setState(3);
  // }
  //} catch (error) {
  // setState(0);

  bal.slv({ walBit: { idx: "open-wallet", val: walletIsEnabled } });

  return cpy;





};



import { WalletModel } from "../wallet.model";
import WalletBit from "../fce/wallet.bit";
import State from "../../99.core/state";
import { MarketModel } from "888.market/00.market.unit/market.model";

import { CardanoWallet, MeshBadge, useWallet } from "@meshsdk/react";