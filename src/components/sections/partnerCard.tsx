type PartnerProps = {
  name: string;
  role: string;
  company: string;
  review: string;
  avatar: string;
};

export default function PartnerCard({
  name,
  role,
  company,
  review,
  avatar,
}: PartnerProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 text-center">
      <p>{review}</p>

      <h4 className="mt-6 font-semibold">
        {name}
      </h4>

      <p className="text-orange-500">
        {role} at {company}
      </p>

      <img
        src={avatar}
        alt={name}
        className="
          mx-auto
          mt-6
          h-20
          w-20
          rounded-full
          object-cover
        "
      />
    </div>
  );
}