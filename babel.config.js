module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          "@data": ["@data/*"],
          "@infrastructure": ["@infrastructure/*"],
          "@main": ["@main/*"],
          "@domain": ["@domain/*"],
          "@presentation": ["@presentation/*"],
        },
      ],
    ],
  };
};
