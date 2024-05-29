import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Service Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>
            {rec.service}: {rec.name} (Contact: {rec.contact})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRecommendations;
