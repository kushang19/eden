import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/reducer/formSlice";
import "./step4.css";
import checkicon from "../../assets/images/checkicon.png";

const Step4 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableData, setEditableData] = useState({ ...formData });
  const [isEditing, setIsEditing] = useState(false);

  const handleViewData = () => {
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditableData({ ...formData });
    setIsEditing(false);
  };

  const handleSave = () => {
    dispatch(saveFormData(editableData));
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const clearedData = {
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceURL: "",
      selectedOption: "",
    };
    dispatch(saveFormData(clearedData));
    setEditableData(clearedData);
    setIsModalOpen(false);
  };

  return (
    <div className="container step4">
      <div
        className="check-icon"
      >
        <img src={checkicon} alt="check icon"  />
      </div>
      <h2>Congratulations, {formData.fullName || "User"}!</h2>
      <p>You have completed onboarding, you can start using the Eden!</p>
      {!isModalOpen && (
        <button onClick={handleViewData} className="viewDataButton">
          View Data
        </button>
      )}

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h3>Data Table</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(editableData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="capitalize">{key}</td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          className="inputField"
                        />
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="alignRight">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="saveButton">
                    Save
                  </button>
                  <button onClick={handleCancelEdit} className="cancelButton">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleEdit} className="editButton">
                    Edit
                  </button>
                  <button onClick={handleDelete} className="deleteButton">
                    Delete
                  </button>
                </>
              )}
              <button
                onClick={() => setIsModalOpen(false)}
                className="closeButton"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step4;
