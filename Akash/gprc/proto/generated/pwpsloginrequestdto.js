// source: auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.auth.PWPSLoginRequestDto');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.auth.Project');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.auth.PWPSLoginRequestDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.auth.PWPSLoginRequestDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.PWPSLoginRequestDto.displayName = 'proto.auth.PWPSLoginRequestDto';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.auth.PWPSLoginRequestDto.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.PWPSLoginRequestDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.PWPSLoginRequestDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.PWPSLoginRequestDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.auth.PWPSLoginRequestDto}
 */
proto.auth.PWPSLoginRequestDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.PWPSLoginRequestDto;
  return proto.auth.PWPSLoginRequestDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.PWPSLoginRequestDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.PWPSLoginRequestDto}
 */
proto.auth.PWPSLoginRequestDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.auth.Project} */ (reader.readEnum());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.auth.PWPSLoginRequestDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.PWPSLoginRequestDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.PWPSLoginRequestDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.PWPSLoginRequestDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {!proto.auth.Project}
 */
proto.auth.PWPSLoginRequestDto.prototype.getProject = function() {
  return /** @type {!proto.auth.Project} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.auth.Project} value
 * @return {!proto.auth.PWPSLoginRequestDto} returns this
 */
proto.auth.PWPSLoginRequestDto.prototype.setProject = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.auth.PWPSLoginRequestDto.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.auth.PWPSLoginRequestDto} returns this
 */
proto.auth.PWPSLoginRequestDto.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.auth.PWPSLoginRequestDto.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.auth.PWPSLoginRequestDto} returns this
 */
proto.auth.PWPSLoginRequestDto.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

