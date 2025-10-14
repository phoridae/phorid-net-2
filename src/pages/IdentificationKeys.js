import React, { useState } from 'react';
import './IdentificationKeys.css';  // Make sure your CSS handles the layout
import { fetchCharacterData, fetchTaxonData } from '../utils/api';
import { Button, Popover, Col, Row, Carousel} from 'antd';
import mainImage from '../assets/images/taxonomy-girl-at-microscope.png';


const IdentificationKeys = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [characterData, setCharacterData] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [taxonData, setTaxonData] = useState([]);  // Store fetched taxon data
  const [filteredTaxonData, setFilteredTaxonData] = useState([]);  // Store filtered list based on selections
  const [selectedTaxa, setSelectedTaxa] = useState([]); // an array of selected taxa to compare
  const [hoveredKey, setHoveredKey] = useState(null);



  const handleButtonClick = async (buttonLabel) => {
    setSelectedButton(buttonLabel);
    const characters = await fetchCharacterData(buttonLabel);
    setCharacterData(characters);

    const taxonResponse = await fetchTaxonData();  // Assume this fetches the entire list
    setTaxonData(taxonResponse);

    // Initialize all character keys to 'all'
    const initialSelectedValues = {};
    Object.keys(characters).forEach(key => {
      initialSelectedValues[key] = 'all';
    });
    setSelectedValues(initialSelectedValues);

    // Automatically apply the 'all' filter upon button click
    setFilteredTaxonData(taxonResponse);
};


const handleRadioChange = (characterKey, value) => {
  // Update selected values
  setSelectedValues(prev => {
    const newSelectedValues = { ...prev, [characterKey]: value };

    // Filter taxon data based on the updated selected values
    const filteredData = taxonData.filter(taxon => {
      return Object.keys(newSelectedValues).every(key => {
        // If the selected value for a key is 'all', ignore this filter criterion
        return newSelectedValues[key] === 'all' || taxon[key] === newSelectedValues[key];
      });
    });

    // Update the filtered taxon data state
    setFilteredTaxonData(filteredData);

    return newSelectedValues;
  });
};

const handleTaxonClick = (taxonId) => {
  setSelectedTaxa(prev => {
      const newArray = [...prev];
      if (newArray.length >= 3) {
          newArray.pop(); // Remove the last element
      }
      return [taxonId, ...newArray]; // Add the new ID to the front
  });
};

const renderTaxonData = (taxonId) => {
  const taxon = taxonData.find(t => t.id === taxonId);
  let habitusSource;

  try {
    habitusSource = require(`../assets/images/${taxon.habitus_image}`);
  } catch (error) {
    console.error("Failed to load image", error);
    habitusSource = require('../assets/images/melaloncha_face_illustration.png'); // Fallback image
  }

  const renderDescriptions = () => {
    const excludedFields = ["id", "species_id", "family", "genus", "specific_epithet", "year", "diagnosis", "habitus_image", "terminalia_lateral_image", "terminalia_dorsal_image"];
    return (
      <div>
        <h4>Diagnosis</h4>
        <div>{taxon.diagnosis || "No diagnosis available"}</div>
        <ul>
          {Object.entries(taxon)
            .filter(([key, value]) => !excludedFields.includes(key) && value)
            .map(([key, value]) => (
              <li key={key}
                className={hoveredKey === key ? "hovered" : ""}
                onMouseEnter={() => setHoveredKey(key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <strong>{key.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())}:</strong> {value.toString()}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return taxon ? (
    <Col span={8}>
      <div>
        <h2>{taxon.specific_epithet}</h2>
        <Carousel
          draggable
        >
          <div>
            <img src={habitusSource} alt='Habitus view' style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div>
            <img src={habitusSource} alt='Habitus view' style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div>
            <img src={habitusSource} alt='Habitus view' style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          {/* Additional slides as needed */}
        </Carousel>
        {renderDescriptions()} 
      </div>
    </Col>
  ) : <Col span={8}><p>Taxon not found</p></Col>;
};






const formatCharacterName = (name) => {
  return name
      .replace(/_/g, ' ')  // Replaces all underscores with spaces
      .replace(/^\w/, c => c.toUpperCase());  // Capitalizes only the first letter of the entire string
};

  return (
    <div>
      <div className="jumbotron">
        <img src={mainImage} alt="Identification Keys" />
        <h1>Identification Keys</h1>
      </div>
      <div className="content">
        <p>1. Select a genus</p>
        <p>2. Toggle the characters</p>
        <p>3. Compare photos and descriptions of up to three taxa</p>
        <div className="button-container">
          <button onClick={() => handleButtonClick('Aus')}>Aus</button>
          <button onClick={() => handleButtonClick('Bus')}>Bus</button>
          <button onClick={() => handleButtonClick('Cus')}>Cus</button>
        </div>
        <div className="data-columns">
        {selectedButton && Object.entries(characterData).map(([key, options]) => (
            <div key={key} className="character-group">
              <h4>{formatCharacterName(key)}</h4>
              {options.map(option => (
                <label key={option}>
                  <Popover placement="right" content={"content"} title={`${formatCharacterName(key)}: ${option}`}>

                    <input
                      type="radio"
                      name={key}
                      value={option}
                      checked={selectedValues[key] === option}
                      onChange={() => handleRadioChange(key, option)}
                    />
                    {option}
                  </Popover>
                </label>
              ))}
              <label>
                <input
                  type="radio"
                  name={key}
                  value="all"
                  checked={selectedValues[key] === 'all'}
                  onChange={() => handleRadioChange(key, 'all')}
                />
                All
              </label>
            </div>
        ))}
        </div>     
        <div className="taxon-list">
          <h3>Matching Taxa</h3>
          <ul>
            {filteredTaxonData.map(taxon => (
                <li key={taxon.id}>
                  <Button type="primary" onClick={() => handleTaxonClick(taxon.id)}>
                    {taxon.specific_epithet}
                  </Button>
                </li>
            ))}
          </ul>
        </div>
        <div className="results-comparator">
          <h3>Taxon Comparator</h3>

            <Row gutter={16}>
                {selectedTaxa.map(taxonId => renderTaxonData(taxonId))}
            </Row>
        </div>
      </div>
    </div>
  );
};

export default IdentificationKeys;
