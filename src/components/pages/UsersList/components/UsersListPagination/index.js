import React, { Component } from 'react'
import styles from './index.module.css'

class UsersListPagination extends Component {
  render() {
    const { totalCount, pageSize, currentPage, onPageChanged } = this.props
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={styles.container}>
        {pages.map(p => (
          <span
            className={currentPage === p ? styles.current_page : styles.page}
            onClick={() => onPageChanged(p)}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
    )
  }
}

export default UsersListPagination
