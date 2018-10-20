/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

const categoriesList = [
  {
    name: 'Electricity Issues',
    icon: 'access-point',
    types: [
      {
        type: 'Lighting',
        issues: ['Install or repair tubelight', 'Install or repair tubelight', 'Install of repair electric switch']
      },
      {
        type: 'Power Outlets',
        issues: ['Install or repair power outlet', 'Install or repair electric switch']
      },
      {
        type: 'Distribution Board',
        issues: ['Install or repair circuit breaker']
      }
    ]
  },
  {
    name: 'Electrical Appliances',
    icon: 'boombox',
    types: [
      {
        type: 'Refrigerator',
        issues: []
      },
      {
        type: 'Washing Machine or Dryer',
        issues: []
      }
    ]
  },
  {
    name: 'Mobiles and Computers',
    icon: 'laptop',
    types: [
      {
        type: 'Mobiles',
        issues: ['Repair screen', 'Software issue']
      },
      {
        type: 'Laptops',
        issues: ['Repair screen', 'Software issue']
      },
      {
        type: 'Personal Computers',
        issues: ['Repair screen', 'Software issue']
      }
    ]
  },
  {
    name: 'Plumbing',
    icon: 'water',
    types: [
      {
        type: 'Toilet',
        issues: ['Replace valve', 'Repair flush', 'Clogged toilet', 'Drain clearing']
      },
      {
        type: 'Sink or Shower',
        issues: ['Leak', 'Replace valve', 'Install accessory', 'Clogged drain', 'Repair faucet']
      },
      {
        type: 'Piping',
        issues: ['Pipe leakage','Replace valve','Clogged drain','Install or repair water tank']
      },
      {
        type: 'Pump',
        issues: ['Install or repair pump']
      },
      {
        type: 'Water Heater',
        issues: ['Install or repair water heater']
      },
      {
        type: 'Filters',
        issues: ['Regular maintenance check', 'Install filter']
      }
    ]
  },
  {
    name: 'Air Conditioning',
    icon: 'air-conditioner',
    types: [
      {
        type: 'Central A/C',
        issues: ['Install or repair thermostat', 'Routine maintenance', 'Routine cleaning', 'Install or repair compressor']
      },
      {
        type: 'Window A/C',
        issues: ['Install or repair thermostat', 'Routine maintenance', 'Routine cleaning', 'Install or repair compressor']
      },
      {
        type: 'Split A/C',
        issues: ['Install or repair thermostat', 'Routine maintenance', 'Routine cleaning', 'Install or repair compressor']
      }
    ]
  },
  {
    name: 'Pest Control',
    icon: 'spray',
    types: [
      {
        type: '500 SQM or less',
        issues: ['Termite spray', 'Preventive spray', 'Ant spray', 'Cockroach spray', 'Waqas spray']
      },
      {
        type: '500 SQM or more',
        issues: ['Termite spray', 'Preventive spray', 'Ant spray', 'Cockroach spray', 'Waqas spray']
      }
    ]
  }
];

export default categoriesList;
