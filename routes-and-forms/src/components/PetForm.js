import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colour, setColour] = useState("");
  const [hasSubmitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    setAge(0);
    setName("");
    setColour("");
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        {/* Here goes age */}

        <div>
          <label>
            Pet's Age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        {/* Here goes the colour */}

        <div>
          <label>
            Pet's Colour:
            <input
              type="text"
              value={colour}
              onChange={(e) => {
                setColour(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>

        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">
        <h3>Results</h3>
        {hasSubmitted ? (
          <div>Thank you for submitting</div>
        ) : (
          <>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div style={{ backgroundColor: colour, padding: "24px" }}>
              Colour: {colour}
            </div>
          </>
        )}
        <br />
      </div>
    </div>
  );
};

export default PetForm;
