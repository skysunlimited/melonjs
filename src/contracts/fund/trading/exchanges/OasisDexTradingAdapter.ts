import BigNumber from 'bignumber.js';
import { padLeft, numberToHex } from 'web3-utils';
import { Address } from '../../../../Address';
import { functionSignature } from '../../../../utils/functionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { zeroBigNumber } from '../../../../utils/zeroBigNumber';
import { OasisDexOffer } from '../../../exchanges/third-party/oasisdex/OasisDexExchange';
import { CallOnExchangeArgs } from '../Trading';
import { BaseTradingAdapter } from './BaseTradingAdapter';
import { checkSufficientBalance } from '../utils/checkSufficientBalance';
import { checkFundIsNotShutdown } from '../utils/checkFundIsNotShutdown';
import { checkSenderIsFundManager } from '../utils/checkSenderIsFundManager';
import { checkExistingOpenMakeOrder } from '../utils/checkExistingOpenMakeOrder';
import { checkCooldownReached } from '../utils/checkCooldownReached';

export interface OasisDexMakeOrderArgs {
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export interface OasisDexTakeOrderArgs {
  id: BigNumber;
  makerAddress: Address;
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
  fillTakerQuantity: BigNumber;
}

export class OasisDexTradingAdapter extends BaseTradingAdapter {
  /**
   * Cancel a make order on OasisDex
   *
   * @param from The address of the sender.
   * @param id The id of the order.
   * @param offer The order to cancel.
   */
  public cancelOrder(from: Address, id: BigNumber, offer: OasisDexOffer) {
    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'cancelOrder'),
      orderAddresses: [
        this.trading.contract.address,
        zeroAddress,
        offer.makerAsset,
        offer.takerAsset,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
      ],
      orderData: [paddedZeros, paddedZeros, paddedZeros, paddedZeros],
      identifier: padLeft(numberToHex(id.toFixed(0)), 64),
      signature: paddedZeros,
    };

    const validate = async () => {
      const hubAddress = await this.trading.getHub();
      await checkSenderIsFundManager(this.trading.environment, from, hubAddress);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  /**
   * Create a make order on 0x.
   *
   * @param from The address of the sender.
   * @param args The arguments.
   */
  public makeOrder(from: Address, args: OasisDexMakeOrderArgs) {
    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'makeOrder'),
      orderAddresses: [
        this.trading.contract.address,
        zeroAddress,
        args.makerAsset,
        args.takerAsset,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        args.makerQuantity,
        args.takerQuantity,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
      ],
      orderData: [paddedZeros, paddedZeros, paddedZeros, paddedZeros],
      identifier: paddedZeros,
      signature: paddedZeros,
    };

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const hubAddress = await this.trading.getHub();

      await Promise.all([
        checkSufficientBalance(this.trading.environment, args.makerAsset, args.makerQuantity, vaultAddress),
        checkFundIsNotShutdown(this.trading.environment, hubAddress),
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
        checkExistingOpenMakeOrder(this.trading, args.makerAsset),
        checkCooldownReached(this.trading, args.makerAsset),
      ]);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }

  /**
   * Create a make order on 0x.
   *
   * @param from The address of the sender.
   * @param id The id of the offer.
   * @param offer The order to take.
   */
  public takeOrder(from: Address, id: BigNumber, offer: OasisDexOffer, fillTakerQuantity?: BigNumber) {
    const amount = fillTakerQuantity || offer.takerQuantity;
    const paddedZeros = padLeft('0x0', 64);
    const methodArgs: CallOnExchangeArgs = {
      exchangeIndex: this.index,
      methodSignature: functionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [
        offer.owner,
        this.trading.contract.address,
        offer.makerAsset,
        offer.takerAsset,
        zeroAddress,
        zeroAddress,
        zeroAddress,
        zeroAddress,
      ],
      orderValues: [
        offer.makerQuantity,
        offer.takerQuantity,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        zeroBigNumber,
        amount,
        zeroBigNumber,
      ],
      orderData: [paddedZeros, paddedZeros, paddedZeros, paddedZeros],
      identifier: padLeft(numberToHex(id.toFixed(0)), 64),
      signature: padLeft('0x0', 64),
    };

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const hubAddress = await this.trading.getHub();

      await Promise.all([
        checkSufficientBalance(this.trading.environment, offer.takerAsset, amount, vaultAddress),
        checkFundIsNotShutdown(this.trading.environment, hubAddress),
        checkSenderIsFundManager(this.trading.environment, from, hubAddress),
      ]);
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
