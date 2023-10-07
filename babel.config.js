module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ['module-resolver',
          {
            root: ['./'],
            extensions: ['.ts', '.ios.ts', '.android.ts', '.tsx'],
            alias: {
                "components": "./components",
                "hooks": "./hooks",
                "layouts": "./layouts",
                "navigators": "./navigators",
                "screens": "./screens",
                "types": "./types",
                "utils": "./utils",
                "global": "./global"
            }
          },
        ],
      ],
  };
};
