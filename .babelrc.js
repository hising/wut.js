// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/preset-typescript",
        "@babel/preset-react"
    ]
};
