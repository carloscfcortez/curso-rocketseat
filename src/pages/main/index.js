import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  }
  componentDidMount () {
    this.loadProducts()
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/product?page=${page}`)

    const { docs, ...productInfo } = response.data

    this.setState({ products: docs, productInfo, page })
  }

  prevPage = () => {
    const { page, productInfo } = this.state

    if (page === 1) return

    console.log(productInfo.pages)

    const pageNumber = page - 1
    this.loadProducts(pageNumber)
  }

  nextPage = () => {
    const { page, productInfo } = this.state

    if (page === productInfo.pages) return

    console.log(productInfo.pages)

    const pageNumber = page + 1
    this.loadProducts(pageNumber)
  }

  render () {
    const { products, page, productInfo } = this.state
    return (
      <div className='produtc-list'>
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className='product-list action'>
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Proximo
          </button>
        </div>
      </div>
    )
  }
}
