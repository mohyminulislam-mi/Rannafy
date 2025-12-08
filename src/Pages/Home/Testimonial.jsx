import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Cook & Mom",
      content:
        "This is the only recipe app I use now! The recipes are easy to follow, and I love that real people share their family favorites. My kids actually eat dinner now!",
      rating: 5,
      avatar: "https://img.icons8.com/doodle/48/girl.png",
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      content:
        "Finally a recipe platform that feels personal. No more corporate ads — just honest, delicious recipes from passionate cooks. I've found so many hidden gems!",
      rating: 5,
      avatar: "https://img.icons8.com/office/40/person-male-skin-type-4.png",
    },
    {
      name: "Emma Williams",
      role: "Busy Professional",
      content:
        "As someone who cooks after long workdays, the '30 minutes or less' filter saved my life. Everything I've tried turned out amazing. Thank you!",
      rating: 5,
      avatar: "https://img.icons8.com/color/48/user-female--v3.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Loved by Home Cooks
            <span className="text-orange-600"> Everywhere</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy cooks who found their new favorite recipes
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-orange-100 group-hover:text-orange-200 transition" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-orange-400 to-orange-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-gray-800">1000+ happy cooks</p>
          <p className="text-gray-600">and growing every day</p>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
