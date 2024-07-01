import React, { useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

const PageAddListing1 = () => {
  const [propertyType, setPropertyType] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [rentalForm, setRentalForm] = useState("");

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handlePlaceNameChange = (e) => {
    setPlaceName(e.target.value);
  };

  const handleRentalFormChange = (e) => {
    setRentalForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { propertyType, placeName, rentalForm });
    // Additional logic for form submission
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormItem
          label="Choose a property type"
          desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
        >
          <Select value={propertyType} onChange={handlePropertyTypeChange}>
            <option value="">Select property type</option>
            <option value="Hotel">Hotel</option>
            <option value="Cottage">Cottage</option>
            <option value="Villa">Villa</option>
            <option value="Cabin">Cabin</option>
            <option value="Farm stay">Farm stay</option>
            <option value="Houseboat">Houseboat</option>
            <option value="Lighthouse">Lighthouse</option>
          </Select>
        </FormItem>
        <FormItem
          label="Place name"
          desc="A catchy name usually includes: House name + Room name + Featured property + Tourist destination"
        >
          <Input
            type="text"
            placeholder="Places name"
            value={placeName}
            onChange={handlePlaceNameChange}
          />
        </FormItem>
        <FormItem
          label="Rental form"
          desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
        >
          <Select value={rentalForm} onChange={handleRentalFormChange}>
            <option value="">Select rental form</option>
            <option value="Entire place">Entire place</option>
            <option value="Private room">Private room</option>
            <option value="Share room">Share room</option>
          </Select>
        </FormItem>
        
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default PageAddListing1;
