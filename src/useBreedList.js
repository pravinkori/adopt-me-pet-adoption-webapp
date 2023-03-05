import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreedList";

// Custom hook
export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreed);

    // Following LOC returns empty array if result is not ready.
    return [results?.data?.breeds ?? [], results.status];
}
