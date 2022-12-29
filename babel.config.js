const isMetro = (caller) => caller && caller.name === 'metro'

module.exports = (api) =>
  api.caller(isMetro)
    ? {
        presets: ['module:metro-react-native-babel-preset'],
      }
    : api.env('test')
    ? {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
        targets: { node: 16 },
      }
    : {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            { development: !api.env('production'), runtime: 'automatic' },
          ],
        ],
        ...(!api.env('production') && { plugins: ['react-refresh/babel'] }),
      }
