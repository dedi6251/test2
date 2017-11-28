'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  namaPasien: {
    type: String,
    default: '',
    trim: true
  },
  alamatPasien: {
    type: String,
    default: '',
    trim: true
  },
  keluhanPasien: {
    type: String,
    default: '',
    trim: true
  },
  konsultasiDokter: {
    type: String,
    default: '',
    trim: true,
  },
  resepDokter: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);

