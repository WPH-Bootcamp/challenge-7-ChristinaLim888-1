type PartnerProps = {
  name: string;
  role: string;
  company: string;
  review: string;
  avatar: string;
  quote: string;
  star: string;
  active? : boolean;
};

export default function PartnerCard({ name, role, company, review, avatar, quote, star, active = false, }: PartnerProps) {
  return (
    <div className="relative mt-16 overflow-visible
    ">
      {/* Quote */}

      <img src={quote} alt="quote" className=" absolute -top-10 left-8 z-20 h-16 w-auto" />

      {/* Card */}
      <div className="border-gradient-to-br from-[#ff6c37] to-[#dedcdc]">
        <div
          className="
          rounded-[24px] bg-[#f5f5f5] border border-[#dedcdc] px-10 py-12 text-center "
        >
          {/* Stars */}
          <div className="mb-6 flex justify-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <img key={index} src={star} alt="star" className="h-7 w-7" />
            ))}
          </div>

          {/* Review */}
          <p className="mx-auto max-w-3xl text-[22px] leading-[1.8]  text-gray-900">"{review}"</p>

          {/* Name */}
          <h4 className="mt-10 text-[30px] font-semibold">{name}</h4>

          {/* Position */}
          <p className="mt-3 text-[20px] text-orange-500">
            {role} at {company}
          </p>
        </div>
      </div>

      {/* Avatar */}

      <img src={avatar} alt={name} className="absolute left-1/2 -bottom-12 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-white object-cover" />
    </div>
  );
}
