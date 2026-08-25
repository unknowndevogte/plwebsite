export default function About() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          We are a team of passionate professionals dedicated to helping businesses
          succeed in the digital age.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, PL Website has grown from a small startup to a
              leading provider of digital solutions. Our mission is to empower
              businesses with innovative technology.
            </p>
            <p className="text-gray-600">
              With a team of over 50 experts across multiple disciplines, we have
              helped more than 200 companies transform their digital presence.
            </p>
          </div>
          <div className="bg-blue-100 rounded-xl h-80 flex items-center justify-center">
            <span className="text-6xl">📈</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
