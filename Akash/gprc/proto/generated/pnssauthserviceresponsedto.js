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

goog.provide('proto.auth.PNSSAuthServiceResponseDto');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.auth.Permissions');
goog.forwardDeclare('proto.auth.Role');
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
proto.auth.PNSSAuthServiceResponseDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.auth.PNSSAuthServiceResponseDto.repeatedFields_, null);
};
goog.inherits(proto.auth.PNSSAuthServiceResponseDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.auth.PNSSAuthServiceResponseDto.displayName = 'proto.auth.PNSSAuthServiceResponseDto';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.auth.PNSSAuthServiceResponseDto.repeatedFields_ = [4,5];



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
proto.auth.PNSSAuthServiceResponseDto.prototype.toObject = function(opt_includeInstance) {
  return proto.auth.PNSSAuthServiceResponseDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.auth.PNSSAuthServiceResponseDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.PNSSAuthServiceResponseDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    sampleId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    patientId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roleList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.auth.PNSSAuthServiceResponseDto}
 */
proto.auth.PNSSAuthServiceResponseDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.auth.PNSSAuthServiceResponseDto;
  return proto.auth.PNSSAuthServiceResponseDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.auth.PNSSAuthServiceResponseDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.auth.PNSSAuthServiceResponseDto}
 */
proto.auth.PNSSAuthServiceResponseDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPatientId(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.auth.Role>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRole(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<!proto.auth.Permissions>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissions(values[i]);
      }
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
proto.auth.PNSSAuthServiceResponseDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.auth.PNSSAuthServiceResponseDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.auth.PNSSAuthServiceResponseDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.auth.PNSSAuthServiceResponseDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSampleId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPatientId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRoleList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional int32 sample_id = 1;
 * @return {number}
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.getSampleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.setSampleId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 customer_id = 2;
 * @return {number}
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.getCustomerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 patient_id = 3;
 * @return {number}
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.getPatientId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.setPatientId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Role role = 4;
 * @return {!Array<!proto.auth.Role>}
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.getRoleList = function() {
  return /** @type {!Array<!proto.auth.Role>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.auth.Role>} value
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.setRoleList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.auth.Role} value
 * @param {number=} opt_index
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.addRole = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.clearRoleList = function() {
  return this.setRoleList([]);
};


/**
 * repeated Permissions permissions = 5;
 * @return {!Array<!proto.auth.Permissions>}
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.getPermissionsList = function() {
  return /** @type {!Array<!proto.auth.Permissions>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.auth.Permissions>} value
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.auth.Permissions} value
 * @param {number=} opt_index
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.auth.PNSSAuthServiceResponseDto} returns this
 */
proto.auth.PNSSAuthServiceResponseDto.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};

