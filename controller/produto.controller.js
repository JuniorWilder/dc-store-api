import db from "../model/index.js"

const Produto = db.produto

export const produtoController = {
    // salva um produto 
    create: (req, res) => {
        if(!req.body.nome) {
            res.status(400).send({
                message: 'O nome não pode ser vazio!'
            })
        }

        const {nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo} = req.body

        const produto = {nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo}

        Produto.create(produto)
        .then(data => {
            res.send(data)
        })
        .catch(e => {
            res.status(500).send({
                message: e.message || 'Ocorreu um erro ao salvar o Produto!'
            })
        })
    },
    findAll: (req, res) => {

    },
    findById: (req, res) => {

    },
    findByStatus: (req, res) => {

    },
    update: (req, res) => {

    },
    deleteById: (req, res) => {

    },
    deleteAll: (req, res) => {

    }
}