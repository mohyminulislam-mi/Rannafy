import { Star, Quote } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Shared/Loading";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-reviews");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <section className="py-14 px-6 bg-linear-to-b from-white to-gray-50">
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

        {/* Marquee Testimonials */}
        <Marquee pauseOnHover speed={40} gradient={false}>
          <div className="flex gap-10 px-4 py-10">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="min-w-[350px] bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Quote */}
                <Quote className="w-12 h-12 text-orange-100 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-orange-400 to-orange-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <img
                        src={review.UserPhoto}
                        alt={review.userName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {review.userName}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {format(new Date(review.createdAt), "dd MMM yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
};

export default Testimonial;
