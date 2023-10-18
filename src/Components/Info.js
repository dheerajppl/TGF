import React from 'react'

export default function Info() {
  return (
    <div className="content">
      <div className="container">
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
                  <button className="create">
                    <a href="/">Create</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <p className="choose mb-0">
                    To set up the App on Shopify, follow these steps:
                  </p>
                </div>
              </div>
              <div className="row pt-1">
                <div className="col-md-12">
                  <div className="box-outer1">
                    <ul className="pl-3">
                      <li>
                        Click the button below "Access Shopify Apps" screen. The
                        screen will open in a new tab, so you can return to this
                        one and continue.
                      </li>
                      <li>
                        On the Shopify screen, click "Allow custom app
                        development."
                      </li>
                      <li>Click again on "Allow custom app development."</li>
                      <li>Click "Create an app."</li>
                      <li>Fill in the "Name" with "Free E-Com Store Build."</li>
                      <li>Click "Create app."</li>
                      <li>Click "Configure Admin API Scopes."</li>
                      <li>
                        Select ALL access scope options on this screen, scroll
                        to the bottom to ensure all have been selected
                        (basically, this means check EVERY BOX shown in
                        Shopify).
                      </li>
                      <li>
                        After selecting all the options, click on the "Save"
                        button at the top of the screen. If necessary, scroll up
                        to the top.
                      </li>
                      <li>Return to this tab to continue.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <button
                  onClick={() => {
                    accessShopifyApp();
                  }}
                  className="btn btn-primary"
                >
                  Access Shopify Apps
                </button>

                <button className="btn btn-primary" onClick={handleSubmit}>
                  Next Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
