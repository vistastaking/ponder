export const RocketMinipoolManagerAddress =
  "0x6d010c43d4e96d74c422f2e27370af48711b49bf";
export const RocketMinipoolManagerAbi = [
  {
    inputs: [
      {
        internalType: "contract RocketStorageInterface",
        name: "_rocketStorageAddress",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minipool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "BeginBondReduction",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minipool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "CancelReductionVoted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minipool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "MinipoolCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minipool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "MinipoolDestroyed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minipool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256"
      }
    ],
    name: "ReductionCancelled",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256"
      }
    ],
    name: "createMinipool",
    outputs: [
      {
        internalType: "contract RocketMinipoolInterface",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_validatorPubkey",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_bondAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_currentBalance",
        type: "uint256"
      }
    ],
    name: "createVacantMinipool",
    outputs: [
      {
        internalType: "contract RocketMinipoolInterface",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "decrementNodeStakingMinipoolCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "destroyMinipool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getActiveMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFinalisedMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getMinipoolAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_pubkey",
        type: "bytes"
      }
    ],
    name: "getMinipoolByPubkey",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256"
      }
    ],
    name: "getMinipoolCountPerStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "initialisedCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "prelaunchCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stakingCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "withdrawableCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dissolvedCount",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolDepositType",
    outputs: [
      {
        internalType: "enum MinipoolDeposit",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolDestroyed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolPubkey",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolRPLSlashed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minipoolAddress",
        type: "address"
      }
    ],
    name: "getMinipoolWithdrawalCredentials",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeActiveMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeFinalisedMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getNodeMinipoolAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeStakingMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_depositSize",
        type: "uint256"
      }
    ],
    name: "getNodeStakingMinipoolCountBySize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getNodeValidatingMinipoolAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "getNodeValidatingMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256"
      }
    ],
    name: "getPrelaunchMinipools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getStakingMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getVacantMinipoolAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVacantMinipoolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "incrementNodeFinalisedMinipoolCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nodeAddress",
        type: "address"
      }
    ],
    name: "incrementNodeStakingMinipoolCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "removeVacantMinipool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_pubkey",
        type: "bytes"
      }
    ],
    name: "setMinipoolPubkey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_previousBond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_newBond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_previousFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
      }
    ],
    name: "updateNodeStakingMinipoolCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;
