import React from 'react'

export default function AccessKey() {
  return (
    <div className="content  container-fluid">
      <div className="container  container-fluid">
        <div className="row justify-content-center outer1 pb-0">
          <div className="col-md-12 pt-4">
            <div className="col-md-12 pb-5 mb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-2">
                  <p className="mb-0">
                    <img src={Logo1} alt="not found" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-8">
                  <p className="meet text-center mb-0">
                    Meet the creator: Jacob Levinrad
                  </p>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  {/* <button className="create">
                          <a href="#">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <ol className="text-white">
              <li>Click the button below to access the Shopify Apps screen.</li>
              <li>
                Once the screen opens in a new tab, return to this one to
                continue.
              </li>
              <li>
                Click on the <b>"ai-accelerator"</b> App that you created in the
                previous step.
              </li>
              <li>Click on API Credentials.</li>
              <li>Click Install App.</li>
              <li>Click Reveal Token once.</li>
              <li>Copy the Token that is revealed.</li>
              <li>Return to this tab.</li>
              <li>Paste the Token in the field below.</li>
              <li>Wait for authorization validation.</li>
              <li>Click the ✅ Finish.</li>
            </ol>
            <div className="col-lg-6">
              <button
                onClick={() => {
                  accessShopifyApp();
                }}
                className="btn btn-primary"
              >
                Access Shopify Apps
              </button>
            </div>

            <div className="row  align-items-center d-flex">
              <div className="col-md-8">
                <input
                  type="text"
                  className="btn btn-primary w-100"
                  name="key"
                  id="key"
                  placeholder="Enter Your Access Token"
                  value={formData.accessToken}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      accessToken: event.target.value,
                    });
                  }}
                />
              </div>

              <div className="col-md-4 text-right">
                <button
                  onClick={() => {
                    handleCreateAccount();
                  }}
                  className="btn btn-primary"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
