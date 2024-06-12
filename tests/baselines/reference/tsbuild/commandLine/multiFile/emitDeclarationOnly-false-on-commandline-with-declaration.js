currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;

//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;

//// [/src/project1/src/c.ts]
import { a } from "./a";export const c = a;

//// [/src/project1/src/d.ts]
import { b } from "./b";export const d = b;

//// [/src/project1/src/tsconfig.json]
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true
  }
}

//// [/src/project2/src/e.ts]
export const e = 10;

//// [/src/project2/src/f.ts]
import { a } from "../../project1/src/a"; export const f = a;

//// [/src/project2/src/g.ts]
import { b } from "../../project1/src/b"; export const g = b;

//// [/src/project2/src/tsconfig.json]
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "references": [
    {
      "path": "../../project1/src"
    }
  ]
}



Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output file 'src/project1/src/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts]
export declare const a = 10;


//// [/src/project1/src/b.d.ts]
export declare const b = 10;


//// [/src/project1/src/c.d.ts]
export declare const c = 10;


//// [/src/project1/src/d.d.ts]
export declare const d = 10;


//// [/src/project1/src/tsconfig.tsbuildinfo]
{"version":"FakeTSVersion"}

//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "version": "FakeTSVersion",
  "size": 27
}

//// [/src/project2/src/tsconfig.tsbuildinfo]
{"version":"FakeTSVersion"}

//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "version": "FakeTSVersion",
  "size": 27
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/d.ts' is older than output 'src/project1/src/a.d.ts'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: change
Input::
//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;const aa = 10;



Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/tsconfig.tsbuildinfo' is older than input 'src/project1/src/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/d.d.ts] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: emit js files
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output file 'src/project1/src/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;
var aa = 10;


//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project1/src/d.d.ts] file written with same contents
//// [/src/project1/src/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;


//// [/src/project1/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/a.d.ts'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no change run with js emit
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/a.js'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: js emit with change
Input::
//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;const blocal = 10;



Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/tsconfig.tsbuildinfo' is older than input 'src/project1/src/b.ts'

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m7[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m7[0m     {
[7m [0m [91m    ~[0m
[7m8[0m       "path": "../../project1/src"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m9[0m     }
[7m [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/a.js] file written with same contents
//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
var blocal = 10;


//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/c.js] file written with same contents
//// [/src/project1/src/d.d.ts] file written with same contents
//// [/src/project1/src/d.js] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo] file written with same contents
//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents
