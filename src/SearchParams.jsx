import { useState } from "react";

const ANIMALS = ["Bird", "Cat", "Dog", "Rabbit", "Reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");

    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Enter your location"
                        onChange={(e) => {
                            setLocation(e.target.value)
                        }}
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >

                        <option />
                        {ANIMALS.map(animal => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SearchParams;