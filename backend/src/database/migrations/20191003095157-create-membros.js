'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('Membros', {
     id:{
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.INTERGER
     },
     nome: {
       allowNull: false,
       type: DataTypes.STRING
     },
     genero: {
       allowNull: false,
       type: DataTypes.STRING
     },
     data_nasc: {
      allowNull: false,
      type: DataTypes.DATE
     },
     nacionalidade: {
       allowNull: false,
       type: DataTypes.STRING
     },
     natalidade: {
       allowNull: false,
       type: DataTypes.STRING
     },
     email: {
       allowNull: false,
       type: DataTypes.STRING
     },
     identidade: {
       allowNull: false,
       type: DataTypes.STRING
     },
     orgao_exped: {
       allowNull: false,
       type: DataTypes.STRING
     },
     cpf: {
       allowNull: false,
       type: DataTypes.STRING
     },
     nome_pai: {
       allowNull: false,
       type: DataTypes.STRING
     },
     pai_vivo: {
       allowNull: false,
       type: DataTypes.STRING
     },

     created_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
     updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Membros');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
