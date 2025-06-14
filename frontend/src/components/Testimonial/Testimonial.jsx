import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-30px lg:mt-55px">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Tim David
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              The doctors were very attentive and explained everything clearly. I
              felt comfortable and well cared for throughout my visit.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Suyash Sharma
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Booking an appointment was quick and easy. The staff was friendly
              and the facilities were very clean and modern.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hazlewood
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I appreciated the follow-up after my tests. The team made sure I
              understood my results and next steps.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dayal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              The online consultation was seamless and saved me a lot of time.
              Highly recommend their digital services!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ricky Ponting
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Excellent experience from start to finish. The doctors are
              knowledgeable and genuinely care about their patients.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
