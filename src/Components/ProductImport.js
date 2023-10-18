import React from 'react'

export default function ProductImport() {
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
                          <a href="/">Create</a>
                        </button> */}
                </div>
              </div>
            </div>
            <h1 className="col-md-12 d-flex flex-column text-white align-items-center justify-content-center">
              DO You Want To Import The Products?
            </h1>
          </div>
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="checkbox"
                  name="importProduct"
                  checked={formData.importProduct}
                  onChange={handleChange}
                  style={{ transform: "scale(2)" }}
                  className="m-3"
                />
                YES
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="notImportProduct"
                  checked={formData.notImportProduct}
                  onChange={handleChange}
                  style={{ transform: "scale(2)" }}
                  className="m-3"
                />
                No
              </label>
            </form>
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
