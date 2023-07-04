/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "movie";

export interface Movie {
  name: string;
  rating: number;
}

export interface Movies {
  movies: Movie[];
}

export interface RemoveMovieRequest {
  name: string;
}

function createBaseMovie(): Movie {
  return { name: "", rating: 0 };
}

export const Movie = {
  encode(message: Movie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.rating !== 0) {
      writer.uint32(21).float(message.rating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Movie {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.rating = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Movie {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      rating: isSet(object.rating) ? Number(object.rating) : 0,
    };
  },

  toJSON(message: Movie): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.rating !== undefined && (obj.rating = message.rating);
    return obj;
  },

  create<I extends Exact<DeepPartial<Movie>, I>>(base?: I): Movie {
    return Movie.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Movie>, I>>(object: I): Movie {
    const message = createBaseMovie();
    message.name = object.name ?? "";
    message.rating = object.rating ?? 0;
    return message;
  },
};

function createBaseMovies(): Movies {
  return { movies: [] };
}

export const Movies = {
  encode(message: Movies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.movies) {
      Movie.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Movies {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.movies.push(Movie.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Movies {
    return { movies: Array.isArray(object?.movies) ? object.movies.map((e: any) => Movie.fromJSON(e)) : [] };
  },

  toJSON(message: Movies): unknown {
    const obj: any = {};
    if (message.movies) {
      obj.movies = message.movies.map((e) => e ? Movie.toJSON(e) : undefined);
    } else {
      obj.movies = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Movies>, I>>(base?: I): Movies {
    return Movies.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Movies>, I>>(object: I): Movies {
    const message = createBaseMovies();
    message.movies = object.movies?.map((e) => Movie.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemoveMovieRequest(): RemoveMovieRequest {
  return { name: "" };
}

export const RemoveMovieRequest = {
  encode(message: RemoveMovieRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveMovieRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveMovieRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveMovieRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: RemoveMovieRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveMovieRequest>, I>>(base?: I): RemoveMovieRequest {
    return RemoveMovieRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveMovieRequest>, I>>(object: I): RemoveMovieRequest {
    const message = createBaseRemoveMovieRequest();
    message.name = object.name ?? "";
    return message;
  },
};

export interface MovieServiceController {
  AddMovie(request: Movie): Promise<Movies>;
  RemoveMovie(request: RemoveMovieRequest): Promise<Movies>;
}

export const MovieServiceControllerServiceName = "movie.MovieServiceController";
export class MovieServiceControllerClientImpl implements MovieServiceController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MovieServiceControllerServiceName;
    this.rpc = rpc;
    this.AddMovie = this.AddMovie.bind(this);
    this.RemoveMovie = this.RemoveMovie.bind(this);
  }
  AddMovie(request: Movie): Promise<Movies> {
    const data = Movie.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddMovie", data);
    return promise.then((data) => Movies.decode(_m0.Reader.create(data)));
  }

  RemoveMovie(request: RemoveMovieRequest): Promise<Movies> {
    const data = RemoveMovieRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveMovie", data);
    return promise.then((data) => Movies.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
