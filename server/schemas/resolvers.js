// importing Authentication error from apollo servers to show the error message
const { AuthenticationError } = require("apollo-server-errors");
// importing User from the modules
const { User } = require("../models");
// importing signToken from utils
const { signToken } = require("../utils/auth");

// Set up queries for 'me' and data errors
const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
    },
}