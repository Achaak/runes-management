export const ZIndices = {
  'XXX-LOW': -1000,
  'XX-LOW': -100,
  'X-LOW': -10,
  LOW: -1,
  HIGH: 1,
  'X-HIGH': 10,
  'XX-HIGH': 100,
  'XXX-HIGH': 1000,
}

export type ZIndicesType = keyof typeof ZIndices
