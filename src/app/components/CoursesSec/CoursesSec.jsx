import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

export default function CoursesSec () {
  const courses = [
    {
      image: "/Images/Certif.png", 
      title: "Revenue Management",
      duration: "40 min",
      type: "certification",
    },
    {
      image: "/Images/Certif.png",
      title: "Revenue Management",
      duration: "40 min",
      type: "certification",
    },
    {
      image: "/Images/Certif.png",
      title: "Revenue Management",
      duration: "40 min",
      type: "certification",
    },
    {
      image: "/Images/Certif.png",
      title: "Revenue Management",
      duration: "40 min",
      type: "certification",
    },
  ];

  return (
    <section tw="bg-[#FFFBF0] py-16 px-8">
      <div tw="max-w-5xl mx-auto text-center">
        <h2 tw="text-3xl font-bold text-black mb-2">Trending Courses</h2>
        <p tw="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          condimentum ac tellus at commodo.
        </p>
        <div tw="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div tw="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    tw="w-full h-40 object-cover"
                  />
                  <div tw="p-4">
                    <h3 tw="text-lg font-semibold text-black mb-2">
                      {course.title}
                    </h3>
                    <p tw="text-gray-600 text-sm">{course.duration}</p>
                    <p tw="text-gray-500 text-sm">{course.type}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button tw="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600">
            See All
          </button>
        </div>
      </div>
    </section>
  );
}
