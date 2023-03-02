import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreedList";

// Custom hook
export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreed);
    // const [status, setStatus] = useState("unloaded");

    // useEffect(() => {
    //     if (!animal) {
    //         setBreedList([]);
    //     } else if (localCache[animal]) {
    //         setBreedList(localCache[animal]);
    //     } else {
    //         requestBreedList();
    //     }

    //     async function requestBreedList() {
    //         setBreedList([]);
    //         setStatus("loading");

    //         const res = await fetch(
    //             `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    //         );

    //         const json = await res.json();
    //         localCache[animal] = json.breeds || []
    //         setBreedList(localCache[animal]);
    //         setStatus("loaded");

    //     }
    // }, [animal]);

    // Following LOC returns empty array if result is not ready.
    return [results?.data?.breeds ?? [], results.status];
}
