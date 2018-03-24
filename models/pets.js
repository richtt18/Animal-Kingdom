module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      // Giving the Pet model a name of type STRING
      petName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
     petBreed: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      petType: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      petAge: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      petImage: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      petDescription: {
        type: DataTypes.STRING(5000),
        allowNull: true,
        len: [1]
      },
      petLocation: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
      
    });

    Pet.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Pet.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Pet;
  };
  