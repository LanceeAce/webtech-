import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PetCard from "../components/PetCard";

const pets = [
  { id: "Max", name: "Max", type: "Dog", image: "src/assets/max.png" },
  { id: "Milo", name: "Milo", type: "Dog", image: "src/assets/milo.png" },
  { id: "Bella", name: "Bella", type: "Cat", image: "src/assets/bella.png" },
  { id: "Luna", name: "Luna", type: "Dog", image: "src/assets/luna.png" },
  { id: "Gecko", name: "Rexy", type: "Gecko", image: "src/assets/rexy.png" },
  { id: "Pachinko", name: "Pachinko", type: "Bird", image: "src/assets/pachinko.png" },
  { id: "Hoppy", name: "Hoppy", type: "Rabbit", image: "src/assets/hoppy.png" },
  { id: "Sage", name: "Sage", type: "Cat", image: "src/assets/sage.png" },
  { id: "Ember", name: "Ember", type: "Cat", image: "src/assets/ember.png" },
  { id: "Pebble", name: "Pebble", type: "Turtle", image: "src/assets/pebble.png" },
  { id: "Brod", name: "Brod", type: "Spider", image: "src/assets/brod.png" },
  { id: "Rufus", name: "Rufus", type: "Dog", image: "src/assets/rufus.png" },
  { id: "Buddy", name: "Buddy", type: "Dog", image: "src/assets/buddy.png" },
  { id: "Daisy", name: "Daisy", type: "Cat", image: "src/assets/daisy.png" },
  { id: "Oliver", name: "Oliver", type: "Cat", image: "src/assets/oliver.png" },
];

export const Adopt = () => {
  const [filter, setFilter] = useState("All");
  const [selectedPet, setSelectedPet] = useState<{ id: string; name: string } | null>(null);

  const navigate = useNavigate();

  // Filter pets based on current filter
  const filteredPets = pets.filter((pet) => {
    if (filter === "All") return true;
    if (filter === "Dog") return pet.type === "Dog";
    if (filter === "Cat") return pet.type === "Cat";
    if (filter === "Others") return pet.type !== "Dog" && pet.type !== "Cat";
    return true;
  });

  const handleProceed = () => {
    
    navigate("/form", { state: { pet: selectedPet } });
  };

  return (
    <div className="h-screen bg-[#FFF5D0]">
      <div className="flex flex-wrap p-6 justify-center gap-7">
        <div className="block w-full lg:w-3/4 items-center">
          <div className="p-4 mb-6">
            <h1 className="text-3xl font-bold text-center mb-2">Adopt a Pet</h1>
            <p className="text-center text-gray-600 mb-4">
              Find and adopt a pet in need of a loving home.
            </p>

           
            <div className="flex justify-center gap-4">
              {["All", "Dog", "Cat", "Others"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full cursor-pointer ${
                    filter === type ? "bg-black text-white" : "bg-orange-400 text-white"
                  }`}
                >
                  {type === "All" ? "All Pets" : type}
                </button>
              ))}
            </div>
          </div>

         
          <div className="h-[65vh] overflow-y-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredPets.map((pet) => (
              <div key={pet.id} onClick={() => setSelectedPet(pet)}>
                <PetCard name={pet.name} type={pet.type} image={pet.image} />
              </div>
            ))}
          </div>
        </div>
      </div>

    
      {selectedPet && (
       <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to adopt <span className="text-orange-500">{selectedPet.name}</span>?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedPet(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-500"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
