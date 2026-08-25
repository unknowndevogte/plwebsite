import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with PL Website
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide cutting-edge digital solutions to help your business grow
            and succeed in the modern world.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                We deliver projects on time without compromising quality.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
              <p className="text-gray-600">
                Creative approaches to solve your unique business challenges.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 support to ensure your success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with us.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
