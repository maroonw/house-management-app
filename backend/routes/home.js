const express = require('express');
const router = express.Router();

// Dummy home information with areas
const homeInfo = {
  areas: [
    { name: 'Bedroom 1', type: 'Bedroom' },
    { name: 'Bedroom 2', type: 'Bedroom' },
    { name: 'Bathroom 1', type: 'Bathroom' },
    { name: 'Living Room', type: 'Living Room' },
    { name: 'Kitchen', type: 'Kitchen' },
    { name: 'Front Yard', type: 'Yard' },
    { name: 'Back Yard', type: 'Yard' },
    { name: 'Pool', type: 'Pool' }
  ],
  items: [
    { area: 'Bedroom 1', item: 'Bed', purchaseDate: '2021-01-15', value: 500 },
    { area: 'Kitchen', item: 'Refrigerator', model: 'LG1234', purchaseDate: '2020-01-15', warranty: '2025-01-15' },
    { area: 'Front Yard', item: 'Lawn Mower', purchaseDate: '2019-06-10', value: 300 }
  ],
  utilities: [
    { name: 'Electricity', provider: 'EnergyCo', accountNumber: '12345678', billingHistory: [], paymentDueDate: '2024-06-01' },
    { name: 'Water', provider: 'WaterWorks', accountNumber: '87654321', billingHistory: [], paymentDueDate: '2024-06-10' }
  ],
  maintenanceTasks: [
    { task: 'Lawn Mowing', frequency: 'Weekly', lastCompleted: '2024-05-20', area: 'Front Yard' },
    { task: 'HVAC Servicing', frequency: 'Yearly', lastCompleted: '2023-11-20', area: 'Living Room' }
  ],
  superficialInfo: {
    paintColors: { 'Living Room': 'Blue', 'Kitchen': 'White' },
    flooring: { 'Living Room': 'Hardwood', 'Kitchen': 'Tile' },
    renovationHistory: [
      { date: '2022-01-15', description: 'Kitchen remodel', contractor: 'ABC Contractors', area: 'Kitchen' }
    ]
  },
  serviceProviders: [
    { service: 'Electrician', name: 'John Doe', contact: '123-456-7890' },
    { service: 'Plumber', name: 'Jane Smith', contact: '987-654-3210' }
  ],
  financialInfo: {
    mortgage: { lender: 'BankCo', amount: 250000, rate: '3.5%' },
    propertyTaxes: 3000,
    insurancePolicies: [
      { type: 'Home Insurance', provider: 'InsureCo', amount: 1200 }
    ]
  },
  documentation: [
    { type: 'Deed', date: '2020-01-01', description: 'House deed' },
    { type: 'Permit', date: '2021-01-01', description: 'Renovation permit' }
  ],
  smartHomeDevices: [
    { area: 'Living Room', device: 'Smart Thermostat', model: 'Nest', installationDate: '2020-06-01' },
    { area: 'Front Door', device: 'Smart Lock', model: 'August', installationDate: '2021-03-01' }
  ],
  safetyAndSecurity: {
    securitySystem: { provider: 'SecurityCo', installationDate: '2019-05-01' },
    fireExtinguishers: { locations: ['Kitchen', 'Garage'], lastInspected: '2023-10-01' },
    smokeDetectors: { locations: ['Living Room', 'Bedrooms'], lastTested: '2024-01-01' }
  },
  outdoorSpaces: {
    gardenPlants: ['Roses', 'Tulips'],
    lawnCareSchedule: 'Weekly',
    poolMaintenance: { frequency: 'Monthly', lastCompleted: '2024-05-01' }
  },
  energyConsumption: {
    utilityUsageHistory: { electricity: '500 kWh/month', water: '200 gallons/month' },
    solarPanelInfo: { installed: true, capacity: '5 kW' }
  }
};

// Route to get home information
router.get('/', (req, res) => {
  res.json(homeInfo);
});

module.exports = router;
