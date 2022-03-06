import React, { useRef, useState } from "react";

function Movieform({addMovie}) {
  const DurationRef = useRef();
  const nameRef = useRef();
  const ratingRef = useRef();
  const [showError, setShowError] = useState(false);

  const resetForm = () => {
     DurationRef.current.value = null
     nameRef.current.value = null
     ratingRef.current.value = null
  }

  const checkValid = (value) => {
    const trimed = value.slice(0, -1);
    var er = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    const isValid = er.test(trimed);
    if (!isValid || (value[value.length - 1] != 'h' && value[value.length - 1] != 'm') ) {
      setShowError(true);
      return false
    }
    return true
  };

  const handleAdd = () => {
    const isValid = checkValid(DurationRef.current.value)
    if(isValid && nameRef.current.value && ratingRef.current.value){
      addMovie({
        name: nameRef.current.value,
        rating: ratingRef.current.value,
        duration: DurationRef.current.value
      })
    resetForm()

    }
  }

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
            ref={nameRef}
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
            ref={ratingRef}
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              defaultValue={""}
              ref={DurationRef}
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              onFocus={() => setShowError(false)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {showError && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}

          <div className="layout-row justify-content-end">
            <button
              onClick={handleAdd}
              type="submit"
              className="mx-0"
              data-testid="addButton"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
