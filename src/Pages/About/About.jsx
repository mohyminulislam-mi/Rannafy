import React from "react";
import { Users, Heart, ShieldCheck, Utensils, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Hero Section - Dynamic Gradient & Modern Typography */}
      <section className="relative py-20 lg:py-26 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Connecting Communities Through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-orange-500">
              Home-Cooked Meals
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rannafy is a marketplace celebrating authentic flavors and fostering
            meaningful connections right in your neighborhood.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {/* Mission & Image Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-orange-500 pl-6">
              "We believe that the best meals aren't made in factories; they are
              crafted with love in the heart of the home."
            </p>
            <p className="text-gray-600 text-lg">
              Rannafy empowers talented home cooks to share their culinary
              heritage while providing community members access to authentic,
              affordable meals. We value quality, trust, and the irreplaceable
              warmth of homemade food.
            </p>
          </div>
          <div >
        
              <img
                src="https://i.ibb.co.com/TMp5fBdt/rannafy.png"
                alt="Rannafy"
                className="rounded"
              />
            
        </div>
        </div>

        {/* Values Grid - Refined Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: Heart,
              title: "Made with Love",
              desc: "Every meal is prepared with care and passion by local home cooks.",
            },
            {
              icon: Users,
              title: "Community First",
              desc: "Building stronger neighborhoods through shared meals and connections.",
            },
            {
              icon: ShieldCheck,
              title: "Trust & Safety",
              desc: "Verified cooks and secure transactions for total peace of mind.",
            },
            {
              icon: Utensils,
              title: "Authentic Flavors",
              desc: "Discover diverse cuisines and traditional family recipes.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <item.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Story Section - Modern Dark Card */}
        <div className="relative overflow-hidden bg-gray-900 rounded-3xl p-8 md:p-16 text-white">
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              The Rannafy Story
            </h3>
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                Rannafy was born from a simple observation: in every
                neighborhood, there are incredible home cooks with amazing
                recipes passed down through generations, yet finding authentic
                home-cooked meals was nearly impossible.
              </p>
              <p>
                We created this platform to bridge that gap. We turn passion
                into income for cooks and provide food lovers with meals that
                remind them of home.
              </p>
              <button className="flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-300 transition-colors pt-4">
                Join our community <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
