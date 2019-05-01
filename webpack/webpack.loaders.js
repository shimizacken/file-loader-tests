const PRODUCTION = 'production';

module.exports = env => {
  
  return [{
    test: /\.(jpg|png|ico)$/,
    resolve: {
      extensions: ['.jpg', '.png', '.ico']
    },
    use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:5].[ext]',
          outputPath: 'images'
        }
      }
    ]
  }
  ];
};
