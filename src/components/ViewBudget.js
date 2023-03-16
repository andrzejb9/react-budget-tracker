import React from "react";

function ViewBudget({ budget, handleEditClick }) {
  return (
    <>
      <span>Budget: ${budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </>
  );
}

export default ViewBudget;
