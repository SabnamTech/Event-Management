import "../styles/FilterBar.css";

function FilterBar() {

    return (

        <div className="filter-bar">

            <select>

                <option>Category</option>
                <option>Technology</option>
                <option>Music</option>
                <option>Business</option>

            </select>

            <select>

                <option>Format</option>
                <option>Online</option>
                <option>Offline</option>

            </select>

            <select>

                <option>Price</option>
                <option>Free</option>
                <option>Paid</option>

            </select>

            <input
                type="date"
            />

            <input
                type="text"
                placeholder="Location"
            />

        </div>

    );

}

export default FilterBar;