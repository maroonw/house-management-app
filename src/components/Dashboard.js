import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [homeInfo, setHomeInfo] = useState({
    areas: [],
    items: [],
    utilities: [],
    maintenanceTasks: [],
    superficialInfo: { paintColors: {}, flooring: {}, renovationHistory: [] },
    serviceProviders: [],
    financialInfo: { mortgage: {}, propertyTaxes: 0, insurancePolicies: [] },
    documentation: [],
    smartHomeDevices: [],
    safetyAndSecurity: { securitySystem: {}, fireExtinguishers: {}, smokeDetectors: {} },
    outdoorSpaces: { gardenPlants: [], lawnCareSchedule: '', poolMaintenance: {} },
    energyConsumption: { utilityUsageHistory: {}, solarPanelInfo: {} }
  });

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        const response = await axios.get('/api/home');
        setHomeInfo(response.data);
      } catch (error) {
        console.error('Error fetching home information:', error);
      }
    };

    fetchHomeInfo();
  }, []);

  return (
    <div className="dashboard">
      <h1>Home Overview Dashboard</h1>

      <h2>Areas</h2>
      <ul>
        {homeInfo.areas.map((area, index) => (
          <li key={index}>{area.name} - {area.type}</li>
        ))}
      </ul>

      <h2>Items</h2>
      <ul>
        {homeInfo.items.map((item, index) => (
          <li key={index}>
            {item.item} - {item.area} (Purchased: {item.purchaseDate}, Value: ${item.value}, Warranty: {item.warranty || 'N/A'})
          </li>
        ))}
      </ul>

      <h2>Utilities</h2>
      <ul>
        {homeInfo.utilities.map((utility, index) => (
          <li key={index}>
            {utility.name} - {utility.provider} (Account: {utility.accountNumber}, Payment Due: {utility.paymentDueDate})
          </li>
        ))}
      </ul>

      <h2>Maintenance Tasks</h2>
      <ul>
        {homeInfo.maintenanceTasks.map((task, index) => (
          <li key={index}>
            {task.task} - Frequency: {task.frequency} (Last Completed: {task.lastCompleted}, Area: {task.area})
          </li>
        ))}
      </ul>

      <h2>Superficial Information</h2>
      <div>
        <h3>Paint Colors</h3>
        <ul>
          {Object.entries(homeInfo.superficialInfo.paintColors).map(([room, color], index) => (
            <li key={index}>{room}: {color}</li>
          ))}
        </ul>
        <h3>Flooring</h3>
        <ul>
          {Object.entries(homeInfo.superficialInfo.flooring).map(([room, type], index) => (
            <li key={index}>{room}: {type}</li>
          ))}
        </ul>
        <h3>Renovation History</h3>
        <ul>
          {homeInfo.superficialInfo.renovationHistory.map((renovation, index) => (
            <li key={index}>
              {renovation.date} - {renovation.description} (Contractor: {renovation.contractor}, Area: {renovation.area})
            </li>
          ))}
        </ul>
      </div>

      <h2>Service Providers</h2>
      <ul>
        {homeInfo.serviceProviders.map((provider, index) => (
          <li key={index}>
            {provider.service}: {provider.name} (Contact: {provider.contact})
          </li>
        ))}
      </ul>

      <h2>Financial Information</h2>
      <div>
        <h3>Mortgage</h3>
        <p>Lender: {homeInfo.financialInfo.mortgage.lender}, Amount: ${homeInfo.financialInfo.mortgage.amount}, Rate: {homeInfo.financialInfo.mortgage.rate}</p>
        <h3>Property Taxes</h3>
        <p>${homeInfo.financialInfo.propertyTaxes} per year</p>
        <h3>Insurance Policies</h3>
        <ul>
          {homeInfo.financialInfo.insurancePolicies.map((policy, index) => (
            <li key={index}>
              {policy.type} - Provider: {policy.provider}, Amount: ${policy.amount}
            </li>
          ))}
        </ul>
      </div>

      <h2>Documentation</h2>
      <ul>
        {homeInfo.documentation.map((doc, index) => (
          <li key={index}>
            {doc.type} - {doc.date} (Description: {doc.description})
          </li>
        ))}
      </ul>

      <h2>Smart Home Devices</h2>
      <ul>
        {homeInfo.smartHomeDevices.map((device, index) => (
          <li key={index}>
            {device.device} - {device.area} (Installed: {device.installationDate})
          </li>
        ))}
      </ul>

      <h2>Safety and Security</h2>
      <div>
        <h3>Security System</h3>
        <p>Provider: {homeInfo.safetyAndSecurity.securitySystem.provider}, Installed: {homeInfo.safetyAndSecurity.securitySystem.installationDate}</p>
        <h3>Fire Extinguishers</h3>
        <p>Locations: {homeInfo.safetyAndSecurity.fireExtinguishers.locations.join(', ')}, Last Inspected: {homeInfo.safetyAndSecurity.fireExtinguishers.lastInspected}</p>
        <h3>Smoke Detectors</h3>
        <p>Locations: {homeInfo.safetyAndSecurity.smokeDetectors.locations.join(', ')}, Last Tested: {homeInfo.safetyAndSecurity.smokeDetectors.lastTested}</p>
      </div>

      <h2>Outdoor Spaces</h2>
      <div>
        <h3>Garden Plants</h3>
        <ul>
          {homeInfo.outdoorSpaces.gardenPlants.map((plant, index) => (
            <li key={index}>{plant}</li>
          ))}
        </ul>
        <h3>Lawn Care Schedule</h3>
        <p>{homeInfo.outdoorSpaces.lawnCareSchedule}</p>
        <h3>Pool Maintenance</h3>
        <p>Frequency: {homeInfo.outdoorSpaces.poolMaintenance.frequency}, Last Completed: {homeInfo.outdoorSpaces.poolMaintenance.lastCompleted}</p>
      </div>

      <h2>Energy Consumption</h2>
      <div>
        <h3>Utility Usage History</h3>
        <p>Electricity: {homeInfo.energyConsumption.utilityUsageHistory.electricity}, Water: {homeInfo.energyConsumption.utilityUsageHistory.water}</p>
        <h3>Solar Panel Info</h3>
        <p>Installed: {homeInfo.energyConsumption.solarPanelInfo.installed ? 'Yes' : 'No'}, Capacity: {homeInfo.energyConsumption.solarPanelInfo.capacity}</p>
      </div>
    </div>
  );
};

export default Dashboard;
