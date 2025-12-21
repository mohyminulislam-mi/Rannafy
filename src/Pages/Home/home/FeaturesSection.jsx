import { Clock, Heart, Share2, Users, Sparkles, ChefHat } from "lucide-react";
import Reveal from "../../../components/Reveal";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-orange-600" />,
      title: "Save Time in the Kitchen",
      desc: "Quick & easy recipes for busy weeknights — ready in 30 minutes or less.",
    },
    {
      icon: <Heart className="w-10 h-10 text-orange-600" />,
      title: "Save Your Favorites",
      desc: "Build your personal cookbook — save recipes you love with one click.",
    },
    {
      icon: <ChefHat className="w-10 h-10 text-orange-600" />,
      title: "Add Your Own Recipes",
      desc: "Share your family secrets and signature dishes with the community.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-orange-600" />,
      title: "Share with Friends",
      desc: "Send recipes to family & friends instantly — perfect for dinner plans!",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-600" />,
      title: "Join a Foodie Community",
      desc: "Discover recipes from real home cooks — just like you.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-orange-600" />,
      title: "Always Fresh & Updated",
      desc: "New recipes added daily — never run out of inspiration!",
    },
  ];

  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Why You'll Love
            <span className="text-orange-600"> Cooking With Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to cook confidently and enjoy every meal
          </p>
        </div>
          {/* Features Grid section here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 p-4 w-fit bg-white rounded-2xl shadow-lg group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
