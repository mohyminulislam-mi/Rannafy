import React from "react";
import MealCard from "./MealCard";

const Meals = () => {
  const meals = [
    {
      id: 1,
      chefName: "John Doe",
      chefId: "C101",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.3f4uw03GjHN2wa2tSeNc4wHaIu?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 12,
      rating: 4.5,
      deliveryArea: "Downtown",
    },
    {
      id: 2,
      chefName: "Jane Smith",
      chefId: "C102",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.2ZXxekwiq_EhGzfIKYeGogHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 8,
      rating: 4.2,
      deliveryArea: "Uptown",
    },
    {
      id: 3,
      chefName: "Alex Johnson",
      chefId: "C103",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.ZzVdwKdm5kTLru3uWwtNQQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 15,
      rating: 4.8,
      deliveryArea: "Citywide",
    },
    {
      id: 4,
      chefName: "soumik mia",
      chefId: "C103",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.gAHAtntCt5vxO0BipJI-LAHaGu?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 15,
      rating: 4.8,
      deliveryArea: "Citywide",
    },
  ];

  return (
    <div className="py-14 mt-14">
      {/* Heading & Subheading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Fresh & New
          <span className="text-orange-600"> Recipes</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Check out the latest creations from our amazing community of home
          cooks!
        </p>
      </div>
      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
