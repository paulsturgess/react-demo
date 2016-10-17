import React, { Component } from 'react';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchString: ''
    };
  };

  get defaultItems() {
    return (
      [
        {name: 'Afghanistan'},
        {name: 'Albania'},
        {name: 'Algeria'},
        {name: 'Andorra'},
        {name: 'Angola'},
        {name: 'Antigua and Barbuda'},
        {name: 'Argentina'},
        {name: 'Armenia'},
        {name: 'Australia'},
        {name: 'Austria'},
        {name: 'Azerbaijan'},
        {name: 'Bahamas'},
        {name: 'Bahrain'},
        {name: 'Bangladesh'},
        {name: 'Barbados'},
        {name: 'Belarus'},
        {name: 'Belgium'},
        {name: 'Belize'},
        {name: 'Benin'},
        {name: 'Bhutan'},
        {name: 'Bolivia'},
        {name: 'Bosnia and Herzegovina'},
        {name: 'Botswana'},
        {name: 'Brazil'},
        {name: 'Brunei'},
        {name: 'Bulgaria'},
        {name: 'Burkina Faso'},
        {name: 'Burundi'},
        {name: 'Cabo Verde'},
        {name: 'Cambodia'},
        {name: 'Cameroon'},
        {name: 'Canada'},
        {name: 'Central African Republic (CAR)'},
        {name: 'Chad'},
        {name: 'Chile'},
        {name: 'China'},
        {name: 'Colombia'},
        {name: 'Comoros'},
        {name: 'Democratic Republic of the Congo'},
        {name: 'Republic of the Congo'},
        {name: 'Costa Rica'},
        {name: 'Cote d\'Ivoire'},
        {name: 'Croatia'},
        {name: 'Cuba'},
        {name: 'Cyprus'},
        {name: 'Czech Republic'},
        {name: 'Denmark'},
        {name: 'Djibouti'},
        {name: 'Dominica'},
        {name: 'Dominican Republic'},
        {name: 'Ecuador'},
        {name: 'Egypt'},
        {name: 'El Salvador'},
        {name: 'Equatorial Guinea'},
        {name: 'Eritrea'},
        {name: 'Estonia'},
        {name: 'Ethiopia'},
        {name: 'Fiji'},
        {name: 'Finland'},
        {name: 'France'},
        {name: 'Gabon'},
        {name: 'Gambia'},
        {name: 'Georgia'},
        {name: 'Germany'},
        {name: 'Ghana'},
        {name: 'Greece'},
        {name: 'Grenada'},
        {name: 'Guatemala'},
        {name: 'Guinea'},
        {name: 'Guinea-Bissau'},
        {name: 'Guyana'},
        {name: 'Haiti'},
        {name: 'Honduras'},
        {name: 'Hungary'},
        {name: 'Iceland'},
        {name: 'India'},
        {name: 'Indonesia'},
        {name: 'Iran'},
        {name: 'Iraq'},
        {name: 'Ireland'},
        {name: 'Israel'},
        {name: 'Italy'},
        {name: 'Jamaica'},
        {name: 'Japan'},
        {name: 'Jordan'},
        {name: 'Kazakhstan'},
        {name: 'Kenya'},
        {name: 'Kiribati'},
        {name: 'Kosovo'},
        {name: 'Kuwait'},
        {name: 'Kyrgyzstan'},
        {name: 'Laos'},
        {name: 'Latvia'},
        {name: 'Lebanon'},
        {name: 'Lesotho'},
        {name: 'Liberia'},
        {name: 'Libya'},
        {name: 'Liechtenstein'},
        {name: 'Lithuania'},
        {name: 'Luxembourg'},
        {name: 'Macedonia'},
        {name: 'Madagascar'},
        {name: 'Malawi'},
        {name: 'Malaysia'},
        {name: 'Maldives'},
        {name: 'Mali'},
        {name: 'Malta'},
        {name: 'Marshall Islands'},
        {name: 'Mauritania'},
        {name: 'Mauritius'},
        {name: 'Mexico'},
        {name: 'Micronesia'},
        {name: 'Moldova'},
        {name: 'Monaco'},
        {name: 'Mongolia'},
        {name: 'Montenegro'},
        {name: 'Morocco'},
        {name: 'Mozambique'},
        {name: 'Myanmar (Burma)'},
        {name: 'Namibia'},
        {name: 'Nauru'},
        {name: 'Nepal'},
        {name: 'Netherlands'},
        {name: 'New Zealand'},
        {name: 'Nicaragua'},
        {name: 'Niger'},
        {name: 'Nigeria'},
        {name: 'North Korea'},
        {name: 'Norway'},
        {name: 'Oman'},
        {name: 'Pakistan'},
        {name: 'Palau'},
        {name: 'Palestine'},
        {name: 'Panama'},
        {name: 'Papua New Guinea'},
        {name: 'Paraguay'},
        {name: 'Peru'},
        {name: 'Philippines'},
        {name: 'Poland'},
        {name: 'Portugal'},
        {name: 'Qatar'},
        {name: 'Romania'},
        {name: 'Russia'},
        {name: 'Rwanda'},
        {name: 'Saint Kitts and Nevis'},
        {name: 'Saint Lucia'},
        {name: 'Saint Vincent and the Grenadines'},
        {name: 'Samoa'},
        {name: 'San Marino'},
        {name: 'Sao Tome and Principe'},
        {name: 'Saudi Arabia'},
        {name: 'Senegal'},
        {name: 'Serbia'},
        {name: 'Seychelles'},
        {name: 'Sierra Leone'},
        {name: 'Singapore'},
        {name: 'Slovakia'},
        {name: 'Slovenia'},
        {name: 'Solomon Islands'},
        {name: 'Somalia'},
        {name: 'South Africa'},
        {name: 'South Korea'},
        {name: 'South Sudan'},
        {name: 'Spain'},
        {name: 'Sri Lanka'},
        {name: 'Sudan'},
        {name: 'Suriname'},
        {name: 'Swaziland'},
        {name: 'Sweden'},
        {name: 'Switzerland'},
        {name: 'Syria'},
        {name: 'Taiwan'},
        {name: 'Tajikistan'},
        {name: 'Tanzania'},
        {name: 'Thailand'},
        {name: 'Timor-Leste'},
        {name: 'Togo'},
        {name: 'Tonga'},
        {name: 'Trinidad and Tobago'},
        {name: 'Tunisia'},
        {name: 'Turkey'},
        {name: 'Turkmenistan'},
        {name: 'Tuvalu'},
        {name: 'Uganda'},
        {name: 'Ukraine'},
        {name: 'United Arab Emirates (UAE)'},
        {name: 'United Kingdom (UK)'},
        {name: 'United States of America (USA)'},
        {name: 'Uruguay'},
        {name: 'Uzbekistan'},
        {name: 'Vanuatu'},
        {name: 'Vatican City (Holy See)'},
        {name: 'Venezuela'},
        {name: 'Vietnam'},
        {name: 'Yemen'},
        {name: 'Zambia'},
        {name: 'Zimbabwe'}
      ]
    );
  }

  handleChange = (event) => {
    this.setState({searchString:event.target.value});
  }

  filteredItems = (searchString) => {
    var items = this.defaultItems;
    if(searchString.length > 0){
      items = this.defaultItems.filter((item) => {
        return item.name.toLowerCase().match(
          searchString.trim().toLowerCase()
        );
      });
    }
    return items;
  }

  searchHTML() {
    return(
      <input
        type="text"
        value={this.state.searchString}
        onChange={this.handleChange}
        placeholder="Type here"
      />
    );
  }

  resultsHTML() {
    return(
      <ul>
        {
          this.filteredItems(this.state.searchString).map((item) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <div>
          {this.searchHTML()}
          {this.resultsHTML()}
        </div>
      </div>
    );
  }
}

export default Search;
