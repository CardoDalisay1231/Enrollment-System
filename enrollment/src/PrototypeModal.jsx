import React, { useState, useEffect } from "react";
import "./PrototypeModal.css";

function PrototypeModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      {showModal && (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Prototype Warning
                </h5>
                <button
                  type="button"
                  className="closed"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Welcome to our website prototype! Please note that this is a
                  work in progress and does not have a fully functional
                  database yet.
                </p>
              </div>
              <div className="modal-footer">
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrototypeModal;