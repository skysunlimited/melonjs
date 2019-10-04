import { ContractSendMethod } from 'web3-eth-contract';
import { Environment } from '../types';

export const estimateGas = async (env: Environment, method: ContractSendMethod, account?: string) => {
  const latestBlock = await env.eth.getBlock('latest');
  const estimation = await method.estimateGas(account && { from: account });
  return Math.min(estimation + 300000, latestBlock.gasLimit);
};
