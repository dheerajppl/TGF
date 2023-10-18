  import "./App.css";
  import React, { useState } from 'react';
  import axios from 'axios';

  function App() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      thumbnail: '',
      storename:'',
      importProduct: false,
      notImportProduct: false,
    });
    axios.defaults.withCredentials = true;
    const [responseMessage, setResponseMessage] = useState('');
    const [shop, setShop] = useState('');

    const [selectedThumbnail, setSelectedThumbnail] = useState('');


      const isSelected = (value) => {
      return selectedThumbnail === value;
    };

      const addData = async (e) => {
          // e.preventDefault();

          try {
              const response = await axios.get(`http://localhost:3010/install?shop=${shop}`);
              console.log(response)
              const { redirectUrl } = response.data; // Handle the response as needed
              // if(redirectUrl)
              window.location.href = redirectUrl;
                  console.log(redirectUrl);
          } catch (error) {
              console.error('Error during login:', error);
          }
      };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      console.log(formData.email);

      setSelectedThumbnail(e.target.value);
      if (type === 'checkbox') {
        setFormData({
          ...formData,
          [name]: checked,
          [name === 'importProduct' ? 'notImportProduct' : 'importProduct']: false,
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };

      const redirectToAnotherUrl = () => {
      const newTab = window.open('https://www.shopify.com/in/free-trial/3-steps?term=shopify%20store%20create&adid=566014743789&campaignid=15433369407&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagDzeSd67y_lNIR5KfkCo0wbFWv3Y08p-uooIyYWLWz7BvF6ByjspAsaAt52EALw_wcB&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011', '_blank');
      newTab.focus();

    };


    const handleCreateAccount = () => {
      
      axios.post('http://localhost:3010/api/users', formData)
        .then((response) => {
          
          console.log(response.data);
          setResponseMessage('Data saved successfully');
          setStep(step + 1); 
        })
        .catch((error) => {
          
          console.error(error);
          console.log("error is giving")
          setResponseMessage('Error saving data');
        });
        
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      setStep(step + 1);
    };

    // const handleReset = () => {
    //   setStep(1);
    //   setResponseMessage('');
    //   setFormData({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     thumbnail: '',
    //     importProduct: false,
    //     notImportProduct: false,
    //   });
    // };

    const renderStep = () => {
      switch (step) {
        case 1:
          return (
            <div>
              <h2>Step 1: Personal Information</h2>
              <form onSubmit={handleSubmit}>
                  
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  
                />
                
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  
                />
                
                <button type="submit">Next</button>
              </form>
            </div>
          );
          case 2:
            return (
            
        <div>
              <h2>Step 2: Choose Your Layout</h2>
              <form className="row-radio" onSubmit={handleSubmit}>
                <label>
                  <input
                    type="radio"
                    name="thumbnail"
                    value="thumbnail1"
                    onChange={() => handleChange} />
                  <span
                    className={`radio-color red ${isSelected('thumbnail1') ? 'active' : ''}`}
                    onClick={() => setSelectedThumbnail('thumbnail1')}
                  >
                  </span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="thumbnail"
                    value="thumbnail2"
                    onChange={handleChange}
                  />
                  <span
                    className={`radio-color blue ${isSelected('thumbnail2') ? 'active' : ''}`}
                    onClick={() => setSelectedThumbnail('thumbnail2')}
                  ></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="thumbnail"
                    value="thumbnail3"
                    onChange={handleChange}
                  />
                  <span
                    className={`radio-color green ${isSelected('thumbnail3') ? 'active' : ''}`}
                    onClick={() => setSelectedThumbnail('thumbnail3')}
                  ></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="thumbnail"
                    value="thumbnail4"
                    onChange={handleChange}
                  />
                  <span
                    className={`radio-color yellow ${isSelected('thumbnail4') ? 'active' : ''}`}
                    onClick={() => setSelectedThumbnail('thumbnail4')}
                  ></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="thumbnail"
                    value="thumbnail5"
                    onChange={handleChange}
                  />
                  <span
                    className={`radio-color sky-blue ${isSelected('thumbnail5') ? 'active' : ''}`}
                    onClick={() => setSelectedThumbnail('thumbnail5')}
                  >
                  </span>
                </label>
                
              </form>
              <button type="submit" onClick={() => setStep(3)}>Next</button>
            </div>
            );
          
        case 3:
          return (
            <div>
              <h2>Step 3: Do You Want To Import Product </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="checkbox"
                    name="importProduct"
                    checked={formData.importProduct}
                    onChange={handleChange}
                  />
                  YES
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="notImportProduct"
                    checked={formData.notImportProduct}
                    onChange={handleChange}
                  />
                  No
                </label>
                
              </form>
            </div>
          );
          case 4:
            return (
              <div className="">
                <h2>Confirmation</h2>
                <p><b>First click on create Your store</b></p>
                <ul>
                  <li>Go To shopify and copy store name</li>
                  <li>Come back and paste, in next step.</li>
                </ul>
                
                {/* <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
                {formData.importProduct && (
                  <p>Status: Import Product</p>
                )}
                {formData.notImportProduct && (
                  <p>Status: Do Not Import Product</p>
                )}  */}
                <p>{responseMessage}</p>
                <button type="submit" onClick={handleSubmit}>Next</button>
              </div>
            );

            case 5:
            return (
              <div className="">
                <h2>Enter Your Store Name</h2>
                <p>
                  <li>Enter Your Store Name  </li>
                  <li>Click On <b>Install Button</b></li>
                  <li>It will redirect to Your Shopify store </li>
                  <li>After Installing Your store is ready to use.</li>
                </p>
                <input
                  type="text"
                  name="storename"
                  placeholder="Enter Store name"
                  value={shop}
                  onChange={(event)=>{
                    setShop(event.target.value);
                  }}
                />
                
                <button type="submit" onClick={addData}>Install App</button> 
              </div>
            );
        default:
          return null;
      }
    };

    return (
      <div className="card">
        <div className="">


    </div>
        <div className="card">
      {renderStep()}
      <div>
        {step === 3 && (
          <button type="submit" onClick={handleCreateAccount}>Create Account</button>
      )}

        {step === 4 && (
          <button type="submit" onClick={redirectToAnotherUrl}>Create Your Store </button>
      )}

      {step > 1 && step < 5 && (
          <button onClick={() => setStep(step - 1)}>Previous</button>
      )}
    </div>
    </div>

    </div>
    );
  }

  export default App;
