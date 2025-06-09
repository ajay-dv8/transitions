"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Car, Plane, Flower2, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Animation variants for header elements
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Animation variants for service cards container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Adjust this value to control delay between cards
    }
  }
}

// Animation variants for individual service cards
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const services = [
  {
    icon: Car,
    title: "Deceased Pickup Services",
    description:
      "Compassionate and dignified transportation services available 24/7. Our professional team handles all arrangements with the utmost care and respect.",
    features: ["24/7 Availability", "Professional Staff", "Dignified Transport"],
    badge: "Essential",
  },
  {
    icon: Car,
    title: "Hearse Services",
    description:
      "Premium hearse services for funeral processions. Our fleet of well-maintained vehicles ensures a respectful final journey for your loved one.",
    features: ["Modern Fleet", "Professional Drivers", "Ceremonial Options"],
    badge: "Premium",
  },
  {
    icon: Plane,
    title: "Repatriation Services",
    description:
      "International repatriation services to bring your loved one home. We handle all documentation, permits, and logistics for seamless international transport.",
    features: ["Global Coverage", "Documentation Handled", "Customs Clearance"],
    badge: "International",
  },
  {
    icon: Flower2,
    title: "Burial & Memorial Services",
    description:
      "Complete burial and memorial services tailored to honor your loved one's memory. From traditional burials to contemporary memorial celebrations.",
    features: ["Custom Ceremonies", "Memorial Planning", "Venue Coordination"],
    badge: "Complete",
  },
  {
    icon: Shield,
    title: "Mortuary Services",
    description:
      "Professional mortuary care including embalming, preparation, and preservation services. Our licensed morticians ensure the highest standards of care.",
    features: ["Licensed Professionals", "Embalming Services", "Preparation Care"],
    badge: "Professional",
  },
  {
    icon: Users,
    title: "Undertaking Services",
    description:
      "Comprehensive funeral direction and coordination. Our experienced undertakers guide families through every aspect of funeral planning and execution.",
    features: ["Full Coordination", "Family Guidance", "Ceremony Management"],
    badge: "Comprehensive",
  },
]

const additionalServices = [
  "Grief Counseling Support",
  "Floral Arrangements",
  "Obituary Writing",
  "Death Certificate Processing",
  "Estate Documentation",
  "Memorial Photography",
  "Catering Coordination",
  "Religious Coordination",
]

export default function Component() {
  // Refs for detecting when sections come into view
  const gridRef = useRef(null)
  const headerRef = useRef(null)
  const additionalRef = useRef(null)
  
  // Animation triggers when elements come into view
  const isGridInView = useInView(gridRef, { amount: 0.3 })
  const isHeaderInView = useInView(headerRef, { amount: 0.3 })
  const isAdditionalInView = useInView(additionalRef, { amount: 0.3 })

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">        {/* Animated Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-4"
          >
            <Heart className="h-4 w-4" />
            Our Services
          </motion.div>
          <motion.h2
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Compassionate Care in Your Time of Need
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive funeral services with dignity, respect, and professionalism. Our experienced team
            is here to support you through every step of honoring your loved one&apos;s memory.
          </motion.p>
        </div>

        {/* Animated Services Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-slate-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg group-hover:bg-slate-100 transition-colors">
                        <IconComponent className="h-5 w-5 text-slate-700" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-slate-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-slate-50">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          ref={additionalRef}
          initial="hidden"
          animate={isAdditionalInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <motion.h3 
              variants={headerVariants}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              Additional Support Services
            </motion.h3>
            <motion.p 
              variants={headerVariants}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              Beyond our core services, we offer comprehensive support to help families navigate this difficult time
              with additional care and assistance.
            </motion.p>
          </div>

          {/* Additional services */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="flex items-center gap-2 text-sm text-slate-700 bg-white p-3 rounded-lg"
              >
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
