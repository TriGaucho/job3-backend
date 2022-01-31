Build: npm run compile

launch.json: 
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/server.ts",
            "outFiles": ["${workspaceFolder}/dist/**/*.js"]
        }
    ]
}

Buildar a pasta /dist e depois rodar o debugger do VsCode.