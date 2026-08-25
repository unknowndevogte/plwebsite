import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: "💻",
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "CMS Development"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services.",
    icon: "☁️",
    features: ["AWS & Azure", "Cloud Migration", "DevOps", "Serverless Architecture"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that drive engagement.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export default function Services() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          We offer a comprehensive suite of digital services to help your business thrive.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-blue-600 text-white p-16 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We specialize in tailored solutions that fit your unique business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
