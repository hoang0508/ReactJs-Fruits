import React from "react";

const CheckBox = ({ children }) => {
  return (
    <div class="checkbox">
      <input
        type="checkbox"
        name=""
        id="checkbox_input"
        class="checkbox_input"
      />
      <label for="checkbox_input" class="checkbox_label">
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
