import { Schema } from 'mongoose';
import { isEmail } from 'validator';
import { UserDoc } from '@pb-monorepo/travelency/models';
import * as bcrypt from 'bcryptjs';

const UserSchema = new Schema<UserDoc>({
  name: { type: String, required: [true, 'Please tell us your name!'] },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please provide a valid email']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please set a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      msg: 'Passwords are not the same'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

UserSchema.pre('save', async function(next) {
  const user = this as any; // set this as any because of tslint errors

  // Only run this function if password has been modified
  if (!user.isModified('password')) {
    return next();
  }

  // Hash password with cost of 12
  user.password = await bcrypt.hash(user.password, 12);

  // password confirm is not needed anymore
  user.passwordConfirm = undefined;

  next();
});

UserSchema.method('checkPasswordIsCorrect', async function(
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
});

// UserSchema.pre('/^find/', function(next) {
//   // this points to the current query
//   this.find({ active: { $ne: false } });
//   next();
// });

export default UserSchema;
