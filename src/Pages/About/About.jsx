import React from "react";
import { Users, Heart, ShieldCheck, Utensils } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connecting Communities Through Home-Cooked Meals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rannafy is a marketplace that brings together passionate home cooks
            and food lovers, celebrating authentic flavors and fostering
            meaningful connections in your neighborhood.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that the best meals are made with love in home kitchens.
            Rannafy empowers talented home cooks to share their culinary
            heritage and creativity while providing community members access to
            authentic, delicious, and affordable home-cooked meals. We're
            building a platform that values quality, trust, and the
            irreplaceable warmth of homemade food.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Made with Love
            </h4>
            <p className="text-gray-600">
              Every meal is prepared with care and passion by local home cooks
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Community First
            </h4>
            <p className="text-gray-600">
              Building stronger neighborhoods through shared meals and
              connections
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <ShieldCheck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Trust & Safety
            </h4>
            <p className="text-gray-600">
              Verified cooks and secure transactions for peace of mind
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Utensils className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Authentic Flavors
            </h4>
            <p className="text-gray-600">
              Discover diverse cuisines and traditional recipes from around the
              world
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Our Story</h3>
          <p className="text-lg leading-relaxed mb-4">
            Rannafy was born from a simple observation: in every neighborhood,
            there are incredible home cooks with amazing recipes passed down
            through generations, yet finding authentic home-cooked meals was
            nearly impossible.
          </p>
          <p className="text-lg leading-relaxed">
            We created Rannafy to bridge this gap, allowing talented cooks to
            turn their passion into income while giving food lovers access to
            meals that remind them of home, introduce them to new cultures, or
            simply satisfy their craving for something made with real care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
