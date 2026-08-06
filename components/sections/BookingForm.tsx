"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingSelect } from "@/components/ui/floating-select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import {
  User,
  Phone,
  Mail,
  Globe,
  Calendar,
  Clock,
  MapPin,
  Users,
  Car,
  DollarSign,
  MessageSquare,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  whatsappNumber: z.string().min(6, "Valid WhatsApp number required"),
  email: z.string().email("Valid email required"),
  country: z.string().min(2, "Country is required"),
  service: z.string().min(1, "Please select a service"),
  vehicleType: z.string().min(1, "Please select a preferred vehicle"),
  travelDate: z.string().min(1, "Preferred date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  dropLocation: z.string().optional(),
  adults: z.string().min(1, "Number of adults is required"),
  children: z.string().optional(),
  currency: z.string().min(1, "Currency selection is required"),
  additionalNotes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      adults: "2",
      children: "0",
      currency: "USD",
    },
  });

  const generateWhatsAppMessage = (data: BookingFormValues) => {
    const text = `*NEW VIP BOOKING INQUIRY - SK TOURISM DUBAI*
----------------------------------------
*Guest Name:* ${data.fullName}
*WhatsApp:* ${data.whatsappNumber}
*Email:* ${data.email}
*Country:* ${data.country}
*Preferred Currency:* ${data.currency}

*SERVICE REQUESTED:* ${data.service}
*PREFERRED VEHICLE:* ${data.vehicleType}
*TRAVEL DATE:* ${data.travelDate}
*PICKUP TIME:* ${data.pickupTime}
*PICKUP LOCATION:* ${data.pickupLocation}
*DROP-OFF LOCATION:* ${data.dropLocation || "Flexible / City Tour"}

*PARTY SIZE:* ${data.adults} Adults, ${data.children || "0"} Children
*ADDITIONAL NOTES:* ${data.additionalNotes || "None"}
----------------------------------------
Please confirm availability and dispatch confirmation.`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const onSubmit = (data: BookingFormValues) => {
    setSubmittedData(data);
  };

  const handleDirectWhatsAppClick = () => {
    const currentValues = getValues();
    if (currentValues.fullName && currentValues.whatsappNumber) {
      window.open(generateWhatsAppMessage(currentValues), "_blank");
    } else {
      const defaultText = `Hello SK Tourism, I would like to inquire about reserving a VIP luxury Dubai experience.`;
      window.open(
        `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(defaultText)}`,
        "_blank"
      );
    }
  };

  const serviceOptions = SERVICES.map((s) => ({ label: s.title, value: s.title }));
  const vehicleOptions = [
    { label: "Mercedes-Maybach S-Class", value: "Mercedes-Maybach S-Class" },
    { label: "Rolls-Royce Cullinan (Ultra VIP)", value: "Rolls-Royce Cullinan" },
    { label: "Cadillac Escalade ESV SUV", value: "Cadillac Escalade ESV" },
    { label: "Mercedes V-Class VIP (7 Seats)", value: "Mercedes V-Class VIP" },
    { label: "Toyota Hiace VIP (9 Seats)", value: "Toyota Hiace VIP" },
    { label: "Mercedes Sprinter VIP Bus (14 Seats)", value: "Mercedes Sprinter VIP" },
    { label: "BMW 7 Series Sedan", value: "BMW 7 Series" },
  ];

  return (
    <section id="booking" className="py-20 bg-[#071D33] relative text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="gold" className="px-4 py-1.5 font-bold tracking-widest text-xs">
            VIP Reservation Desk
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Reserve Your <span className="gold-text-gradient">Dubai Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Submit your reservation preferences below. Our 24/7 VIP Concierge team will instantly confirm availability and send your itinerary.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card-dark p-6 sm:p-10 rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Group 1: Personal & Contact */}
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4 flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>1. Guest Contact Details</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <FloatingInput
                  label="Full Name"
                  icon={<User className="w-4 h-4" />}
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />
                <FloatingInput
                  label="WhatsApp Number"
                  icon={<Phone className="w-4 h-4" />}
                  error={errors.whatsappNumber?.message}
                  placeholder="+971 50 123 4567"
                  {...register("whatsappNumber")}
                />
                <FloatingInput
                  label="Email Address"
                  type="email"
                  icon={<Mail className="w-4 h-4" />}
                  error={errors.email?.message}
                  {...register("email")}
                />
                <FloatingInput
                  label="Country"
                  icon={<Globe className="w-4 h-4" />}
                  error={errors.country?.message}
                  {...register("country")}
                />
              </div>
            </div>

            {/* Group 2: Service & Vehicle */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4 flex items-center space-x-2">
                <Car className="w-4 h-4" />
                <span>2. Service & Preferred Vehicle</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <FloatingSelect
                  label="Select Service"
                  options={serviceOptions}
                  icon={<Sparkles className="w-4 h-4" />}
                  error={errors.service?.message}
                  {...register("service")}
                />
                <FloatingSelect
                  label="Preferred Vehicle"
                  options={vehicleOptions}
                  icon={<Car className="w-4 h-4" />}
                  error={errors.vehicleType?.message}
                  {...register("vehicleType")}
                />
                <FloatingSelect
                  label="Preferred Currency"
                  options={[
                    { label: "USD ($)", value: "USD" },
                    { label: "AED (AED)", value: "AED" },
                  ]}
                  icon={<DollarSign className="w-4 h-4" />}
                  error={errors.currency?.message}
                  {...register("currency")}
                />
              </div>
            </div>

            {/* Group 3: Schedule & Route */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>3. Date, Time & Pickup</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <FloatingInput
                  label="Travel Date"
                  type="date"
                  icon={<Calendar className="w-4 h-4" />}
                  error={errors.travelDate?.message}
                  {...register("travelDate")}
                />
                <FloatingInput
                  label="Pickup Time"
                  type="time"
                  icon={<Clock className="w-4 h-4" />}
                  error={errors.pickupTime?.message}
                  {...register("pickupTime")}
                />
                <FloatingInput
                  label="Pickup Location"
                  icon={<MapPin className="w-4 h-4" />}
                  placeholder="DXB Airport / Hotel"
                  error={errors.pickupLocation?.message}
                  {...register("pickupLocation")}
                />
                <FloatingInput
                  label="Drop-off Location (Optional)"
                  icon={<MapPin className="w-4 h-4" />}
                  placeholder="Burj Al Arab / Villa"
                  error={errors.dropLocation?.message}
                  {...register("dropLocation")}
                />
              </div>
            </div>

            {/* Group 4: Party Size & Notes */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4 flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>4. Guests & Additional Notes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FloatingInput
                  label="Number of Adults"
                  type="number"
                  min="1"
                  max="50"
                  icon={<Users className="w-4 h-4" />}
                  error={errors.adults?.message}
                  {...register("adults")}
                />
                <FloatingInput
                  label="Number of Children (Optional)"
                  type="number"
                  min="0"
                  max="20"
                  icon={<Users className="w-4 h-4" />}
                  error={errors.children?.message}
                  {...register("children")}
                />
                <div className="sm:col-span-1">
                  <FloatingInput
                    label="Additional Notes / Flight #"
                    icon={<MessageSquare className="w-4 h-4" />}
                    error={errors.additionalNotes?.message}
                    {...register("additionalNotes")}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Instant Pre-Filled WhatsApp Dispatch Available</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <Button
                  type="button"
                  onClick={handleDirectWhatsAppClick}
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto px-6 space-x-2 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Booking</span>
                </Button>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 space-x-2 shadow-2xl"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {submittedData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 text-gray-900 shadow-2xl relative border border-[#D4AF37]"
            >
              <button
                onClick={() => {
                  setSubmittedData(null);
                  reset();
                }}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#25D366] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F4C81]">
                  Reservation Request Ready!
                </h3>
                <p className="text-xs text-gray-600">
                  Thank you, <strong className="text-gray-900">{submittedData.fullName}</strong>. Your inquiry details are ready for instant dispatch.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-200 text-xs space-y-2 mb-6">
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-[#0F4C81]">{submittedData.service}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Vehicle:</span>
                  <span className="font-bold">{submittedData.vehicleType}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Date & Time:</span>
                  <span className="font-bold">{submittedData.travelDate} @ {submittedData.pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pickup:</span>
                  <span className="font-bold">{submittedData.pickupLocation}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={generateWhatsAppMessage(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="whatsapp" className="w-full justify-center space-x-2 py-3 text-sm">
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Directly via WhatsApp</span>
                  </Button>
                </a>
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    reset();
                  }}
                  className="w-full text-center text-xs font-semibold text-gray-500 hover:text-gray-800"
                >
                  Close & Clear Form
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookingForm;
