import { DataTypes } from "sequelize";

const produtoModel = (sequelize, Sequelize) => {
    const Produto = sequelize.define('produto', {
        // Model attributes are defined here
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        categoria: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        descrição: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        desconto: {
            type: DataTypes.INTEGER,
            // allowNull defaults to true
        },
        preçoAntes: {
            type: DataTypes.DECIMAL,
            // allowNull defaults to true
        },
        preçoDepois: {
            type: DataTypes.DECIMAL,
            // allowNull defaults to true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            // allowNull defaults to true
        },
      });

      return Produto
}