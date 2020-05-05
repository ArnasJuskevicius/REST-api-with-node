module.exports = {
    'env': {
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    'plugins': ['prettier'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        "prefer-arrow-callback": "error",
        "linebreak-style": 0,
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "semi": false,
            "endOfLine": "auto"
          }
        ]
    
    }
}
