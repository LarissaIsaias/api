const db = require('./db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')


const listprodutos = async (req,res) => {
    var produtos = db.produtos
    res.json(produtos)
}

// listar 1 produto específico
const getProdutos = async (req, res) => {
    const _id = req.params.id
    const listProd = db.produtos
    const produto = listProd.find(
        (produto) => produto.id == _id
        )
    produto ? res.send(produto) : res.status(404).send({error:'not found'})

}

// criar um produto
const createProdutos = async (req,res) => {
    const dados = req.body
    if(!dados.nome || !dados.preco) {
        res.status(406).send({error:'Nome e preço deve ser informado'})
    }
    const _id = uuidv4()
    dados.id = _id

    db.produtos.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204)
}

//atualizar 1 produto
const updateProdutos = async (req,res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_produtos = db.produtos
    const produto = lista_produtos.find(
        (produto) => produto.id == _id
    )
if (!produto || !dados){
    res.status(404).send({error: "nod found"})
}
}

const deleteProdutos = async (req,res) => {
}

const db = require('./db.json')