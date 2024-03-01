/**
 * @fileoverview gRPC-Web generated client stub for users
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.6
// source: users.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as users_pb from './users_pb';


export class UsersServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/users.UsersService/CreateUser',
    grpcWeb.MethodType.UNARY,
    users_pb.CreateUserRequest,
    users_pb.User,
    (request: users_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    users_pb.User.deserializeBinary
  );

  createUser(
    request: users_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_pb.User>;

  createUser(
    request: users_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_pb.User) => void): grpcWeb.ClientReadableStream<users_pb.User>;

  createUser(
    request: users_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_pb.User) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.UsersService/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.UsersService/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
  }

  methodDescriptorGetUsers = new grpcWeb.MethodDescriptor(
    '/users.UsersService/GetUsers',
    grpcWeb.MethodType.UNARY,
    users_pb.Empty,
    users_pb.GetUsersResponse,
    (request: users_pb.Empty) => {
      return request.serializeBinary();
    },
    users_pb.GetUsersResponse.deserializeBinary
  );

  getUsers(
    request: users_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<users_pb.GetUsersResponse>;

  getUsers(
    request: users_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_pb.GetUsersResponse) => void): grpcWeb.ClientReadableStream<users_pb.GetUsersResponse>;

  getUsers(
    request: users_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_pb.GetUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.UsersService/GetUsers',
        request,
        metadata || {},
        this.methodDescriptorGetUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.UsersService/GetUsers',
    request,
    metadata || {},
    this.methodDescriptorGetUsers);
  }

}
