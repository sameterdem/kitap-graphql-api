const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Models
const UserModel = require('../models/User');
const ChildModel = require('../models/Child');

const Query = {
  hello: () => 'Hello World!',
};

const Mutation = {
  // Create User
  createUser: async (parent, { password, ...input }) => {
    const user = await new UserModel({
      ...input,
      password: await bcrypt.hash(password, 10),
    });
    return user
      .save()
      .then(result => result)
      .catch(err => err);
  },

  // Update User
  updateUser: async (parent, { id, password, ...input }) => {
    // Update password control
    let passCheck;
    if (password.trim()) {
      passCheck = bcrypt.hash(password, 10);
    } else {
      const currentPass = await UserModel.findById({ _id: id }).then(result => result);
      passCheck = currentPass.password;
    }
    return UserModel.findByIdAndUpdate(
      id,
      {
        ...input,
        password: await passCheck,
      },
      { new: true }
    )
      .then(result => result)
      .catch(err => err);
  },

  // Create Child
  createChild: (parent, input) => {
    const child = new ChildModel({ ...input });
    return child
      .save()
      .then(result => result)
      .catch(err => err);
  },

  // Update Child
  updateChild: (parent, { id, ...input }) => {
    return ChildModel.findByIdAndUpdate(id, { ...input }, { new: true })
      .then(result => result)
      .catch(err => err);
  },

  // Delete Child
  deleteChild: (parent, { id }) => {
    return ChildModel.findByIdAndRemove(id)
      .then(result => result)
      .catch(err => err);
  },
};

module.exports = {
  Query,
  Mutation,
};
