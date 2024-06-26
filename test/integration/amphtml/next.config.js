module.exports = {
  onDemandEntries: {
    // Make sure entries are not getting disposed.
    maxInactiveAge: 1000 * 60 * 60,
  },
  amp: {
    canonicalBase: 'http://localhost:1234',
  },
  experimental: {
    amp: {
      validator: require.resolve('../../lib/amp-validator-wasm.js'),
    },
  },
  // edit here
}
