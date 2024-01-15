import React from 'react'

function PriceRangeRadio(props) {
  const { priceRange, setPriceRange, value } = props

  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={value}
          checked={priceRange === value}
          onChange={(e) => {
            setPriceRange(e.target.value)
          }}
        />
        <label className="form-check-label option-fcolor">{value}</label>
      </div>
      {/* <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            價格範圍
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body px-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={value}
                checked={priceRange === value}
                onChange={(e) => {
                  setPriceRange(e.target.value)
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                All Price
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $0 - $999
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $1000 - $1999
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $2000 - $2999
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $3000 - $3999
              </label>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default PriceRangeRadio
