
const Model = require('sequelize').Model;

module.exports = (seq, DT) => {
  class User extends Model {}

  User.init({
    username: {
      type: DT.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DT.STRING
    }
  }, {
    sequelize: seq,
    modelName: 'user'
  })

  return User;
};