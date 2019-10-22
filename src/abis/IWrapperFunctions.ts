import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const IWrapperFunctionsAbi = [
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrderNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
    ],
    name: 'batchCancelOrders',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrKillOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrKillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketSellOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
    ],
    name: 'getOrdersInfo',
    outputs: [
      {
        components: [
          {
            name: 'orderStatus',
            type: 'uint8',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
          },
          {
            name: 'orderTakerAssetFilledAmount',
            type: 'uint256',
          },
        ],
        name: '',
        type: 'tuple[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'makerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketBuyOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketSellOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'makerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketBuyOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];