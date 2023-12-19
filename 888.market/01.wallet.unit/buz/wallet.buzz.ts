import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActMrk from "../../00.market.unit/market.action";
import * as ActWal from "../../01.wallet.unit/wallet.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;


export const initWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
  debugger
  return cpy;
};

export const updateWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {
  return cpy;
};


var count = 0;


export const pollWallet = (cpy: WalletModel, bal: WalletBit, ste: State) => {

  const wallets = [];

  if (window['cardano'] == null) {
    bal.slv({ walBit: { idx: "poll-wallet", src: 'cardano-not-present', lst: wallets } });
    return cpy
  }

  for (const key in window['cardano']) {
    if (window['cardano'][key].enable && wallets.indexOf(key) === -1) {
      wallets.push(key);
    }
  }

  wallets

  if (wallets.length === 0 && count < 3) {
    setTimeout(async () => {
      count += 1;
      bit = await ste.hunt(ActWal.POLL_WALLET, bal)

    }, 1000);
    return;
  }

  //  this.setState({
  //      wallets,
  //      whichWalletSelected: wallets[0]
  //  }, () => {
  //      this.refreshData()
  // });


  bal.slv({ walBit: { idx: "poll-wallet", src: 'wallet-not-present', lst: wallets } });


  return cpy;
};

const fetcher = async (id) =>
  await fetch(`https://ancient-harbor-25799-e23312a8ce20.herokuapp.com/key`).then(
    (response) => response.json(),
  )



export const openWallet = async (cpy: WalletModel, bal: WalletBit, ste: State) => {

  const walletKey = bal.idx;

  try {
    cpy.api = await window['cardano'][walletKey].enable();
  } catch (err) {
    console.log(err);
    bal.slv({ walBit: { idx: "open-wallet-error", src: walletKey } });

    return cpy
  }

  let walletIsEnabled = false;

  const userAddress = (await cpy.api.getRewardAddresses())[0];

  // do: send request with 'userAddress' to the backend
  // do: if new user, create new user model in the database
  
  debugger

  const networkId = await cpy.api.getNetworkId();
  
  //const changeAddrHex = await cpy.api.getChangeAddress();
  //const changeAddress = cpy.api.Address.from_bytes(Buffer.from(changeAddrHex, 'hex'));
  //const stakeCredential = cpy.api.BaseAddress.from_address(changeAddress).stake_cred();
  //const stakeAddress = cpy.api.RewardAddress.new(networkId, stakeCredential).to_address();

  //var stakeAddrBech32 = stakeAddress.to_bech32()
  //var stakeAddrHex = stakeAddress.to_hex()


  //const messageUtf = `account: ${stakeAddrBech32}`;

  
  
  const messageUtf = `account: ${ networkId + ':::' + userAddress}`;

  let Buffer = require('buffer/').Buffer

  const messageHex = Buffer.from(messageUtf).toString("hex");
  const sigData = await cpy.api.signData(userAddress, messageHex);
  
  debugger


  //const result = await submitToBackend(sigData);
  //alert(result.message);

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