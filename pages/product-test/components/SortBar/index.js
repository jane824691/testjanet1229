import React from 'react'

function SortBar(props) {
  const { sortBy, setSortBy } = props
  return (
    <>
      <div className="d-flex p-2 justify-content-end align-items-center">
        <div className="dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            排序依據
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                最新
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                價格：由高至低
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                價格：由低至高
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SortBar
