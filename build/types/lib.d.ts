// Type definitions for @asm/utf8 0.1.0
// Project: https://github.com/AlexMasterov/utf8.js
// Definitions by: Alex Masterov <https://github.com/AlexMasterov>
// TypeScript Version: 3.7

declare module '@asm/utf8' {
  export function strToUint8(str: string, offset?: number, length?: number) : Uint8Array;
  export function strToUtf8(str: string, offset?: number, length?: number) : string;
  export function utf8Length(bin: string, offset?: number, length?: number) : number;
  export function utf8ToStr(bin: string, offset?: number, length?: number): string;
  export function utf8viewToStr(view: DataView, offset?: number, length?: number) : string;
}
