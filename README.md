# Javascript Workshop

## Introduction

This workshop focuses on exercising functional programming skills with Javascript via a series of exercises to be implemented `get_started.js` file.

## Requirements

Node.js installed on the local workstation.

## Installation

```sh
npm install
```

## Run the script in VSCODE

On the file press F5 -> Run in Node.js.

Create a launch configuration file as such:

```json
{
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Launch Javascript Workshop",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/get_started.js"
        }
    ]
}
```
