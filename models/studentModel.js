const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  register_num: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  dept: {
    type: String,
    enum: ['AUT', 'BIO', 'CHE', 'CVE', 'CSE', 'ECE', 'EEE', 'INT', 'MEC', 'ADS', 'CIV'],
    required: true,
  },
  section: {
    type: String,
    enum: ['A', 'B', 'C', ''],
  },
  email: {
    type: String,
    required: false,
  },
  preference: {
    type: String,
    enum: ['Offline', 'Online', ''],
    required: false,
  },
  gd_scores: {
    type: Object,
    required: true,
  },
  aptitude_scores: {
    type: Object,
    required: true,
  },
  interviewers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
});

const Student = mongoose.model('Student', StudentSchema, 'Students');
module.exports = Student;
