import React from "react";
import Reveal from "../../../components/Reveal";

const blogData = [
  {
    id: 1,
    title: "From Grandma’s Kitchen: The Art of Slow-Cooked Spiced Curry",
    category: "Heritage Recipes",
    img: "https://i.ibb.co.com/wrKYZdYc/photo-1547592166-23ac45744acd.avif",
  },
  {
    id: 2,
    title: "5 Simple Ways to Make Your Weekly Meal Prep More Nutritious",
    category: "Nutrition & Wellness",
    img: "https://i.ibb.co.com/pBQqPBCF/thai-chicken-basil-recipe.webp",
  },
  {
    id: 3,
    title: "How Rannafy Home Chefs Source Fresh Local Ingredients",
    category: "Community Spotlight",
    img: "https://i.ibb.co.com/wrKYZdYc/photo-1547592166-23ac45744acd.avif",
  },
  {
    id: 4,
    title: "The Zero-Waste Kitchen: Using Every Part of Your Veggies",
    category: "Vegetables",
    img: "https://i.ibb.co.com/DxSbY6q/photo-1547592166-23ac45744ac.webp",
  },
];

const Blogs = () => {
  return (
    <Reveal>
      <section className="py-12 px-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Rannafy
            <span className="text-orange-600"> Food Journal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, tricks, and stories from the heart of local kitchens. Learn
            how to eat better and support your community.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
          {blogData.map((post) => (
            <div key={post.id} className="max-w-72 w-full group cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                  src={post.img}
                  alt={post.title}
                />
              </div>
              <p className="text-xs text-orange-600 font-bold mt-4 uppercase tracking-widest">
                {post.category}
              </p>
              <h3 className="text-base text-slate-900 font-bold mt-2 leading-tight group-hover:text-orange-600 transition duration-300">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default Blogs;
