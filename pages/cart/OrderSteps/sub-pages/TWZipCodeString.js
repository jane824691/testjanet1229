import React from 'react'
import { countries, townships, postcodes } from './data-townships'

class CityDistrictInfo extends React.Component {
  findCityAndDistrict = (postcode) => {
    for (const city in townships) {
      for (const district in townships[city]) {
        if (townships[city][district] === postcode) {
          return {
            city: city,
            district: district,
          }
        }
      }
    }
    return {}
  }

  render() {
    const { postcode } = this.props
    const result = this.findCityAndDistrict(postcode)

    return (
      <div>
        {Object.keys(result).length > 0 ? (
          <div>
            <span>城市：{result.city}</span>
            <span>區域：{result.district}</span>
          </div>
        ) : (
          <p>找不到對應的城市和區域。</p>
        )}
      </div>
    )
  }
}

// 範例使用
const App = () => {
  return (
    <div>
      <CityDistrictInfo postcode="207" />
      {/* 在實際應用中，你可以動態傳遞不同的郵遞區號給CityDistrictInfo組件 */}
    </div>
  )
}

export default App
