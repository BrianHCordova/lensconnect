//form doesnt do anything yet, just a placeholder for now

function Search() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const zipCode = event.target.zipCode.value;
        const city = event.target.city.value;
        const specialty = event.target.specialty.value;
//if no value is entered in the search fields, an alert will appear
        if (!zipCode && !city && !specialty) {
            alert("Please fill in at least one field");
        }
    }
    // HTML
    return (
        <>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="zipCode" placeholder="Zip Code" />
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="specialty" placeholder="Specialty" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

// Exports the Search page
export default Search;