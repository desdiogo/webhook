import { StringLiteralLike } from './node_modules/typescript/lib/tsserverlibrary.d';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      HOST: string
    }
  }
}

export {}