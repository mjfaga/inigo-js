import { GraphQLDataSourceProcessOptions } from "@apollo/gateway/dist/datasources/types";
import { GatewayGraphQLRequestContext, GatewayGraphQLResponse } from "@apollo/server-gateway-interface";
import { ServiceEndpointDefinition, RemoteGraphQLDataSource } from "@apollo/gateway";

declare class Config {
  Debug?: boolean;
  Ingest?: string;
  Service?: string;
  Token?: string;
  Schema?: string;
  EgressUrl?: string;
}

export class InigoConfig extends Config {
  constructor(cfg: Config);
}

export function InigoPlugin(config?: Config): any;

export function version(): string;

export class Inigo {
  constructor(cfg?: Config);
  plugin(): any;
}

export class InigoRemoteDataSource extends RemoteGraphQLDataSource {
  constructor(
      server: ServiceEndpointDefinition,
      info?: Inigo,
      sdl?: boolean);

  onBeforeSendRequest?(options: GraphQLDataSourceProcessOptions): void | Promise<void>;
  onAfterReceiveResponse?(requestContext: Required<Pick<GatewayGraphQLRequestContext, 'request' | 'response' | 'context'>>): GatewayGraphQLResponse | Promise<GatewayGraphQLResponse>;
}
