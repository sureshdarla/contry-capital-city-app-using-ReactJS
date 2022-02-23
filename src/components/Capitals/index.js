import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].country}

  onChangeCapitalChooseCountry = event => {
    const capital = event.target.value

    const filteredCountry = countryAndCapitalsList.filter(
      eachItem => eachItem.capitalDisplayText === capital,
    )

    this.setState({countryDetails: [...filteredCountry]})
  }

  render() {
    // const {countryDetails} = this.state
    const {countryName} = this.state

    return (
      <div className="country-capital-app">
        <div className="form-content">
          <form className="form-container">
            <select onChange={this.onChangeCapitalChooseCountry}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.capitalDisplayText} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <span>is capital of which country?</span>
          </form>
          <div>
            <p>{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
