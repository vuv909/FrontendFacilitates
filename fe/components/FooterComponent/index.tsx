export default function FooterComponent() {
  return (
    <div className="mt-5 relative">
      <div
        className="w-full bg-gray-400"
        style={{ height: "250px", objectFit: "cover" }}
      ></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-3xl z-10">
        Cảm ơn bạn vì đã trải nghiệm web của chúng tôi !!!
      </h1>
    </div>
  );
}
