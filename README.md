# Debug helper for htmlbars

Installation
```
ember install ember-cli-template-debug
```

Usage
```mustache
{{debug-console testParam1 testParam2 testParam3 testParam4 testParam5 testParam6}}
```

Output

```log
debugConsole: params: 6
debugConsole: ----------------------
debugConsole: param: 0
debugConsole: type: string
debugConsole: toString: Simple string
debugConsole: source:  Simple string
debugConsole: ----------------------
debugConsole: param: 1
debugConsole: type: number
debugConsole: toString: 23
debugConsole: source:  23
debugConsole: ----------------------
debugConsole: param: 2
debugConsole: type: object
debugConsole: toString: [object Object]
debugConsole: source:  Object {debug: true}
debugConsole: ----------------------
debugConsole: param: 3
debugConsole: type: object
debugConsole: toString: 1,3
debugConsole: source:  [1, 3]
debugConsole: ----------------------
debugConsole: param: 4
debugConsole: type: object
debugConsole: source:  null
debugConsole: ----------------------
debugConsole: param: 5
debugConsole: type: undefined
debugConsole: source:  undefined
debugConsole: ----------------------
```
