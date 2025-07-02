
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Editor
 * 
 */
export type Editor = $Result.DefaultSelection<Prisma.$EditorPayload>
/**
 * Model ProjectLanguage
 * 
 */
export type ProjectLanguage = $Result.DefaultSelection<Prisma.$ProjectLanguagePayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editor`: Exposes CRUD operations for the **Editor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editors
    * const editors = await prisma.editor.findMany()
    * ```
    */
  get editor(): Prisma.EditorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectLanguage`: Exposes CRUD operations for the **ProjectLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLanguages
    * const projectLanguages = await prisma.projectLanguage.findMany()
    * ```
    */
  get projectLanguage(): Prisma.ProjectLanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    Editor: 'Editor',
    ProjectLanguage: 'ProjectLanguage',
    Language: 'Language'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "editor" | "projectLanguage" | "language"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Editor: {
        payload: Prisma.$EditorPayload<ExtArgs>
        fields: Prisma.EditorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          findFirst: {
            args: Prisma.EditorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          findMany: {
            args: Prisma.EditorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>[]
          }
          create: {
            args: Prisma.EditorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          createMany: {
            args: Prisma.EditorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>[]
          }
          delete: {
            args: Prisma.EditorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          update: {
            args: Prisma.EditorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          deleteMany: {
            args: Prisma.EditorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>[]
          }
          upsert: {
            args: Prisma.EditorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorPayload>
          }
          aggregate: {
            args: Prisma.EditorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditor>
          }
          groupBy: {
            args: Prisma.EditorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditorCountArgs<ExtArgs>
            result: $Utils.Optional<EditorCountAggregateOutputType> | number
          }
        }
      }
      ProjectLanguage: {
        payload: Prisma.$ProjectLanguagePayload<ExtArgs>
        fields: Prisma.ProjectLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findFirst: {
            args: Prisma.ProjectLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findMany: {
            args: Prisma.ProjectLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          create: {
            args: Prisma.ProjectLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          createMany: {
            args: Prisma.ProjectLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          delete: {
            args: Prisma.ProjectLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          update: {
            args: Prisma.ProjectLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          upsert: {
            args: Prisma.ProjectLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          aggregate: {
            args: Prisma.ProjectLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectLanguage>
          }
          groupBy: {
            args: Prisma.ProjectLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    editor?: EditorOmit
    projectLanguage?: ProjectLanguageOmit
    language?: LanguageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    editors: number
    languages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    editors?: boolean | UserCountOutputTypeCountEditorsArgs
    languages?: boolean | UserCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    editors: number
    languages: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editors?: boolean | ProjectCountOutputTypeCountEditorsArgs
    languages?: boolean | ProjectCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEditorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLanguageWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    projects: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | LanguageCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLanguageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    timeInterval: number | null
    lastHeartbeat: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    timeInterval: number | null
    lastHeartbeat: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    timeInterval: number | null
    lastHeartbeat: bigint | null
    lastFolder: string | null
    lastLang: string | null
    lastEditor: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    timeInterval: number | null
    lastHeartbeat: bigint | null
    lastFolder: string | null
    lastLang: string | null
    lastEditor: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    timeInterval: number
    lastHeartbeat: number
    lastFolder: number
    lastLang: number
    lastEditor: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    timeInterval?: true
    lastHeartbeat?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    timeInterval?: true
    lastHeartbeat?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    timeInterval?: true
    lastHeartbeat?: true
    lastFolder?: true
    lastLang?: true
    lastEditor?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    timeInterval?: true
    lastHeartbeat?: true
    lastFolder?: true
    lastLang?: true
    lastEditor?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    timeInterval?: true
    lastHeartbeat?: true
    lastFolder?: true
    lastLang?: true
    lastEditor?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    timeInterval: number
    lastHeartbeat: bigint
    lastFolder: string
    lastLang: string
    lastEditor: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    timeInterval?: boolean
    lastHeartbeat?: boolean
    lastFolder?: boolean
    lastLang?: boolean
    lastEditor?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    editors?: boolean | User$editorsArgs<ExtArgs>
    languages?: boolean | User$languagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    timeInterval?: boolean
    lastHeartbeat?: boolean
    lastFolder?: boolean
    lastLang?: boolean
    lastEditor?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    timeInterval?: boolean
    lastHeartbeat?: boolean
    lastFolder?: boolean
    lastLang?: boolean
    lastEditor?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    timeInterval?: boolean
    lastHeartbeat?: boolean
    lastFolder?: boolean
    lastLang?: boolean
    lastEditor?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "timeInterval" | "lastHeartbeat" | "lastFolder" | "lastLang" | "lastEditor", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    editors?: boolean | User$editorsArgs<ExtArgs>
    languages?: boolean | User$languagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      editors: Prisma.$EditorPayload<ExtArgs>[]
      languages: Prisma.$LanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      timeInterval: number
      lastHeartbeat: bigint
      lastFolder: string
      lastLang: string
      lastEditor: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editors<T extends User$editorsArgs<ExtArgs> = {}>(args?: Subset<T, User$editorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languages<T extends User$languagesArgs<ExtArgs> = {}>(args?: Subset<T, User$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly timeInterval: FieldRef<"User", 'Int'>
    readonly lastHeartbeat: FieldRef<"User", 'BigInt'>
    readonly lastFolder: FieldRef<"User", 'String'>
    readonly lastLang: FieldRef<"User", 'String'>
    readonly lastEditor: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.editors
   */
  export type User$editorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    where?: EditorWhereInput
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    cursor?: EditorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorScalarFieldEnum | EditorScalarFieldEnum[]
  }

  /**
   * User.languages
   */
  export type User$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    cursor?: LanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    timeSpent: number | null
    authorId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    timeSpent: bigint | null
    authorId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    timeSpent: bigint | null
    authorId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    timeSpent: bigint | null
    authorId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    timeSpent: number
    authorId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    timeSpent?: true
    authorId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    timeSpent?: true
    authorId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    timeSpent?: true
    authorId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    timeSpent?: true
    authorId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    timeSpent?: true
    authorId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    timeSpent: bigint
    authorId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timeSpent?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    editors?: boolean | Project$editorsArgs<ExtArgs>
    languages?: boolean | Project$languagesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timeSpent?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timeSpent?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    timeSpent?: boolean
    authorId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "timeSpent" | "authorId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    editors?: boolean | Project$editorsArgs<ExtArgs>
    languages?: boolean | Project$languagesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      editors: Prisma.$EditorPayload<ExtArgs>[]
      languages: Prisma.$ProjectLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      timeSpent: bigint
      authorId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editors<T extends Project$editorsArgs<ExtArgs> = {}>(args?: Subset<T, Project$editorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languages<T extends Project$languagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly timeSpent: FieldRef<"Project", 'BigInt'>
    readonly authorId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.editors
   */
  export type Project$editorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    where?: EditorWhereInput
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    cursor?: EditorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorScalarFieldEnum | EditorScalarFieldEnum[]
  }

  /**
   * Project.languages
   */
  export type Project$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    cursor?: ProjectLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Editor
   */

  export type AggregateEditor = {
    _count: EditorCountAggregateOutputType | null
    _avg: EditorAvgAggregateOutputType | null
    _sum: EditorSumAggregateOutputType | null
    _min: EditorMinAggregateOutputType | null
    _max: EditorMaxAggregateOutputType | null
  }

  export type EditorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
    timeSpent: number | null
  }

  export type EditorSumAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
    timeSpent: bigint | null
  }

  export type EditorMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    projectId: number | null
    timeSpent: bigint | null
  }

  export type EditorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    projectId: number | null
    timeSpent: bigint | null
  }

  export type EditorCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    projectId: number
    timeSpent: number
    _all: number
  }


  export type EditorAvgAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    timeSpent?: true
  }

  export type EditorSumAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    timeSpent?: true
  }

  export type EditorMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    projectId?: true
    timeSpent?: true
  }

  export type EditorMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    projectId?: true
    timeSpent?: true
  }

  export type EditorCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    projectId?: true
    timeSpent?: true
    _all?: true
  }

  export type EditorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editor to aggregate.
     */
    where?: EditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editors to fetch.
     */
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Editors
    **/
    _count?: true | EditorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorMaxAggregateInputType
  }

  export type GetEditorAggregateType<T extends EditorAggregateArgs> = {
        [P in keyof T & keyof AggregateEditor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditor[P]>
      : GetScalarType<T[P], AggregateEditor[P]>
  }




  export type EditorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorWhereInput
    orderBy?: EditorOrderByWithAggregationInput | EditorOrderByWithAggregationInput[]
    by: EditorScalarFieldEnum[] | EditorScalarFieldEnum
    having?: EditorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorCountAggregateInputType | true
    _avg?: EditorAvgAggregateInputType
    _sum?: EditorSumAggregateInputType
    _min?: EditorMinAggregateInputType
    _max?: EditorMaxAggregateInputType
  }

  export type EditorGroupByOutputType = {
    id: number
    name: string
    userId: number
    projectId: number
    timeSpent: bigint
    _count: EditorCountAggregateOutputType | null
    _avg: EditorAvgAggregateOutputType | null
    _sum: EditorSumAggregateOutputType | null
    _min: EditorMinAggregateOutputType | null
    _max: EditorMaxAggregateOutputType | null
  }

  type GetEditorGroupByPayload<T extends EditorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorGroupByOutputType[P]>
            : GetScalarType<T[P], EditorGroupByOutputType[P]>
        }
      >
    >


  export type EditorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    projectId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editor"]>

  export type EditorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    projectId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editor"]>

  export type EditorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    projectId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editor"]>

  export type EditorSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    projectId?: boolean
    timeSpent?: boolean
  }

  export type EditorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "projectId" | "timeSpent", ExtArgs["result"]["editor"]>
  export type EditorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EditorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EditorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $EditorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Editor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      projectId: number
      timeSpent: bigint
    }, ExtArgs["result"]["editor"]>
    composites: {}
  }

  type EditorGetPayload<S extends boolean | null | undefined | EditorDefaultArgs> = $Result.GetResult<Prisma.$EditorPayload, S>

  type EditorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditorCountAggregateInputType | true
    }

  export interface EditorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Editor'], meta: { name: 'Editor' } }
    /**
     * Find zero or one Editor that matches the filter.
     * @param {EditorFindUniqueArgs} args - Arguments to find a Editor
     * @example
     * // Get one Editor
     * const editor = await prisma.editor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditorFindUniqueArgs>(args: SelectSubset<T, EditorFindUniqueArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Editor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditorFindUniqueOrThrowArgs} args - Arguments to find a Editor
     * @example
     * // Get one Editor
     * const editor = await prisma.editor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditorFindUniqueOrThrowArgs>(args: SelectSubset<T, EditorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorFindFirstArgs} args - Arguments to find a Editor
     * @example
     * // Get one Editor
     * const editor = await prisma.editor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditorFindFirstArgs>(args?: SelectSubset<T, EditorFindFirstArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorFindFirstOrThrowArgs} args - Arguments to find a Editor
     * @example
     * // Get one Editor
     * const editor = await prisma.editor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditorFindFirstOrThrowArgs>(args?: SelectSubset<T, EditorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editors
     * const editors = await prisma.editor.findMany()
     * 
     * // Get first 10 Editors
     * const editors = await prisma.editor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editorWithIdOnly = await prisma.editor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditorFindManyArgs>(args?: SelectSubset<T, EditorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Editor.
     * @param {EditorCreateArgs} args - Arguments to create a Editor.
     * @example
     * // Create one Editor
     * const Editor = await prisma.editor.create({
     *   data: {
     *     // ... data to create a Editor
     *   }
     * })
     * 
     */
    create<T extends EditorCreateArgs>(args: SelectSubset<T, EditorCreateArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editors.
     * @param {EditorCreateManyArgs} args - Arguments to create many Editors.
     * @example
     * // Create many Editors
     * const editor = await prisma.editor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditorCreateManyArgs>(args?: SelectSubset<T, EditorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Editors and returns the data saved in the database.
     * @param {EditorCreateManyAndReturnArgs} args - Arguments to create many Editors.
     * @example
     * // Create many Editors
     * const editor = await prisma.editor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Editors and only return the `id`
     * const editorWithIdOnly = await prisma.editor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditorCreateManyAndReturnArgs>(args?: SelectSubset<T, EditorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Editor.
     * @param {EditorDeleteArgs} args - Arguments to delete one Editor.
     * @example
     * // Delete one Editor
     * const Editor = await prisma.editor.delete({
     *   where: {
     *     // ... filter to delete one Editor
     *   }
     * })
     * 
     */
    delete<T extends EditorDeleteArgs>(args: SelectSubset<T, EditorDeleteArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Editor.
     * @param {EditorUpdateArgs} args - Arguments to update one Editor.
     * @example
     * // Update one Editor
     * const editor = await prisma.editor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditorUpdateArgs>(args: SelectSubset<T, EditorUpdateArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editors.
     * @param {EditorDeleteManyArgs} args - Arguments to filter Editors to delete.
     * @example
     * // Delete a few Editors
     * const { count } = await prisma.editor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditorDeleteManyArgs>(args?: SelectSubset<T, EditorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editors
     * const editor = await prisma.editor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditorUpdateManyArgs>(args: SelectSubset<T, EditorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editors and returns the data updated in the database.
     * @param {EditorUpdateManyAndReturnArgs} args - Arguments to update many Editors.
     * @example
     * // Update many Editors
     * const editor = await prisma.editor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Editors and only return the `id`
     * const editorWithIdOnly = await prisma.editor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditorUpdateManyAndReturnArgs>(args: SelectSubset<T, EditorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Editor.
     * @param {EditorUpsertArgs} args - Arguments to update or create a Editor.
     * @example
     * // Update or create a Editor
     * const editor = await prisma.editor.upsert({
     *   create: {
     *     // ... data to create a Editor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Editor we want to update
     *   }
     * })
     */
    upsert<T extends EditorUpsertArgs>(args: SelectSubset<T, EditorUpsertArgs<ExtArgs>>): Prisma__EditorClient<$Result.GetResult<Prisma.$EditorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorCountArgs} args - Arguments to filter Editors to count.
     * @example
     * // Count the number of Editors
     * const count = await prisma.editor.count({
     *   where: {
     *     // ... the filter for the Editors we want to count
     *   }
     * })
    **/
    count<T extends EditorCountArgs>(
      args?: Subset<T, EditorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Editor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorAggregateArgs>(args: Subset<T, EditorAggregateArgs>): Prisma.PrismaPromise<GetEditorAggregateType<T>>

    /**
     * Group by Editor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditorGroupByArgs['orderBy'] }
        : { orderBy?: EditorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Editor model
   */
  readonly fields: EditorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Editor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Editor model
   */
  interface EditorFieldRefs {
    readonly id: FieldRef<"Editor", 'Int'>
    readonly name: FieldRef<"Editor", 'String'>
    readonly userId: FieldRef<"Editor", 'Int'>
    readonly projectId: FieldRef<"Editor", 'Int'>
    readonly timeSpent: FieldRef<"Editor", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Editor findUnique
   */
  export type EditorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter, which Editor to fetch.
     */
    where: EditorWhereUniqueInput
  }

  /**
   * Editor findUniqueOrThrow
   */
  export type EditorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter, which Editor to fetch.
     */
    where: EditorWhereUniqueInput
  }

  /**
   * Editor findFirst
   */
  export type EditorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter, which Editor to fetch.
     */
    where?: EditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editors to fetch.
     */
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editors.
     */
    cursor?: EditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editors.
     */
    distinct?: EditorScalarFieldEnum | EditorScalarFieldEnum[]
  }

  /**
   * Editor findFirstOrThrow
   */
  export type EditorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter, which Editor to fetch.
     */
    where?: EditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editors to fetch.
     */
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editors.
     */
    cursor?: EditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editors.
     */
    distinct?: EditorScalarFieldEnum | EditorScalarFieldEnum[]
  }

  /**
   * Editor findMany
   */
  export type EditorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter, which Editors to fetch.
     */
    where?: EditorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editors to fetch.
     */
    orderBy?: EditorOrderByWithRelationInput | EditorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Editors.
     */
    cursor?: EditorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editors.
     */
    skip?: number
    distinct?: EditorScalarFieldEnum | EditorScalarFieldEnum[]
  }

  /**
   * Editor create
   */
  export type EditorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * The data needed to create a Editor.
     */
    data: XOR<EditorCreateInput, EditorUncheckedCreateInput>
  }

  /**
   * Editor createMany
   */
  export type EditorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Editors.
     */
    data: EditorCreateManyInput | EditorCreateManyInput[]
  }

  /**
   * Editor createManyAndReturn
   */
  export type EditorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * The data used to create many Editors.
     */
    data: EditorCreateManyInput | EditorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Editor update
   */
  export type EditorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * The data needed to update a Editor.
     */
    data: XOR<EditorUpdateInput, EditorUncheckedUpdateInput>
    /**
     * Choose, which Editor to update.
     */
    where: EditorWhereUniqueInput
  }

  /**
   * Editor updateMany
   */
  export type EditorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Editors.
     */
    data: XOR<EditorUpdateManyMutationInput, EditorUncheckedUpdateManyInput>
    /**
     * Filter which Editors to update
     */
    where?: EditorWhereInput
    /**
     * Limit how many Editors to update.
     */
    limit?: number
  }

  /**
   * Editor updateManyAndReturn
   */
  export type EditorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * The data used to update Editors.
     */
    data: XOR<EditorUpdateManyMutationInput, EditorUncheckedUpdateManyInput>
    /**
     * Filter which Editors to update
     */
    where?: EditorWhereInput
    /**
     * Limit how many Editors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Editor upsert
   */
  export type EditorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * The filter to search for the Editor to update in case it exists.
     */
    where: EditorWhereUniqueInput
    /**
     * In case the Editor found by the `where` argument doesn't exist, create a new Editor with this data.
     */
    create: XOR<EditorCreateInput, EditorUncheckedCreateInput>
    /**
     * In case the Editor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditorUpdateInput, EditorUncheckedUpdateInput>
  }

  /**
   * Editor delete
   */
  export type EditorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
    /**
     * Filter which Editor to delete.
     */
    where: EditorWhereUniqueInput
  }

  /**
   * Editor deleteMany
   */
  export type EditorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editors to delete
     */
    where?: EditorWhereInput
    /**
     * Limit how many Editors to delete.
     */
    limit?: number
  }

  /**
   * Editor without action
   */
  export type EditorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editor
     */
    select?: EditorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editor
     */
    omit?: EditorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorInclude<ExtArgs> | null
  }


  /**
   * Model ProjectLanguage
   */

  export type AggregateProjectLanguage = {
    _count: ProjectLanguageCountAggregateOutputType | null
    _avg: ProjectLanguageAvgAggregateOutputType | null
    _sum: ProjectLanguageSumAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  export type ProjectLanguageAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    languageId: number | null
    timeSpent: number | null
  }

  export type ProjectLanguageSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    languageId: number | null
    timeSpent: bigint | null
  }

  export type ProjectLanguageMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    languageId: number | null
    timeSpent: bigint | null
  }

  export type ProjectLanguageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
    languageId: number | null
    timeSpent: bigint | null
  }

  export type ProjectLanguageCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    languageId: number
    timeSpent: number
    _all: number
  }


  export type ProjectLanguageAvgAggregateInputType = {
    id?: true
    projectId?: true
    languageId?: true
    timeSpent?: true
  }

  export type ProjectLanguageSumAggregateInputType = {
    id?: true
    projectId?: true
    languageId?: true
    timeSpent?: true
  }

  export type ProjectLanguageMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    languageId?: true
    timeSpent?: true
  }

  export type ProjectLanguageMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    languageId?: true
    timeSpent?: true
  }

  export type ProjectLanguageCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    languageId?: true
    timeSpent?: true
    _all?: true
  }

  export type ProjectLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLanguage to aggregate.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectLanguages
    **/
    _count?: true | ProjectLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectLanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectLanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type GetProjectLanguageAggregateType<T extends ProjectLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectLanguage[P]>
      : GetScalarType<T[P], AggregateProjectLanguage[P]>
  }




  export type ProjectLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithAggregationInput | ProjectLanguageOrderByWithAggregationInput[]
    by: ProjectLanguageScalarFieldEnum[] | ProjectLanguageScalarFieldEnum
    having?: ProjectLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectLanguageCountAggregateInputType | true
    _avg?: ProjectLanguageAvgAggregateInputType
    _sum?: ProjectLanguageSumAggregateInputType
    _min?: ProjectLanguageMinAggregateInputType
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type ProjectLanguageGroupByOutputType = {
    id: number
    name: string
    projectId: number
    languageId: number
    timeSpent: bigint
    _count: ProjectLanguageCountAggregateOutputType | null
    _avg: ProjectLanguageAvgAggregateOutputType | null
    _sum: ProjectLanguageSumAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  type GetProjectLanguageGroupByPayload<T extends ProjectLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    languageId?: boolean
    timeSpent?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    languageId?: boolean
    timeSpent?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    languageId?: boolean
    timeSpent?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLanguage"]>

  export type ProjectLanguageSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    languageId?: boolean
    timeSpent?: boolean
  }

  export type ProjectLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "languageId" | "timeSpent", ExtArgs["result"]["projectLanguage"]>
  export type ProjectLanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type ProjectLanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type ProjectLanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $ProjectLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectLanguage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
      languageId: number
      timeSpent: bigint
    }, ExtArgs["result"]["projectLanguage"]>
    composites: {}
  }

  type ProjectLanguageGetPayload<S extends boolean | null | undefined | ProjectLanguageDefaultArgs> = $Result.GetResult<Prisma.$ProjectLanguagePayload, S>

  type ProjectLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectLanguageCountAggregateInputType | true
    }

  export interface ProjectLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectLanguage'], meta: { name: 'ProjectLanguage' } }
    /**
     * Find zero or one ProjectLanguage that matches the filter.
     * @param {ProjectLanguageFindUniqueArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectLanguageFindUniqueArgs>(args: SelectSubset<T, ProjectLanguageFindUniqueArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectLanguageFindUniqueOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectLanguageFindFirstArgs>(args?: SelectSubset<T, ProjectLanguageFindFirstArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany()
     * 
     * // Get first 10 ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectLanguageFindManyArgs>(args?: SelectSubset<T, ProjectLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectLanguage.
     * @param {ProjectLanguageCreateArgs} args - Arguments to create a ProjectLanguage.
     * @example
     * // Create one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.create({
     *   data: {
     *     // ... data to create a ProjectLanguage
     *   }
     * })
     * 
     */
    create<T extends ProjectLanguageCreateArgs>(args: SelectSubset<T, ProjectLanguageCreateArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLanguages.
     * @param {ProjectLanguageCreateManyArgs} args - Arguments to create many ProjectLanguages.
     * @example
     * // Create many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectLanguageCreateManyArgs>(args?: SelectSubset<T, ProjectLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectLanguages and returns the data saved in the database.
     * @param {ProjectLanguageCreateManyAndReturnArgs} args - Arguments to create many ProjectLanguages.
     * @example
     * // Create many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectLanguages and only return the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectLanguage.
     * @param {ProjectLanguageDeleteArgs} args - Arguments to delete one ProjectLanguage.
     * @example
     * // Delete one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.delete({
     *   where: {
     *     // ... filter to delete one ProjectLanguage
     *   }
     * })
     * 
     */
    delete<T extends ProjectLanguageDeleteArgs>(args: SelectSubset<T, ProjectLanguageDeleteArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectLanguage.
     * @param {ProjectLanguageUpdateArgs} args - Arguments to update one ProjectLanguage.
     * @example
     * // Update one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectLanguageUpdateArgs>(args: SelectSubset<T, ProjectLanguageUpdateArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLanguages.
     * @param {ProjectLanguageDeleteManyArgs} args - Arguments to filter ProjectLanguages to delete.
     * @example
     * // Delete a few ProjectLanguages
     * const { count } = await prisma.projectLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectLanguageDeleteManyArgs>(args?: SelectSubset<T, ProjectLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectLanguageUpdateManyArgs>(args: SelectSubset<T, ProjectLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLanguages and returns the data updated in the database.
     * @param {ProjectLanguageUpdateManyAndReturnArgs} args - Arguments to update many ProjectLanguages.
     * @example
     * // Update many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectLanguages and only return the `id`
     * const projectLanguageWithIdOnly = await prisma.projectLanguage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectLanguage.
     * @param {ProjectLanguageUpsertArgs} args - Arguments to update or create a ProjectLanguage.
     * @example
     * // Update or create a ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.upsert({
     *   create: {
     *     // ... data to create a ProjectLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectLanguage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectLanguageUpsertArgs>(args: SelectSubset<T, ProjectLanguageUpsertArgs<ExtArgs>>): Prisma__ProjectLanguageClient<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageCountArgs} args - Arguments to filter ProjectLanguages to count.
     * @example
     * // Count the number of ProjectLanguages
     * const count = await prisma.projectLanguage.count({
     *   where: {
     *     // ... the filter for the ProjectLanguages we want to count
     *   }
     * })
    **/
    count<T extends ProjectLanguageCountArgs>(
      args?: Subset<T, ProjectLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectLanguageAggregateArgs>(args: Subset<T, ProjectLanguageAggregateArgs>): Prisma.PrismaPromise<GetProjectLanguageAggregateType<T>>

    /**
     * Group by ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectLanguageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectLanguage model
   */
  readonly fields: ProjectLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectLanguage model
   */
  interface ProjectLanguageFieldRefs {
    readonly id: FieldRef<"ProjectLanguage", 'Int'>
    readonly name: FieldRef<"ProjectLanguage", 'String'>
    readonly projectId: FieldRef<"ProjectLanguage", 'Int'>
    readonly languageId: FieldRef<"ProjectLanguage", 'Int'>
    readonly timeSpent: FieldRef<"ProjectLanguage", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ProjectLanguage findUnique
   */
  export type ProjectLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findUniqueOrThrow
   */
  export type ProjectLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findFirst
   */
  export type ProjectLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findFirstOrThrow
   */
  export type ProjectLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findMany
   */
  export type ProjectLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguages to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage create
   */
  export type ProjectLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectLanguage.
     */
    data: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
  }

  /**
   * ProjectLanguage createMany
   */
  export type ProjectLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectLanguages.
     */
    data: ProjectLanguageCreateManyInput | ProjectLanguageCreateManyInput[]
  }

  /**
   * ProjectLanguage createManyAndReturn
   */
  export type ProjectLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectLanguages.
     */
    data: ProjectLanguageCreateManyInput | ProjectLanguageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLanguage update
   */
  export type ProjectLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectLanguage.
     */
    data: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
    /**
     * Choose, which ProjectLanguage to update.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage updateMany
   */
  export type ProjectLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectLanguages.
     */
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLanguages to update
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to update.
     */
    limit?: number
  }

  /**
   * ProjectLanguage updateManyAndReturn
   */
  export type ProjectLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * The data used to update ProjectLanguages.
     */
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLanguages to update
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLanguage upsert
   */
  export type ProjectLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectLanguage to update in case it exists.
     */
    where: ProjectLanguageWhereUniqueInput
    /**
     * In case the ProjectLanguage found by the `where` argument doesn't exist, create a new ProjectLanguage with this data.
     */
    create: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
    /**
     * In case the ProjectLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
  }

  /**
   * ProjectLanguage delete
   */
  export type ProjectLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter which ProjectLanguage to delete.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage deleteMany
   */
  export type ProjectLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLanguages to delete
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to delete.
     */
    limit?: number
  }

  /**
   * ProjectLanguage without action
   */
  export type ProjectLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    timeSpent: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    timeSpent: bigint | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    timeSpent: bigint | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    timeSpent: bigint | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    timeSpent: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
    userId?: true
    timeSpent?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
    userId?: true
    timeSpent?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    timeSpent?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    timeSpent?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    timeSpent?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    name: string
    userId: number
    timeSpent: bigint
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | Language$projectsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    timeSpent?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "timeSpent", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | Language$projectsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      projects: Prisma.$ProjectLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      timeSpent: bigint
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Language$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Language$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly name: FieldRef<"Language", 'String'>
    readonly userId: FieldRef<"Language", 'Int'>
    readonly timeSpent: FieldRef<"Language", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.projects
   */
  export type Language$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    cursor?: ProjectLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    timeInterval: 'timeInterval',
    lastHeartbeat: 'lastHeartbeat',
    lastFolder: 'lastFolder',
    lastLang: 'lastLang',
    lastEditor: 'lastEditor'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timeSpent: 'timeSpent',
    authorId: 'authorId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const EditorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    projectId: 'projectId',
    timeSpent: 'timeSpent'
  };

  export type EditorScalarFieldEnum = (typeof EditorScalarFieldEnum)[keyof typeof EditorScalarFieldEnum]


  export const ProjectLanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    languageId: 'languageId',
    timeSpent: 'timeSpent'
  };

  export type ProjectLanguageScalarFieldEnum = (typeof ProjectLanguageScalarFieldEnum)[keyof typeof ProjectLanguageScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    timeSpent: 'timeSpent'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    timeInterval?: IntFilter<"User"> | number
    lastHeartbeat?: BigIntFilter<"User"> | bigint | number
    lastFolder?: StringFilter<"User"> | string
    lastLang?: StringFilter<"User"> | string
    lastEditor?: StringFilter<"User"> | string
    projects?: ProjectListRelationFilter
    editors?: EditorListRelationFilter
    languages?: LanguageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
    lastFolder?: SortOrder
    lastLang?: SortOrder
    lastEditor?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    editors?: EditorOrderByRelationAggregateInput
    languages?: LanguageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    timeInterval?: IntFilter<"User"> | number
    lastHeartbeat?: BigIntFilter<"User"> | bigint | number
    lastFolder?: StringFilter<"User"> | string
    lastLang?: StringFilter<"User"> | string
    lastEditor?: StringFilter<"User"> | string
    projects?: ProjectListRelationFilter
    editors?: EditorListRelationFilter
    languages?: LanguageListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
    lastFolder?: SortOrder
    lastLang?: SortOrder
    lastEditor?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    timeInterval?: IntWithAggregatesFilter<"User"> | number
    lastHeartbeat?: BigIntWithAggregatesFilter<"User"> | bigint | number
    lastFolder?: StringWithAggregatesFilter<"User"> | string
    lastLang?: StringWithAggregatesFilter<"User"> | string
    lastEditor?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    timeSpent?: BigIntFilter<"Project"> | bigint | number
    authorId?: IntFilter<"Project"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    editors?: EditorListRelationFilter
    languages?: ProjectLanguageListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    editors?: EditorOrderByRelationAggregateInput
    languages?: ProjectLanguageOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    timeSpent?: BigIntFilter<"Project"> | bigint | number
    authorId?: IntFilter<"Project"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    editors?: EditorListRelationFilter
    languages?: ProjectLanguageListRelationFilter
  }, "id" | "name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    timeSpent?: BigIntWithAggregatesFilter<"Project"> | bigint | number
    authorId?: IntWithAggregatesFilter<"Project"> | number
  }

  export type EditorWhereInput = {
    AND?: EditorWhereInput | EditorWhereInput[]
    OR?: EditorWhereInput[]
    NOT?: EditorWhereInput | EditorWhereInput[]
    id?: IntFilter<"Editor"> | number
    name?: StringFilter<"Editor"> | string
    userId?: IntFilter<"Editor"> | number
    projectId?: IntFilter<"Editor"> | number
    timeSpent?: BigIntFilter<"Editor"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type EditorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type EditorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: EditorWhereInput | EditorWhereInput[]
    OR?: EditorWhereInput[]
    NOT?: EditorWhereInput | EditorWhereInput[]
    userId?: IntFilter<"Editor"> | number
    projectId?: IntFilter<"Editor"> | number
    timeSpent?: BigIntFilter<"Editor"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "name">

  export type EditorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
    _count?: EditorCountOrderByAggregateInput
    _avg?: EditorAvgOrderByAggregateInput
    _max?: EditorMaxOrderByAggregateInput
    _min?: EditorMinOrderByAggregateInput
    _sum?: EditorSumOrderByAggregateInput
  }

  export type EditorScalarWhereWithAggregatesInput = {
    AND?: EditorScalarWhereWithAggregatesInput | EditorScalarWhereWithAggregatesInput[]
    OR?: EditorScalarWhereWithAggregatesInput[]
    NOT?: EditorScalarWhereWithAggregatesInput | EditorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Editor"> | number
    name?: StringWithAggregatesFilter<"Editor"> | string
    userId?: IntWithAggregatesFilter<"Editor"> | number
    projectId?: IntWithAggregatesFilter<"Editor"> | number
    timeSpent?: BigIntWithAggregatesFilter<"Editor"> | bigint | number
  }

  export type ProjectLanguageWhereInput = {
    AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    OR?: ProjectLanguageWhereInput[]
    NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    id?: IntFilter<"ProjectLanguage"> | number
    name?: StringFilter<"ProjectLanguage"> | string
    projectId?: IntFilter<"ProjectLanguage"> | number
    languageId?: IntFilter<"ProjectLanguage"> | number
    timeSpent?: BigIntFilter<"ProjectLanguage"> | bigint | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type ProjectLanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
    project?: ProjectOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type ProjectLanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    OR?: ProjectLanguageWhereInput[]
    NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    projectId?: IntFilter<"ProjectLanguage"> | number
    languageId?: IntFilter<"ProjectLanguage"> | number
    timeSpent?: BigIntFilter<"ProjectLanguage"> | bigint | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id" | "name">

  export type ProjectLanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
    _count?: ProjectLanguageCountOrderByAggregateInput
    _avg?: ProjectLanguageAvgOrderByAggregateInput
    _max?: ProjectLanguageMaxOrderByAggregateInput
    _min?: ProjectLanguageMinOrderByAggregateInput
    _sum?: ProjectLanguageSumOrderByAggregateInput
  }

  export type ProjectLanguageScalarWhereWithAggregatesInput = {
    AND?: ProjectLanguageScalarWhereWithAggregatesInput | ProjectLanguageScalarWhereWithAggregatesInput[]
    OR?: ProjectLanguageScalarWhereWithAggregatesInput[]
    NOT?: ProjectLanguageScalarWhereWithAggregatesInput | ProjectLanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectLanguage"> | number
    name?: StringWithAggregatesFilter<"ProjectLanguage"> | string
    projectId?: IntWithAggregatesFilter<"ProjectLanguage"> | number
    languageId?: IntWithAggregatesFilter<"ProjectLanguage"> | number
    timeSpent?: BigIntWithAggregatesFilter<"ProjectLanguage"> | bigint | number
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    name?: StringFilter<"Language"> | string
    userId?: IntFilter<"Language"> | number
    timeSpent?: BigIntFilter<"Language"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
    user?: UserOrderByWithRelationInput
    projects?: ProjectLanguageOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    userId?: IntFilter<"Language"> | number
    timeSpent?: BigIntFilter<"Language"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectLanguageListRelationFilter
  }, "id" | "name">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    name?: StringWithAggregatesFilter<"Language"> | string
    userId?: IntWithAggregatesFilter<"Language"> | number
    timeSpent?: BigIntWithAggregatesFilter<"Language"> | bigint | number
  }

  export type UserCreateInput = {
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectCreateNestedManyWithoutAuthorInput
    editors?: EditorCreateNestedManyWithoutUserInput
    languages?: LanguageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectUncheckedCreateNestedManyWithoutAuthorInput
    editors?: EditorUncheckedCreateNestedManyWithoutUserInput
    languages?: LanguageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutAuthorNestedInput
    editors?: EditorUpdateManyWithoutUserNestedInput
    languages?: LanguageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutAuthorNestedInput
    editors?: EditorUncheckedUpdateManyWithoutUserNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    name: string
    timeSpent?: bigint | number
    author: UserCreateNestedOneWithoutProjectsInput
    editors?: EditorCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    authorId: number
    editors?: EditorUncheckedCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    author?: UserUpdateOneRequiredWithoutProjectsNestedInput
    editors?: EditorUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    authorId?: IntFieldUpdateOperationsInput | number
    editors?: EditorUncheckedUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    authorId: number
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type EditorCreateInput = {
    name: string
    timeSpent?: bigint | number
    user: UserCreateNestedOneWithoutEditorsInput
    project: ProjectCreateNestedOneWithoutEditorsInput
  }

  export type EditorUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    projectId: number
    timeSpent?: bigint | number
  }

  export type EditorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutEditorsNestedInput
    project?: ProjectUpdateOneRequiredWithoutEditorsNestedInput
  }

  export type EditorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorCreateManyInput = {
    id?: number
    name: string
    userId: number
    projectId: number
    timeSpent?: bigint | number
  }

  export type EditorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageCreateInput = {
    name: string
    timeSpent?: bigint | number
    project: ProjectCreateNestedOneWithoutLanguagesInput
    language: LanguageCreateNestedOneWithoutProjectsInput
  }

  export type ProjectLanguageUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
    languageId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: ProjectUpdateOneRequiredWithoutLanguagesNestedInput
    language?: LanguageUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectLanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageCreateManyInput = {
    id?: number
    name: string
    projectId: number
    languageId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LanguageCreateInput = {
    name: string
    timeSpent?: bigint | number
    user: UserCreateNestedOneWithoutLanguagesInput
    projects?: ProjectLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    timeSpent?: bigint | number
    projects?: ProjectLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutLanguagesNestedInput
    projects?: ProjectLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    projects?: ProjectLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: number
    name: string
    userId: number
    timeSpent?: bigint | number
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type EditorListRelationFilter = {
    every?: EditorWhereInput
    some?: EditorWhereInput
    none?: EditorWhereInput
  }

  export type LanguageListRelationFilter = {
    every?: LanguageWhereInput
    some?: LanguageWhereInput
    none?: LanguageWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
    lastFolder?: SortOrder
    lastLang?: SortOrder
    lastEditor?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
    lastFolder?: SortOrder
    lastLang?: SortOrder
    lastEditor?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
    lastFolder?: SortOrder
    lastLang?: SortOrder
    lastEditor?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    timeInterval?: SortOrder
    lastHeartbeat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectLanguageListRelationFilter = {
    every?: ProjectLanguageWhereInput
    some?: ProjectLanguageWhereInput
    none?: ProjectLanguageWhereInput
  }

  export type ProjectLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    timeSpent?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type EditorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
  }

  export type EditorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
  }

  export type EditorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
  }

  export type EditorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
  }

  export type EditorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type ProjectLanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
  }

  export type ProjectLanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
  }

  export type ProjectLanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
  }

  export type ProjectLanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
  }

  export type ProjectLanguageSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    languageId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeSpent?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput> | ProjectCreateWithoutAuthorInput[] | ProjectUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAuthorInput | ProjectCreateOrConnectWithoutAuthorInput[]
    createMany?: ProjectCreateManyAuthorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EditorCreateNestedManyWithoutUserInput = {
    create?: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput> | EditorCreateWithoutUserInput[] | EditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutUserInput | EditorCreateOrConnectWithoutUserInput[]
    createMany?: EditorCreateManyUserInputEnvelope
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
  }

  export type LanguageCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput> | LanguageCreateWithoutUserInput[] | LanguageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutUserInput | LanguageCreateOrConnectWithoutUserInput[]
    createMany?: LanguageCreateManyUserInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput> | ProjectCreateWithoutAuthorInput[] | ProjectUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAuthorInput | ProjectCreateOrConnectWithoutAuthorInput[]
    createMany?: ProjectCreateManyAuthorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EditorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput> | EditorCreateWithoutUserInput[] | EditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutUserInput | EditorCreateOrConnectWithoutUserInput[]
    createMany?: EditorCreateManyUserInputEnvelope
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
  }

  export type LanguageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput> | LanguageCreateWithoutUserInput[] | LanguageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutUserInput | LanguageCreateOrConnectWithoutUserInput[]
    createMany?: LanguageCreateManyUserInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProjectUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput> | ProjectCreateWithoutAuthorInput[] | ProjectUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAuthorInput | ProjectCreateOrConnectWithoutAuthorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAuthorInput | ProjectUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProjectCreateManyAuthorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAuthorInput | ProjectUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAuthorInput | ProjectUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EditorUpdateManyWithoutUserNestedInput = {
    create?: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput> | EditorCreateWithoutUserInput[] | EditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutUserInput | EditorCreateOrConnectWithoutUserInput[]
    upsert?: EditorUpsertWithWhereUniqueWithoutUserInput | EditorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EditorCreateManyUserInputEnvelope
    set?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    disconnect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    delete?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    update?: EditorUpdateWithWhereUniqueWithoutUserInput | EditorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EditorUpdateManyWithWhereWithoutUserInput | EditorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EditorScalarWhereInput | EditorScalarWhereInput[]
  }

  export type LanguageUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput> | LanguageCreateWithoutUserInput[] | LanguageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutUserInput | LanguageCreateOrConnectWithoutUserInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutUserInput | LanguageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageCreateManyUserInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutUserInput | LanguageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutUserInput | LanguageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput> | ProjectCreateWithoutAuthorInput[] | ProjectUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAuthorInput | ProjectCreateOrConnectWithoutAuthorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAuthorInput | ProjectUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ProjectCreateManyAuthorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAuthorInput | ProjectUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAuthorInput | ProjectUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EditorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput> | EditorCreateWithoutUserInput[] | EditorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutUserInput | EditorCreateOrConnectWithoutUserInput[]
    upsert?: EditorUpsertWithWhereUniqueWithoutUserInput | EditorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EditorCreateManyUserInputEnvelope
    set?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    disconnect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    delete?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    update?: EditorUpdateWithWhereUniqueWithoutUserInput | EditorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EditorUpdateManyWithWhereWithoutUserInput | EditorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EditorScalarWhereInput | EditorScalarWhereInput[]
  }

  export type LanguageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput> | LanguageCreateWithoutUserInput[] | LanguageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutUserInput | LanguageCreateOrConnectWithoutUserInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutUserInput | LanguageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LanguageCreateManyUserInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutUserInput | LanguageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutUserInput | LanguageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type EditorCreateNestedManyWithoutProjectInput = {
    create?: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput> | EditorCreateWithoutProjectInput[] | EditorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutProjectInput | EditorCreateOrConnectWithoutProjectInput[]
    createMany?: EditorCreateManyProjectInputEnvelope
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
  }

  export type ProjectLanguageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type EditorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput> | EditorCreateWithoutProjectInput[] | EditorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutProjectInput | EditorCreateOrConnectWithoutProjectInput[]
    createMany?: EditorCreateManyProjectInputEnvelope
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
  }

  export type ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type EditorUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput> | EditorCreateWithoutProjectInput[] | EditorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutProjectInput | EditorCreateOrConnectWithoutProjectInput[]
    upsert?: EditorUpsertWithWhereUniqueWithoutProjectInput | EditorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EditorCreateManyProjectInputEnvelope
    set?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    disconnect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    delete?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    update?: EditorUpdateWithWhereUniqueWithoutProjectInput | EditorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EditorUpdateManyWithWhereWithoutProjectInput | EditorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EditorScalarWhereInput | EditorScalarWhereInput[]
  }

  export type ProjectLanguageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutProjectInput | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type EditorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput> | EditorCreateWithoutProjectInput[] | EditorUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorCreateOrConnectWithoutProjectInput | EditorCreateOrConnectWithoutProjectInput[]
    upsert?: EditorUpsertWithWhereUniqueWithoutProjectInput | EditorUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EditorCreateManyProjectInputEnvelope
    set?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    disconnect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    delete?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    connect?: EditorWhereUniqueInput | EditorWhereUniqueInput[]
    update?: EditorUpdateWithWhereUniqueWithoutProjectInput | EditorUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EditorUpdateManyWithWhereWithoutProjectInput | EditorUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EditorScalarWhereInput | EditorScalarWhereInput[]
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput> | ProjectLanguageCreateWithoutProjectInput[] | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutProjectInput | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutProjectInput | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEditorsInput = {
    create?: XOR<UserCreateWithoutEditorsInput, UserUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditorsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutEditorsInput = {
    create?: XOR<ProjectCreateWithoutEditorsInput, ProjectUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEditorsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEditorsNestedInput = {
    create?: XOR<UserCreateWithoutEditorsInput, UserUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditorsInput
    upsert?: UserUpsertWithoutEditorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditorsInput, UserUpdateWithoutEditorsInput>, UserUncheckedUpdateWithoutEditorsInput>
  }

  export type ProjectUpdateOneRequiredWithoutEditorsNestedInput = {
    create?: XOR<ProjectCreateWithoutEditorsInput, ProjectUncheckedCreateWithoutEditorsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEditorsInput
    upsert?: ProjectUpsertWithoutEditorsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEditorsInput, ProjectUpdateWithoutEditorsInput>, ProjectUncheckedUpdateWithoutEditorsInput>
  }

  export type ProjectCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutProjectsInput = {
    create?: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutProjectsInput
    connect?: LanguageWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    upsert?: ProjectUpsertWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLanguagesInput, ProjectUpdateWithoutLanguagesInput>, ProjectUncheckedUpdateWithoutLanguagesInput>
  }

  export type LanguageUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutProjectsInput
    upsert?: LanguageUpsertWithoutProjectsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutProjectsInput, LanguageUpdateWithoutProjectsInput>, LanguageUncheckedUpdateWithoutProjectsInput>
  }

  export type UserCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<UserCreateWithoutLanguagesInput, UserUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLanguagesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectLanguageCreateNestedManyWithoutLanguageInput = {
    create?: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput> | ProjectLanguageCreateWithoutLanguageInput[] | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutLanguageInput | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type ProjectLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput> | ProjectLanguageCreateWithoutLanguageInput[] | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutLanguageInput | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<UserCreateWithoutLanguagesInput, UserUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLanguagesInput
    upsert?: UserUpsertWithoutLanguagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLanguagesInput, UserUpdateWithoutLanguagesInput>, UserUncheckedUpdateWithoutLanguagesInput>
  }

  export type ProjectLanguageUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput> | ProjectLanguageCreateWithoutLanguageInput[] | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutLanguageInput | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutLanguageInput | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput> | ProjectLanguageCreateWithoutLanguageInput[] | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ProjectLanguageCreateOrConnectWithoutLanguageInput | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?: ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: ProjectLanguageUpdateManyWithWhereWithoutLanguageInput | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutAuthorInput = {
    name: string
    timeSpent?: bigint | number
    editors?: EditorCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    editors?: EditorUncheckedCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAuthorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput>
  }

  export type ProjectCreateManyAuthorInputEnvelope = {
    data: ProjectCreateManyAuthorInput | ProjectCreateManyAuthorInput[]
  }

  export type EditorCreateWithoutUserInput = {
    name: string
    timeSpent?: bigint | number
    project: ProjectCreateNestedOneWithoutEditorsInput
  }

  export type EditorUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    projectId: number
    timeSpent?: bigint | number
  }

  export type EditorCreateOrConnectWithoutUserInput = {
    where: EditorWhereUniqueInput
    create: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput>
  }

  export type EditorCreateManyUserInputEnvelope = {
    data: EditorCreateManyUserInput | EditorCreateManyUserInput[]
  }

  export type LanguageCreateWithoutUserInput = {
    name: string
    timeSpent?: bigint | number
    projects?: ProjectLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    projects?: ProjectLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutUserInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput>
  }

  export type LanguageCreateManyUserInputEnvelope = {
    data: LanguageCreateManyUserInput | LanguageCreateManyUserInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAuthorInput, ProjectUncheckedUpdateWithoutAuthorInput>
    create: XOR<ProjectCreateWithoutAuthorInput, ProjectUncheckedCreateWithoutAuthorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAuthorInput, ProjectUncheckedUpdateWithoutAuthorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAuthorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    timeSpent?: BigIntFilter<"Project"> | bigint | number
    authorId?: IntFilter<"Project"> | number
  }

  export type EditorUpsertWithWhereUniqueWithoutUserInput = {
    where: EditorWhereUniqueInput
    update: XOR<EditorUpdateWithoutUserInput, EditorUncheckedUpdateWithoutUserInput>
    create: XOR<EditorCreateWithoutUserInput, EditorUncheckedCreateWithoutUserInput>
  }

  export type EditorUpdateWithWhereUniqueWithoutUserInput = {
    where: EditorWhereUniqueInput
    data: XOR<EditorUpdateWithoutUserInput, EditorUncheckedUpdateWithoutUserInput>
  }

  export type EditorUpdateManyWithWhereWithoutUserInput = {
    where: EditorScalarWhereInput
    data: XOR<EditorUpdateManyMutationInput, EditorUncheckedUpdateManyWithoutUserInput>
  }

  export type EditorScalarWhereInput = {
    AND?: EditorScalarWhereInput | EditorScalarWhereInput[]
    OR?: EditorScalarWhereInput[]
    NOT?: EditorScalarWhereInput | EditorScalarWhereInput[]
    id?: IntFilter<"Editor"> | number
    name?: StringFilter<"Editor"> | string
    userId?: IntFilter<"Editor"> | number
    projectId?: IntFilter<"Editor"> | number
    timeSpent?: BigIntFilter<"Editor"> | bigint | number
  }

  export type LanguageUpsertWithWhereUniqueWithoutUserInput = {
    where: LanguageWhereUniqueInput
    update: XOR<LanguageUpdateWithoutUserInput, LanguageUncheckedUpdateWithoutUserInput>
    create: XOR<LanguageCreateWithoutUserInput, LanguageUncheckedCreateWithoutUserInput>
  }

  export type LanguageUpdateWithWhereUniqueWithoutUserInput = {
    where: LanguageWhereUniqueInput
    data: XOR<LanguageUpdateWithoutUserInput, LanguageUncheckedUpdateWithoutUserInput>
  }

  export type LanguageUpdateManyWithWhereWithoutUserInput = {
    where: LanguageScalarWhereInput
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyWithoutUserInput>
  }

  export type LanguageScalarWhereInput = {
    AND?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    OR?: LanguageScalarWhereInput[]
    NOT?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    id?: IntFilter<"Language"> | number
    name?: StringFilter<"Language"> | string
    userId?: IntFilter<"Language"> | number
    timeSpent?: BigIntFilter<"Language"> | bigint | number
  }

  export type UserCreateWithoutProjectsInput = {
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    editors?: EditorCreateNestedManyWithoutUserInput
    languages?: LanguageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    editors?: EditorUncheckedCreateNestedManyWithoutUserInput
    languages?: LanguageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type EditorCreateWithoutProjectInput = {
    name: string
    timeSpent?: bigint | number
    user: UserCreateNestedOneWithoutEditorsInput
  }

  export type EditorUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    userId: number
    timeSpent?: bigint | number
  }

  export type EditorCreateOrConnectWithoutProjectInput = {
    where: EditorWhereUniqueInput
    create: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput>
  }

  export type EditorCreateManyProjectInputEnvelope = {
    data: EditorCreateManyProjectInput | EditorCreateManyProjectInput[]
  }

  export type ProjectLanguageCreateWithoutProjectInput = {
    name: string
    timeSpent?: bigint | number
    language: LanguageCreateNestedOneWithoutProjectsInput
  }

  export type ProjectLanguageUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    languageId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageCreateOrConnectWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    create: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLanguageCreateManyProjectInputEnvelope = {
    data: ProjectLanguageCreateManyProjectInput | ProjectLanguageCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    editors?: EditorUpdateManyWithoutUserNestedInput
    languages?: LanguageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    editors?: EditorUncheckedUpdateManyWithoutUserNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EditorUpsertWithWhereUniqueWithoutProjectInput = {
    where: EditorWhereUniqueInput
    update: XOR<EditorUpdateWithoutProjectInput, EditorUncheckedUpdateWithoutProjectInput>
    create: XOR<EditorCreateWithoutProjectInput, EditorUncheckedCreateWithoutProjectInput>
  }

  export type EditorUpdateWithWhereUniqueWithoutProjectInput = {
    where: EditorWhereUniqueInput
    data: XOR<EditorUpdateWithoutProjectInput, EditorUncheckedUpdateWithoutProjectInput>
  }

  export type EditorUpdateManyWithWhereWithoutProjectInput = {
    where: EditorScalarWhereInput
    data: XOR<EditorUpdateManyMutationInput, EditorUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    update: XOR<ProjectLanguageUpdateWithoutProjectInput, ProjectLanguageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectLanguageCreateWithoutProjectInput, ProjectLanguageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    data: XOR<ProjectLanguageUpdateWithoutProjectInput, ProjectLanguageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectLanguageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectLanguageScalarWhereInput
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectLanguageScalarWhereInput = {
    AND?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    OR?: ProjectLanguageScalarWhereInput[]
    NOT?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    id?: IntFilter<"ProjectLanguage"> | number
    name?: StringFilter<"ProjectLanguage"> | string
    projectId?: IntFilter<"ProjectLanguage"> | number
    languageId?: IntFilter<"ProjectLanguage"> | number
    timeSpent?: BigIntFilter<"ProjectLanguage"> | bigint | number
  }

  export type UserCreateWithoutEditorsInput = {
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectCreateNestedManyWithoutAuthorInput
    languages?: LanguageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEditorsInput = {
    id?: number
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectUncheckedCreateNestedManyWithoutAuthorInput
    languages?: LanguageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEditorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditorsInput, UserUncheckedCreateWithoutEditorsInput>
  }

  export type ProjectCreateWithoutEditorsInput = {
    name: string
    timeSpent?: bigint | number
    author: UserCreateNestedOneWithoutProjectsInput
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEditorsInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    authorId: number
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEditorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEditorsInput, ProjectUncheckedCreateWithoutEditorsInput>
  }

  export type UserUpsertWithoutEditorsInput = {
    update: XOR<UserUpdateWithoutEditorsInput, UserUncheckedUpdateWithoutEditorsInput>
    create: XOR<UserCreateWithoutEditorsInput, UserUncheckedCreateWithoutEditorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditorsInput, UserUncheckedUpdateWithoutEditorsInput>
  }

  export type UserUpdateWithoutEditorsInput = {
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutAuthorNestedInput
    languages?: LanguageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEditorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutAuthorNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutEditorsInput = {
    update: XOR<ProjectUpdateWithoutEditorsInput, ProjectUncheckedUpdateWithoutEditorsInput>
    create: XOR<ProjectCreateWithoutEditorsInput, ProjectUncheckedCreateWithoutEditorsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEditorsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEditorsInput, ProjectUncheckedUpdateWithoutEditorsInput>
  }

  export type ProjectUpdateWithoutEditorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    author?: UserUpdateOneRequiredWithoutProjectsNestedInput
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEditorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    authorId?: IntFieldUpdateOperationsInput | number
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutLanguagesInput = {
    name: string
    timeSpent?: bigint | number
    author: UserCreateNestedOneWithoutProjectsInput
    editors?: EditorCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLanguagesInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
    authorId: number
    editors?: EditorUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLanguagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
  }

  export type LanguageCreateWithoutProjectsInput = {
    name: string
    timeSpent?: bigint | number
    user: UserCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    userId: number
    timeSpent?: bigint | number
  }

  export type LanguageCreateOrConnectWithoutProjectsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutLanguagesInput = {
    update: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
  }

  export type ProjectUpdateWithoutLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    author?: UserUpdateOneRequiredWithoutProjectsNestedInput
    editors?: EditorUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    authorId?: IntFieldUpdateOperationsInput | number
    editors?: EditorUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LanguageUpsertWithoutProjectsInput = {
    update: XOR<LanguageUpdateWithoutProjectsInput, LanguageUncheckedUpdateWithoutProjectsInput>
    create: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutProjectsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutProjectsInput, LanguageUncheckedUpdateWithoutProjectsInput>
  }

  export type LanguageUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguageUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCreateWithoutLanguagesInput = {
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectCreateNestedManyWithoutAuthorInput
    editors?: EditorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLanguagesInput = {
    id?: number
    username: string
    timeInterval?: number
    lastHeartbeat?: bigint | number
    lastFolder?: string
    lastLang?: string
    lastEditor?: string
    projects?: ProjectUncheckedCreateNestedManyWithoutAuthorInput
    editors?: EditorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLanguagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLanguagesInput, UserUncheckedCreateWithoutLanguagesInput>
  }

  export type ProjectLanguageCreateWithoutLanguageInput = {
    name: string
    timeSpent?: bigint | number
    project: ProjectCreateNestedOneWithoutLanguagesInput
  }

  export type ProjectLanguageUncheckedCreateWithoutLanguageInput = {
    id?: number
    name: string
    projectId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageCreateOrConnectWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    create: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type ProjectLanguageCreateManyLanguageInputEnvelope = {
    data: ProjectLanguageCreateManyLanguageInput | ProjectLanguageCreateManyLanguageInput[]
  }

  export type UserUpsertWithoutLanguagesInput = {
    update: XOR<UserUpdateWithoutLanguagesInput, UserUncheckedUpdateWithoutLanguagesInput>
    create: XOR<UserCreateWithoutLanguagesInput, UserUncheckedCreateWithoutLanguagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLanguagesInput, UserUncheckedUpdateWithoutLanguagesInput>
  }

  export type UserUpdateWithoutLanguagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutAuthorNestedInput
    editors?: EditorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    timeInterval?: IntFieldUpdateOperationsInput | number
    lastHeartbeat?: BigIntFieldUpdateOperationsInput | bigint | number
    lastFolder?: StringFieldUpdateOperationsInput | string
    lastLang?: StringFieldUpdateOperationsInput | string
    lastEditor?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutAuthorNestedInput
    editors?: EditorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    update: XOR<ProjectLanguageUpdateWithoutLanguageInput, ProjectLanguageUncheckedUpdateWithoutLanguageInput>
    create: XOR<ProjectLanguageCreateWithoutLanguageInput, ProjectLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    data: XOR<ProjectLanguageUpdateWithoutLanguageInput, ProjectLanguageUncheckedUpdateWithoutLanguageInput>
  }

  export type ProjectLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: ProjectLanguageScalarWhereInput
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyWithoutLanguageInput>
  }

  export type ProjectCreateManyAuthorInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
  }

  export type EditorCreateManyUserInput = {
    id?: number
    name: string
    projectId: number
    timeSpent?: bigint | number
  }

  export type LanguageCreateManyUserInput = {
    id?: number
    name: string
    timeSpent?: bigint | number
  }

  export type ProjectUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    editors?: EditorUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    editors?: EditorUncheckedUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: ProjectUpdateOneRequiredWithoutEditorsNestedInput
  }

  export type EditorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type LanguageUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    projects?: ProjectLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    projects?: ProjectLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorCreateManyProjectInput = {
    id?: number
    name: string
    userId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageCreateManyProjectInput = {
    id?: number
    name: string
    languageId: number
    timeSpent?: bigint | number
  }

  export type EditorUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutEditorsNestedInput
  }

  export type EditorUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EditorUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    language?: LanguageUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectLanguageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageCreateManyLanguageInput = {
    id?: number
    name: string
    projectId: number
    timeSpent?: bigint | number
  }

  export type ProjectLanguageUpdateWithoutLanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
    project?: ProjectUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type ProjectLanguageUncheckedUpdateWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    timeSpent?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}