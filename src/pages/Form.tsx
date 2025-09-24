import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useAuth } from "../context/AuthContext"; 
import owner from "../assets/ownerr.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  ownPets: "Yes" | "No" | "";
  reason: string;
}

export default function Form() {
  const { user } = useAuth(); 
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    ownPets: "",
    reason: "",
  });

 
  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex bg-[#FFF5D0]">
      <div className="">
        <img src={owner} alt="Owner with pet" className="md:h-[43rem]" />
      </div>

      <div className="max-w-md mx-auto bg-amber-50 p-6 rounded-lg shadow-md md:h-[35rem] md:mt-10 ">
        <h2 className="text-center text-xl font-semibold mb-4">Pet Adoption Form</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b-2 border-blue-500 focus:outline-none py-1"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-1"
                placeholder="Last Name"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              readOnly 
              className="w-full border rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
              placeholder="Email"
            />
          </div>

          
          <div>
            <span className="block text-sm font-medium mb-1">Do you own Pets</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="ownPets"
                  value="Yes"
                  checked={formData.ownPets === "Yes"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="ownPets"
                  value="No"
                  checked={formData.ownPets === "No"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                No
              </label>
            </div>
          </div>

        
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="reason">
              Why do you want to adopt a pet?
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your reason..."
            />
          </div>

          
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
