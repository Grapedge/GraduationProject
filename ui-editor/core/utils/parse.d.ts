/// <reference types="ts-toolbelt" />
import type { TransformOptions } from '@babel/core';
import type { File } from '@babel/types';
declare const parse: import("Function/Curry").Curry<(options: TransformOptions, code: string) => File>;
export default parse;
