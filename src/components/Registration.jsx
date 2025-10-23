import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Instagram,
  Mail,
  User,
  BookOpen,
  MessageCircleHeart,
  CakeSlice,
  ToggleLeft,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    course: "",
    age: "",
    mode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations = {
    pune: [18.463797067048343, 73.83480893682008],
    sambhajinagar: [19.907761574241793, 75.35463482336795],
  };
  const mapCenter = [19.2, 74.6];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid Gmail address.";
    }

    const mobileRegex = /^\d{10}$/;
    if (!formData.contactNumber || !mobileRegex.test(formData.contactNumber)) {
      validationErrors.contactNumber =
        "Please enter a valid 10-digit mobile number.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const phoneNumber = "919595618414";
    const message = `
𝐇𝐞𝐥𝐥𝐨 𝟕𝐭𝐡 𝐂𝐇𝐎𝐑𝐃𝐒 𝐀𝐂𝐀𝐃𝐄𝐌𝐘...!!

ɪ'ᴍ ʀᴇᴀᴅʏ ᴛᴏ sᴛᴀʀᴛ ᴍʏ ᴍᴜsɪᴄᴀʟ ᴊᴏᴜʀɴᴇʏ ᴀɴᴅ ᴡᴏᴜʟᴅ ʟᴏᴠᴇ ᴛᴏ ʀᴇɢɪsᴛᴇʀ ғᴏʀ ᴀ ᴄᴏᴜʀsᴇ..!!

ʜᴇʀᴇ ᴀʀᴇ ᴍʏ ᴅᴇᴛᴀɪʟs :-
- 𝐍𝐚𝐦𝐞  :- ${formData.fullName}
- 𝐀𝐠𝐞    :- ${formData.age}
- 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 :- ${formData.contactNumber}
- 𝐄𝐦𝐚𝐢𝐥   :- ${formData.email}
- 𝐂𝐨𝐮𝐫𝐬𝐞  :- ${formData.course}
- 𝐌𝐨𝐝𝐞   :- ${formData.mode}

ɪ ᴄᴀɴ'ᴛ ᴡᴀɪᴛ ᴛᴏ ᴄᴏɴɴᴇᴄᴛ ᴀɴᴅ ʟᴇᴀʀɴ ᴍᴏʀᴇ. ᴘʟᴇᴀsᴇ ɢᴇᴛ ɪɴ ᴛᴏᴜᴄʜ sᴏᴏɴ...!!

ᴛʜᴀɴᴋ ʏᴏᴜ..!!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      course: "",
      age: "",
      mode: "",
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Start Your Musical Journey
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Register now and take the first step towards musical excellence
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-lg p-8 sm:p-12">
        {/* Registration Form Section */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Registration Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name (no change) */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* --- NEW FIELD: Age --- */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Age
              </label>
              <div className="relative">
                <CakeSlice
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="number"
                  id="age"
                  name="age"
                  min={1}
                  max={100}
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Address (no change) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter yourname@gmail.com"
                  className={`pl-10 pr-4 py-2 block w-full border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Contact Number (no change) */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contact Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit number"
                  className={`pl-10 pr-4 py-2 block w-full border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ${
                    errors.contactNumber ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
              </div>
              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactNumber}
                </p>
              )}
            </div>

            {/* Course of Interest (no change) */}
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Course of Interest
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm appearance-none"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Drumset">Drumset</option>
                  <option value="Singing">Singing</option>
                  <option value="Acting">Acting</option>
                  <option value="Dance">Dance</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* --- NEW FIELD: Mode --- */}
            <div>
              <label
                htmlFor="mode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mode of Learning
              </label>
              <div className="relative">
                <ToggleLeft
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  id="mode"
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm appearance-none"
                  required
                >
                  <option value="">Select a mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300 disabled:bg-green-500 disabled:text-white disabled:cursor-not-allowed"
            >
              {isSubmitted ? "Redirecting to WhatsApp..." : "Register Now"}
            </button>
          </form>
        </div>

        {/* --- MODIFIED: Get In Touch Section with Tooltip --- */}
        <div className="bg-white p-6 rounded-lg md:border-l md:border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h3>
          <div className="space-y-6">
            {/* Contact Details (no changes) */}
            <div className="flex items-start">
              <Phone
                className="text-yellow-500 mr-3 mt-1 flex-shrink-0"
                size={24}
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Phone Numbers
                </p>
                <p className="text-gray-600">
                  <a
                    href="tel:+917775077248"
                    className="hover:text-yellow-600 transition-colors duration-300 mr-2"
                  >
                    7775077248
                  </a>
                  /
                  <a
                    href="tel:+919595618414"
                    className="hover:text-yellow-600 transition-colors duration-300 ml-2"
                  >
                    9595618414
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin
                className="text-yellow-500 mr-3 mt-1 flex-shrink-0"
                size={24}
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">Locations</p>
                <p className="text-gray-600">
                  Pune City & Chh. Sambhajinagar City
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Instagram
                className="text-yellow-500 mr-3 mt-1 flex-shrink-0"
                size={24}
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">Follow Us</p>
                <a
                  href="https://www.instagram.com/7th_chords_music_academy/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                >
                  @7th_chords_music_academy
                </a>
              </div>
            </div>

            {/* --- MODIFIED: Action Buttons with Tooltip --- */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              {/* Call Now Button with Tooltip */}
              <a
                href="tel:+917775077248"
                className="relative group flex-1 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300"
              >
                <Phone className="mr-2" size={20} /> Call Now
                {/* TOOLTIP: visible on lg screens and up on hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-700 text-white text-xs font-semibold rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
                  Call: +91 7775077248
                </span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://q.me-qr.com/WW0Bheb7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
              >
                <MessageCircleHeart className="mr-2" size={20} /> WhatsApp
              </a>
            </div>

            <div className="relative z-0 mt-8 h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={mapCenter}
                zoom={7}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={locations.pune}>
                  <Popup>
                    <b>7th Chords Academy - Pune</b>
                  </Popup>
                </Marker>
                <Marker position={locations.sambhajinagar}>
                  <Popup>
                    <b>7th Chords Academy - Chh. Sambhajinagar</b>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;