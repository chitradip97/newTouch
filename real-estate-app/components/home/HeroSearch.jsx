"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filterTabs = ["City", "House", "Apartments", "Residential"];

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState("City");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("location", location);
    if (bedrooms) params.set("beds", bedrooms);
    params.set("type", activeTab.toLowerCase());
    window.location.href = `/properties?${params.toString()}`;
  }

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl rounded-2xl bg-white p-4 shadow-xl sm:p-6">
      <h2 className="mb-4 text-sm font-semibold text-neutral-900 sm:text-base">
        Find a best place
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="relative">
          <label htmlFor="hero-search-location" className="sr-only">
            Location
          </label>
          <MapPin
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
            aria-hidden="true"
          />
          <Input
            id="hero-search-location"
            placeholder="Location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full pl-9"
          />
        </div>

        <div>
          <label htmlFor="hero-search-price" className="sr-only">
            Price range
          </label>
          <Select onValueChange={setLocation}>
            <SelectTrigger id="hero-search-price" className="rounded-full">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-200000">$0 – $200,000</SelectItem>
              <SelectItem value="200000-500000">$200,000 – $500,000</SelectItem>
              <SelectItem value="500000-1000000">$500,000 – $1,000,000</SelectItem>
              <SelectItem value="1000000+">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="hero-search-area" className="sr-only">
            Location area
          </label>
          <Select>
            <SelectTrigger id="hero-search-area" className="rounded-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="london">London</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="hero-search-beds" className="sr-only">
              Number of bedrooms
            </label>
            <Select onValueChange={setBedrooms}>
              <SelectTrigger id="hero-search-beds" className="rounded-full">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full"
            aria-label="Search properties"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap gap-2 border-t pt-4">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}